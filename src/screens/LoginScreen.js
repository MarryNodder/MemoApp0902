import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, TouchableHighlight} from 'react-native';

class LoginScreen extends React.Component {
    state={
        email:" ",
        password:" ",
      }

      handleSubmit(){
          console.log('submitted');
      }

    render() {
        return(
            <View style= {styles.container}>
                <Text style={styles.title}>
                    LOG IN
                </Text>
                <TextInput 
                    style={styles.input}
                    //value={this.state.email}
                    onChangeText={(text) => {this.setState({ email: text})}}
                    autoCapitalize= 'none'
                    autoCorrect= {false}
                    placeholder= "Email Address"
                />
                <TextInput 
                    style={styles.input}  
                    //value = {this.state.password} 
                    onChangeText={(text) => {this.setState({ password: text})}}
                    autoCapitalize= 'none'
                    autoCorrect= {false}
                    placeholder= "Password"
                    secureTextEntry
                />
                
                
                
                <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} >
                    <Text style = {styles.buttonTitle}> SUBMIT </Text>
                </TouchableHighlight>
            </View>
            
        );jjjjj
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