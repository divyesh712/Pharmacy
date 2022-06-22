import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity,ActivityIndicator } from 'react-native';
import styles from './Styles';
import MyStatusBar from '../../components/Statusbar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../utils/color';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LoginDetails } from './loginDetails';
import { OtpDetails } from './Otp';
import { MainImg } from '../../constants/Imgconstants';
import NetworkCheck from '../../utils/networkcheck';
import MYDROP from '../../utils/Dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { GetOtp, VerifyOtp } from '../../redux/action';

const Login = (props) => {

    const [phonenumber, setPhonenumber] = useState('');
    const [page, setPage] = useState(0);
    const [isAppLoading, Setisapp_loding] = useState(false);
    const [Otp, setOtp] = useState('');

    const dispatch = useDispatch();
    const state = useSelector(state => state.userReducers)
    const loading = useSelector(state => state.userReducers.loading);
    const OtpREF = useRef();

    const GetOtpApi = async () => {
        const isConnected = await NetworkCheck.isNetworkAvailable();
        if (isConnected) {
            let data = { mobile: "+91" + phonenumber, }
            dispatch(GetOtp(data, res => {
                if (res.status == 200) {
                    setPage(1)
                }

            }))
        }
        else {
            MYDROP.alert('error', 'No Internet Connection', "please check your device connection");
        }
    }

    const VerifyOtpApi = async () => {
        const isConnected = await NetworkCheck.isNetworkAvailable();
        if (isConnected) {
            let data = {
                mobile: "+91" + phonenumber,
                otp: Otp
            }
            dispatch(VerifyOtp(data, async res => {
                if (res.status == 200) {
                    await AsyncStorage.setItem('User', JSON.stringify(data))
                        .then(props.navigation.popToTop(),
                            props.navigation.navigate('DrawerScreen'))

                }
              

            }))
        }
        else {
            MYDROP.alert('error', 'No Internet Connection', "please check your device connection");
        }
    }

    const CheckApiDireaction = () => {
        if (page == 0) {
            GetOtpApi();
        }
        if (page == 1) {
            VerifyOtpApi();
        }
    }

    const OnResendPress = () => {
        if (page == 1) {
            setPage(2)
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
            {
                loading &&
                <View style={styles.loadingStyle}>
                    <ActivityIndicator size="large" color='#000000' />
                </View>
            }
        </View>
    )
}

export default Login;