import { StyleSheet, Platform } from 'react-native';

export const style = StyleSheet.create({
  renderStyle: { height: '78%' },
  headerStyle: { height: '10%' },
  footerStyle: { height: '12%' },
  container: { height: '100%' },
  previousStyle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 33,
    height: 66
  },
  previousContainerStyle: {
    width: 66,
    justifyContent: 'center'
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
    marginHorizontal: '5%'
  }
});

export const StepOneStyles = StyleSheet.create({
  headerText: {
    height: '20%',
    textAlign: 'left',
    justifyContent: 'center',
    color: 'rgb(56,183,162)',
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    lineHeight: 27
  },
  subHeaderText: {
    height: '35%',
    textAlign: 'left',
    justifyContent: 'center',
    color: 'rgb(62, 62, 62)',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    lineHeight: 27
  },
  container: { paddingHorizontal: '5%', flexDirection: 'column' },
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
    marginVertical: '5%',
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    lineHeight: 27
  },
  container: { paddingHorizontal: '5%', flexDirection: 'column' },
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
  containerStyle: { paddingHorizontal: 0, height: '20%', marginVertical: '1%' },
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
  inputContainer: { height: '80%', justifyContent: 'space-between' },
  container: {
    paddingHorizontal: '5%',
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
  containerStyle: {
    paddingHorizontal: 0,
    height: Platform.OS === 'android' ? '15%' : '10%',
    marginBottom: '5%'
  },
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
  footerContainer: { height: '10%', justifyContent: 'flex-end' },
  headerContainer: {
    height: '10%',
    justifyContent: 'flex-start'
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
    height: '30%',
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
    paddingHorizontal: '5%',
    flexDirection: 'column'
  },
  containerStyle: {
    width: '40%',
    marginTop: '5%'
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
    height: '15%',
    marginVertical: '5%',
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  container: {
    paddingHorizontal: '5%',
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
    height: '5%',
    justifyContent: 'flex-start'
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
    height: '85%',
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
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  }
});

export const borderedPickerSelectStyles = StyleSheet.create({
  viewContainer: {
    borderBottomWidth: 1,
    borderColor: '#86939e',
    height: Platform.OS === 'android' ? '15%' : '10%',
    marginTop: '5%',
    marginBottom: '5%'
  },
  inputIOS: {
    textAlign: 'left',
    color: 'rgb(56,183,162)',
    fontSize: 18,
    fontFamily: 'Roboto-Regular'
  },
  inputAndroid: {
    textAlign: 'left',
    justifyContent: 'center',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    lineHeight: 27,
    paddingLeft: 0
  },
  iconContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    top: Platform.OS === 'android' ? 20 : null
  }
});
