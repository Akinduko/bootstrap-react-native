import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-native-snap-carousel';
import { View, StyleSheet } from 'react-native';

const PaginationView = ({
  length,
  activeSlide,
  paginationContainer,
  paginationDotContainer,
  paginationDot,
  dotColor,
  inactiveDotScale,
  inactiveDotOpacity,
  inactiveDotColor,
  sliderRef,
  leftButton: { show: leftShow, component: leftComponent },
  rightButton: { show: rightShow, component: rightComponent }
}) => {
  return (
    <View style={paginationContainer}>
      {leftShow ? leftComponent : null}
      <Pagination
        dotsLength={length}
        activeDotIndex={activeSlide}
        containerStyle={paginationContainer}
        dotContainerStyle={paginationDotContainer}
        dotColor={dotColor}
        dotStyle={paginationDot}
        inactiveDotColor={inactiveDotColor}
        inactiveDotOpacity={inactiveDotOpacity}
        inactiveDotScale={inactiveDotScale}
        carouselRef={sliderRef}
        tappableDots
      />
      {rightShow ? rightComponent : null}
    </View>
  );
};

PaginationView.propTypes = {
  length: PropTypes.number,
  activeSlide: PropTypes.number,
  leftButton: PropTypes.shape({
    show: PropTypes.bool,
    component: PropTypes.shape({})
  }),
  paginationContainer: PropTypes.shape({}),
  paginationDotContainer: PropTypes.shape({}),
  paginationDot: PropTypes.shape({}),
  sliderRef: PropTypes.shape({}),
  rightButton: PropTypes.shape({
    show: PropTypes.bool,
    component: PropTypes.shape({})
  }),
  inactiveDotColor: PropTypes.string,
  dotColor: PropTypes.string,
  inactiveDotOpacity: PropTypes.number,
  inactiveDotScale: PropTypes.number,
  paginationStyle: PropTypes.shape({
    paginationContainer: PropTypes.objectOf(PropTypes.any),
    paginationDotContainer: PropTypes.objectOf(PropTypes.any),
    paginationDot: PropTypes.objectOf(PropTypes.any)
  })
};

PaginationView.defaultProps = {
  length: 1,
  activeSlide: 0,
  paginationContainer: StyleSheet.create({}),
  paginationDotContainer: StyleSheet.create({}),
  paginationDot: StyleSheet.create({}),
  sliderRef: null,
  leftButton: { show: false, component: () => {} },
  rightButton: { show: false, component: () => {} },
  paginationStyle: StyleSheet.create({}),
  inactiveDotColor: 'rgba(226,226,226,1)',
  dotColor: 'rgba( 56, 183, 162,1)',
  inactiveDotOpacity: 1,
  inactiveDotScale: 1
};

export default PaginationView;
