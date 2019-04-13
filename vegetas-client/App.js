import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  fromLeft,
  fromTop,
  fromRight,
  fromBottom,
  fadeIn,
  zoomIn,
  zoomOut,
  flipY,
  flipX,
} from 'react-navigation-transitions';
import InitialHome from './Screens/InitialHome/InitialHome';
import SignUp from './Screens/Users/SignUp';
import UserPage from './Screens/Users/UserPage';
import Policy from './Screens/Users/Policy';
import ChangePassword from './Screens/Users/ChangePassword';
import VegLevelSelection from './Screens/VegLevel/VegLevelSelection';
import Main from './Screens/Main/Main';
import MapScreen from './Screens/Maps/MapScreen';
import RestaurantDetails from './Screens/Main/RestaurantDetails';
import ResFavorite from './Screens/Main/ResFavorite';

const RootStack = createStackNavigator(
  {
    InitialHome,
    SignUp,
    UserPage,
    Policy,
    ChangePassword,
    VegLevelSelection,
    Main,
    MapScreen,
    RestaurantDetails,
    ResFavorite,
  },
  {
    initialRouteName: 'InitialHome',
    transitionConfig: () => fromTop(500),
  },
);

const AppContainer = createAppContainer(RootStack);

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
export default App;
