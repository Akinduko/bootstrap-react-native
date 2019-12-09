import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import OtpInput from '<components>/OtpInput';
import { StepFourStyles } from './style';

const StepFour = ({ activateButton }) => {
  const {
    container,
    buttonStyle,
    otpContainer,
    headerText,
    headerContainer,
    subHeaderText,
    containerStyle
  } = StepFourStyles;
  const handleCodeVerification = async code => {
    console.log(code);
    if (code && code.length === 6) {
      console.log('received');
      activateButton(true);
    }
  };

  return (
    <View style={container}>
      <View style={headerContainer}>
        <Text style={headerText}>Verify your phone number</Text>
        <Text style={subHeaderText}>Enter the 6 digit phone number sent to 08166859171.</Text>
      </View>

      <View style={otpContainer}>
        <OtpInput inputCount={6} onTextChange={code => handleCodeVerification(code)} value="" />
        <Button
          buttonStyle={buttonStyle}
          containerStyle={containerStyle}
          icon={<Icon name="envelope" size={15} color="white" />}
          title="Resend"
        />
      </View>
    </View>
  );
};

StepFour.propTypes = {
  activateButton: PropTypes.func.isRequired
};

export default StepFour;
