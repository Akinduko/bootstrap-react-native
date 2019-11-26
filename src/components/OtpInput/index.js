import React, { useEffect } from 'react';
import { View, Clipboard } from 'react-native';
import PropTypes from 'prop-types';
import OtpInputs from 'react-native-otp-inputs';

import Styles from './styles';

const OtpInput = ({ inputCount, onTextChange }) => {
  useEffect(() => {
    Clipboard.setString('');
  }, []);

  const handleChange = async code => {
    await onTextChange(code);
  };

  const {
    textInputStyle,
    inputFieldStyle,
    underlineStyleHighLighted,
    containerStyle,
    inputContainerStyles
  } = Styles;

  return (
    <View style={containerStyle}>
      <OtpInputs
        handleChange={code => {
          handleChange(code);
        }}
        inputContainerStyles={inputContainerStyles}
        numberOfInputs={inputCount ? +inputCount : 4}
        keyboardType="number-pad"
        inputStyles={textInputStyle}
        clearTextOnFocus
        value=""
        focusedBorderColor="rgba(35,118,243,1)"
        focusStyles={{ ...inputFieldStyle, ...underlineStyleHighLighted }}
        selectTextOnFocus
        returnKeyType="done"
        contextMenuHidden
      />
    </View>
  );
};
OtpInput.propTypes = {
  inputCount: PropTypes.number,
  onTextChange: PropTypes.func
};
OtpInput.defaultProps = {
  inputCount: 6,
  onTextChange: () => {}
};
export default OtpInput;
