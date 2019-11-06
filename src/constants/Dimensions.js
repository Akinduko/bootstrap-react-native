import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const wS = Dimensions.get('window');
export const dh = wS.height;
const dw = wS.width;

export const hh = h => (dh * h) / 670;

export const ww = w => (dw * w) / 375;

export const sliderWidth = viewportWidth;
export const sliderHeight = viewportHeight;

export const styles = StyleSheet.create({
  imageStyle: {
    width: ww(25),
    height: hh(17)
  }
});
