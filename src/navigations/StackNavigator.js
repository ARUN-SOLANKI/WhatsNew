import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/AuthScreens/Login';
import UserInfo from '../screens/UsersInfo';
import ChatScreen from '../screens/ChatScreen';
import Topnavigators from './Topnavigator';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="WhatsNew"
        component={Topnavigators}
        options={{
          headerLeft: false,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#057ccc',
          },
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: '600',
            letterSpacing: 3,
          },
        }}
      />
      <Stack.Screen name="UserInfo" component={UserInfo} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
