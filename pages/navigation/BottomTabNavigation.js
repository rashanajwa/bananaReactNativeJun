import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import OptionScreen from '../OptionsPage';
import {Entypo} from '@expo/vector-icons';
import PlantainScreen from '../Plantain';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Clipboard, Home, Disc, Feather} from 'react-native-feather';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: '#009378',
          borderTopWidth: 0,
          borderRadius: 5,
        },
        tabBarOptions: {
          showIcon: true,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Home fontSize={10} color="#000" strokeWidth={1} />,
        }}
      />

      <Tab.Screen
        name="Detect"
        component={OptionScreen}
        options={{
          tabBarIcon: () => <Disc fontSize={10} color="#000" strokeWidth={1} />,
        }}
      />

      <Tab.Screen
        name="Plantain"
        component={PlantainScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Clipboard fontSize={10} color="#000" strokeWidth={1} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
