import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  Modal,
  TouchableHighlight,
  // eslint-disable-next-line react-native/split-platform-components
  TimePickerAndroid,
  // eslint-disable-next-line react-native/split-platform-components
  DatePickerIOS,
  Platform,
  Animated,
  Keyboard,
  // eslint-disable-next-line react-native/split-platform-components
  DatePickerAndroid
} from 'react-native';

import Moment from 'moment';
import Style from './style';

const FORMATS = {
  date: 'YYYY-MM-DD',
  datetime: 'YYYY-MM-DD HH:mm',
  time: 'HH:mm'
};

const SUPPORTED_ORIENTATIONS = [
  'portrait',
  'portrait-upside-down',
  'landscape',
  'landscape-left',
  'landscape-right'
];

class DatePicker extends PureComponent {
  static propTypes = {
    mode: PropTypes.oneOf(['date', 'datetime', 'time']),
    androidMode: PropTypes.oneOf(['clock', 'calendar', 'spinner', 'default']),
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date), PropTypes.object]),
    format: PropTypes.string,
    minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    height: PropTypes.number,
    duration: PropTypes.number,
    confirmBtnText: PropTypes.string,
    cancelBtnText: PropTypes.string,
    selectComponent: PropTypes.func,
    customStyles: PropTypes.object,
    disabled: PropTypes.bool,
    allowFontScaling: PropTypes.bool,
    onDateChange: PropTypes.func,
    onOpenModal: PropTypes.func,
    onCloseModal: PropTypes.func,
    onPressMask: PropTypes.func,
    placeholder: PropTypes.string,
    is24Hour: PropTypes.bool,
    locale: PropTypes.string,
    updatePicker: PropTypes.func,
    TouchableComponent: PropTypes.func,
    testID: PropTypes.string,
    cancelBtnTestID: PropTypes.string,
    style: PropTypes.object,
    minuteInterval: PropTypes.number,
    timeZoneOffsetInMinutes: PropTypes.number,
    confirmBtnTestID: PropTypes.string
  };

  static defaultProps = {
    height: 259,
    duration: 300,
    disabled: false,
    allowFontScaling: true,
    placeholder: '',
    TouchableComponent: TouchableHighlight,
    mode: 'date',
    androidMode: 'calendar',
    date: Moment().toDate(),
    format: 'YYYY-MM-DD',
    minDate: Moment('01/01/1800', 'DD/mm/YYYY').toDate(),
    maxDate: Moment('01/01/2100', 'DD/mm/YYYY').toDate(),
    confirmBtnText: 'Ok',
    cancelBtnText: 'Cancel',
    updatePicker: () => {},
    selectComponent: () => {},
    customStyles: {},
    onDateChange: () => {},
    onOpenModal: () => {},
    onCloseModal: () => {},
    onPressMask: () => {},
    is24Hour: false,
    locale: '',
    testID: 'test',
    cancelBtnTestID: 'test',
    style: {},
    minuteInterval: 0,
    timeZoneOffsetInMinutes: 0,
    confirmBtnTestID: 'test'
  };

  constructor(props) {
    super(props);

    this.state = {
      date: this.getDate(),
      modalVisible: false,
      animatedHeight: new Animated.Value(0),
      allowPointerEvents: true
    };

    this.onStartShouldSetResponder = () => {
      return true;
    };

    this.onMoveShouldSetResponder = () => {
      return true;
    };
    this.getDate = this.getDate.bind(this);
    this.getDateStr = this.getDateStr.bind(this);
    this.datePicked = this.datePicked.bind(this);
    this.onPressDate = this.onPressDate.bind(this);
    this.onPressCancel = this.onPressCancel.bind(this);
    this.onPressConfirm = this.onPressConfirm.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onPressMask = this.onPressMask.bind(this);
    this.onDatePicked = this.onDatePicked.bind(this);
    this.onTimePicked = this.onTimePicked.bind(this);
    this.onDatetimePicked = this.onDatetimePicked.bind(this);
    this.onDatetimeTimePicked = this.onDatetimeTimePicked.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.date !== this.props.date) {
      this.setState({ date: this.getDate(nextProps.date) });
    }
  }

  setModalVisible(visible) {
    const { height, duration } = this.props;

    // slide animation
    if (visible) {
      this.setState({ modalVisible: visible });
      return Animated.timing(this.state.animatedHeight, {
        toValue: height,
        duration
      }).start();
    }
    return Animated.timing(this.state.animatedHeight, {
      toValue: 0,
      duration
    }).start(() => {
      this.setState({ modalVisible: visible });
    });
  }

  onPressMask() {
    if (typeof this.props.onPressMask === 'function') {
      this.props.onPressMask();
    } else {
      this.onPressCancel();
    }
  }

  onPressCancel() {
    this.setModalVisible(false);

    if (typeof this.props.onCloseModal === 'function') {
      this.props.onCloseModal();
    }
  }

  onPressConfirm() {
    const { updatePicker } = this.props;
    this.datePicked();
    this.setModalVisible(false);
    updatePicker(this.state);
    if (typeof this.props.onCloseModal === 'function') {
      this.props.onCloseModal();
    }
  }

  getDate(date = this.props.date) {
    const { mode, minDate, maxDate, format = FORMATS[mode] } = this.props;

    if (!date) {
      const now = new Date();
      if (minDate) {
        const minDates = this.getDate(minDate);

        if (now < minDates) {
          return minDates;
        }
      }

      if (maxDate) {
        const maxDates = this.getDate(maxDate);

        if (now > maxDates) {
          return maxDates;
        }
      }

      return now;
    }

    if (date instanceof Date) {
      return date;
    }

    return Moment(date, format).toDate();
  }

  getDateStr(date = this.props.date) {
    const { mode, format = FORMATS[mode] } = this.props;

    const dateInstance = date instanceof Date ? date : this.getDate(date);

    return Moment(dateInstance).format(format);
  }

  datePicked() {
    if (typeof this.props.onDateChange === 'function') {
      this.props.onDateChange(this.getDateStr(this.state.date), this.state.date);
    }
  }

  getTitleElement() {
    const { date, placeholder, customStyles, allowFontScaling } = this.props;

    if (!date && placeholder) {
      return (
        <Text
          allowFontScaling={allowFontScaling}
          style={[Style.placeholderText, customStyles.placeholderText]}>
          {placeholder}
        </Text>
      );
    }
    return (
      <Text allowFontScaling={allowFontScaling} style={[Style.dateText, customStyles.dateText]}>
        {this.getDateStr()}
      </Text>
    );
  }

  onDateChange(date) {
    this.setState({
      allowPointerEvents: false,
      date
    });
    const timeoutId = setTimeout(() => {
      this.setState({
        allowPointerEvents: true
      });
      clearTimeout(timeoutId);
    }, 200);
  }

  onDatePicked({ action, year, month, day }) {
    if (action !== DatePickerAndroid.dismissedAction) {
      const date = Moment(`${day}/${month}/${year}`, 'DD/mm/YYYY').toDate();

      this.setState({
        date
      });
      this.datePicked();
    } else {
      this.onPressCancel();
    }
  }

  onTimePicked({ action, hour, minute }) {
    if (action !== DatePickerAndroid.dismissedAction) {
      this.setState({
        date: Moment()
          .hour(hour)
          .minute(minute)
          .toDate()
      });
      this.datePicked();
    } else {
      this.onPressCancel();
    }
  }

  onDatetimePicked({ action, year, month, day }) {
    const {
      mode,
      androidMode,
      format = FORMATS[mode],
      is24Hour = !format.match(/h|a/)
    } = this.props;

    if (action !== DatePickerAndroid.dismissedAction) {
      const timeMoment = Moment(this.state.date);

      TimePickerAndroid.open({
        hour: timeMoment.hour(),
        minute: timeMoment.minutes(),
        is24Hour,
        mode: androidMode
      }).then(this.onDatetimeTimePicked.bind(this, year, month, day));
    } else {
      this.onPressCancel();
    }
  }

  onDatetimeTimePicked(year, month, day, { action, hour, minute }) {
    if (action !== DatePickerAndroid.dismissedAction) {
      this.setState({
        date: new Date(year, month, day, hour, minute)
      });
      this.datePicked();
    } else {
      this.onPressCancel();
    }
  }

  onPressDate() {
    if (this.props.disabled) {
      return true;
    }

    Keyboard.dismiss();

    // reset state
    this.setState({
      date: this.getDate()
    });

    if (Platform.OS === 'ios') {
      this.setModalVisible(true);
    } else {
      const {
        mode,
        androidMode,
        format = FORMATS[mode],
        minDate,
        maxDate,
        is24Hour = !format.match(/h|a/)
      } = this.props;

      if (mode === 'date') {
        DatePickerAndroid.open({
          date: this.state.date,
          minDate: minDate && this.getDate(minDate),
          maxDate: maxDate && this.getDate(maxDate),
          mode: androidMode
        }).then(this.onDatePicked);
      } else if (mode === 'time') {
        const timeMoment = Moment(this.state.date);

        TimePickerAndroid.open({
          hour: timeMoment.hour(),
          minute: timeMoment.minutes(),
          is24Hour,
          mode: androidMode
        }).then(this.onTimePicked);
      } else if (mode === 'datetime') {
        DatePickerAndroid.open({
          date: this.state.date,
          minDate: minDate && this.getDate(minDate),
          maxDate: maxDate && this.getDate(maxDate),
          mode: androidMode
        }).then(this.onDatetimePicked);
      }
    }

    if (typeof this.props.onOpenModal === 'function') {
      this.props.onOpenModal();
    }
    return true;
  }

  render() {
    const {
      mode,
      customStyles,
      minDate,
      maxDate,
      cancelBtnText,
      confirmBtnText,
      TouchableComponent,
      testID,
      cancelBtnTestID,
      style,
      minuteInterval,
      timeZoneOffsetInMinutes,
      confirmBtnTestID,
      allowFontScaling,
      locale,
      selectComponent
    } = this.props;

    return (
      <TouchableComponent
        style={[Style.dateTouch, style]}
        underlayColor="transparent"
        onPress={this.onPressDate}
        testID={testID}>
        <View style={[Style.dateTouchBody, customStyles.dateTouchBody]}>
          {selectComponent()}
          <Image
            style={[Style.dateIcon, customStyles.dateIcon]}
            source={require('<assets>/icons/date_icon.png')}
          />
          {Platform.OS === 'ios' && (
            <Modal
              transparent
              animationType="none"
              visible={this.state.modalVisible}
              supportedOrientations={SUPPORTED_ORIENTATIONS}
              onRequestClose={() => {
                this.setModalVisible(false);
              }}>
              <View style={Style.container}>
                <TouchableComponent
                  style={Style.datePickerMask}
                  activeOpacity={1}
                  underlayColor="#00000077"
                  onPress={this.onPressMask}>
                  <TouchableComponent underlayColor="#fff" style={Style.container}>
                    <Animated.View
                      style={[
                        Style.datePickerCon,
                        { height: this.state.animatedHeight },
                        customStyles.datePickerCon
                      ]}>
                      <View pointerEvents={this.state.allowPointerEvents ? 'auto' : 'none'}>
                        <DatePickerIOS
                          date={this.state.date}
                          mode={mode}
                          minimumDate={minDate && this.getDate(minDate)}
                          maximumDate={maxDate && this.getDate(maxDate)}
                          onDateChange={this.onDateChange}
                          minuteInterval={minuteInterval}
                          timeZoneOffsetInMinutes={timeZoneOffsetInMinutes || null}
                          style={[Style.datePicker, customStyles.datePicker]}
                          locale={locale}
                        />
                      </View>
                      <TouchableComponent
                        underlayColor="transparent"
                        onPress={this.onPressCancel}
                        style={[Style.btnText, Style.btnCancel, customStyles.btnCancel]}
                        testID={cancelBtnTestID}>
                        <Text
                          allowFontScaling={allowFontScaling}
                          style={[
                            Style.btnTextText,
                            Style.btnTextCancel,
                            customStyles.btnTextCancel
                          ]}>
                          {cancelBtnText}
                        </Text>
                      </TouchableComponent>
                      <TouchableComponent
                        underlayColor="transparent"
                        onPress={this.onPressConfirm}
                        style={[Style.btnText, Style.btnConfirm, customStyles.btnConfirm]}
                        testID={confirmBtnTestID}>
                        <Text
                          allowFontScaling={allowFontScaling}
                          style={[Style.btnTextText, customStyles.btnTextConfirm]}>
                          {confirmBtnText}
                        </Text>
                      </TouchableComponent>
                    </Animated.View>
                  </TouchableComponent>
                </TouchableComponent>
              </View>
            </Modal>
          )}
        </View>
      </TouchableComponent>
    );
  }
}

export default DatePicker;
