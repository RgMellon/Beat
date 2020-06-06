import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { runTiming } from 'react-native-redash';

import CircularProgress from './circularProgress';

const { Clock } = Animated;

export default () => {
  const clock = new Clock();
  const config = {
    duration: 30 * 1000,
    toValue: 1,
    easing: Easing.linear,
  };
  return (
    <View style={styles.container}>
      <CircularProgress progress={runTiming(clock, 0, config)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -9,
    left: -9.5,

    width: 50,
    // padding: 2,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
