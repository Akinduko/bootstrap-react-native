import React from 'react';
import { View, Text, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import Button from '<components>/Button';
import { style } from './style';

const AuthLanding = ({ navigation }) => {
  const goTo = route => {
    navigation.navigate(route);
  };
  const {
    container,
    imageStyle,
    imageCaptionStyle,
    imageContainer,
    buttonContainer,
    ButtonOneContainerStyle,
    ButtonOneTextStyle,
    ButtonTwoContainerStyle,
    ButtonTwoTextStyle,
    MainCaptionContainer,
    MainCaptionText,
    MainCaptionLink
  } = style;

  return (
    <View style={container}>
      <View style={imageContainer}>
        <Image
          source={require('<assets>/images/Logo/layer2.png')}
          resizeMode="contain"
          style={imageStyle}
        />
        <Text style={imageCaptionStyle}>Take ginjabox for a spin</Text>
      </View>
      <View style={buttonContainer}>
        <Button
          styles={{
            buttonContainerStyle: ButtonOneContainerStyle,
            buttonTextStyle: ButtonOneTextStyle
          }}
          buttonText="Login"
          onClick={() => goTo('signIn')}
        />
        <Button
          styles={{
            buttonContainerStyle: ButtonTwoContainerStyle,
            buttonTextStyle: ButtonTwoTextStyle
          }}
          buttonText="Join Ginjabox"
          onClick={() => goTo('signUp')}
        />
      </View>
      <View style={MainCaptionContainer}>
        <Text style={MainCaptionText}>By tapping Join Ginjabox, you agree to ginjabox’s</Text>
        <Button
          styles={{
            buttonContainerStyle: {},
            buttonTextStyle: { ...MainCaptionText, ...MainCaptionLink }
          }}
          buttonText=" Terms of Service,"
          onClick={() => goTo('signUp')}
        />
        <Button
          styles={{
            buttonContainerStyle: {},
            buttonTextStyle: { ...MainCaptionText, ...MainCaptionLink }
          }}
          buttonText=" Payment Terms,"
          onClick={() => goTo('signUp')}
        />
        <Button
          styles={{
            buttonContainerStyle: {},
            buttonTextStyle: { ...MainCaptionText, ...MainCaptionLink }
          }}
          buttonText=" Privacy and Insurance Policy."
          onClick={() => goTo('signUp')}
        />
      </View>
    </View>
  );
};

AuthLanding.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
};
export default withNavigation(AuthLanding);
