import {View, Text, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import data from '../../assets/data/data.json';
import {styles} from './styles';
import logo from '../../assets/images/logo.png';
import growingplantaintrees from '../../assets/images/growing-plantain-trees.jpg';
const PlantainScreen = () => {
  const [desc, setDesc] = useState(data.plantainDesc.slice(0, 250));
  const [readMore, setReadMore] = useState(false);

  console.log(data.name);
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <ImageBackground source={logo} style={styles.backgroundImage}> */}

        <View style={styles.imageContainer}>
          <Image source={logo} style={styles.image} />
        </View>
        {/* </View> */}
        {/* <Text style={styles.heading}>{data.plantainHeading}</Text> */}

        <View style={styles.descriptionContainer}>
          <Text style={[styles.description, {fontWeight: '500'}]}>
            {`A plantain tree is an herbaceous flowering plant in the banana family that produces starchy fruits called plantains. Despite the fact that plantain plants are commonly referred to as "trees" and can grow to heights up to 20 to 25 feet, they are not actually trees. What appears to be a tree trunk at the base of the plant is actually a pseudostem made up of layers of leaf sheaths. The plantain tree has its origins in India and Southern Asia, and usually grows best in tropical or subtropical climates. Its fruits are cooked and consumed as a starch staple in many parts of the world.`}
           
           
          </Text>
        </View>

        {/* Second Heading  */}

        <View style={styles.descriptionContainer}>
          <Text style={styles.heading}>{'Plantain Tree Care'}</Text>
          {/* <Text style={styles.sideHeading}>{'Side Heading'}</Text> */}
          <Image source={growingplantaintrees} style={styles.plantainImage} />
          <Text style={[styles.description, {fontWeight: '500'}]}>
          Plantain trees are grown just like bananas and will require well-drained soil, frequent watering, and protection from both the wind and frost. When first planting a plantain tree, you'll want to be sure to remove any weeds that might be growing from the soil, and try to aim for the warmest, sunniest section of your landscape. Be sure to use a shovel to dig a hole that's as big as the root ball, and space the tree about four to six feet away from any other plants in the garden

          </Text>
          <Text style={styles.sideHeading}>{'Light'}</Text>
          <Text style={[styles.description, {fontWeight: '500'}]}>
          
          The plantain tree will grow best in full sun. When planting, if you can take advantage of any reflected heat that might be radiating off paved areas or nearby buildings, that's even better.
          
          </Text>

          <Text style={styles.sideHeading}>{'Water'}</Text>
          <Text style={[styles.description, {fontWeight: '500'}]}>
          Plantain trees will require constantly moist, but not waterlogged, soil. As a result, these trees will require a fairly large amount of water during the warmest months of the year. Try to water the soil whenever the top layer begins to dry out.
          
          </Text>
          <Text style={styles.sideHeading}>{'Soil'}</Text>
          <Text style={[styles.description, {fontWeight: '500'}]}>
          One of the most important rules of plantain tree care is not to let them dry out, these are trees that crave moist soil as well as regular watering, particularly during hot, dry weather.

Try spreading a four-to-six-inch layer of organic mulch around the base of the tree. Mulching can help keep the soil from drying out too quickly, as well as protect the plantain tree's shallow roots.
          
          </Text>
          <Text style={styles.sideHeading}>{'Temperature and humidity'}</Text>
          <Text style={[styles.description, {fontWeight: '500'}]}>
          The plantain tree is a tropical tree plant that cannot withstand freezing temperatures--the cold will kill off its fruit, flowers, and leaves. As a result, you may have to take extra steps to protect your tree when the cold weather arrives. This could include the use of blankets and light bulbs (you can even use a string of holiday lights) when the temperatures dip below freezing.

The good news, however, is that the plantain tree's rhizomes will survive in the ground at temperatures down to 22 degrees Fahrenheit. So, if your tree does die off above the ground, the rhizome will send up new shoots come spring
          </Text>
          
          <Text style={styles.sideHeading}>{'Fertilizer'}</Text>
          <Text style={[styles.description, {fontWeight: '500'}]}>
          Since this is a tropical plant that feeds heavily, you'll want to fertilize your plantain tree about once a month during the summer. Mature trees will require about one to two pounds of fertilizer. Opt for a balanced 8-10-8, slow-release fertilizer.

Spread the granulated fertilizer in a circle about four-to-eight-feet wide around the base of the plant, and then scratch it into the top inch of soil with a hand cultivator. Try not to sprinkle fertilizer on the trunk.</Text>
          


        </View>
      </ScrollView>
    </View>
  );
};

export default PlantainScreen;

// #24A19C
