


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MemoListScreen from './src/screens/MemoListScreen';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homme" component={MemoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;






