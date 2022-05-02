
import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, } from 'react-native';
import styles from './Styles';
import MyStatusBar from '../../components/Statusbar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../utils/color';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import OTPTextView from 'react-native-otp-textinput';

export const OtpDetails = ({
    OtpREF
}) => {

    const OnOtpTextChange = (e) => {
    }

    return (       
                <View style={[styles.textInputMainContainer]}>
                    <OTPTextView
                    ref={OtpREF}
                    inputCount={4}
                    handleTextChange = {OnOtpTextChange}
                    tintColor = {color.mainfont}
                />
                </View>
    )
}
