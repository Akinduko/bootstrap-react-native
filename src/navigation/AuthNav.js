import { createStackNavigator } from 'react-navigation-stack';
import AuthLanding from '<screens>/Auth';
import SignUp from '<screens>/Auth/SignUp';
import SignIn from '<screens>/Auth/SignIn';

export default createStackNavigator(
  {
    authLanding: {
      screen: AuthLanding,
      navigationOptions: () => ({
        header: null
      })
    },
    signUp: {
      screen: SignUp,
      navigationOptions: () => ({
        header: null
      })
    },
    signIn: {
      screen: SignIn,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    initialRouteName: 'authLanding'
  }
);
