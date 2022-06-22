import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, TitleTextCompnent } from '../../components/sharedComponents';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { callicon, twitter, facebook, instagram } from '../../constants//Imgconstants';
import { CustomBtn } from '../../components/CustomBtn';
import { useDispatch, useSelector } from 'react-redux';
import { Contact_Us_Api } from '../../redux/action';
import { useIsFocused } from "@react-navigation/native";
import NetworkCheck from '../../utils/networkcheck';
import MYDROP from '../../utils/Dropdown';
const Contact = (props) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.userReducers);
    const loading = useSelector(state => state.userReducers.loading);

    const [contact ,SetContact] = useState ("");
  
    const Contact_Us_function = async () => {

        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {
            dispatch(Contact_Us_Api(res => {
                if (res.status == 200) {
                    SetContact(res.data)
                   
                }
            }))
        }
        else {
            MYDROP.alert('error', 'No Internet Connection', "please check your device connection");
        }
    }

    return (
        <View style={styles.container}>
            <MyStatusBar />
            <HeaderComponent
                headerText={"Hey Sherya"}
                basketItemExist={true}
                OnDrawerPress={() => { props.navigation.openDrawer() }}
            />

            <TitleTextCompnent
                title={"Contact Us"}
                containerStyle={{ marginTop: hp("3%") }}
            />
            <View style={styles.blankview}></View>
            <View style={styles.mainview}>
                <View style={{ height: hp('8%'), width: wp('10%'), justifyContent: 'center', }}>
                    <View style={{ height: hp('7%'), width: wp('10%'), justifyContent: "center" }}>
                        <Image source={callicon}
                            resizeMode='cover'
                            style={{ height: hp('3%'), width: wp('6%'), alignSelf: "center" }}
                        />
                    </View>
                </View>
                <View style={{ height: hp('8%'), width: wp('17%'), justifyContent: 'center' }}>
                    <View style={{ height: hp('7%'), width: wp('14%'), justifyContent: "center", alignItems: "center" }}>
                        <Text style={styles.calltext}>Call</Text>
                    </View>
                </View>
                <View style={{ height: hp('8%'), width: wp('57%'), justifyContent: 'center' }}>
                    <View style={{ height: hp('7%'), width: wp('57%'), justifyContent: 'center' }}>
                        <Text style={styles.contactText}
                        // keyboardType="phone-pad"
                        > {contact.mobile1}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.mainview}>
                <View style={{ height: hp('8%'), width: wp('10%'), justifyContent: 'center', }}>
                    <View style={{ height: hp('7%'), width: wp('10%'), justifyContent: "center" }}>
                        <Image source={callicon}
                            resizeMode='cover'
                            style={{ height: hp('3%'), width: wp('6%'), alignSelf: "center" }}
                        />
                    </View>
                </View>
                <View style={{ height: hp('8%'), width: wp('17%'), justifyContent: 'center' }}>
                    <View style={{ height: hp('7%'), width: wp('14%'), justifyContent: "center", alignItems: "center" }}>
                        <Text style={styles.calltext}>Call</Text>
                    </View>
                </View>
                <View style={{ height: hp('8%'), width: wp('57%'), justifyContent: 'center' }}>
                    <View style={{ height: hp('7%'), width: wp('57%'), justifyContent: 'center' }}>
                        <Text style={styles.contactText}
                        // keyboardType="phone-pad"
                        >{contact.mobile2}</Text>
                    </View>
                </View>
            </View>


            <View style={styles.mainview}>
                <View style={{ height: hp('8%'), width: wp('10%'), justifyContent: 'center', }}>
                    <View style={{ height: hp('7%'), width: wp('10%'), justifyContent: "center" }}>
                        <Image source={twitter}
                            resizeMode='cover'
                            style={{ height: hp('3%'), width: wp('6%'), alignSelf: "center" }}
                        />
                    </View>
                </View>
                <View style={{ height: hp('8%'), width: wp('17%'), justifyContent: 'center' }}>
                    <View style={{ height: hp('7%'), width: wp('14%'), justifyContent: "center", alignItems: "center" }}>
                        <Text style={styles.calltext}>Mail</Text>
                    </View>
                </View>
                <View style={{ height: hp('8%'), width: wp('57%'), justifyContent: 'center' }}>
                    <View style={{ height: hp('7%'), width: wp('57%'), justifyContent: 'center' }}>
                        <Text style={styles.contactText}
                        >{contact.email}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.socialView}>
                <View style={{ height: hp('10%'), width: wp('28%'), alignSelf: 'flex-end', justifyContent: "center" }}>
                    <Image source={facebook}
                        style={{ alignSelf: 'center', height: hp('5%'), width: wp('10%') }}
                        resizeMode='cover'
                    />
                </View>
                <View style={{ height: hp('10%'), width: wp('28%'), alignSelf: 'flex-end', justifyContent: "center" }}>
                    <Image source={instagram}
                        style={{ alignSelf: 'center', height: hp('5%'), width: wp('10%') }}
                        resizeMode='cover'
                    />
                </View>
                <View style={{ height: hp('10%'), width: wp('28%'), alignSelf: 'flex-end', justifyContent: "center" }}>
                    <Image source={twitter}
                        style={{ alignSelf: 'center', height: hp('5%'), width: wp('10%') }}
                        resizeMode='cover'
                    />
                </View>
            </View>
            <View style={{ height: hp('8%'), width: wp('86%'), justifyContent: "flex-end", alignSelf: "center" }}>
                <Text style={styles.writetext}>Write us</Text>
            </View>
            {/* <View style={{height:hp('1%')}}></View> */}
            <View style={{ height: hp('16%'), width: wp('86%'), alignSelf: 'center' }}>
                <View style={{ height: hp('9%'), width: wp('86%'), justifyContent: 'flex-end' }}>
                    <TextInput style={styles.typetext}>Type here ....</TextInput>
                </View>
            </View>
            <CustomBtn
                OnBtnPress={Contact_Us_function}
                btnText={"Send Query"}
            />
            {
                loading &&
                <View style={styles.loadingStyle}>
                    <ActivityIndicator size="large" color='#000000' />
                </View>
            }
        </View >
    )
}

export default Contact;
