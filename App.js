/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {VideoScreen} from './Screens/Video';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {LandingPage} from './Screens/LandingPage/LandingPage';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <AppContainer />
      </View>
    </SafeAreaView>
  );
};

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: LandingPage,
    },
    Video: {
      screen: VideoScreen,
    },
  },
  {
    initialRouteParams: 'VideoModel',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default App;
