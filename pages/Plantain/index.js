import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import data from '../../assets/data/data.json';
import { styles } from './styles';
import logo from '../../assets/images/logo.png';
import growingplantaintrees from '../../assets/images/growing-plantain-trees.jpg';
const PlantainScreen = () => {
  const [desc, setDesc] = useState(data.plantainDesc.slice(0, 250));
  const [readMore, setReadMore] = useState(false);

  console.log(data.name);
  return (
    <View style={styles.container}>
       <ScrollView>
      {/* <ImageBackground source={logo} style={styles.backgroundImage}> */}

      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image} />
      </View>
      {/* </View> */}
      {/* <Text style={styles.heading}>{data.plantainHeading}</Text> */}

      <View style={styles.descriptionContainer}>
        <Text style={[styles.description, { fontWeight: '500' }]}>
          {desc}
          {!readMore && '...'}
          <Text
            style={{ fontWeight: 'bold' }}
            onPress={() => {
              if (!readMore) {
                setDesc(data.plantainDesc);
                setReadMore(true);
              } else {
                setDesc(data.plantainDesc.slice(0, 250));
                setReadMore(false);
              }
            }}
          >
            {readMore ? 'Show Less' : 'Read More'}
          </Text>
        </Text>
      </View>


      {/* Second Heading  */}

      <View style={styles.descriptionContainer}>
        <Text style={styles.heading}>{"Main Heading"}</Text>
        <Text style={styles.sideHeading}>{"Side Heading"}</Text>
        <Image source={growingplantaintrees} style={styles.plantainImage} />
        <Text style={[styles.description, { fontWeight: '500' }]}>
          Plantain Doctor is aimed at detecting and diagnosing pest and diseases related to plantain trees.We protect plantain trees health by quickly detecting and accurately identifying plant pests and diseases on leaves and stem, and effectively communicating these diagnoses to the farmers.

        </Text>
      </View>
      </ScrollView>
    </View>
  );
};

export default PlantainScreen;

// #24A19C
