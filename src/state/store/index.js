// IMPORT PACKAGE REFERENCES
import { createStore, applyMiddleware, compose } from 'redux';

// IMPORT MIDDLEWARE

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import reducers from '../reducers';
import { requestMiddleware } from './requestMiddleware';
import { APIRequest } from '<services>/api-services';

const apiRequest = new APIRequest();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loader']
};

const middlewares = [promise, thunk, requestMiddleware(apiRequest)];

const enhancer = compose(applyMiddleware(...middlewares));

const persistedReducer = persistReducer(persistConfig, reducers);

// CONFIGURE STORE
export const store = createStore(persistedReducer, {}, enhancer);

const persistor = persistStore(store);

export default () => ({
  store,
  persistor
});
