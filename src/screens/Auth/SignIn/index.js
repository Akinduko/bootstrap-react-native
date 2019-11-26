import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import OtpInput from '<components>/OtpInput';
import { style } from './style';

const SignIn = () => {
  const {
    container,
    imageStyle,
    buttonStyle,
    otpContainer,
    headerText,
    headerContainer,
    subHeaderText,
    containerStyle,
    buttonContainer,
    titleStyle,
    switchTitleStyle,
    switchContainer,
    switchLabelStyle,
    supportContainer,
    supportLabelStyle,
    supportTitleStyle
  } = style;

  const handleCodeVerification = async code => {
    console.log(code);
    if (code && code.length === 6) {
      console.log('received');
    }
  };

  return (
    <View style={container}>
      <View style={headerContainer}>
        <Image
          source={require('<assets>/icons/Logo/group14.png')}
          resizeMode="contain"
          style={imageStyle}
        />
        <Text style={headerText}>Welcome Back</Text>
        <Text style={subHeaderText}>*****66859</Text>
      </View>
      <View style={switchContainer}>
        <Text style={switchLabelStyle}>Not you?</Text>
        <Button titleStyle={switchTitleStyle} type="clear" title="Switch account" />
      </View>
      <View style={otpContainer}>
        <Text style={subHeaderText}>Enter your PIN</Text>
        <OtpInput inputCount={6} onTextChange={code => handleCodeVerification(code)} value="" />
      </View>
      <View style={switchContainer}>
        <Text style={switchLabelStyle}>Forgot PIN?</Text>
        <Button titleStyle={switchTitleStyle} type="clear" title="Reset" />
      </View>
      <View style={supportContainer}>
        <FontAwesome name="commenting-o" size={15} color="#38b7a2" />
        <Text style={supportLabelStyle}>Need Help? </Text>
        <Button titleStyle={supportTitleStyle} type="clear" title="Chat with Ginjabox support." />
      </View>
      <View style={buttonContainer}>
        <Button
          buttonStyle={buttonStyle}
          containerStyle={containerStyle}
          titleStyle={titleStyle}
          title="Authorize"
        />
      </View>
    </View>
  );
};

export default SignIn;
