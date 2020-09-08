import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MemoListScreen from './src/screens/MemoListScreen';
import AppBar from './src/components/appbar';

export default class App extends React.Component {
  render() {
    return(
    <View style={styles.container}>
      <AppBar />
      <MemoListScreen /> 
    </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'antiquewhite',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});

