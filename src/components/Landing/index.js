import React, {useEffect} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {View, Image} from 'react-native';
import {styles, sliderWidth} from './style';

const initialState = {
  activeSlide: 0,
  pages: [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ],
};
const LandingPage = props => {
  const {customRenderItem} = props;
  const [state, setState] = useEffect (initialState);
  const [sliderRef, setRef] = useEffect (null);
  const {activeSlide, pages} = state;

  const _renderItem = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={require ('<assets>/images/PeopleLanding/group1048.png')}
          resizeMode="contain"
          style={styles.imageStyle}
        />
        <Text style={styles.headerText}>Welcome to Ginjabox</Text>
        <View style={styles.captionContainerStyle}>
          <Text style={styles.captionStyle}>
            Ginjabox allow anyone to convert their spare spaces into warehouse spaces that can be rented by merchants from anywhere in the world.
          </Text>
        </View>
      </View>
    );
  };

  const MainView = () => {
    return (
      <View
        scrollEventThrottle={10}
        directionalLockEnabled={true}
        style={{height: '70%'}}
      >
        <Carousel
          ref={c => setRef (c)}
          data={pages}
          renderItem={customRenderItem || _renderItem}
          sliderWidth={sliderWidth}
          itemWidth={sliderWidth}
          hasParallaxImages={false}
          firstItem={0}
          inactiveSlideScale={1}
          inactiveSlideOpacity={0.3}
          // inactiveSlideShift={20}
          //   containerCustomStyle={styles.slider}
          //   contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={false}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={index =>
            setState ({
              ...state,
              activeSlide: index,
            })}
        />
      </View>
    );
  };

  const PaginationView = () => {
    return (
      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={pages.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationContainer}
          dotContainerStyle={styles.paginationDotContainer}
          dotColor="rgba(35,118,243,1)"
          dotStyle={styles.paginationDot}
          inactiveDotColor="rgba(231,231,231,1)"
          inactiveDotOpacity={1}
          inactiveDotScale={1}
          carouselRef={sliderRef}
          tappableDots={!!sliderRef}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MainView />
      <PaginationView />
    </View>
  );
};

export default LandingPage;
