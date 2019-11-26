import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(56, 183, 162)',
    flexDirection: 'column',
    height: '100%'
  },
  imageContainer: { height: '40%', justifyContent: 'center' },
  imageStyle: {
    height: 100,
    width: '70%',
    alignSelf: 'center'
  },
  imageCaptionStyle: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'center'
  },
  buttonContainer: {
    height: '20%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  ButtonOneContainerStyle: {
    width: '70%',
    borderColor: 'rgb(255,255,255)',
    height: 55,
    borderRadius: 13,
    borderWidth: 1,
    justifyContent: 'center'
  },
  ButtonOneTextStyle: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'center'
  },
  ButtonTwoContainerStyle: {
    width: '70%',
    height: 55,
    justifyContent: 'center',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 13
  },
  ButtonTwoTextStyle: {
    color: 'rgb(56,183,162)',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'center'
  },
  MainCaptionContainer: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  MainCaptionText: {
    color: 'rgb(255,255,255)',
    width: '70%',
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center'
  },
  MainCaptionLink: {
    color: 'rgb(209,242,236)'
  }
});
