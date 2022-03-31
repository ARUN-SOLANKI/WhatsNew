import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';
import _ from 'underscore';
import {MyContacts} from '../../App';

const Contactss = ({navigation}) => {
  let {Contacts} = useContext(MyContacts);
  let sortedContacts = _.sortBy(Contacts, item => item?.displayName);

  const ContactAlert = (item, navigation) => {
    // alert(item?.displayName, item?.phoneNumbers[0]?.number);
    try {
      Alert.alert(
        'User Details',
        `${item.displayName} - ${item?.phoneNumbers[0]?.number}`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Ok',
            onPress: () => navigation.navigate('UserInfo', item),
          },
        ],
      );
    } catch (error) {
      console.log('Error while handling edit profile picture action: ', error);
    }
  };

  return (
    <View>
      <FlatList
        initialNumToRender={10}
        data={sortedContacts}
        renderItem={({item}) => {
          return (
            <Pressable
              style={styles.contactCon}
              onPress={() => ContactAlert(item, navigation)}>
              <View style={styles.imgCon}>
                <View style={styles.placeholder}>
                  <Text style={styles.txt}>{item?.displayName?.charAt(0)}</Text>
                </View>
              </View>
              <View style={styles.contactDat}>
                <Text style={styles.name}>{item?.displayName}</Text>
                <Text style={styles.phoneNumber}>
                  {item?.phoneNumbers[0]?.number}
                </Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  contactCon: {
    // flex: 1,
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    paddingVertical: 10,
  },
  imgCon: {},
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactDat: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  txt: {
    fontSize: 18,
  },
  name: {
    fontSize: 16,
    color: '#000',
  },
  phoneNumber: {
    color: '#888',
  },
});
export default Contactss;
