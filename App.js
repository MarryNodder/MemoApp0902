import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MemoList from './src/components/list';
import MemoAddButtton from './src/components/memoaddbutton';
import AppBar from './src/components/appbar';

export default class App extends React.Component {
  render() {
    return(
    <View style={styles.container}>
      <AppBar />
      <MemoList /> 
      <MemoAddButtton />
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

