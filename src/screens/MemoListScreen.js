import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import MemoList from '../components/MemoList';
import MemoAddButton from '../components/memoaddbutton';

class MemoListScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <MemoList navigation={this.props.navigation} />
                <MemoAddButton name='plus' onPress={() => this.props.navigation.navigate('MemoEdit')} />

            
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        backgroundColor: 'antiquewhite',
    },
});

export default MemoListScreen;


