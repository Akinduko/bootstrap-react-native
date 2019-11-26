import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StepOne from '<screens>/Auth/SignUp/StepOne';
import StepTwo from '<screens>/Auth/SignUp/StepTwo';
import StepThreeIos from '<screens>/Auth/SignUp/StepThree.ios';
import StepThreeAndroid from '<screens>/Auth/SignUp/StepThree.android';
import StepFour from '<screens>/Auth/SignUp/StepFour';
import StepFive from '<screens>/Auth/SignUp/StepFive';
import StepSix from '<screens>/Auth/SignUp/StepSix';
import { style } from './style';

const SignUp = () => {
  const [state, setState] = useState({});
  const [level, changeLevel] = useState(1);
  const {
    previousStyle,
    renderStyle,
    previousContainerStyle,
    nextStyle,
    nextContainerStyle,
    container,
    headerStyle,
    footerStyle
  } = style;

  const RenderPage = () => {
    const changePageLevel = data => {
      setState({ ...state, data });
    };
    switch (level) {
      case 1:
        return <StepOne changeLevel={data => changePageLevel(data)} />;
      case 2:
        return <StepTwo changeLevel={data => changePageLevel(data)} />;
      case 3:
        return Platform.OS === 'ios' ? (
          <StepThreeIos changeLevel={data => changePageLevel(data)} />
        ) : (
          <StepThreeAndroid changeLevel={data => changePageLevel(data)} />
        );
      case 4:
        return <StepFour changeLevel={data => changePageLevel(data)} />;
      case 5:
        return <StepFive changeLevel={data => changePageLevel(data)} />;
      case 6:
        return <StepSix changeLevel={data => changePageLevel(data)} />;
      default:
        return <StepOne changeLevel={data => changePageLevel(data)} />;
    }
  };

  return (
    <View style={container}>
      <View style={headerStyle}>
        {level !== 1 && level !== 6 ? (
          <Button
            onPress={() => changeLevel(+level - 1)}
            buttonStyle={previousStyle}
            containerStyle={previousContainerStyle}
            icon={<AntDesign name="arrowleft" size={30} color="rgb( 56 ,183 ,162)" />}
          />
        ) : null}
      </View>
      <View style={renderStyle}>
        <RenderPage />
      </View>
      <View style={footerStyle}>
        {level !== 6 ? (
          <Button
            onPress={() => changeLevel(+level + 1)}
            buttonStyle={nextStyle}
            containerStyle={nextContainerStyle}
            icon={<Ionicons name="ios-arrow-forward" size={30} color="white" />}
          />
        ) : null}
      </View>
    </View>
  );
};

export default SignUp;
