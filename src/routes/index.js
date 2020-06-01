import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import AppRoutes from './appTab.routes';
import DetailPlaylist from '../pages/DetailPlaylist';

const Stack = createStackNavigator();

function routes() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#312e38',
        },
      }}
    >
      <Stack.Screen name="Home" component={AppRoutes} />
      <Stack.Screen name="DetailPlaylist" component={DetailPlaylist} />
    </Stack.Navigator>
  );
}

export default routes;
