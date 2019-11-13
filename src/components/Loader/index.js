import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { Overlay } from 'react-native-elements';

export class LoaderScreen extends PureComponent {
  render() {
    // if (!this.props.isLoading) return null;
    return (
      <Overlay
        isVisible={this.props.isLoading}
        windowBackgroundColor="rgba(255, 255, 255, .9)"
        overlayBackgroundColor="transparent"
        width="auto"
        height="auto"
        style={{ flex: 1, justifyContent: 'center' }}
      >
        {/* <Image
          style={{ width: 100, height: 100, alignSelf: 'center' }}
          source={require('<assets>/images/center-logo.png')}
        /> */}
        <ActivityIndicator size={'large'} />
      </Overlay>
    );
  }
}
function mapStatesToProps(state) {
  return {
    isLoading: (Array.isArray(state.loader.requests) && state.loader.requests.length > 0) || false
  };
}

export default connect(mapStatesToProps)(LoaderScreen);
