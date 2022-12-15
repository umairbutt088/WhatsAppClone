import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import ChatScreen from '../screens/mainScreens/ChatScreen';
import StatusScreen from '../screens/mainScreens/StatusScreen';
import CallScreen from '../screens/mainScreens/CallScreen';
import styled from 'styled-components/native';
import {theme} from '../ui';
import {appImage} from '../utilities';

const HeaerContainer = styled.View({
  height: 50,
  width: '100%',
  flexDirection: 'row',
  paddingHorizontal: theme.space[4],
  backgroundColor: theme.colors.primery100,
});

const TextContainer = styled.View({
  width: '80%',
  justifyContent: 'flex-end',
});

const IconContainer = styled.View({
  width: '20%',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-around',
});

const HeaderText = styled.Text({
  fontFamily: theme.fontFamilies.bold,
  fontSize: theme.fontSize.largeTitle,
  color: theme.colors.white,
});

const SearchIconContainer = styled.TouchableOpacity({});

const SearchImage = styled.Image({});

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <>
      <HeaerContainer>
        <TextContainer>
          <HeaderText>WhatsApp</HeaderText>
        </TextContainer>
        <IconContainer>
          <SearchIconContainer>
            <SearchImage source={appImage.search} />
          </SearchIconContainer>
          <SearchIconContainer>
            <SearchImage source={appImage.manueIcon} />
          </SearchIconContainer>
        </IconContainer>
      </HeaerContainer>
      <Tab.Navigator
        initialRouteName="ChatScreen"
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            color: theme.colors.white,
          },
          tabBarIndicatorStyle: {
            backgroundColor: theme.colors.white,
            height: 2,
          },
          tabBarStyle: {backgroundColor: theme.colors.primery100},
        }}>
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Call" component={CallScreen} />
      </Tab.Navigator>
    </>
  );
};

export default TopTabNavigator;
