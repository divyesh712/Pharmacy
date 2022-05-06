import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, } from 'react-native';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../utils/color';
import fontSize from '../utils/fontsize';
import fontFamily from '../utils/fontFamily';

export const CustomBtn = ({
    containerStyle,
    btnText
}) => {
    return (
        <TouchableOpacity style={{...styles.BtnMainContainer , ...containerStyle}}>
            <Text style={styles.BtnTextStyle}>
                {btnText}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    BtnMainContainer: {
        height: hp("7%"),
        width: wp("86%"),
        backgroundColor: color.mainfont,
        borderRadius: hp("1%"),
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    BtnTextStyle : {
        fontSize : fontSize.regular,
        color : color.bg_main,
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
    },
})