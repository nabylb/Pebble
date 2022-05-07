import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import MainScreen from '../screens/main/MainScreen';

const Login = createNativeStackNavigator();

export const createRootNavigator = (sessionToken: string | null = null) => (
  <Login.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    {sessionToken != null ? (
      <Login.Screen name="MainScreen" component={MainScreen} />
    ) : (
      <Login.Screen name="LoginScreen" component={LoginScreen} />
    )}
  </Login.Navigator>
);
