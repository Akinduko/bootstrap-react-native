import React from 'react';
import { Alert } from 'react-native';
import LogUtils from '<utils>/LogUtils';

export function customAlert({ message, type }) {
  try {
    const errorResponses = [{ text: 'Ok', style: 'ok' }];
    setTimeout(() => {
      return Alert.alert(type, message, errorResponses);
    }, 100);
  } catch (error) {
    LogUtils.error(error);
  }
}

export function handleError(error) {
  let errorMessage;
  let errorType = 'Error';
  if (error.response) {
    errorMessage = (error.response.data && error.response.data.message) || error.message;
    errorType = error.response.error || errorType;
    if (error.response.status === 401) {
      errorType = 'Unauthorized';
    }
  } else {
    errorMessage = error.message || error.data.message || 'Something went wrong';
  }

  customAlert({ message: errorMessage, type: errorType });
}
