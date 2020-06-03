import React from 'react';

import { PlayerProvider } from './player';

const AppProvider = ({ children }) => (
  <PlayerProvider>{children}</PlayerProvider>
);

export default AppProvider;
