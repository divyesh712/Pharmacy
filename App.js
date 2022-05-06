import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { useFonts } from "expo-font";

import Login from './src/screen/Login/Login';
import Home from './src/screen/Home/Home';
import Basket from './src/screen/Basket/Basket';
import DrawerScreen from './src/navigation/DrawerScreen';

const Stack = createStackNavigator();

const AppWithNavContainer = () => {

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
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
            initialRouteName="Basket"
          >
            <Stack.Screen name="Login" component={Login} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            {/* <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Basket" component={Basket} /> */}
            <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
          </Stack.Navigator>

          :
          null
      }

    </NavigationContainer>
  )
}

export default AppWithNavContainer;
