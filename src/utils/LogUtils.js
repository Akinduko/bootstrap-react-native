// import reactotron from "<config>/ReactotronConfig";
// import Reactotron from 'reactotron-react-native';

export default class LogUtils {
  static log(message, ...args) {
    console.log(message, ...args);
    if (!__DEV__) return;
    // Reactotron.display({
    //   name: 'LOG',
    //   preview: message,
    //   value: { message, args }
    // });
  }
  static info(message, ...args) {
    console.log(message, ...args);
    if (!__DEV__) return;
    // Reactotron.display({
    //   name: 'INFO',
    //   preview: message,
    //   value: { message, args }
    // });
  }
  static warn(message, ...args) {
    console.log(message, ...args);
    if (!__DEV__) return;
    // Reactotron.display({
    //   name: 'WARN',
    //   preview: message,
    //   important: true,
    //   value: { message, args }
    // });
  }
  static error(message, ...args) {
    console.log(message, ...args);
    if (!__DEV__) return;
    // Reactotron.display({
    //   name: 'ERROR',
    //   preview: message,
    //   important: true,
    //   value: { message, args }
    // });
  }
}
