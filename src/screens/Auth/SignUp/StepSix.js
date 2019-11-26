import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { StepSixStyles } from './style';

const StepSix = ({ navigation }) => {
  const {
    container,
    buttonStyle,
    headerText,
    headerContainer,
    scrollText,
    scrollContainer,
    containerStyle,
    buttonContainer,
    titleStyle,
    invertButtonStyle,
    invertTitleStyle
  } = StepSixStyles;

  return (
    <View style={container}>
      <View style={headerContainer}>
        <Text style={headerText}>Before you join Ginjabox</Text>
      </View>
      <View style={scrollContainer}>
        <ScrollView>
          <Text style={scrollText}>
            Whether it’s your first time of using Ginjabox to warehouse your finished products or
            you are an old time manufacturer, wholesaler, retailer or importer on Ginjabox, please
            commit to respecting everyone in the Ginjabox community.
          </Text>
          <Text style={scrollText}>
            As a warehouser, I agree to keep finished products in my care safe, secure without bias,
            regardless of the race, religion, nationality, ethnicity, sex, gender, sexual
            orientation and language of the product owner.
          </Text>
          <Text style={scrollText}>
            By tapping Accept, I agree to ginjabox’s Term of Service, Privacy Policy and
            Nondiscrimination Policy.
          </Text>
        </ScrollView>
      </View>
      <View style={buttonContainer}>
        <Button
          onPress={() => navigation.navigate('signIn')}
          buttonStyle={buttonStyle}
          containerStyle={containerStyle}
          titleStyle={titleStyle}
          title="Accept"
        />
        <Button
          buttonStyle={[buttonStyle, invertButtonStyle]}
          onPress={() => navigation.navigate('authLanding')}
          containerStyle={containerStyle}
          titleStyle={[titleStyle, invertTitleStyle]}
          title="Decline"
        />
      </View>
    </View>
  );
};

StepSix.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
};
export default withNavigation(StepSix);
