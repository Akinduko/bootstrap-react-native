import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import DatePickerComponent from '<components>/DatePicker';
import { getDate } from '<utils>/formats';
import { StepOneStyles } from './style';

const StepOne = () => {
  const [state, setState] = useState({});
  const {
    container,
    headerText,
    subHeaderText,
    pickerStyle,
    containerStyle,
    labelStyle
  } = StepOneStyles;

  const updatePicker = event => {
    setState(event);
  };

  const renderSelectInput = () => {
    return (
      <Input
        placeholder="Date of Birth"
        containerStyle={containerStyle}
        disabledInputStyle={labelStyle}
        value={state.date ? getDate(state.date) : ''}
        disabled
      />
    );
  };

  return (
    <View style={container}>
      <Text style={headerText}>When is your birthday?</Text>

      <Text style={subHeaderText}>
        You must be at least 18 years old and above to use Ginjabox. Others won’t see your birth
        date.
      </Text>

      <DatePickerComponent
        mode="date"
        format="YYYY-MM-DD"
        confirmBtnText="Ok"
        style={pickerStyle}
        cancelBtnText="Cancel"
        selectComponent={renderSelectInput}
        updatePicker={date => {
          updatePicker(date);
        }}
      />
    </View>
  );
};

export default StepOne;
