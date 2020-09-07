import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

class MemoAddButton extends React.Component {
    render() {
        const {style} = this.props;
        return(
                 <View style={[styles.memoAddButtton, style]}>
                    <Text style={styles.memoAddButttonTitle}>
                    {this.props.children}
                    </Text>
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
        fontSize: 32,
        lineHeight: 32,
        color: '#fff',
      },
    
})


export default MemoAddButton;