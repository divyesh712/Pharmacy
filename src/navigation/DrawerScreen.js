import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet } from 'react-native';
import HomeStack from './HomeStack';
import Bag from '../screen/Bag/Bag';
import CustomDrawer from './CustomDrawer';
import OrderStack from './OrderStack';
import Address from '../screen/Address/Address';
import PrescriptionStack from './PrescriptionStack';
import Contact from '../screen/Contact/Contact';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ChevronRight } from '../constants/Imgconstants';
import { color } from '../utils/color';
import fontFamily from '../utils/fontFamily';
import fontSize from '../utils/fontsize';

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (

    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerStyle: { width: wp("100%") },
        drawerActiveBackgroundColor: color.light_bg,
        drawerItemStyle: {
          height: hp("6%"),
          justifyContent: 'center',
        }
      }}
    >
      <Drawer.Screen name="HomeStack" component={HomeStack}
        options={{
          title: () => (
            <View style={[styles.TextMainContainer]}>
              <Text style={styles.LabelFontStyle}>
                Home
              </Text>
            </View>
          ),
          drawerIcon: ({ focused, size }) => (
            <View style={styles.DrawerIconMAinContainer}>
              <Image
                source={ChevronRight}
                style={{ height: hp("2%"), width: hp("2%"), }}
                resizeMode="contain"
              />
            </View>
          ),

        }}
      />
      <Drawer.Screen name="Bag" component={Bag}

        options={{
          title: () => (
            <View style={[styles.TextMainContainer , {flexDirection : 'row', alignItems : 'center'}]}>
              <Text style={styles.LabelFontStyle}>
                Bag
              </Text>
              <View style = {styles.bagAdditionalContainer}>
                <Text style = {styles.BagCountFontStyle}>
                  03
                </Text>
              </View>
            </View>
          ),
          drawerIcon: ({ focused, size }) => (
            <View style={styles.DrawerIconMAinContainer}>
              <Image
                source={ChevronRight}
                style={{ height: hp("2%"), width: hp("2%"), }}
                resizeMode="contain"
              />
            </View>
          ),

        }}

      />
      <Drawer.Screen name="OrderStack" component={OrderStack}
        options={{
          title: () => (
            <View style={styles.TextMainContainer}>
              <Text style={styles.LabelFontStyle}>
                Your Orders
              </Text>
            </View>
          ),
          drawerIcon: ({ focused, size }) => (
            <View style={styles.DrawerIconMAinContainer}>
              <Image
                source={ChevronRight}
                style={{ height: hp("2%"), width: hp("2%"), }}
                resizeMode="contain"
              />
            </View>
          ),

        }}
      />
      <Drawer.Screen name="Address" component={Address}
        options={{
          title: () => (
            <View style={styles.TextMainContainer}>
              <Text style={styles.LabelFontStyle}>
                Address
              </Text>
            </View>
          ),
          drawerIcon: ({ focused, size }) => (
            <View style={styles.DrawerIconMAinContainer}>
              <Image
                source={ChevronRight}
                style={{ height: hp("2%"), width: hp("2%"), }}
                resizeMode="contain"
              />
            </View>
          ),

        }}
      />
      <Drawer.Screen name="PrescriptionStack" component={PrescriptionStack}
        options={{
          title: () => (
            <View style={styles.TextMainContainer}>
              <Text style={styles.LabelFontStyle}>
                Prescription
              </Text>
            </View>
          ),
          drawerIcon: ({ focused, size }) => (
            <View style={styles.DrawerIconMAinContainer}>
              <Image
                source={ChevronRight}
                style={{ height: hp("2%"), width: hp("2%"), }}
                resizeMode="contain"
              />
            </View>
          ),

        }}
      />
      <Drawer.Screen name="Contact" component={Contact}
        options={{
          title: () => (
            <View style={styles.TextMainContainer}>
              <Text style={styles.LabelFontStyle}>
                Contact Us
              </Text>
            </View>
          ),
          drawerIcon: ({ focused, size }) => (
            <View style={styles.DrawerIconMAinContainer}>
              <Image
                source={ChevronRight}
                style={{ height: hp("2%"), width: hp("2%"), }}
                resizeMode="contain"
              />
            </View>
          ),

        }}
      />
    </Drawer.Navigator>

  );
}

const styles = StyleSheet.create({
  TextMainContainer: {
    height: hp("4%"),
    width: wp("82%"),
    alignSelf: 'center',  
    margin: -12,
  },
  LabelFontStyle: {
    fontFamily: fontFamily.BOLD_FONT_FAMILY,
    fontSize: fontSize.slarge,
    color: color.mainfont
  },
  DrawerIconMAinContainer: {
    height: hp("3%"),
    width: wp("10%"),
    position: 'absolute',
    right: wp("8%"),
    justifyContent: 'center'
  },
  bagAdditionalContainer : {
    height : hp("3.5%"),
    width : wp("10%"),
    backgroundColor : color.mainfont,
    borderRadius : hp("0.5%"),
    justifyContent : 'center',
    alignItems : 'center',
    marginHorizontal : wp("4%")
  },
  BagCountFontStyle : {
    fontFamily : fontFamily.BOLD_FONT_FAMILY,
    fontSize : fontSize.regular,
    color : color.bg_main
  }

})