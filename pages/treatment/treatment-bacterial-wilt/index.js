import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import data from '../../../assets/data/data.json';
import {styles} from './styles';
import bactimage from '../../../assets/images/bact.png';

const TreatmentBacterialWilt = () => {
  console.log(data.name);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Text style={styles.heading}>{'Bacterial Wilt'}</Text>
        
          <Image source={bactimage} style={styles.plantainImage} />
          <Text style={styles.subHeading}>
            {'Measures: '}
          </Text>
          {/* <Text style={styles.sideHeading}>{'Neem (Azadirachta indica)'}</Text> */}
          <Text
            style={[
              styles.description,
              {fontWeight: 'normal', marginBottom: 10},
            ]}>
            {`The recommended practices to control Xanthomonas wilt include consistent removal of infected mats, burying or burning infected residues, sterilization of farm tools, and timely removal of the male buds `}
          </Text>

         
        </View>
      </ScrollView>
    </View>
  );
};

export default TreatmentBacterialWilt;
