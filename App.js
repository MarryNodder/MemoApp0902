import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BodyText from './src/elements/BodyText';

export default class App extends React.Component {
  render() {
    return(
    <View style={styles.container}>
      
      <View style= {styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>TO DO LIST</Text>
        </View>
      </View>

      <View style = {styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>yarukotorisuto</Text>
          <Text style={styles.memoDate}>kigenn</Text>
        </View>
      </View>

      <View style = {styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>yarukotorisuto</Text>
          <Text style={styles.memoDate}>kigenn</Text>
        </View>
      </View>

      <View style = {styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>yarukotorisuto</Text>
          <Text style={styles.memoDate}>kigenn</Text>
        </View>
      </View>

      <View style = {styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>yarukotorisuto</Text>
          <Text style={styles.memoDate}>kigenn</Text>
        </View>
      </View>

      <View style = {styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>yarukotorisuto</Text>
          <Text style={styles.memoDate}>kigenn</Text>
        </View>
      </View>

      <View style={styles.memoAddButtton}>
        <Text style={styles.memoAddButttonTitle}>+</Text>
      </View>

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

  memoAddButtton:{
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: 'royalblue',
    borderRadius: 50,
  },

  memoAddButttonTitle:{
    fontSize: 30,
  },

  memoList:{
    backgroundColor: '#eee',
    width: '100%',
    flex: 1,
  },

  memoListItem:{
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  memoTitle:{
    fontSize: 18,
    marginBottom: 5,
  },

  mamoDate:{
    fontSize: 12,
    marginBottom: 4,
  },

  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    paddingTop: 30,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius:3,

  },

  appbarTitle:{
    color: '#fff',
    fontSize: 22,


  }
});

