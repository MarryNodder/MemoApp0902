import React, { forwardRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './src/components/appbar';

import SignUpScreen from './src/screens/SignUpScreen';

export default class App extends React.Component {
  render() {
    return(
    <View style={styles.container}>
      <AppBar />
      <SignUpScreen /> 
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

