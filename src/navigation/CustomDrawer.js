import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { color } from '../utils/color';
import fontSize from '../utils/fontsize';
import fontFamily from '../utils/fontFamily';
import { RemoveIcon, EditIcon } from '../constants/Imgconstants';


const CustomDrawer = (props) => {

    return (
        <View style={styles.container} >
            <DrawerContentScrollView

                {...props}
            >
                <View style={styles.DrawerIconMainContainer}>
                    <TouchableOpacity onPress={() => {props.navigation.closeDrawer() }} style={styles.DrawerIconContainer}>
                    <Image
                        source={RemoveIcon}
                        style={styles.DrawerIconStyle}
                    />
                    </TouchableOpacity>
                </View>

                <View style={styles.UserNameMainContainer}>
                    <Text style={styles.UserNameTextStyle}>
                        Hey Sherya
                    </Text>
                </View>
                <View style={styles.userPhoneNumMainContainer}>
                    <View style={styles.UserPhoneNumContainer}>
                        <Text style={styles.UserPhoneStyle}>
                            +91 9873456788
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() =>{ props.navigation.navigate('ChangeName')}} style={styles.EditIconMainContainer}>
                        <Image
                            source={EditIcon}
                            style={styles.editIconStyle}
                        
                           
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.LineMainContainer}>
                </View>
                <DrawerItemList {...props} />
                <DrawerItem
                    label={() => (

                        <Text style={styles.LabelFontStyle}>
                            Logout
                        </Text>

                    )}
                // onPress={() => Linking.openURL('https://mywebsite.com/help')}

                />
                <View style={styles.BottomMainContainer}>
                    <View style={styles.BottomTextContainer}>
                        <Text style = {styles.BottomTextStyle}>
                            Terms and Conditions
                        </Text>
                    </View>
                    <View style={styles.BottomTextContainer}>
                        <Text style = {styles.BottomTextStyle}>
                            Privacy Policy
                        </Text>
                    </View>
                </View>
            </DrawerContentScrollView>

        </View>
    )
}

export default CustomDrawer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.light_bg,
    },
    DrawerIconMainContainer: {
        height: hp("8%"),
        width: wp("86%"),
        alignSelf: 'center',
        justifyContent: 'center'
    },
    DrawerIconStyle: {
        height: hp("3%"),
        width: hp("3%")
    },
    UserNameMainContainer: {
        height: hp("8%"),
        width: wp("86%"),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    UserNameTextStyle: {
        fontFamily: fontFamily.BLACK_FONT_FAMILY,
        fontSize: fontSize.vlarge,
        color: color.mainfont,
    },
    userPhoneNumMainContainer: {
        height: hp("5%"),
        width: wp("86%"),
        alignSelf: 'center',
        flexDirection: 'row'
    },
    UserPhoneNumContainer: {
        height: hp("5%"),
        width: wp("76%"),
    },
    UserPhoneStyle: {
        fontFamily: fontFamily.REGULAR_FORT_FAMILY,
        fontSize: fontSize.regular,
        color: color.darkgrey,
    },
    EditIconMainContainer: {
        height: hp("5%"),
        width: wp("10%"),
        justifyContent: 'flex-end',
    },
    editIconStyle: {
        height: hp("3%"),
        width: hp("3%")
    },
    LineMainContainer: {
        height: hp("2%"),
        width: wp("86%"),
        alignSelf: 'center',
        borderBottomColor: color.secondLineColor,
        borderBottomWidth: hp("0.3%"),
        marginBottom: hp("2%"),
    },
    LabelFontStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.slarge,
        color: color.mainfont,
        marginLeft: wp("4%"),
        marginVertical : hp("2%")
    },
    BottomMainContainer : {
        height : hp("10%"),
        width : wp("82%"),
        alignSelf : 'center',
    },
    BottomTextContainer : {
        height : hp("5%"),
        width : wp("80%"),
        justifyContent : 'center'
    },
    BottomTextStyle : {
        fontFamily : fontFamily.REGULAR_FORT_FAMILY,
        fontSize : fontSize.regular,
        color : color.mainfont
    },
    DrawerIconContainer : {
        height : hp("4%"),
        width  :wp("8%"),
        justifyContent : 'center'
    }

})