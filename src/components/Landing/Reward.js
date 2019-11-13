import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './style';
export default class Rewards extends Component {
  renderFirst() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={require('<assets>/images/reward.png')}
          resizeMode="contain"
          style={styles.imageStyle}
        />
        <Text style={styles.headerText}>A wallet for everything</Text>
        <View style={styles.captionContainerStyle}>
          <Text style={styles.captionStyle}>
            Korapay lets you hold wallets, even in different currencies, so you can easily make{' '}
            payments and send money to your friends locally and abroad.
          </Text>
        </View>
      </View>
    );
  }
  renderSecond() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={require('<assets>/images/reward.png')}
          resizeMode="contain"
          style={styles.imageStyle}
        />
        <Text style={styles.headerText}>Borderless transfers</Text>
        <View style={styles.captionContainerStyle}>
          <Text style={styles.captionStyle}>
            No need to worry about how to make or receive payments. Korapay lets your money move{' '}
            with you - everywhere you go.
          </Text>
        </View>
      </View>
    );
  }
  render() {
    const { data } = this.props;
    return data.id == 1 ? this.renderFirst() : this.renderSecond();
  }
}
