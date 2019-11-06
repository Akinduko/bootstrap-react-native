import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import authStack from './AuthNav';

const AppNavigator = createSwitchNavigator(
  {
    auth: authStack
  },
  {
    initialRouteName: 'auth'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
