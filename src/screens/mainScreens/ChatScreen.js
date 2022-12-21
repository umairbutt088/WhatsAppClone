import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import {theme} from '../../ui';
import {appImage} from '../../utilities';
import {NumberCard} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = styled.SafeAreaView({
  flex: 1,
  backgroundColor: theme.colors.background,
});

const MessageButton = styled.TouchableOpacity({
  right: 20,
  width: 70,
  height: 70,
  bottom: 100,
  borderRadius: 50,
  position: 'absolute',
  justifyContent: 'center',
  backgroundColor: theme.colors.primery100,
});

const MessageIcon = styled.Image({
  height: 30,
  width: 30,
  alignSelf: 'center',
});

const ContactModle = styled.Modal({
  backgroundColor: 'red',
  flex: 1,
});

const ChatScreen = () => {
  const [data, setData] = useState();
  const [modle, setModle] = useState(false);
  const [list, setList] = useState([]);

  const nav = useNavigation();

  console.log('list is here----------->>>>', list);

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

  useEffect(() => {
    requestCameraPermission();
    getData();
  }, []);

  const handleModle = () => {
    setModle(!modle);
  };

  const selectNewNumber = async items => {
    setModle(!modle);
    if (list.length === 0) {
      list.push(items);
      await AsyncStorage.setItem('finalData', JSON.stringify(list));
      setList(list);
    } else {
      let filterItem = list.filter(e => e.displayName === items.displayName);
      if (filterItem.length === 0) {
        list.push(items);
        await AsyncStorage.setItem('finalData', JSON.stringify(list));
        setList(list);
      }
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('finalData');
      if (value !== null) {
        setList(JSON.parse(value));
        console.log('value is stored------------->>>>', JSON.parse(value));
      }
    } catch (e) {
      console.log('error of get----------->>>>', e);
    }
  };

  const handleChatPress = item => {
    nav.navigate('GifftedChatScreen', {
      xid: item.recordID,
      name: item.displayName,
    });
    console.log('item ----------->>>>', item);
  };

  return (
    <>
      {!modle ? (
        <Container>
          <FlatList
            data={list}
            renderItem={({item}) => {
              return (
                <NumberCard
                  title={item.displayName}
                  number={item.phoneNumbers[0]?.number}
                  onPress={() => handleChatPress(item)}
                />
              );
            }}
          />
          <MessageButton onPress={handleModle}>
            <MessageIcon source={appImage.messageIcon} />
          </MessageButton>
        </Container>
      ) : (
        <ContactModle visible={modle}>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <NumberCard
                  title={item.displayName}
                  number={item.phoneNumbers[0]?.number}
                  onPress={() => selectNewNumber(item)}
                />
              );
            }}
          />
        </ContactModle>
      )}
    </>
  );
};

export default ChatScreen;
