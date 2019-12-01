import React from 'react';

const globalState = {
  auth: { token: '', expiresIn: '' },
  profile: {
    firstName: '',
    lastname: '',
    phoneNumber: ''
  },
  wallet: {}
};

const GlobalContext = React.createContext(globalState);

export default GlobalContext;
