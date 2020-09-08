import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import MemoList from '../components/MemoList';
import MemoAddButton from '../components/memoaddbutton';

class MemoListScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <MemoList />
        <MemoAddButton name='plus' />
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
    },
});

export default MemoListScreen;


