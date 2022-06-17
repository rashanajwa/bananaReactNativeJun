import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import data from '../../../assets/data/data.json';
import {styles} from './styles';
import cordimage from '../../../assets/images/cord.jpg';

const TreatmentCordana = () => {
  console.log(data.name);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Text style={styles.heading}>{'Cordana'}</Text>
        
          <Image source={cordimage} style={styles.plantainImage} />
          <Text style={styles.subHeading}>
            {'Biopesticides and physical methods'}
          </Text>
          <Text style={styles.sideHeading}>{'Neem (Azadirachta indica)'}</Text>
          <Text
            style={[
              styles.description,
              {fontWeight: 'normal', marginBottom: 10},
            ]}>
            {`•	Use field tolerant cultivars such as Seeni (Embul and Kolikuttu are susceptible so do not use these)

•	Use proper spacing in order to avoid mutual shading and contact of leaves (8x8 to 12x12 ft2)

•	Make sure that new plantations are an appropriate distance from existing disease affected plantations

•	Avoid sprinkler irrigation to minimize the relative humidity of the microenvironment. Drip irrigation is preferred.

•	Balanced fertilization (avoid excess N fertilizer)

•	Avoid high density planting methods for highly susceptible cultivars and high risk areas such as some areas of Down South in Dry Zone.

•	Remove infected leaves and burn them

•	Practice field sanitation by removing old dried hanging leaves

•	If the fourth leaf from the bottom is infected, chemical control measures should be applied. Alternate sprays of a contact fungicide, e.g. chlorothalonil 500g/l SC (30ml/ 10l) or mancozeb 75% WG (20g/ 10l) and a systemic fungicide, e.g. Tebuconazole 250g/l EW (3.5 ml/10l) or Propiconazole 250g/l EC (3.5 ml/ 10l). Make sure the spray reaches the top of the leaves
`}
          </Text>

          <Text style={styles.sideHeading}>{'Trapping'}</Text>
          
        </View>
      </ScrollView>
    </View>
  );
};

export default TreatmentCordana;
