import React , {useEffect , useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { useFonts } from "expo-font";

import Login from './src/screen/Login/Login';
import DrawerScreen from './src/navigation/DrawerScreen';
import ChangeName from './src/screen/ChangeName/ChangeName'
const Stack = createStackNavigator();

const AppWithNavContainer = () => {

  const [ checkuser , setCheckuser ] = useState(false);
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold" : require("./assets/fonts/Poppins-SemiBold.ttf")
  })

  useEffect(() => {
    CheckUserDirection();
  },[])

  const CheckUserDirection = async() => {
    var value = await AsyncStorage.getItem('User');
    console.log("USER IS===>", value)
    if(value){
      setCheckuser(true)
    }
  }
  return (
    <NavigationContainer >
      {
        fontsLoaded ?

          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            presentation={"modal"}
            initialRouteName = { checkuser ? "DrawerScreen" : "Login"}
          >
            <Stack.Screen name="Login" component={Login} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
            <Stack.Screen name="ChangeName" component={ChangeName} />
          </Stack.Navigator>

          :
          null
      }

    </NavigationContainer>
  )
}

export default AppWithNavContainer;
