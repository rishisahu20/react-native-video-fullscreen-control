import React from 'react';
import {Button, View} from 'react-native';

export const LandingPage = props => {
  const {navigation} = props;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={() => navigation.navigate('Video')} title="Video" />
    </View>
  );
};
