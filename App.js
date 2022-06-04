import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { useFonts } from "expo-font";
import Login from './src/screen/Login/Login';
import DrawerScreen from './src/navigation/DrawerScreen';
import ChangeName from './src/screen/ChangeName/ChangeName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createStackNavigator();

const AppWithNavContainer = () => {

  const [checkuser, setCheckuser] = useState(false);
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf")
  })

  useEffect(() => {
    CheckUserDirection();
  }, [])

  const CheckUserDirection = async () => {
    var value = await AsyncStorage.getItem('User');
    console.log("USER IS===>", value)
    if (value) {
      setCheckuser(true)
    }
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer >
          {
            fontsLoaded ?

              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}
                presentation={"modal"}
              >
                {
                  checkuser ?
                    <Stack.Group>
                      <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
                      <Stack.Screen name="ChangeName" component={ChangeName} />
                    </Stack.Group>
                    :
                    <Stack.Group>
                        <Stack.Screen name="Login" component={Login} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                      <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
                      <Stack.Screen name="ChangeName" component={ChangeName} />
                    </Stack.Group>
                }

              </Stack.Navigator>

              :
              null
          }

        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default AppWithNavContainer;
