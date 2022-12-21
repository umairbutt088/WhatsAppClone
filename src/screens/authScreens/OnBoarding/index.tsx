import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import WellcomeScreen from './WellcomeScreen';
import PhoneNumberScreen from './PhoneNumberScreen';
import EnterOtpScreen from './EnterOtpScreen';

const Stack = createNativeStackNavigator();

const WellcomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="WellcomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WellcomeScreen" component={WellcomeScreen} />
      <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} />
      <Stack.Screen name="EnterOtpScreen" component={EnterOtpScreen} />
    </Stack.Navigator>
  );
};

export default WellcomeStack;
