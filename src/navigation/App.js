import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import authStack from './AuthNav';
import Landing from '<screens>/Landing';

const AppNavigator = createSwitchNavigator(
  {
    landing: {
      screen: Landing,
      navigationOptions: () => ({
        header: null
      })
    },
    auth: {
      screen: authStack
    }
  },
  {
    initialRouteName: 'landing'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
