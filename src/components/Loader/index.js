import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Overlay } from 'react-native-elements';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  overlayStyle: { flex: 1, justifyContent: 'center' }
});

const LoaderScreen = props => {
  return (
    <Overlay
      isVisible={props.loading}
      windowBackgroundColor="rgba(255, 255, 255, .9)"
      overlayBackgroundColor="transparent"
      width="auto"
      height="auto"
      style={style.overlayStyle}>
      <ActivityIndicator size="large" />
    </Overlay>
  );
};

LoaderScreen.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default LoaderScreen;
