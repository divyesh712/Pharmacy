import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './Styles';
import { color } from '../../utils/color'; 

export const LoginDetails = ({
    phonenumber,
    setPhonenumber,
}) => {
    return (
        <View style={[styles.textInputMainContainer , {borderColor : color.mainfont, borderBottomWidth : hp("0.2%"),}]}>
            <View
                style={styles.TextInputContaier}
            >
                <View style={styles.TextinputTextContainer}>
                    <Text style={styles.regularFontStyle}>
                        +91
                    </Text>
                </View>
                <TextInput
                    style={[styles.TextInputStyle , styles.regularFontStyle]}
                    placeholder = 'Your Phone Number'
                    onChangeText={setPhonenumber}
                    value={phonenumber}
                    underlineColorAndroid="transparent"
                    keyboardType='phone-pad'
                    placeholderTextColor={color.secondfont}
                />
            </View>
        </View>
    )
}