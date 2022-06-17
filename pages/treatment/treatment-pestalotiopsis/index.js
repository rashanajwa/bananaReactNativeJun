import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import data from '../../../assets/data/data.json';
import {styles} from './styles';
import pestaimage from '../../../assets/images/pesta.jpg';

const TreatmentPestalotiopsis = () => {
  console.log(data.name);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Text style={styles.heading}>{'Pestalotiopsis'}</Text>
        
          <Image source={pestaimage} style={styles.plantainImage} />
          <Text style={styles.subHeading}>
            {'Measures:'}
          </Text>
          {/* <Text style={styles.sideHeading}>{'Neem (Azadirachta indica)'}</Text> */}
          <Text
            style={[
              styles.description,
              {fontWeight: 'normal', marginBottom: 10},
            ]}>
            {`Management is to prune out killed foliage and if necessary the twigs as soon as possible in the spring. Reduce winter injury by minimizing dehydration. Do not allow snow to accumulate or remain up and around the base of the plant for any length of time - especially during melting. Avoid over crowding the plants to allow sufficient sunlight and air circulation.`}
          </Text>

          
        </View>
      </ScrollView>
    </View>
  );
};

export default TreatmentPestalotiopsis;
