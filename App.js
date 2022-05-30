import * as React from 'react';
import {NavigationContainer,DefaultTheme } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlantainPage from './PlantainPage';
import SelectTypePage from './SelectType';
import PredictPage from './PredictPage';
import HomeScreen from './pages/HomeScreen';

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
};
const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator  >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home',
          headerShown: false
        }}
         
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
