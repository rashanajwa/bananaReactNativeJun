import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import data from '../../../assets/data/data.json';
import {styles} from './styles';
import larvaimage from '../../../assets/images/larva.jpg';

const TreatmentLarva = () => {
  console.log(data.name);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Text style={styles.heading}>{'Larva'}</Text>
        
          <Image source={larvaimage} style={styles.plantainImage} />
          <Text style={styles.subHeading}>
            {'Control Measures'}
          </Text>
          <Text style={styles.sideHeading}>{'Cultural Control'}</Text>
          <Text
            style={[
              styles.description,
              {fontWeight: 'normal', marginBottom: 10},
            ]}>
            {`•	Hot water treatment of corms at 52 to 55°C for 15 to 27 minutes

•	Suckers should be pruned periodically and infested pseudostems must be removed from the field and destroyed. 

•	Banana stumps kept in the field after harvest must be removed and destroyed as they serve as weevil refuges and breeding sites

•	Crop rotation with non host crops like paddy and sugarcane

•	Use mulch away from the banana stool leaving a clear ring about 60 cm from the base of the stool to keep the roots growing towards the surface and to avoid moist conditions near the stool, which will attract banana weevils

•	Cut the banana plant after harvest at the ground level and treat it with carbaryl (1g/liter) or chlorpyriphos (2.5 ml/lit) at the cut surface.

•	Application of Furadan 3G @ 20 gms or Phorate 10G @ 12 gms or Neem cake @ 1/2 Kg. per pit at planting.

•	Before planting, the suckers should be dipped in 0.1 per cent quinalphos emulsion.

•	Dip the suckers in Monocrotophos solution (14 ml in 1 lit water) for about 20 minutes to kill the eggs and grubs of the corm weevil .

•	Remove the pseudostem after harvest and treat it with Carboryl (1g/lit) or Chlorpyriphos (2.5ml/lit).

•	Fumigation of banana plants using Celphos (aluminium phosphide tablets), especially during the vegetative phase is phytotoxic and should be discouraged.

•	Apply castor cake 250g or carbaryl 50g dust or phorate 10g per pit before planting also prevents infestation

•	Severe attack dimethoate, methyl demeton, or phosphamidon may be sprayed around the collar region.

`}
          </Text>

          
        </View>
      </ScrollView>
    </View>
  );
};

export default TreatmentLarva;
