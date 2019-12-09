/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { StepThreeStyles, borderedPickerSelectStyles } from './style';

const initialFocus = {
  phoneNumber: false,
  bankName: false,
  accountNumber: false,
  email: false
};
const StepThree = ({ activateButton }) => {
  const inputs = {};
  const [focus, setFocus] = useState(initialFocus);
  const [state, setState] = useState({
    type: null,
    accountNumber: '',
    bankName: '',
    email: '',
    phoneNumber: '',
    banks: [
      {
        value: '056',
        label: 'NGN',
        color: '#212121'
      },
      {
        value: '057',
        label: 'USD',
        color: '#212121'
      }
    ],
    selectedBank: {
      value: '056',
      label: 'NGN',
      color: '#212121'
    }
  });

  const {
    container,
    subHeaderText,
    headerText,
    viewContainer,
    headerContainer,
    inputContainer,
    footerContainer,
    containerStyle,
    inputStyle
  } = StepThreeStyles;

  const updateState = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const onFocus = name => {
    setFocus({ ...initialFocus, [name]: true });
    activateButton(true);
  };

  const onBlur = name => {
    setFocus({ ...focus, [name]: false });
  };

  const setInputRef = (fieldName, field) => {
    inputs[fieldName] = field;
  };
  const focusOnField = fieldName => inputs[fieldName] && inputs[fieldName].focus();
  return (
    <View style={container}>
      <View style={headerContainer}>
        <Text style={headerText}>How do we pay your referral bonus?</Text>
      </View>
      <View style={inputContainer}>
        <Input
          placeholder={!focus.email ? 'Your e-mail' : ''}
          label={focus.email ? 'Your e-mail' : ''}
          labelStyle={[inputStyle, { color: focus.email ? '#38b7a2' : '#9EA0A4' }]}
          onBlur={() => onBlur('email')}
          onFocus={() => onFocus('email')}
          ref={input => setInputRef('email', input)}
          onChangeText={text => updateState('email', text)}
          returnKeyType="next"
          keyboardType="email-address"
          viewContainer={viewContainer}
          inputStyle={inputStyle}
          containerStyle={[containerStyle]}
          autoCorrect={false}
          value={state.email}
          onSubmitEditing={() => focusOnField('phoneNumber')}
        />
        <Input
          placeholder={!focus.phoneNumber ? 'Your phone number' : ''}
          label={focus.phoneNumber ? 'Your phone number' : ''}
          labelStyle={[inputStyle, { color: focus.phoneNumber ? '#38b7a2' : '#9EA0A4' }]}
          onBlur={() => onBlur('phoneNumber')}
          onFocus={() => onFocus('phoneNumber')}
          ref={input => setInputRef('phoneNumber', input)}
          returnKeyType="next"
          keyboardType="phone-pad"
          inputStyle={inputStyle}
          onChangeText={text => updateState('phoneNumber', text)}
          containerStyle={[containerStyle]}
          autoCorrect={false}
          onSubmitEditing={() => focusOnField('accountNumber')}
          value={state.phoneNumber}
        />
        <Input
          placeholder={!focus.accountNumber ? 'Your bank account number' : ''}
          label={focus.accountNumber ? 'Your bank account number' : ''}
          labelStyle={[inputStyle, { color: focus.accountNumber ? '#38b7a2' : '#9EA0A4' }]}
          onBlur={() => onBlur('accountNumber')}
          onFocus={() => onFocus('accountNumber')}
          ref={input => setInputRef('accountNumber', input)}
          onChangeText={text => updateState('accountNumber', text)}
          containerStyle={[containerStyle]}
          keyboardType="numeric"
          inputStyle={inputStyle}
          autoCorrect={false}
          value={state.accountNumber}
        />
        <RNPickerSelect
          items={state.banks}
          placeholder={{
            label: 'Select Bank',
            value: null,
            color: '#9EA0A4'
          }}
          onValueChange={value => {
            updateState('selectedBank', value);
          }}
          style={borderedPickerSelectStyles}
          value={state.selectedBank}
          useNativeAndroidPickerStyle
          placeholderTextColor="#9EA0A4"
          Icon={() => <FontAwesome name="angle-down" size={20} color="#38b7a2" />}
        />
        <Input
          placeholder="Your bank name"
          onChangeText={text => updateState('bankName', text)}
          returnKeyType="next"
          inputStyle={inputStyle}
          viewContainer={viewContainer}
          containerStyle={[containerStyle]}
          autoCorrect={false}
          keyboardType="ascii-capable"
          editable={false}
          value={state.bankName}
        />
      </View>
      <View style={footerContainer}>
        <Text style={subHeaderText}>You will get an SMS with one-time access code.</Text>
      </View>
    </View>
  );
};

StepThree.propTypes = {
  activateButton: PropTypes.func.isRequired
};

export default StepThree;
