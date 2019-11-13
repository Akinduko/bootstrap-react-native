/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, AppState} from 'react-native';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import {PersistGate} from 'redux-persist/integration/react';

import getStore from './state/store';

import AppContainer from '<navigation>/App';
import LoaderScreen from '<components>/Loader';
import NavigationService from '<utils>/NavigationService';

const {store, persistor} = getStore ();

class App extends PureComponent {
  state = {
    appState: AppState.currentState,
    isReady: false,
  };

  async componentDidMount () {
    SplashScreen.hide ();
    this.setState ({
      isReady: true,
    });
  }

  renderLoader () {
    return null;
  }

  render () {
    if (!this.state.isReady) return this.renderLoader ();
    return (
      <Provider store={store}>
        <PersistGate
          loading={() => {
            return <LoaderScreen />;
          }}
          persistor={persistor}
        >
          <SafeAreaView style={styles.container}>
            <StatusBar networkActivityIndicatorVisible />
            <AppContainer
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator (navigatorRef);
              }}
            />
            <LoaderScreen />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});

export default App;
