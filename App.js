import * as React from 'react';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import MemoList from './src/screens/MemoListScreen';
import MemoDetail from './src/screens/MemoDetailScreen';
import MemoEdit from './src/screens/MemoEditScreen';
import SignUp from './src/screens/SignUpScreen';
import Login from './src/screens/LoginScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ENV from './env.json';

const firebaseConfig = {
  apiKey:           ENV.FIREBASE_API_KEY,
  authDomain:       ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:      ENV.FIREBASE_DB_URL,
  projectId:        ENV.FIREBASE_PRJ_ID,
  storageBucket:    ENV.FIREBASE_STORAGE,
  messagingSenderId:ENV.FIREBASE_SENDER_ID,
};


if (firebase.apps === undefined) { firebase.initializeApp(config); }

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
          headerTitleAlign:'center',
          headerTintColor:'#fff',
          headerTitle:'Memot',
          headerStyle:{
            backgroundColor: 'aquamarine',
          },
      }}
      >


        <Stack.Screen
        name="Login" 
        component={Login} />

        <Stack.Screen
        name="SignUp" 
        component={SignUp} />


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






