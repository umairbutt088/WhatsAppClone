import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/authScreens/LogIn/Login';
import SignUp from './src/screens/authScreens/SignUp/Signup';
import SplashStack from './src/screens/authScreens/SplashScreen';
import WellcomeStack from './src/screens/authScreens/OnBoarding';
import TopTabNavigator from './src/topTabNavigator';
import EnterOtpScreen from './src/screens/authScreens/OnBoarding/EnterOtpScreen';
import PhoneNumberScreen from './src/screens/authScreens/OnBoarding/PhoneNumberScreen';
import auth from '@react-native-firebase/auth';
import GifftedChatScreen from './src/screens/authScreens/ChatModule/Chat';

const Stack = createNativeStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="PhoneNumberScreen"
          screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} /> */}
          <Stack.Screen name="SplashStack" component={SplashStack} />
          <Stack.Screen name="WellcomeStack" component={WellcomeStack} />
          <Stack.Screen name="TopTabNavigator" component={TopTabNavigator} />
          <Stack.Screen
            name="PhoneNumberScreen"
            component={PhoneNumberScreen}
          />
          <Stack.Screen name="EnterOtpScreen" component={EnterOtpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TopTabNavigator"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="TopTabNavigator" component={TopTabNavigator} />
        <Stack.Screen name="GifftedChatScreen" component={GifftedChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
