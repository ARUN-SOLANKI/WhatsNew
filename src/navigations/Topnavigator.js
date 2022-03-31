import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Contactss from '../screens/Contact';
import Chats from '../screens/Chats';
import Camera from '../screens/Camera';
import React from 'react';

const Topnavigator = createMaterialTopTabNavigator();

const Topnavigators = () => {
  return (
    <Topnavigator.Navigator>
      <Topnavigator.Screen name="Camera" component={Camera} />
      <Topnavigator.Screen name="Chats" component={Chats} />
      <Topnavigator.Screen name="Contacts" component={Contactss} />
    </Topnavigator.Navigator>
  );
};

export default Topnavigators;

const styles = StyleSheet.create({});
