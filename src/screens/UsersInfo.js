import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const UserInfo = ({navigation, route}) => {
  const {params} = route;
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#efefef'}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.UsersImage}>
          <Text style={styles.UsersImageText}>
            {params.displayName.charAt(0)}
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.name}>{params.displayName}</Text>
          <Text style={styles.Number}>
            +91{' '}
            {params.phoneNumbers[0].number
              ? params.phoneNumbers[0].number
              : 'unknown'}
          </Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={{marginTop: 5, marginBottom: 15}}>
          <Text style={styles.heading}>More Info :---</Text>
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={styles.head}>Email Addresss :-</Text>
          <Text style={styles.headText}>
            {params?.emailAddresses[0]?.email
              ? params?.emailAddresses[0]?.email
              : 'unknown'}
          </Text>
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={styles.head}>Addresss :-</Text>
          <Text style={styles.headText}>
            {params.postalAddresses[0] ? params.postalAddresses[0] : 'unknown'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 100,
  },
  UsersImage: {
    backgroundColor: '#057ccc',
    height: 150,
    width: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75,
  },
  UsersImageText: {
    textAlign: 'center',
    fontSize: 80,
    fontWeight: '600',
    color: '#fff',
  },
  name: {
    fontSize: 25,
    color: '#000',
    fontWeight: '600',
    marginVertical: 15,
    textAlign: 'center',
  },
  Number: {
    textAlign: 'center',
    fontSize: 18,
  },
  cardContainer: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#fff',
    marginVertical: 15,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  heading: {
    fontSize: 25,
    color: '#057ccc',
  },
  head: {
    fontSize: 16,
    color: '#000',
  },
});
