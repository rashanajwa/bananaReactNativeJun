import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import data from '../../../assets/data/data.json';
import {styles} from './styles';
import weevilsimage from '../../../assets/images/banana-weevils.jpg';

const TreatmentWeevils = () => {
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

          <Text style={styles.sideHeading}>{'Selecting vigorous healthy planting material '}</Text>
          <Text
            style={[
              styles.description,
              {fontWeight: 'normal', marginBottom: 10},
            ]}>
            {`Examine planting material by taking one or two slices from it. If grubs, pupae or tunnels are present, the material should be destroyed.`}
          </Text>

          
          <Text style={styles.sideHeading}>{'Paring (trimming '}</Text>
          <Text
            style={[
              styles.description,
              {fontWeight: 'normal', marginBottom: 10},
            ]}>
            {` If clean planting material is not available, the planting material should be pared (trimmed) to reduce the number of eggs and grubs. However, badly damaged suckers should not be used for planting. `}
          </Text>  

          <Text style={styles.sideHeading}>{'Hot water treatment '}</Text>
          <Text
            style={[
              styles.description,
              {fontWeight: 'normal', marginBottom: 10},
            ]}>
            {` Recommendations suggest immersing clean trimmed suckers in a bath with hot water at 52 to 55degC for 15 to 27 minutes before planting. There have been reports of hot water treatment killing remaining eggs and a high percentage of grubs. `}
          </Text>      


        </View>
      </ScrollView>
    </View>
  );
};

export default TreatmentWeevils;
