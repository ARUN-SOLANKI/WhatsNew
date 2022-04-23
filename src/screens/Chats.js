import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Chats = () => {
  useEffect(() => {
    const MobileNumber = async () => {
      const Mobile = await AsyncStorage.getItem('Mobile');
      console.log(Mobile, 'asyncStorage ----->');
    };
    MobileNumber();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Empty</Text>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({});
