import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import MemoAddButton from '../components/memoaddbutton';

class MemoDetailScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View >
                    <View style={styles.memoHeader}>
                        <View>
                            <Text style={styles.memoHeaderTitle}>煮干しラーメン</Text>
                            <Text style={styles.memoHeaderDate}>2020/09/06</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.memoContent}>
                    <Text>
                        this is niboshi ramen
                    </Text>
                </View>
                                                          

                    <MemoAddButton name = 'pencil' color='white' style={styles.editButton} onPress={() => this.props.navigation.navigate('MemoEdit')}/>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },
    memoHeader:{
        height: 120,
        backgroundColor: 'darkturquoise',
        justifyContent: 'center',
        padding: 10,
    },
    memoHeaderTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom:5,
    },
    memoHeaderDate:{
        fontSize:12,
        color: '#fff',
    },
    memoContent:{
        padding: 30,
        backgroundColor: 'white',
        flex: 1,
    },
    editButton:{
        top:48,

    }

});

export default MemoDetailScreen;