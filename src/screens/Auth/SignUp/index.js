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
  const [state, setState] = useState({ level: 1, active: false });

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
  const changePageLevel = async level => {
    await setState({ ...state, level, active: false });
  };

  const setData = data => {
    console.log({ ...state, ...data });
    setState({ ...state, ...data });
  };

  const RenderPage = () => {
    switch (state.level) {
      case 1:
        return <StepOne setState={data => setData(data)} data={state} />;
      case 2:
        return (
          <StepTwo
            setState={data => setData(data)}
            changePageLevel={data => changePageLevel(data)}
          />
        );
      case 3:
        return Platform.OS === 'ios' ? (
          <StepThreeIos
            setState={data => setData(data)}
            changePageLevel={data => changePageLevel(data)}
          />
        ) : (
          <StepThreeAndroid
            setState={data => setData(data)}
            changePageLevel={data => changePageLevel(data)}
          />
        );
      case 4:
        return (
          <StepFour
            setState={data => setData(data)}
            changePageLevel={data => changePageLevel(data)}
          />
        );
      case 5:
        return (
          <StepFive
            setState={data => setData(data)}
            changePageLevel={data => changePageLevel(data)}
          />
        );
      case 6:
        return <StepSix setState={data => setData(data)} />;
      default:
        return (
          <StepOne
            setState={data => setData(data)}
            changePageLevel={data => changePageLevel(data)}
          />
        );
    }
  };

  return (
    <View style={container}>
      <View style={headerStyle}>
        {state.level !== 1 && state.level !== 6 ? (
          <Button
            onPress={() => changePageLevel(+state.level - 1)}
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
        {state.level !== 6 ? (
          <Button
            onPress={() => changePageLevel(+state.level + 1)}
            buttonStyle={nextStyle}
            disabled={!state.active}
            containerStyle={nextContainerStyle}
            icon={<Ionicons name="ios-arrow-forward" size={30} color="white" />}
          />
        ) : null}
      </View>
    </View>
  );
};

export default SignUp;
