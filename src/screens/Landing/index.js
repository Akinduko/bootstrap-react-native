import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '<screens>/Landing/style';

const {container} = styles;

const Landing = () => {
  return (
    <View style={container}>
      <Text>
        Hello World Again
      </Text>
    </View>
  );
};

export default Landing;
