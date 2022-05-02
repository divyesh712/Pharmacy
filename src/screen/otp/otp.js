import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, } from 'react-native';
import styles from './Styles';
import MyStatusBar from '../../components/Statusbar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../utils/color';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import OTPTextView from 'react-native-otp-textinput';
const Otp = (props) => {

    const [myNumber, Setmynumber] = useState('');
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} extraHeight={hp('13%')} enableOnAndroid>
                <MyStatusBar />
                <View style={styles.flatlistcontainer}>

                </View>
                <View style={styles.textInputMainContainer}>
                    <View style={styles.textinput1}>
                        <Text style={styles.textstyle1}>Start huge savings on </Text>
                    </View>
                    <View style={styles.textinput2}>
                        <Text style={styles.textstyle2}>your medicines </Text>
                    </View>
                </View>
                <View style={styles.inputmain1}>
                    <View style={styles.inputmain}>
                    <OTPTextView
                    inputCount={4}
                    // inputCellLength={2}
                />
                    </View>
                </View>
                <View style={styles.BlankView}></View>
                <View style={styles.ButtonMain}>
                    <Text style={styles.buttontext}>verify Number</Text>
                </View>
             
            </KeyboardAwareScrollView>
        </View>
    )
}

export default Otp;