import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [msgArray, setMsgArray] = useState([]);
  const sendMessage = () => {
    if (message) {
      setMsgArray([...msgArray, message]);
      setMessage('');
    }
  };

  console.log(message, msgArray, '---------------> msg arrray/.......');
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          //   marginBottom: 20,
        }}>
        <ScrollView>
          {msgArray?.map(item => {
            return (
              <Text
                style={{
                  backgroundColor: '#057ccc',
                  color: '#fff',
                  marginVertical: 10,
                  fontSize: 16,
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                }}>
                {item}
              </Text>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          margin: 2,
        }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#057ccc',
            borderTopEndRadius: 25,
            width: '80%',
            height: 50,
            paddingHorizontal: 10,
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
          }}
          placeholder="Message"
          placeholderTextColor={'#057ccc'}
          value={message}
          onChangeText={text => setMessage(text)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#057ccc',
            height: 50,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '20%',
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
          }}
          onPress={sendMessage}>
          <Text style={{color: '#fff', fontSize: 16}}>send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
