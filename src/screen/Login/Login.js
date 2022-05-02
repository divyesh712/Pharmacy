import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, } from 'react-native';
import styles from './Styles';
import MyStatusBar from '../../components/Statusbar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../utils/color';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LoginDetails } from './loginDetails';
import { OtpDetails } from './Otp'
const Login = (props) => {

    const [phonenumber, setPhonenumber] = useState('');
    const [page, setPage] = useState(0);

    const OtpREF = useRef();

    const OnVerifyNumberPress = () => {
        if(page == 0){
            setPage(1);
        }
        else{
            props.navigation.navigate("Home")
        }

    }

    const OnResendPress = () => {
        if(page == 1){
            setPage(2)
        }
    }
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} extraHeight={hp('13%')} enableOnAndroid>
                <MyStatusBar />
                <View style={styles.flatlistcontainer}>
                </View>

                <View style={styles.SecondMainContainer}>
                    <View style={styles.titleMainContainer}>
                        <Text style={styles.titleFontStyle}   >
                            Start huge savings on your medicines
                        </Text>
                    </View>

                    {
                        page == 0 ?
                            <LoginDetails
                                phonenumber={phonenumber}
                                setPhonenumber={setPhonenumber}
                            />
                            :
                            <OtpDetails
                                OtpREF={OtpREF}
                            />
                    }

                    <TouchableOpacity onPress={OnVerifyNumberPress} style={styles.BtnMainContainer}>
                        <Text style={styles.BtnTextStyle}>
                            {page == 0 ? "Verify Number" : "Verify OTP"}
                        </Text>
                    </TouchableOpacity>

                    {page == 0 ?
                        null
                        :
                        <TouchableOpacity onPress={OnResendPress} style={styles.LastBottomContainer}>
                            <Text style={[styles.BottomTextFontStyle, { color: color.secondfont }]}>
                            {page == 1 ? "Resend in " : "Resend OTP"} </Text>
                            <Text style={[styles.BottomTextFontStyle, { color: color.mainfont }]}>{page == 1 ? " 30 " : null}</Text>
                        </TouchableOpacity>
                    }

                </View>


            </KeyboardAwareScrollView>
        </View>
    )
}

export default Login;