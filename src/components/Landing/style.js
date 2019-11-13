import { StyleSheet, Dimensions, Platform } from 'react-native';

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

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export const sliderHeight = viewportHeight;

const heights = {
  '812': 140,
  '204.96': 30
};

const setHeight = os => {
  if (os === 'ios') {
    const height = heights[sliderHeight] || '10%';
    return height;
  }
  const height = sliderHeight > 600 ? '20%' : '10%';
  return height;
};

export const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: 'rgba(44,173,255,1)',
  background2: 'rgba(80,83,247,1)'
};
const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const itemVerticalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
export const itemHeight = slideHeight + itemVerticalMargin * 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1
    // marginTop: "5%"
  },
  carouselContainer: { height: '70%' },
  text_style: {
    fontSize: 14,
    color: 'rgba(255,255,255,1)',
    fontFamily: 'Averta PE',
    fontWeight: '600',
    lineHeight: hh(18),
    textAlign: 'center'
  },
  btn_style: {
    marginTop: hh(20),
    width: '80%'
  },
  btnContainer: {
    height: '15%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  paginationContainer: {
    justifyContent: 'center'
  },
  paginationDotContainer: {
    justifyContent: 'center',
    marginHorizontal: 3
  },
  paginationDot: {
    width: ww(8),
    height: hh(8),
    borderRadius: hh(4),
    marginHorizontal: 0
  },
  imageStyle: {
    height: 200,
    width: 200,
    alignSelf: 'center'
  },
  mainContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    marginTop: setHeight(Platform.OS)
  },
  headerText: {
    color: 'rgba(90,113,139,1)',
    fontFamily: 'Averta PE',
    fontSize: 26,
    fontWeight: '600',
    letterSpacing: -1,
    marginTop: '5%',
    width: '100%',
    lineHeight: 30,
    padding: 10,
    textAlign: 'center'
  },
  linkStyle: {
    color: 'rgba(35,118,243,1)',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.09,
    lineHeight: 20,
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
    color: 'rgba(90,113,139,0.7)',
    fontFamily: 'Averta PE',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: '5%',
    width: '80%'
  }
});
