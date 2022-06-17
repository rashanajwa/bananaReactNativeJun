import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import data from '../../../assets/data/data.json';
import {styles} from './styles';
import sigatokaimage from '../../../assets/images/sigatoka.jpg';

const TreatmentSigatoka = () => {
  console.log(data.name);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Text style={styles.heading}>{'Sigatoka'}</Text>
        
          <Image source={sigatokaimage} style={styles.plantainImage} />
          <Text style={styles.subHeading}>
            {'Preventive measures'}
          </Text>
          {/* <Text style={styles.sideHeading}>{'Neem (Azadirachta indica)'}</Text> */}
          <Text
            style={[
              styles.description,
              {fontWeight: 'normal', marginBottom: 10},
            ]}>
            {`•	Planting should be taken up in well drained soils and maintain proper drainage thereafter
•	Grow resistant varieties
•	Planting at recommended spacing
•	Remove suckers periodically to avoid overcrowding and maintain only one or two healthy suckers
•	Periodically remove and burn affected leaves to avoid further spreading
•	Provide adequate potassium fertilizers
•	Keep the fields free from weeds


 The following fungicides spray will help in managing with Sigatoka disease of banana

Chlorothalonil 
Propiconazole
Thiophenate methyle
Carbendazim
Carbendazim + Mancozeb
Mancozeb
Copper hydroxide
Copper Oxychloride

•	Depending on the disease severity repeat the spray @ 15-20 days intervals with different fungicides having different chemical composition.
`}
          </Text>

        </View>
      </ScrollView>
    </View>
  );
};

export default TreatmentSigatoka;
