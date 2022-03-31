import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';

const Login = ({navigation}) => {
  const [PhnNumber, setPhnNumber] = useState('');

  const LonginDetails = () => {
    if (PhnNumber === '0007') {
      console.log('valid');
      navigation.navigate('WhatsNew');
    } else {
      alert('enter valid passcode');
    }
  };
  return (
    <View style={styles.Main}>
      <View
        style={{
          width: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 20,
          backgroundColor: '#fff',
        }}>
        <Text
          style={{
            fontSize: 45,
            fontWeight: '600',
            color: '#057ccc',
            marginBottom: 30,
          }}>
          Welcome
        </Text>
        <View style={{width: '90%', alignItems: 'center'}}>
          <TextInput
            style={{
              borderWidth: 0.5,
              width: '100%',
              borderRadius: 5,
              paddingHorizontal: 15,
              marginBottom: 20,
            }}
            placeholder="Enter Your Mobile Number"
            keyboardType="number-pad"
            value={PhnNumber}
            onChangeText={num => setPhnNumber(num)}
          />
          <Button
            style={{backgroundColor: '#057ccc', width: '100%', height: 50}}
            color={'#fff'}
            justifyContent={'center'}
            onPress={LonginDetails}>
            Login
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 2,
    backgroundColor: '#eee',
  },
});
