import { StyleSheet, Dimensions } from 'react-native';

const wS = Dimensions.get('window');
const dh = wS.height;
const dw = wS.width;

const hh = h => {
  return (dh * h) / 670;
};

const ww = w => {
  return (dw * w) / 375;
};

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const wp = percentage => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const itemVerticalMargin = wp(2);

export const sliderHeight = viewportHeight;

export const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: 'rgba(44,173,255,1)',
  background2: 'rgba(80,83,247,1)'
};

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
export const itemHeight = slideHeight + itemVerticalMargin * 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageStyle: {
    height: 200,
    width: 200,
    alignSelf: 'center'
  },
  leftLinkText: {
    color: 'rgb(0,0,0)',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: hh(28),
    justifyContent: 'center',
    textAlign: 'center'
  },
  rightLinkText: {
    color: 'rgb(56,183,162)',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: hh(28),
    justifyContent: 'center',
    textAlign: 'center'
  },
  headerText: {
    color: 'rgb(56,183,162)',
    fontFamily: 'Roboto-Medium',
    fontSize: 25,
    marginTop: '10%',
    lineHeight: hh(28),
    textAlign: 'center'
  },
  captionContainerStyle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: '50%',
    justifyContent: 'center'
  },
  captionStyle: {
    color: 'rgb(0,0,0)',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: hh(26),
    textAlign: 'center',
    marginTop: '5%',
    width: '80%'
  }
});

export const carouselStyles = StyleSheet.create({
  carouselMainContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'column'
  },
  carouselContainer: { height: '70%', justifyContent: 'center' }
});

export const paginationStyles = StyleSheet.create({
  paginationContainer: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paginationDotContainer: { width: '1%' },
  paginationDot: {
    width: ww(10),
    height: hh(10),
    borderRadius: hh(5),
    marginHorizontal: 1
  }
});
