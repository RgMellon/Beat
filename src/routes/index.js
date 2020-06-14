import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/auth';

const Routes = () => {
  const { data, load } = useAuth();
  // const { user, load } = useAuth();

  if (load) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return data ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
