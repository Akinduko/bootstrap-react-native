import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import OtpInput from '<components>/OtpInput';
import { StepFiveStyles } from './style';

const StepFive = ({ activateButton }) => {
  const {
    container,
    buttonStyle,
    otpContainer,
    headerText,
    headerContainer,
    subHeaderText,
    containerStyle,
    buttonContainer,
    titleStyle,
    otpLabelText
  } = StepFiveStyles;
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
        <Text style={headerText}>Set your ginjabox pin </Text>
        <Text style={subHeaderText}>
          For your security, PIN is required to sign into your Ginjabox account.
        </Text>
      </View>

      <View style={otpContainer}>
        <Text style={otpLabelText}>Enter PIN</Text>
        <OtpInput inputCount={6} onTextChange={code => handleCodeVerification(code)} value="" />
      </View>
      <View style={otpContainer}>
        <Text style={otpLabelText}>Re-enter PIN</Text>
        <OtpInput inputCount={6} onTextChange={code => handleCodeVerification(code)} value="" />
      </View>
      <View style={buttonContainer}>
        <Button
          buttonStyle={buttonStyle}
          containerStyle={containerStyle}
          titleStyle={titleStyle}
          title="Create PIN"
        />
      </View>
    </View>
  );
};

StepFive.propTypes = {
  activateButton: PropTypes.func.isRequired
};

export default StepFive;
