/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import { PersistGate } from 'redux-persist/integration/react';

import getStore from '<state>/store';

import AppContainer from '<navigation>/App';
import LoaderScreen from '<components>/Loader';
import NavigationService from '<utils>/NavigationService';

const { store, persister } = getStore();

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class App extends PureComponent {
  state = {
    isReady: false
  };

  async componentDidMount() {
    SplashScreen.hide();
    this.setState({
      isReady: true
    });
  }

  render() {
    // add starting screen with text here
    if (!this.state.isReady) return null;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <SafeAreaView style={styles.container}>
            <StatusBar networkActivityIndicatorVisible />
            <AppContainer
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
            <LoaderScreen />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
