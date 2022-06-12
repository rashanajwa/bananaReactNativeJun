import React, {useState} from 'react';
import {
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  Platform,
  Dimensions,
  useColorScheme,
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
} from 'react-native';
import axios from 'axios';
import Config from 'react-native-config';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PermissionsService, {isIOS} from './Permissions';
import {useNavigation, Link} from '@react-navigation/native';

axios.interceptors.request.use(
  async config => {
    let request = config;
    request.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    request.url = configureUrl(config.url);
    return request;
  },
  error => error,
);

export const {height, width} = Dimensions.get('window');

export const configureUrl = url => {
  let authUrl = url;
  if (url && url[url.length - 1] === '/') {
    authUrl = url.substring(0, url.length - 1);
  }
  return authUrl;
};

export const fonts = {
  Bold: {fontFamily: 'Roboto-Bold'},
};

const options = {
  mediaType: 'photo',
  quality: 1,
  width: 256,
  height: 256,
  includeBase64: true,
};

const PredictPage = ({navigation, route, options}) => {
  const [result, setResult] = useState('');
  const [label, setLabel] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const [image, setImage] = useState('');
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  console.log('*******************');
  console.log(route?.params);
  // {"name": "rn_image_picker_lib_temp_32ffe6b4-b8a7-4236-92c5-8ef75c8e6bfd.jpg", "type": "image/jpeg", "uri": "file:///data/user/0/com.awesomeproject/cache/rn_image_picker_lib_temp_32ffe6b4-b8a7-4236-92c5-8ef75c8e6bfd.jpg"}
  const getPredication = async params => {
    return new Promise((resolve, reject) => {
      var bodyFormData = new FormData();
      bodyFormData.append('file', params);
      // const url = `http://localhost:8000/predict?type=${route?.params}`;
      const url = `https://2c05-14-139-183-119.in.ngrok.io/predict?type=${route?.params}`;
      return axios
        .post(url, bodyFormData)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          setLabel('Failed to predicting.');
          reject('err', error);
          console.log(error);

          // navigation.navigate('treatment1', 'Treatment One');
        });
    });
  };

  const manageCamera = async type => {
    try {
      if (!(await PermissionsService.hasCameraPermission())) {
        return [];
      } else {
        if (type === 'Camera') {
          openCamera();
        } else {
          openLibrary();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const openCamera = async () => {
    launchCamera(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const uri = response?.assets[0]?.uri;
        const path = Platform.OS !== 'ios' ? uri : 'file://' + uri;
        getResult(path, response);
      }
    });
  };

  const clearOutput = () => {
    setResult('');
    setImage('');
  };

  const getResult = async (path, response) => {
    setImage(path);
    setLabel('Predicting...');
    setResult('');
    const params = {
      uri: path,
      name: response.assets[0].fileName,
      type: response.assets[0].type,
    };
    const res = await getPredication(params);
    if (res?.data?.class) {
      setLabel(res.data.class);
      setResult(res.data.confidence);
    } else {
      setLabel('Failed to predict');
    }
  };

  const openLibrary = async () => {
    launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const uri = response.assets[0].uri;
        const path = Platform.OS !== 'ios' ? uri : 'file://' + uri;
        getResult(path, response);
      }
    });
  };

  const onClickGoToTreatment = () => {
    // return 'treatment1';
    switch (label) {
      case 'Healthy_stem_new': {
        return 'treatment1';
      }
      default: {
        navigation.navigate('treatment1', 'Treatment One');
        return;
      }
    }
  };

  return (
    <View style={[backgroundStyle, styles.outer]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <ImageBackground
        blurRadius={10}
        source={require('./assets/imgs/bg.jpg')}
        style={{height: height, width: width}}
      /> */}
      {/* <Text style={styles.title}>{'Plantain Pests \n\t\t\tPrediction'}</Text> */}
      <Text style={styles.title}>{'Predict it out !'}</Text>
      <TouchableOpacity onPress={clearOutput} style={styles.clearStyle}>
        <Image source={{uri: 'clean'}} style={styles.clearImage} />
      </TouchableOpacity>
      {(image?.length && (
        <Image source={{uri: image}} style={styles.imageStyle} />
      )) ||
        null}
      {(result && label && (
        <View style={styles.mainOuter}>
          <Text style={[styles.labelText]}>
            {'Label: '}
            <Text style={styles.resultText}>{label}</Text>
          </Text>
          <Text
            style={styles.treatmentBtnText}
            onPress={() => onClickGoToTreatment()}>
            {'View Treatment'}
          </Text>
        </View>
      )) ||
        (image && <Text style={styles.emptyText}>{label}</Text>) || (
          <Text style={styles.emptyText}>
            {` Use below buttons to select a picture of a Plantain ${route?.params}.`}
          </Text>
        )}
      <View style={styles.linkBtn}></View>
      <View style={styles.btn}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => manageCamera('Camera')}
          style={styles.btnStyle}>
          <Image
            source={require('./assets/imgs/camera.png')}
            style={styles.imageIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => manageCamera('Photo')}
          style={styles.btnStyle}>
          <Image
            source={require('./assets/imgs/gallery.png')}
            style={styles.imageIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    position: 'absolute',
    top: (isIOS && 35) || 10,
    fontSize: 25,
    ...fonts.Bold,
    color: 'green',
  },
  clearImage: {height: 40, width: 40, tintColor: '#FFF'},
  mainOuter: {
    flexDirection: 'column',
    position: 'absolute',
    top: height / 1.6,
    alignSelf: 'center',
  },
  outer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    position: 'absolute',
    bottom: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btnStyle: {
    backgroundColor: '#FFF',
    opacity: 0.8,
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 20,
  },
  imageStyle: {
    marginBottom: 50,
    width: width / 1.5,
    height: width / 1.5,
    borderRadius: 20,
    position: 'absolute',
    borderWidth: 0.3,
    borderColor: '#FFF',
    top: height / 4.5,
  },
  clearStyle: {
    position: 'absolute',
    top: 100,
    right: 30,
    tintColor: '#FFF',
    zIndex: 10,
  },
  space: {marginVertical: 10, marginHorizontal: 10},
  labelText: {color: 'green', fontSize: 20, ...fonts.Bold},
  treatmentLink: {color: 'green', fontSize: 15, bottom: 0},
  linkBtn: {top: 200},
  resultText: {fontSize: 20, ...fonts.Bold},
  imageIcon: {height: 40, width: 40, tintColor: '#000'},
  emptyText: {
    position: 'absolute',
    top: height / 1.6,
    alignSelf: 'center',
    color: 'green',
    fontSize: 20,
    maxWidth: '70%',
    ...fonts.Bold,
  },
  treatmentBtnText: {
    marginTop: 15,
    fontSize: 17,
    color: 'green',
    textAlign: 'center',
  },
});

export default PredictPage;
