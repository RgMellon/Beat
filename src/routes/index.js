import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import AppRoutes from './appTab.routes';
import Playlist from '../pages/Playlist';
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
    </Stack.Navigator>
  );
}

export default routes;
