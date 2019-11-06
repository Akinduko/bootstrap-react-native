import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import 'react-native/jest/setup';

jest.autoMockOff();
jest.mock('react-native-keychain', () => ({
  setGenericPassword: jest.fn(),
  getGenericPassword: jest.fn(),
  resetGenericPassword: jest.fn()
}));

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

jest.mock('NativeModules', () => ({
  UIManager: {
    RCTView: () => {}
  },
  StatusBarManager: {
    DEFAULT_BACKGROUND_COLOR: 'black'
  },
  RNGestureHandlerModule: {
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
    State: {
      BEGAN: 'BEGAN',
      FAILED: 'FAILED',
      ACTIVE: 'ACTIVE',
      END: 'END'
    },
    Directions: {
      RIGHT: 1,
      LEFT: 2,
      UP: 4,
      DOWN: 8
    }
  },
  PlatformConstants: {
    forceTouchAvailable: false
  },
  KeyboardObserver: {}
}));
jest.mock('react-native-share', () => ({ open: jest.fn() }));
jest.mock('react-native-splash-screen', () => ({
  hide: jest.fn()
}));
// jest.mock('react-navigation', () => ({
//   withNavigation: component => component,
//   createStackNavigator: () => ({
//     navigationOptions: {}
//   })
// }));
