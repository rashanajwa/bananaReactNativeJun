import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import PredictPage from '../../PredictPage';
import Treatment1Page from '../treatment/treatment1';
import TreatmentWeevils from '../treatment/treatment-weevils';
import TreatmentLarva from '../treatment/treatment-larva';
import TreatmentEarwigs from '../treatment/treatment-earwigs';
import TreatmentFusariumWilt from '../treatment/treatment-fusarium-wilt';
import TreatmentBacterialWilt from '../treatment/treatment-bacterial-wilt';
import TreatmentSigatoka from '../treatment/treatment-sigatoka';
import TreatmentCordana from '../treatment/treatment-cordana';
import TreatmentPestalotiopsis from '../treatment/treatment-pestalotiopsis';
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
       <Stack.Screen
        name={'treatment-weevils'}
        component={TreatmentWeevils}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name={'treatment-larva'}
        component={TreatmentLarva}
        options={{headerShown: false}}
      />
          <Stack.Screen
        name={'treatment-earwigs'}
        component={TreatmentEarwigs}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={'treatment-fusarium-wilt'}
        component={TreatmentFusariumWilt}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={'treatment-bacterial-wilt'}
        component={TreatmentBacterialWilt}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'treatment-sigatoka'}
        component={TreatmentSigatoka}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'treatment-cordana'}
        component={TreatmentCordana}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'treatment-pestalotiopsis'}
        component={TreatmentPestalotiopsis}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
