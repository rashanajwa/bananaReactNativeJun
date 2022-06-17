import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import data from '../../../assets/data/data.json';
import {styles} from './styles';
import earwigsimage from '../../../assets/images/earwigs.jpg';

const TreatmentEarwigs = () => {
  console.log(data.name);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Text style={styles.heading}>{'Earwigs'}</Text>
        
          <Image source={earwigsimage} style={styles.plantainImage} />
          <Text style={styles.subHeading}>
            {'Control measures'}
          </Text>
          {/* <Text style={styles.sideHeading}>{'Neem (Azadirachta indica)'}</Text> */}
          <Text
            style={[
              styles.description,
              {fontWeight: 'normal', marginBottom: 10},
            ]}>
            {`•	Dish soap and water – Mix dish soap and water to spray down areas where you have found earwigs to be crawling.

•	Rubbing alcohol and water – Mix rubbing alcohol and water together to spray at earwigs onsite. This method can be used to kill earwigs immediately.

•	Boric acid powder – Found at most hardware stores, boric acid is a treatment you can apply to those out of reach areas to kill earwigs that crawl near it. Warning though, this treatment should be kept away from areas that pets or infants will be near, as it can be harmful.

•	Light traps – Earwigs are attracted to bright lights when they scurry around at night. Use the dish soap and water method above, this time filling a small bucket. Point a bright light at the bucket and leave out to attract and kill nearby earwigs.

•	Oil and soy sauce traps – Combine olive oil and soy sauce in a small container and place in a location near where earwigs have been found. Earwigs will be attracted to the smell and climb into the liquid where they will drown.

•	Earwig pesticide – Purchase a pesticide to cover the areas where earwigs have been spotted. Various pesticides that will be effective against earwigs include sevin, malathion, pyrethrins, and diatomaceous earth. 
`}
          </Text>

         
        </View>
      </ScrollView>
    </View>
  );
};

export default TreatmentEarwigs;
