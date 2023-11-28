/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import DetailScreen from './src/screen/DetailScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.conainer}>
      <DetailScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 conainer: {
  flex: 1,
  backgroundColor: '#F9F8FC'
 },
});

export default App;
