import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Overlay } from 'react-native-elements';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  overlayStyle: { flex: 1, justifyContent: 'center' }
});

const LoaderScreen = props => {
  return (
    <Overlay
      isVisible={props.isLoading}
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
  isLoading: PropTypes.bool.isRequired
};

function mapStatesToProps(state) {
  return {
    isLoading: (Array.isArray(state.loader.requests) && state.loader.requests.length > 0) || false
  };
}

export default connect(mapStatesToProps)(LoaderScreen);
