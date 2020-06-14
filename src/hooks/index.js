import React from 'react';

import { PlayerProvider } from './player';
import { AuthProvider } from './auth';

const AppProvider = ({ children }) => (
  <AuthProvider>
    <PlayerProvider>{children}</PlayerProvider>
  </AuthProvider>
);

export default AppProvider;
