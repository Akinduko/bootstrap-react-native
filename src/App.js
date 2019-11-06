/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {StyleSheet, View, StatusBar, AppState} from 'react-native';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import {PersistGate} from 'redux-persist/integration/react';

import getStore from './state/store';

import Landing from '<screens>/Landing';

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
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <StatusBar networkActivityIndicatorVisible />
            <Landing />
          </View>
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
