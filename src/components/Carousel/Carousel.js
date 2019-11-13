import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth } = Dimensions.get('window');

class CarouselView extends PureComponent {
  static propTypes = {
    customRenderItem: PropTypes.func,
    carouselContainer: PropTypes.objectOf(PropTypes.any),
    setSliderRef: PropTypes.func.isRequired,
    setState: PropTypes.func.isRequired,

    data: PropTypes.arrayOf(PropTypes.any),
    paginationButton: PropTypes.shape({
      leftButton: PropTypes.shape({
        show: PropTypes.bool,
        component: PropTypes.func
      }),
      rightButton: PropTypes.shape({
        show: PropTypes.bool,
        component: PropTypes.func
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

  static defaultProps = {
    customRenderItem: () => {},
    data: [
      {
        id: 1
      }
    ],
    carouselContainer: StyleSheet.create({}),
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

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    };
  }

  updateRef(ref) {
    // eslint-disable-next-line no-underscore-dangle
    this._carousel = ref;
    this.props.setSliderRef(ref);
  }

  updateState(index) {
    this.setState({
      activeSlide: index
    });
    this.props.setState({
      ...this.state,
      activeSlide: index
    });
  }

  render() {
    const { customRenderItem, data, sliderWidth, carouselContainer } = this.props;

    return (
      <View scrollEventThrottle={10} directionalLockEnabled style={carouselContainer}>
        <Carousel
          ref={c => this.updateRef(c)}
          data={data}
          renderItem={customRenderItem}
          sliderWidth={sliderWidth}
          itemWidth={sliderWidth}
          hasParallaxImages={false}
          firstItem={0}
          inactiveSlideScale={1}
          inactiveSlideOpacity={0.3}
          loop={false}
          loopClonesPerSide={2}
          autoplay={false}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={index => this.updateState(index)}
        />
      </View>
    );
  }
}

export default CarouselView;
