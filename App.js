import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets,createStackNavigator } from '@react-navigation/stack';

import Login from './src/screen/Login/Login';
import otp from './src/screen/otp/otp';
const Stack = createStackNavigator();

const AppWithNavContainer = () => { 

  return(
    <NavigationContainer >
    <Stack.Navigator 
     screenOptions={{
       headerShown:false,
     }}
     presentation={"modal"}
     initialRouteName="Splash"
     // initialRouteName="Register_S10"
     >
       <Stack.Screen name="Login" component={Login} options={{...TransitionPresets.SlideFromRightIOS}} />
       <Stack.Screen name="otp" component={otp} options={{...TransitionPresets.SlideFromRightIOS}} />
    </Stack.Navigator>

</NavigationContainer> 
  )
}

export default AppWithNavContainer;
