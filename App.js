import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlantainPage from './PlantainPage';
import SelectTypePage from './SelectType';
import PredictPage from './PredictPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SelectTypePage}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="selectPage" component={SelectTypePage} />
        <Stack.Screen name="plantainPage" component={PlantainPage} />
        <Stack.Screen
          name="predictPage"
          component={PredictPage}
          options={{title: 'Predict'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
