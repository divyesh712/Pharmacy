import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, } from 'react-native';
import styles from './Styles';
import MyStatusBar from '../../components/Statusbar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../utils/color';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LoginDetails } from './loginDetails';
import { OtpDetails } from './Otp';
import { MainImg } from '../../constants/Imgconstants';
import AuthServices from '../../Api/authservices';
import NetworkCheck from '../../utils/networkcheck';
import MYDROP from '../../utils/Dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = (props) => {

    const [phonenumber, setPhonenumber] = useState('');
    const [page, setPage] = useState(0);
    const [isAppLoading, Setisapp_loding] = useState(false);
    const [Otp, setOtp] = useState('');

    const GetOtp = async () => {
        // let text1 = "91";
        let Apidata = {};
        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {
            Apidata = {
                // "mobile": text1.concat(phonenumber)
                "mobile": "91" + phonenumber,
            }
            try {

                const { data } = await AuthServices.GetOtp(Apidata)

                if (data.status !== 200) {
                    Setisapp_loding(false)
                }
                if (data.status == 200) {
                    Setisapp_loding(false);
                    setPage(1);

                }
            }
            catch (error) {

                Setisapp_loding(false);
                console.log(error)
            }
        }
        else {
            MYDROP.alert('error', 'No Internet Connection', "please check your device connection");
        }
    }
    const OtpREF = useRef();

    const OnVerifyNumberPress = () => {
        if (page == 0) {
            setPage(1);   
         
        }
        else {
            props.navigation.navigate("DrawerScreen")
        }
    }

    const CheckApiDireaction = () => {
        if (page == 0) {
            GetOtp();
            
        }
        if (page == 1) {
            VerifyOtpAPi();

        }
    }

    const OnResendPress = () => {
        if (page == 1) {
            setPage(2)
        }
    }

    const VerifyOtpAPi = async () => {

        let Apidata = {};
        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {
            Apidata = {
                // "mobile": text1.concat(phonenumber),
                "mobile": "91" + phonenumber,
                "otp": Otp,
            }
            try {

                const { data } = await AuthServices.VerifyOtp(Apidata)

                if (data.status !== 200) {
                    Setisapp_loding(false)
                }
                if (data.status == 200) {
                    var value = JSON.stringify(data);
                    await AsyncStorage.setItem('User', JSON.stringify(data) )
                        .then(props.navigation.popToTop(),
                            props.navigation.navigate('DrawerScreen'));
                    Setisapp_loding(false)
                }
            }
            catch (error) {
                Setisapp_loding(false);
                console.log(error)
            }
        }
        else {
            MYDROP.alert('error', 'No Internet Connection', "please check your device connection");
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} extraHeight={hp('13%')} enableOnAndroid>
                <MyStatusBar />
                <View style={styles.flatlistcontainer}>
                    <Image
                        source={MainImg}
                        resizeMode="cover"
                        style={{ height: hp("65%"), width: wp("100%") }}
                    />
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
                                Otp={Otp}
                                setOtp={setOtp}
                            />
                            
                    }

                    <TouchableOpacity onPress={CheckApiDireaction} style={styles.BtnMainContainer}>
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