import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screen/Home/Home';
import Basket from '../screen/Basket/Basket';
import CustomDrawer from './CustomDrawer';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (

    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerStyle : {width : wp("100%")}
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Basket" component={Basket} />
    </Drawer.Navigator>

  );
}