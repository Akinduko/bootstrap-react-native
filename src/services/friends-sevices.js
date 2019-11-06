import { Platform } from 'react-native';
import { setAndroidContactsPermission } from '<utils>/permissionRequest';


export const requestContactsPermission = async () => {
  let permission;
  if (Platform.OS === 'ios') {
    // customAlert({ type: 'error', message: 'Unable to get contacts' });
    return true;
  }
  permission = await setAndroidContactsPermission();
  if (permission === 'true') return true;
  return false;
};

export const formatPhone = phone => {
  return phone.replace(/ |\+|\-|\(|\)/g, '').replace(/^0/, '234');
};

