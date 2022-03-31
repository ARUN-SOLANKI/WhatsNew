import {StyleSheet} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import {getDeviceContacts} from './src/utills/getcontacts';
import {NavigationContainer} from '@react-navigation/native';
import Topnavigators from './src/navigations/Topnavigator';
import Login from './src/screens/AuthScreens/Login';
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
        <Topnavigators />
        {/* <Login /> */}
      </MyContacts.Provider>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({});
