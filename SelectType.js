import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  Dimensions,
  useColorScheme,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {isIOS} from './Permissions';

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

const SelectTypePage = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[backgroundStyle, styles.outer]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ImageBackground
        blurRadius={10}
        source={require('./assets/imgs/bg.jpg')}
        style={{height: height, width: width}}
      />

      <Text style={styles.emptyText}>
        Use below buttons to select a picture of a Plantain Pest.
      </Text>

      <View style={styles.btn}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.push('predictPage', {predictionType: 'stem'});
          }}
          style={styles.btnStyle}>
          <View style={styles.catogeryButtonBlock}>
            <Image
              source={require('./assets/imgs/camera.png')}
              style={styles.imageIcon}
            />
            <Text style={styles.categoryText}>{'Stem'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.push('predictPage', {predictionType: 'leaf'});
          }}
          style={styles.btnStyle}>
          <View style={styles.catogeryButtonBlock}>
            <Image
              source={require('./assets/imgs/camera.png')}
              style={styles.imageIcon}
            />
            <Text style={styles.categoryText}>{'Leaf'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.push('predictPage', {predictionType: 'insect'});
          }}
          style={styles.btnStyle}>
          <View style={styles.catogeryButtonBlock}>
            <Image
              source={require('./assets/imgs/camera.png')}
              style={styles.imageIcon}
            />
            <Text style={styles.categoryText}>{'Insect'}</Text>
          </View>
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
    fontSize: 30,
    ...fonts.Bold,
    color: '#FFF',
  },
  clearImage: {height: 40, width: 40, tintColor: '#FFF'},
  mainOuter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  btnStyle: {
    backgroundColor: '#FFF',
    opacity: 0.8,
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 20,
    width: 300,
    marginBottom: 30,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  catogeryButtonBlock: {
    justifyContent: 'center',
    flexDirection: 'column',
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
  labelText: {color: '#FFF', fontSize: 20, ...fonts.Bold},
  resultText: {fontSize: 32, ...fonts.Bold},
  imageIcon: {height: 40, width: 40, tintColor: '#000'},
  emptyText: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 20,
    maxWidth: '70%',
    ...fonts.Bold,
  },
  categoryText: {
    ...fonts.Bold,
  },
});

export default SelectTypePage;
