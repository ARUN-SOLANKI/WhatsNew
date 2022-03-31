import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import _ from 'underscore';

export const getDeviceContacts = async () => {
  try {
    if (Platform.OS === 'ios') {
      return await Contacts.getAll()
        .then(async contacts => {
          if (contacts) {
            console.log(contacts);
            let filterData = _.sortBy(contacts, 'displayName');
            return filterData;
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else if (Platform.OS === 'android') {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        // permissionTexts,
      );
      if (permission === PermissionsAndroid.RESULTS.GRANTED) {
        return await Contacts.getAll()
          .then(async contacts => {
            if (contacts) {
              console.log(contacts);

              let filterData = _.sortBy(contacts, 'displayName');
              return filterData;
            }
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        return [];
      }
    }
  } catch (error) {
    console.error(error);
  }
};
