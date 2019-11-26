import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { paginationStyles, carouselStyles, styles, sliderWidth } from '<screens>/Landing/style';
import Carousel from '<components>/Carousel';

const {
  mainContainer,
  imageStyle,
  container,
  headerText,
  captionContainerStyle,
  captionStyle,
  leftLinkText,
  rightLinkText
} = styles;

const pages = [
  {
    id: 1,
    title: 'Welcome to Ginjabox',
    source: require('<assets>/images/Landing/PageOne/group1048.png'),
    caption:
      'Ginjabox allow anyone to convert their spare spaces into warehouse spaces that can be rented by merchants from anywhere in the world.'
  },
  {
    id: 2,
    title: 'Deliver Products Faster',
    source: require('<assets>/images/Landing/PageTwo/group1048.png'),
    caption:
      'Dispatch finished products from closest warehouse to your consumers. Ginjabox makes it supper easy for  merchants to deliver products faster, save a lot of time and  improves consumer experience.'
  },
  {
    id: 3,
    title: 'Make Passive Income',
    source: require('<assets>/images/Landing/PageThree/group1048.png'),
    caption:
      'Imagine the possibility of making up to N250,000 a month from your spare 5sqm space? That’s how easy it’s to make passive income to meet your other financial needs on ginjabox.'
  },
  {
    id: 4,
    title: 'N10m Insurance Cover',
    source: require('<assets>/images/Landing/PageFour/group1048.png'),
    caption:
      'To keep you, your space, your products and your belongings safe, ginjabox, in partnership with AIICO Insurance PLC provides merchants and warehousers an insurance cover worth N10,000,000.'
  },
  {
    id: 5,
    title: 'Refer A Friend',
    source: require('<assets>/images/Landing/PageFive/group1048.png'),
    caption:
      'When you refer your friends to download, sign up and use ginjabox, we don’t just say thank you, we pay you up to N2,000,000 as your reward.'
  }
];

const renderItem = ({ item: { id, title, source, caption } }) => {
  return (
    <View style={mainContainer} key={id}>
      <Image source={source} resizeMode="contain" style={imageStyle} />
      <Text style={headerText}>{title}</Text>
      <View style={captionContainerStyle}>
        <Text style={captionStyle}>{caption}</Text>
      </View>
    </View>
  );
};

renderItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    caption: PropTypes.shape({}).isRequired
  }).isRequired
};

const Landing = ({ navigation }) => {
  const [lastButton, changeRightButton] = useState(false);
  const [controlSlide, controlledSlide] = useState(false);
  const gotoLogin = () => {
    navigation.navigate('auth');
  };
  return (
    <View style={container}>
      <Carousel
        customRenderItem={renderItem}
        pagination={{ show: true }}
        data={pages}
        lastButton={lastButton}
        customStyle={carouselStyles}
        changeRightButton={changeRightButton}
        controlledSlide={controlledSlide}
        controlSlide={controlSlide}
        paginationButton={{
          leftButton: {
            show: true,
            component: (
              <TouchableOpacity onPress={() => gotoLogin()}>
                <Text style={leftLinkText}>{lastButton ? '' : 'Skip'}</Text>
              </TouchableOpacity>
            )
          },
          rightButton: {
            show: true,
            component: (
              <TouchableOpacity onPress={() => (lastButton ? gotoLogin() : controlledSlide(true))}>
                <Text style={rightLinkText}>{lastButton ? 'Done' : 'Next'}</Text>
              </TouchableOpacity>
            )
          },
          paginationStyle: paginationStyles,
          inactiveDotColor: 'rgba(226,226,226,1)',
          dotColor: 'rgba(56,183,162,1)',
          inactiveDotOpacity: 1,
          inactiveDotScale: 1
        }}
        sliderWidth={sliderWidth}
      />
    </View>
  );
};
Landing.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
};
export default withNavigation(Landing);
