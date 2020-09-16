import React from 'react';
import { StyleSheet, View, TouchableHighlight} from 'react-native';
import * as Font from 'expo-font';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';
import { createIconSet } from '@expo/vector-icons';

const CustomIcon = createIconSet({
    pencil: '\uf303',
    plus:    '\uf067',
    check: '\uf00c',
}, 'FontAwsome');

class MemoAddButton extends React.Component {
    state = {
        fontLoaded: false,
    }
    async componentDidMount() {
        await Font.loadAsync({
            FontAwsome: fontAwsome,
        });

        this.setState({fontLoaded: true});
      }
    render() {
        const { name, style,color, onPress} = this.props;

        let bgColor = '#20b2aa';
        let textColor = '#fff';

        if(color === 'white'){
            bgColor = '#fff';
            textColor = '#E31676';
        }

        //                        <TouchableHighlight onPress={() => this.props.navigation.navigate('MemoDetail')}>

        return(
                <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor='transparent' >
                    <View style={[styles.memoAddButtton, style, {backgroundColor: bgColor}]}>
                        {
                            this.state.fontLoaded ? (
                                <CustomIcon name = {name}style={[styles.memoAddButttonTitle, {color: textColor}]} />
                            ) : null
                        }
                    </View>
                    </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        
            width: 48, // 追加
            height: 48,　// 追加
            position: 'absolute',
            bottom: 24,
            right: 24,
        
    },

    memoAddButtton:{
        
        width: 48,
        height: 48,
        backgroundColor: 'powderblue',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius:3,
    },

    memoAddButttonTitle:{
        fontFamily: 'FontAwsome',
        fontSize: 24,
        lineHeight: 32,
        color: '#fff',
      },
    
})

export default MemoAddButton;