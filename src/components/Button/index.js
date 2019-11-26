import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ styles: { buttonContainerStyle, buttonTextStyle }, buttonText, onClick }) => {
  return (
    <TouchableOpacity style={buttonContainerStyle} onPress={() => onClick()}>
      <Text style={buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  styles: PropTypes.shape({
    buttonContainerStyle: PropTypes.object,
    buttonTextStyle: PropTypes.object
  }),
  buttonText: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  styles: {
    buttonContainerStyle: {},
    buttonTextStyle: {}
  },
  buttonText: '',
  onClick: () => {}
};
export default Button;
