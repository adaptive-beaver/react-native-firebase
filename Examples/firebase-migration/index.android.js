/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {registerKilledListener} from './app/Listeners';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from "./app/App";

export default class SimpleFcmClient extends Component {
  render() {
    return (<App />);
  }
}

AppRegistry.registerComponent('SimpleFcmClient', () => SimpleFcmClient);

AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => registerKilledListener);
