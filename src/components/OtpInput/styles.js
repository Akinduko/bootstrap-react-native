import { StyleSheet, Dimensions } from 'react-native';

const wS = Dimensions.get('window');
const dh = wS.height;
const dw = wS.width;

const hh = h => (dh * h) / 670;

const ww = w => (dw * w) / 375;

export default StyleSheet.create({
  containerStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInputStyle: {
    fontSize: hh(16),
    margin: 0,
    paddingTop: 20,
    color: '#000000',
    width: ww(30)
  },
  inputFieldStyle: {
    fontSize: hh(16),
    margin: 0
  },
  inputContainerStyles: {
    width: '11.5%',
    borderBottomWidth: ww(1.5),
    height: 53,
    margin: 10,
    borderColor: '#86939e'
  },
  underlineStyleHighLighted: {
    borderWidth: 0,
    margin: 0,
    borderColor: 'rgb(56,183,162)',
    borderBottomWidth: ww(1.5)
  }
});
