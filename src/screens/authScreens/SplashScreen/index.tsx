import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen_1 from './Splash_1';
import SplashScreen_2 from './Splash_2';

const Stack = createNativeStackNavigator();

const SplashStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen_1"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen_1" component={SplashScreen_1} />
      <Stack.Screen name="SplashScreen_2" component={SplashScreen_2} />
    </Stack.Navigator>
  );
};

export default SplashStack;
