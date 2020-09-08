import React from 'react';
import { StyleSheet, View} from 'react-native';
import * as Font from 'expo-font';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';
import { createIconSet } from '@expo/vector-icons';

const CustomIcon = createIconSet({
    pencil: '\uf303',
    plus:    '\uf067'
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
        const { name, style,color } = this.props;

        let bgColor = '#E31676';
        let textColor = '#fff';

        if(color === 'white'){
            bgColor = '#fff';
            textColor = '#E31676';
        }

        return(
                <View style={[styles.memoAddButtton, style, {backgroundColor: bgColor}]}>
                    {
                        this.state.fontLoaded ? (
                            <CustomIcon name = {name}style={[styles.memoAddButttonTitle, {color: textColor}]} />
                        ) : null
                    }
                </View>
        );
    }
}

const styles = StyleSheet.create({
    memoAddButtton:{
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: 'powderblue',
    borderRadius: 50,
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