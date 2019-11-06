import { PermissionsAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import LogUtils from './LogUtils';

export async function setAndroidContactsPermission() {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message:
        'We would like to sync your contacts so that we can make it easy for you to send money to them.',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK'
    });
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      LogUtils.info('Permission granted');
      await AsyncStorage.setItem('permission', 'true');
      return true;
    } else {
      LogUtils.info('Permission Declined');
      await AsyncStorage.setItem('permission', 'false');
      return false;
    }
  } catch (err) {
    LogUtils.warn('Permission issues', err);
    return false;
  }
}
