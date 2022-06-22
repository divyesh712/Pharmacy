//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, TouchableOpacity,ActivityIndicator } from 'react-native';
import { CustomBtn } from '../../components/CustomBtn';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../utils/color';
import fontSize from '../../utils/fontsize';
import fontFamily from '../../utils/fontFamily';
import { useDispatch, useSelector } from 'react-redux';
import { Update_user_Name_Api } from '../../redux/action';
import { useIsFocused } from "@react-navigation/native";
import NetworkCheck from '../../utils/networkcheck';
import MYDROP from '../../utils/Dropdown';

const ChangeName = (props) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.userReducers);
    const loading = useSelector(state => state.userReducers.loading);

    const [Name, SetName] = useState('');

    const ChangeName = async () => {
        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {
            let data = { user_id: "1", name: Name }
            dispatch(Update_user_Name_Api(data, res => {
                if (res.status == 200) {
                    SetName(res.data)

                }

            }))

        }
        else {
            MYDROP.alert('error', 'No Internet Connection', "please check your device connection");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.PresModalMainContainer}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: hp('23%'), }}></View>
                    <View style={styles.changenameview}>
                        <Text style={styles.changenametext}>Want to change your name? Go ahead</Text>
                    </View>
                    <View style={{ height: hp('5.5%'), width: wp('86%'), }}></View>
                    <TouchableOpacity style={styles.Enternameview}>
                        <TextInput style={styles.nametext}
                            placeholder={"Shreya"}
                            placeholderTextColor='#000000'
                            onChangeText={SetName}
                            value={Name}
                            underlineColorAndroid="transparent"

                        ></TextInput>
                    </TouchableOpacity>
                    <View style={styles.lineview}></View>
                    <View style={{ height: hp('6%'), width: wp('100%') }}></View>
                    <CustomBtn
                        OnBtnPress={ChangeName}
                        btnText={"Change it"}
                    // OnBtnPress={closeModal}
                    // containerStyle={{ marginTop: hp("2%") }}
                    />
                    <View style={{ height: hp('8%'), width: wp('86%'), alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={styles.nevermindview}>
                            <Text style={styles.nevermindtext}>Never Mind</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {
                loading &&
                <View style={styles.loadingStyle}>
                    <ActivityIndicator size="large" color='#000000' />
                </View>
            }
        </View>
    )
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.bg_main
    },
    PresModalMainContainer: {
        backgroundColor: color.backDrpoColor,
        flex: 1,
    },
    changenameview: {
        height: hp('10%'),
        width: wp('86%'),
        alignSelf: 'center'
    },
    changenametext: {
        fontSize: fontSize.large,
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        color: color.mainfont
    }, Enternameview: {
        height: hp('5%'),
        width: wp('76%'),
        alignSelf: 'center',
        justifyContent: 'center'
    },
    nametext: {
        fontSize: fontSize.mlarge,
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        color: color.mainfont,
    },
    lineview: {
        height: hp("1%"), width: wp("86%"),
        alignSelf: 'center',
        borderBottomColor: color.mainfont,
        borderBottomWidth: hp("0.3%"),
    },
    nevermindview: {
        height: hp('8%'),
        width: wp('86%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    nevermindtext: {
        fontSize: fontSize.regular,
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        color: color.mainfont,
    },
});

//make this component available to the app
export default ChangeName;


