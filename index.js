/**
 * @format
 */

import {AppRegistry,Platform} from 'react-native';
import {name as appName} from './app.json'; 

import App from './App';
import DashboardPage from './DashboardPage';
import HomePage from './Homepage';
import PlantainPage from './PlantainPage';
import PredictPage from './PredictPage';
import SelectTypePage from './SelectType';

//AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => HomePage);
// AppRegistry.registerComponent(appName, () => DashboardPage);
// AppRegistry.registerComponent(appName, () => PlantainPage);
//AppRegistry.registerComponent(appName, () => PredictPage);
AppRegistry.registerComponent(appName, () => SelectTypePage);


if(Platform.OS==='web'){
    const rootTag=document.getElementById('root') || document.getElementById(appName)
    AppRegistry.runApplication(appName, {rootTag});
}
