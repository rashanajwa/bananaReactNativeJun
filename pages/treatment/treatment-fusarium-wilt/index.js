import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import data from '../../../assets/data/data.json';
import {styles} from './styles';
import fusaimage from '../../../assets/images/fusa.jpg';

const TreatmentFusariumWilt = () => {
  console.log(data.name);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Text style={styles.heading}>{'Fusarium Wilt'}</Text>
        
          <Image source={fusaimage} style={styles.plantainImage} />
          <Text style={styles.subHeading}>
            {'Control Measures'}
          </Text>
          {/* <Text style={styles.sideHeading}>{'Neem (Azadirachta indica)'}</Text> */}
          <Text
            style={[
              styles.description,
              {fontWeight: 'normal', marginBottom: 10},
            ]}>
            {`•	Plant resistant varieties when available.

•	Remove stricken growth from the garden and sterilize pruning clippers (one part bleach to 4 parts water) between cuts.

•	Use Safer® Yard & Garden Insect Killer to control many garden insects, like cucumber beetles, which are known to spread the disease.

•	High nitrogen fertilizers may increase susceptibility to the disease. Test your soil and use a slow-release, organic fertilizer in the vegetable garden.

•	Hand pull or spot treat weeds using a weed flamer or natural herbicide — many weed species host the disease pathogen.

•	Mycostop is a biological fungicide that will safely protect crops against wilt caused by Fusarium. Approved for use in organic crop production, it can be applied as a soil spray or drench (1-2 gm/ 100 sq ft) to seedlings, ornamentals and vegetables. Apply sufficient water during application to move Mycostop into the root zone.

•	If the disease persists, it is best to remove the entire plant and solarize* the soil before planting again.
`}
          </Text>

          
        </View>
      </ScrollView>
    </View>
  );
};

export default TreatmentFusariumWilt;
