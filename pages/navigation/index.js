import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import PredictPage from '../../PredictPage';
import Treatment1Page from '../treatment/treatment1';
// import { ImageSelector } from '../screens';
// import ResultPage from '../screens/ResultPage';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        name={'Root'}
        component={BottomTabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'ImageSelector'}
        component={PredictPage}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={'treatment1'}
        component={Treatment1Page}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
