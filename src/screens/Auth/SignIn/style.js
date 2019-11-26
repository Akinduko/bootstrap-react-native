import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    paddingHorizontal: '10%',
    flexDirection: 'column'
  },
  headerContainer: {
    height: '30%',
    justifyContent: 'flex-end'
  },
  imageStyle: {
    height: 100,
    width: 150,
    marginBottom: '3%',
    alignSelf: 'center'
  },
  headerText: {
    color: 'rgb(56,183,162)',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    lineHeight: 27,
    marginBottom: '3%'
  },
  subHeaderText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'rgb(51, 51 ,51)',
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    lineHeight: 27
  },

  otpContainer: {
    height: '15%',
    marginVertical: '5%',
    justifyContent: 'space-around',
    flexDirection: 'column'
  },

  containerStyle: {
    width: '100%'
  },
  switchContainer: {
    height: '10%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center'
  },
  switchTitleStyle: {
    color: 'rgb(56,183,162)',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    lineHeight: 26
  },
  switchLabelStyle: {
    color: 'rgb(177, 179, 180)',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    lineHeight: 26
  },
  supportContainer: {
    height: '10%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center'
  },
  supportTitleStyle: {
    color: 'rgb(56,183,162)',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    lineHeight: 26
  },
  supportLabelStyle: {
    color: 'rgb(177, 179, 180)',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    lineHeight: 26,
    marginHorizontal: 1
  },
  buttonContainer: {
    marginVertical: '5%',
    height: '20%'
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
  }
});
