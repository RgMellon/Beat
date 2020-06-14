import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import AppTabRoutes from './appTab.routes';
import DetailPlaylist from '../pages/DetailPlaylist';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    headerMode="screen"
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#312e38',
      },
    }}
  >
    <App.Screen name="Home" component={AppTabRoutes} />
    <App.Screen name="DetailPlaylist" component={DetailPlaylist} />
  </App.Navigator>
);

export default AppRoutes;
