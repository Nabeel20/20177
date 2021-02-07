/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Dirs } from 'react-native-file-access';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.app}>
      <View style={styles.content}>
      <Text>Dirs.CacheDir: {Dirs.CacheDir} </Text>
       <Text>Dirs.DatabaseDir: {Dirs.DatabaseDir}</Text>
     <Text> Dirs.DocumentDir: { Dirs.DocumentDir}</Text>
    <Text>Hope this work :) </Text>
   
    </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  app:{
    padding: 20
  },
  content:{
       flex: 1,
      flexDirection: 'column'
  }
  
});

export default App;
