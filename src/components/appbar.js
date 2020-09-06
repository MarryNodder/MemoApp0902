import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

class AppBar extends React.Component {
    render() {
        return(
            <View style= {styles.appbar}>
            <View>
              <Text style={styles.appbarTitle}>TO DO LIST</Text>
            </View>
          </View>
    );
}
}

const styles = StyleSheet.create({

appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    paddingTop: 30,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius:3,

  },

  appbarTitle:{
    color: '#fff',
    fontSize: 22,

}
});


export default AppBar;
