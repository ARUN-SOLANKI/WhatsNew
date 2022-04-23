import {StyleSheet} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import {getDeviceContacts} from './src/utills/getcontacts';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigations/StackNavigator';
import 'react-native-gesture-handler';

export const MyContacts = createContext();
const App = () => {
  const [Contacts, setContacts] = useState([]);

  useEffect(() => {
    const newList = async () => {
      const Contacts = await getDeviceContacts();
      setContacts(Contacts);
    };
    newList();
  }, []);
  return (
    <NavigationContainer>
      <MyContacts.Provider value={{Contacts}}>
        <StackNavigator />
      </MyContacts.Provider>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({});
