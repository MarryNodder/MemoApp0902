import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import MemoAddButton from '../components/memoaddbutton';

function MemoEditScreen ({ navigation }) {
        return(
            <View style= {styles.container}>
                <TextInput style={styles.memoEditInput} multiline value='Hi' />
                    
                <MemoAddButton name= 'check' onPress={() => navigation.goBack()}/>

            </View>
            
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },

    memoEditInput:{
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        fontSize: 16,
    },


});

export default MemoEditScreen;