import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { useFonts } from "expo-font";

import Login from './src/screen/Login/Login';
import Home from './src/screen/Home/Home';
const Stack = createStackNavigator();

const AppWithNavContainer = () => {

  const [fontsLoaded] = useFonts({
    "Poppins-Regular" : require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium" : require("./assets/fonts/Poppins-Medium.ttf"),
  })
  return (
    <NavigationContainer >
      {
        fontsLoaded ?

          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            presentation={"modal"}
            initialRouteName="Splash"
          // initialRouteName="Register_S10"
          >
            <Stack.Screen name="Login" component={Login} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="Home" component={Home}  />
          </Stack.Navigator>

          :
          null
      }

    </NavigationContainer>
  )
}

export default AppWithNavContainer;
