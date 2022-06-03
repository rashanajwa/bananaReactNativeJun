import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import data from '../../../assets/data/data.json';
import {styles} from './styles';
import growingplantaintrees from '../../../assets/images/growing-plantain-trees.jpg';
const Treatment1Page = () => {
  console.log(data.name);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Text style={styles.heading}>{'Main Heading'}</Text>
          <Text style={styles.sideHeading}>{'Side Heading'}</Text>
          <Image source={growingplantaintrees} style={styles.plantainImage} />
          <Text style={[styles.description, {fontWeight: '500'}]}>
            Plantain Doctor is aimed at detecting and diagnosing pest and
            diseases related to plantain trees.We protect plantain trees health
            by quickly detecting and accurately identifying plant pests and
            diseases on leaves and stem, and effectively communicating these
            diagnoses to the farmers.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Treatment1Page;
