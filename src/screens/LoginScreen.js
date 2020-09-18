import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, TouchableHighlight} from 'react-native';


class LoginScreen extends React.Component {
    render() {
        return(
            <View style= {styles.container}>
                <Text style={styles.title}>
                    LOG IN
                </Text>
                <TextInput style={styles.input}  value ='Email address'/>
                <TextInput style={styles.input}  value= 'Password' />
                <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('MEMOT')} >
                    <Text style = {styles.buttonTitle}> SUBMIT </Text>
                </TouchableHighlight>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        width : '100%',
        padding: 24,
        backgroundColor: '#fff'
    },

    title:{
        fontSize: 24,
        alignSelf: 'center',
        marginBottom: 24,
    },

    input: {
        backgroundColor: '#eee',
        height: 48,
        marginBottom: 17,
        borderWidth : 8,
        borderColor : '#DDD',
        padding: 8,
    },

    button:{
        backgroundColor: '#E31676',
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        alignSelf: 'center',
    },
    buttonTitle:{
        color: '#fff',
        fontSize: 15,
    }

});

export default LoginScreen;