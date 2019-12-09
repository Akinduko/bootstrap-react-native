import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import DatePickerComponent from '<components>/DatePicker';
import { getDate } from '<utils>/formats';
import { StepOneStyles } from './style';

const StepOne = ({ setState, state }) => {
  const {
    container,
    headerText,
    subHeaderText,
    pickerStyle,
    containerStyle,
    labelStyle
  } = StepOneStyles;

  const [date, setDate] = useState(null);

  useEffect(() => {
    return stat => {
      console.log(date, state.date, stat);
      // if (date !== state.date) {
      //   setState({ active: true, date });
      // }
    };
  }, [date]);

  const updatePicker = inputDate => {
    setDate(inputDate);
  };

  const onDateChange = async (event, inputDate) => {
    await setDate(inputDate);
  };

  const renderSelectInput = () => {
    return (
      <Input
        placeholder="Date of Birth"
        containerStyle={containerStyle}
        disabledInputStyle={labelStyle}
        value={date ? getDate(date) : ''}
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
        onDateChange={onDateChange}
        selectComponent={renderSelectInput}
        updatePicker={updatePicker}
      />
    </View>
  );
};

StepOne.propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.object
};

StepOne.defaultProps = {
  state: {}
};

export default StepOne;
