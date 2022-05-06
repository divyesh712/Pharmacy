import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput,StyleSheet, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DrawerContentScrollView , DrawerItemList} from '@react-navigation/drawer';
import { color } from '../utils/color';
import fontsize from '../utils/fontsize';
import fontFamily from '../utils/fontFamily';

const RemoveIcon = require('../assets/icon/remove.png');

const CustomDrawer = (props) => {
    return(
        <View style={styles.container} >
           <DrawerContentScrollView
           contentContainerStyle = {{backgroundColor : color.light_bg}}
           
           {...props}
           >
               <View style ={styles.DrawerIconMainContainer}>
                   <Image 
                   source={RemoveIcon}
                   style = {styles.DrawerIconStyle}
                   />
               </View>
            <DrawerItemList {...props}  />
            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawer;

const styles = StyleSheet.create({ 
    container : {
       flex: 1,
    },
    DrawerIconMainContainer : {
        height : hp("8%"),
        width : wp("86%"),
        alignSelf : 'center',
        justifyContent : 'center'
    },
    DrawerIconStyle : {
        height : hp("3%"),
        width : hp("3%")
    }
})