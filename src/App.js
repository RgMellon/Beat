import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';

import BottomPlayerMusic from './components/BottomPlayerMusic';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

import AppProvider from './hooks';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <AppProvider>
        <View style={{ backgroundColor: '#312e38', flex: 1 }}>
          <BottomPlayerMusic />
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
