import React from 'react';

import Playlist from '../pages/Playlist';
import SearchArtist from '../pages/SearchArtitst';

import Icon from 'react-native-vector-icons/Feather';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const AppTab = createMaterialTopTabNavigator();

function AppRoutes() {
  return (
    <AppTab.Navigator
      sceneAnimationEnabled={true}
      tabBarOptions={{
        activeTintColor: '#ff9000',
        inactiveTintColor: '#d0d0d0',
        indicatorStyle: { backgroundColor: '#999' },
        pressColor: '#ff9000',
        style: {
          backgroundColor: '#3E3B46',
          height: 60,
          justifyContent: 'center',
        },
      }}
    >
      <AppTab.Screen
        name="Playlist"
        component={Playlist}
        options={{
          tabBarLabel: 'Playlist',
          tabBarIcon: ({ color }) => (
            <Icon name="play" color={color} size={14} />
          ),
        }}
      />
      <AppTab.Screen
        name="SearchArtist"
        component={SearchArtist}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={14} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
}

export default AppRoutes;
