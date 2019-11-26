import { StyleSheet, Platform } from 'react-native';

export const style = StyleSheet.create({
  renderStyle: { height: '80%' },
  headerStyle: { height: '10%' },
  footerStyle: { height: '10%' },
  container: { height: '100%' },
  previousStyle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 33,
    height: 66
  },
  previousContainerStyle: {
    width: 66,
    justifyContent: 'center',
    marginHorizontal: '5%'
  },
  nextStyle: {
    backgroundColor: 'rgb(56,183,162)',
    justifyContent: 'center',
    borderRadius: 33,
    height: 66
  },
  nextContainerStyle: {
    width: 66,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginHorizontal: '10%'
  }
});

export const StepOneStyles = StyleSheet.create({
  headerText: {
    height: '15%',
    textAlign: 'left',
    justifyContent: 'center',
    color: 'rgb(56,183,162)',
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    lineHeight: 27
  },
  subHeaderText: {
    height: '30%',
    textAlign: 'left',
    justifyContent: 'center',
    color: 'rgb(62, 62, 62)',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    lineHeight: 27
  },
  container: { paddingHorizontal: '10%', flexDirection: 'column' },
  pickerStyle: { width: '80%' },
  containerStyle: { paddingHorizontal: 0 },
  labelStyle: {
    color: 'rgb(56,183,162)',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    lineHeight: 23,
    opacity: 1
  }
});

export const StepTwoStyles = StyleSheet.create({
  headerText: {
    height: '15%',
    textAlign: 'left',
    justifyContent: 'center',
    color: 'rgb(56,183,162)',
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    lineHeight: 27
  },
  container: { paddingHorizontal: '10%', flexDirection: 'column' },
  labelText: {
    textAlign: 'left',
    justifyContent: 'center',
    color: 'rgb(56,183,162)',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    lineHeight: 27,
    marginVertical: '5%'
  },
  checkBoxContainer: {
    flexDirection: 'row'
  },
  containerStyle: { paddingHorizontal: 0, height: '15%', marginVertical: '1%' },
  checkBoxTextStyle: {
    textAlign: 'left',
    justifyContent: 'center',
    color: 'rgb(56,183,162)',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    lineHeight: 27
  },
  checkBoxStyle: {
    backgroundColor: 'transparent',
    margin: 0,
    width: '40%',
    padding: 0,
    borderColor: 'transparent'
  },
  inputStyle: {
    textAlign: 'left',
    justifyContent: 'center',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    lineHeight: 27
  }
});

export const StepThreeStyles = StyleSheet.create({
  headerText: {
    textAlign: 'left',
    justifyContent: 'center',
    color: 'rgb(56,183,162)',
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    lineHeight: 27
  },
  subHeaderText: {
    textAlign: 'left',
    color: 'rgb(62, 62, 62)',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    lineHeight: 27
  },
  inputContainer: { height: '70%', justifyContent: 'space-around' },
  container: {
    paddingHorizontal: '10%',
    height: '100%',
    flexDirection: 'column'
  },
  pickerStyle: { width: '80%' },
  labelStyle: {
    color: 'rgb(56,183,162)',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    lineHeight: 23,
    opacity: 1
  },
  labelText: {
    textAlign: 'left',
    justifyContent: 'center',
    color: 'rgb(56,183,162)',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    lineHeight: 27,
    marginVertical: '5%'
  },
  checkBoxContainer: {
    flexDirection: 'row'
  },
  containerStyle: { paddingHorizontal: 0, height: '10%', marginVertical: '1%' },
  checkBoxTextStyle: {
    textAlign: 'left',
    justifyContent: 'center',
    color: 'rgb(56,183,162)',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    lineHeight: 27
  },
  checkBoxStyle: {
    backgroundColor: 'transparent',
    margin: 0,
    width: '40%',
    padding: 0,
    borderColor: 'transparent'
  },
  inputStyle: {
    textAlign: 'left',
    justifyContent: 'center',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    lineHeight: 27
  },
  footerContainer: { height: '10%', justifyContent: 'center' },
  headerContainer: {
    height: '10%',
    justifyContent: 'center'
  },
  PickerContainer: {
    height: Platform.OS === 'android' ? '15%' : '10%',
    justifyContent: 'center'
  }
});

export const StepFourStyles = StyleSheet.create({
  headerText: {
    color: 'rgb(56,183,162)',
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    lineHeight: 27
  },
  subHeaderText: {
    textAlign: 'left',
    justifyContent: 'center',
    color: 'rgb(62, 62 ,62)',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    lineHeight: 27
  },
  headerContainer: {
    height: '25%',
    justifyContent: 'space-between'
  },
  buttonStyle: {
    backgroundColor: 'rgb(56,183,162)',
    justifyContent: 'space-around'
  },
  otpContainer: {
    height: '40%',
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  container: {
    paddingHorizontal: '10%',
    flexDirection: 'column'
  },
  containerStyle: {
    width: '40%'
  }
});

export const StepFiveStyles = StyleSheet.create({
  headerText: {
    color: 'rgb(56,183,162)',
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    lineHeight: 27
  },
  subHeaderText: {
    textAlign: 'left',
    justifyContent: 'center',
    color: 'rgb(62, 62 ,62)',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    lineHeight: 27
  },
  otpLabelText: {
    textAlign: 'left',
    justifyContent: 'center',
    color: 'rgb(62, 62 ,62)',
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    lineHeight: 27
  },
  headerContainer: {
    height: '20%',
    justifyContent: 'space-between'
  },
  buttonStyle: {
    backgroundColor: 'rgb(56,183,162)',
    justifyContent: 'center',
    borderRadius: 11
  },
  titleStyle: {
    color: 'rgb(254,254,254)',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    lineHeight: 26
  },
  otpContainer: {
    height: '10%',
    marginVertical: '5%',
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  container: {
    paddingHorizontal: '10%',
    flexDirection: 'column'
  },
  containerStyle: {
    width: '100%'
  },
  buttonContainer: {
    marginVertical: '10%',
    height: '20%'
  }
});

export const StepSixStyles = StyleSheet.create({
  headerText: {
    color: 'rgb(56,183,162)',
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    lineHeight: 27
  },
  headerContainer: {
    height: '10%',
    justifyContent: 'center'
  },
  buttonStyle: {
    backgroundColor: 'rgb(56,183,162)',
    justifyContent: 'center',
    borderRadius: 11
  },
  titleStyle: {
    color: 'rgb(254,254,254)',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    lineHeight: 26
  },
  invertTitleStyle: {
    color: 'rgb(56,183,162)'
  },
  invertButtonStyle: {
    backgroundColor: 'rgb(255,255,255)',
    borderColor: 'rgb(56,183,162)',
    borderWidth: 1
  },
  scrollText: {
    textAlign: 'left',
    justifyContent: 'center',
    color: 'rgb(62, 62 ,62)',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    lineHeight: 27,
    marginVertical: '1%'
  },
  scrollContainer: {
    height: '65%',
    marginTop: '10%'
  },
  container: {
    paddingHorizontal: '10%',
    height: '100%',
    flexDirection: 'column'
  },
  containerStyle: {
    width: '45%',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    height: '10%',
    justifyContent: 'space-between'
  }
});

export const borderedPickerSelectStyles = StyleSheet.create({
  viewContainer: {
    borderBottomWidth: 1,
    borderColor: '#86939e',
    height: Platform.OS === 'android' ? '50%' : '50%'
  },
  inputIOS: {
    textAlign: 'left',
    color: 'rgb(56,183,162)',
    fontSize: 18,
    fontFamily: 'Roboto-Regular'
  },
  inputAndroid: {
    textAlign: 'left',
    color: 'rgb(56,183,162)',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    height: '100%'
  },
  iconContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    top: Platform.OS === 'android' ? 20 : null
  }
});
