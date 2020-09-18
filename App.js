


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import MemoList from './src/screens/MemoListScreen';
import MemoDetail from './src/screens/MemoDetailScreen';
import MemoEdit from './src/screens/MemoEditScreen';
import SignUp from './src/screens/SignUpScreen';
import Login from './src/screens/LoginScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator
type NavigationProp = StackNavigationProp<FeedsTabParamList, 'Feeds'>;
interface Props {
  navigation: NavigationProp;
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
          headerStyle:{
            backgroundColor: 'aquamarine',
          },
          headerTitleStyle:{
            color:'black',
          },
      }}
      >

        <Stack.Screen
        name="SignUp" 
        component={SignUp} />

        <Stack.Screen
        name="Login" 
        component={Login} />


        <Stack.Screen
        name="MEMOT" 
        component={MemoList} />

        <Stack.Screen
        name="MemoDetail" 
        component={MemoDetail} />

        <Stack.Screen
        name="MemoEdit" 
        component={MemoEdit} />
        



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;






