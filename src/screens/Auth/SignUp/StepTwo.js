import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';
import { StepTwoStyles } from './style';

const StepTwo = ({ activateButton }) => {
  const inputs = {};
  const [state, setState] = useState({
    type: null,
    firstName: '',
    lastName: ''
  });

  const {
    container,
    headerText,
    labelText,
    checkBoxContainer,
    checkBoxStyle,
    checkBoxTextStyle,
    containerStyle,
    inputStyle
  } = StepTwoStyles;

  const updateState = async (name, value) => {
    await setState({ ...state, [name]: value });
    await activateButton(true);
  };

  const setInputRef = (fieldName, field) => {
    inputs[fieldName] = field;
  };

  const focusOnField = fieldName => inputs[fieldName] && inputs[fieldName].focus();

  return (
    <View style={container}>
      <Text style={headerText}>Tell us about yourself</Text>

      <Input
        placeholder="First Name"
        onSubmitEditing={() => focusOnField('lastName')}
        ref={input => setInputRef('firstName', input)}
        onChangeText={text => updateState('firstName', text)}
        containerStyle={containerStyle}
        returnKeyType="next"
        inputStyle={inputStyle}
        autoCorrect={false}
        value={state.firstName}
      />
      <Input
        placeholder="Last Name"
        autoCorrect={false}
        ref={input => setInputRef('lastName', input)}
        onChangeText={text => updateState('lastName', text)}
        containerStyle={containerStyle}
        inputStyle={inputStyle}
        value={state.lastName}
      />
      <Text style={labelText}>Are you a:</Text>

      <View style={checkBoxContainer}>
        <CheckBox
          center
          title="Merchant"
          checkedIcon="circle"
          onPress={() => updateState('type', 'merchant')}
          uncheckedIcon="circle-o"
          containerStyle={checkBoxStyle}
          textStyle={checkBoxTextStyle}
          checkedColor="rgb( 56 ,183 ,162)"
          checked={state.type === 'merchant'}
        />
        <CheckBox
          center
          title="Warehouser"
          onPress={() => updateState('type', 'warehouser')}
          containerStyle={checkBoxStyle}
          checkedIcon="circle"
          uncheckedIcon="circle-o"
          checkedColor="rgb( 56 ,183 ,162)"
          textStyle={checkBoxTextStyle}
          checked={state.type === 'warehouser'}
        />
      </View>
    </View>
  );
};

StepTwo.propTypes = {
  activateButton: PropTypes.func.isRequired
};

export default StepTwo;
