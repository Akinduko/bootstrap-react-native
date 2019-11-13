import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions } from 'react-native';
import CarouselView from './Carousel';
import PaginationView from './Pagination';

const { width: viewportWidth } = Dimensions.get('window');

const Carousel = ({
  pagination,
  data,
  customRenderItem,
  sliderWidth,
  changeRightButton,
  lastButton,
  paginationButton: {
    leftButton,
    rightButton,
    paginationStyle: { paginationContainer, paginationDotContainer, paginationDot },
    inactiveDotColor,
    dotColor,
    inactiveDotOpacity,
    inactiveDotScale
  },
  controlSlide,
  controlledSlide,
  customStyle: { carouselMainContainer, carouselContainer }
}) => {
  const [state, setState] = useState({
    activeSlide: 0
  });
  const [sliderRef, setSliderRef] = useState(null);
  const { activeSlide } = state;

  if (controlSlide) {
    // eslint-disable-next-line no-underscore-dangle
    sliderRef._snapToItem(sliderRef._getPositionIndex(activeSlide + 1));
    controlledSlide(false);
  }

  if (activeSlide === data.length - 1) changeRightButton(true);

  if (activeSlide !== data.length - 1 && lastButton) changeRightButton(false);

  return (
    <View style={carouselMainContainer}>
      <CarouselView
        customRenderItem={customRenderItem}
        setState={setState}
        setSliderRef={setSliderRef}
        data={data}
        sliderWidth={sliderWidth}
        carouselContainer={carouselContainer}
      />
      {pagination.show ? (
        <PaginationView
          length={data.length}
          activeSlide={activeSlide}
          sliderRef={sliderRef}
          inactiveDotColor={inactiveDotColor}
          inactiveDotScale={inactiveDotScale}
          dotColor={dotColor}
          inactiveDotOpacity={inactiveDotOpacity}
          leftButton={leftButton}
          paginationDot={paginationDot}
          paginationDotContainer={paginationDotContainer}
          paginationContainer={paginationContainer}
          rightButton={rightButton}
        />
      ) : null}
    </View>
  );
};

Carousel.propTypes = {
  customRenderItem: PropTypes.func,
  changeRightButton: PropTypes.func,
  lastButton: PropTypes.bool,
  controlSlide: PropTypes.bool,
  controlledSlide: PropTypes.func,
  pagination: PropTypes.objectOf(PropTypes.any),
  customStyle: PropTypes.shape({
    carouselMainContainer: PropTypes.objectOf(PropTypes.any),
    carouselContainer: PropTypes.objectOf(PropTypes.any)
  }),
  data: PropTypes.arrayOf(PropTypes.any),
  paginationButton: PropTypes.shape({
    leftButton: PropTypes.shape({
      show: PropTypes.bool,
      component: PropTypes.shape({})
    }),
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
  }),
  sliderWidth: PropTypes.number
};

Carousel.defaultProps = {
  customRenderItem: () => {},
  changeRightButton: () => {},
  controlSlide: false,
  controlledSlide: () => {},
  data: [
    {
      id: 1
    }
  ],
  lastButton: false,
  pagination: { show: false },
  customStyle: StyleSheet.create({}),
  paginationButton: {
    leftButton: { show: false, component: () => {} },
    rightButton: { show: false, component: () => {} },
    paginationStyle: StyleSheet.create({}),
    inactiveDotColor: 'rgba(226,226,226,1)',
    dotColor: 'rgba( 56, 183, 162,1)',
    inactiveDotOpacity: 1,
    inactiveDotScale: 1
  },
  sliderWidth: viewportWidth
};

export default Carousel;
