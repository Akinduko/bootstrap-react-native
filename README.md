# BOOTSTRAP-REACT-NATIVE

This project was created to have the initial setup required for a react-native project. Has navigation, redux and  Linting configured.

## Development server

Run `yarn ios` to simulate IOS or `yarn android` to simulate android


## Linting Setup

Run `yarn add eslint babel-eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import -D` to install ESLINT dependencies.
Run `yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`  to install prettier dependencies.
For VSCode, install the extensions for ESLint and Prettier. Below are the popular extensions:

  // add below to VSCode User settings to auto fix eslint formatting issues on file save
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true
 

 ## ENV Config setup

https://github.com/luggit/react-native-config

Different environments
Save config for different environments in different files: .env.staging, .env.production, etc.

By default react-native-config will read from .env, but you can change it when building or releasing your app.

The simplest approach is to tell it what file to read with an environment variable, like:

$ ENVFILE=.env.staging react-native run-ios           # bash
$ SET ENVFILE=.env.staging && react-native run-ios    # windows
$ env:ENVFILE=".env.staging"; react-native run-ios    # powershell