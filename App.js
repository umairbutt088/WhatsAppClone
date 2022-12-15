import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/authScreens/LogIn/Login';
import SignUp from './src/screens/authScreens/SignUp/Signup';
import SplashStack from './src/screens/authScreens/SplashScreen';
import WellcomeStack from './src/screens/authScreens/OnBoarding';
import TopTabNavigator from './src/topTabNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashStack"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SplashStack" component={SplashStack} />
        <Stack.Screen name="WellcomeStack" component={WellcomeStack} />
        <Stack.Screen name="TopTabNavigator" component={TopTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
