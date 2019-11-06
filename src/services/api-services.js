import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import LogUtils from '<utils>/LogUtils';
import { config } from '<config>';

export class APIRequest {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL: baseURL || config.base_url,
      timeout: 10000,
      headers: {
        Accept: 'application/json'
      }
    });
    this.port = '9200';
    this.instance.interceptors.request.use(
      config => {
        LogUtils.info('Request: ', config);
        this.port = config.baseURL.split(':')[2];
        return config;
      },
      error => {
        LogUtils.error('Request: ', config.url);
        return Promise.reject(error);
      }
    );
    this.instance.interceptors.response.use(
      response => {
        LogUtils.info('Response: ', response.config.method, response.config.url, response.status);
        return response;
      },
      error => {
        if (!error.response) {
          LogUtils.warn('Response: ', 'Network Error');
          return Promise.reject({
            ...error,
            status: 500,
            response: {
              status: 500,
              data: {
                message: 'Network Error, try again',
                error: 'server_error',
                data: null
              }
            }
          });
        }
        LogUtils.warn('Response: ', error.response);
        return Promise.reject(error);
      }
    );
    this._checkToken();
  }

  _setHeader = token => {
    this.instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  _clearHeader = () => {
    delete this.instance.defaults.headers.common['Authorization'];
  };

  _checkToken = async token => {
    // get or init token
    if (!token) {
      token = await AsyncStorage.getItem('userToken');
    } else {
      await AsyncStorage.setItem('userToken', token);
    }
    this._setHeader(token);
  };

  uploads = async file => {
    try {
      // const file = File.createFromFileName(path);
      const formData = new FormData();
      formData.append('avatar', file);
      this.instance.defaults.headers.common['content-type'] = 'multipart/form-data';
      const response = await this.instance.post(`/api/files?field_name=avatar`, formData);
      const paths = response.data.data[0]['path'];
      return `${config.upload_base_url}/api/files/${paths}?download=false`;
    } catch (error) {
      error.message = 'Image upload failed';
      throw error;
    }
  };
}
