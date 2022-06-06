import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import data from '../../../assets/data/data.json';
import {styles} from './styles';
import weevilsimage from '../../../assets/images/banana-weevils.jpg';
const Treatment1Page = () => {
  console.log(data.name);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Text style={styles.heading}>{'Weevils'}</Text>
        
          <Image source={weevilsimage} style={styles.plantainImage} />
          <Text style={styles.subHeading}>
            {'Biopesticides and physical methods'}
          </Text>
          <Text style={styles.sideHeading}>{'Neem (Azadirachta indica)'}</Text>
          <Text
            style={[
              styles.description,
              {fontWeight: 'normal', marginBottom: 10},
            ]}>
            {`Applications of neem powder effectively controlled weevils and nematodes in on-farm trials and in farmer's fields in Kenya. Application of 60 to 100 g of neem seed powder or neem cake at planting and then at 4 months intervals significantly diminished pest damage and increased yields. Application of over 100 g or neem oil was phytotoxic (harmful to plants) and uneconomical.`}
          </Text>

          <Text style={styles.sideHeading}>{'Trapping'}</Text>
          <Text
            style={[
              styles.description,
              {fontWeight: 'normal', marginBottom: 10},
            ]}>
            {`Disc-on-stump traps and old pseudostems can be used for trapping weevils. Disc-on-stump traps consist of corm slices placed on top of harvested plants cut at the rhizome.`}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Treatment1Page;
