import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class MemoList extends React.Component{
    
        render() {
            return(
                    <View style={styles.memoList}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('MemoDetail')}>
                        <View style={styles.memoListItem} >
                            <Text style={styles.memoTitle}>yarukotorisuto</Text>
                            <Text style={styles.memoDate}>kigenn</Text>
                        </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('MemoDetail')}>
                        <View style={styles.memoListItem} >
                            <Text style={styles.memoTitle}>yarukotorisuto</Text>
                            <Text style={styles.memoDate}>kigenn</Text>
                        </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('MemoDetail')}>
                        <View style={styles.memoListItem} >
                            <Text style={styles.memoTitle}>yarukotorisuto</Text>
                            <Text style={styles.memoDate}>kigenn</Text>
                        </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('MemoDetail')}>
                        <View style={styles.memoListItem} >
                            <Text style={styles.memoTitle}>yarukotorisuto</Text>
                            <Text style={styles.memoDate}>kigenn</Text>
                        </View>
                        </TouchableHighlight>


                        <TouchableHighlight onPress={() => this.props.navigation.navigate('MemoDetail')}>
                        <View style={styles.memoListItem} >
                            <Text style={styles.memoTitle}>yarukotorisuto</Text>
                            <Text style={styles.memoDate}>kigenn</Text>
                        </View>
                        </TouchableHighlight>

                    </View>
            );
        }
    }
    
    const styles = StyleSheet.create({
        memoList:{
            width: '100%',
            flex: 1,
          },
        
          memoListItem:{
            padding: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
            backgroundColor: '#fff',
          },
        
          memoTitle:{
            fontSize: 18,
            marginBottom: 5,
          },
        
          mamoDate:{
            fontSize: 12,
            marginBottom: 4,
          },
        })    
    
    export default MemoList;








