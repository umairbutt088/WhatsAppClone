import {FlatList, Platform, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import {theme} from '../../ui';

const Container = styled.SafeAreaView({
  flex: 1,
  backgroundColor: theme.colors.background,
});

const ContactContainer = styled.View({
  backgroundColor: 'red',
  height: 100,
});

const ContactName = styled.Text({
  fontFamily: theme.fontSize.subTitle,
  color: '#000000',
});

const ChatScreen = () => {
  const [data, setData] = useState();

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        Contacts.getAll()
          .then(contacts => {
            // work with contacts
            console.log('===========>>>>>>>>>>>', JSON.stringify(contacts));
            setData(contacts);
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        console.log('Contacts permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const requestContactsPermission = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      },
    )
      .then(response => {
        console.log('response----->>>>', response);
        Contacts.getAll()
          .then(contacts => {
            // work with contacts
            console.log('===========>>>>>>>>>>>', JSON.stringify(contacts));
            setData(contacts);
          })
          .catch(e => {
            console.log(e);
          });
      })
      .catch(error => {
        console.log('[error---->>>>]', error);
      });
  };

  useEffect(() => {
    requestCameraPermission();
    // requestContactsPermission();
    // if (Platform.OS === 'ios') {
    //   Contacts.getAll((err, contacts) => {
    //     if (err === 'denied') {
    //       // error
    //     } else {
    //       // contacts returned in Array
    //       setContacts(contacts);
    //     }
    //   });
    // } else if (Platform.OS === 'android') {
    //   PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
    //     title: 'Contacts',
    //     message: 'This app would like to view your contacts.',
    //     buttonPositive: 'Please accept bare mortal',
    //   }).then(() => {
    //     Contacts.getAll((err, contacts) => {
    //       if (err === 'denied') {
    //         // error
    //       } else {
    //         // contacts returned in Array
    //         setContacts(contacts);
    //       }
    //     });
    //   });
    // }
  }, []);

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ContactContainer>
            <ContactName>{item.name}</ContactName>
          </ContactContainer>
        )}
      />
    </Container>
  );
};

export default ChatScreen;
