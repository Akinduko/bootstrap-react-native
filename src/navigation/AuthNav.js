import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import Landing from '<screens>/Landing';

export default createStackNavigator (
  {
    landing: {
      screen: Landing,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'landing',
  }
);
