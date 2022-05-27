import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';
import styles from './styles';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, TitleTextCompnent } from '../../components/sharedComponents';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { callicon,twitter,facebook,instagram } from '../../constants//Imgconstants';
import { CustomBtn } from '../../components/CustomBtn';
const Contact = (props) => {
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
                <View style={{ height: hp('8%'), width: wp('17%'), justifyContent:'center' }}>
                    <View style={{ height: hp('7%'), width: wp('14%'), justifyContent: "center",alignItems:"center" }}>
                        <Text style={styles.calltext}>Call</Text>
                    </View>
                </View>
                <View style={{ height: hp('8%'), width: wp('57%'), justifyContent:'center' }}>
                    <View style={{ height: hp('7%'), width: wp('57%'), justifyContent:'center' }}>
                        <TextInput style={styles.contactText}
                        keyboardType="phone-pad"
                        >+91</TextInput>
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
                <View style={{ height: hp('8%'), width: wp('17%'), justifyContent:'center' }}>
                    <View style={{ height: hp('7%'), width: wp('14%'), justifyContent: "center",alignItems:"center" }}>
                        <Text style={styles.calltext}>Call</Text>
                    </View>
                </View>
                <View style={{ height: hp('8%'), width: wp('57%'), justifyContent:'center' }}>
                    <View style={{ height: hp('7%'), width: wp('57%'), justifyContent:'center' }}>
                        <TextInput style={styles.contactText}
                        keyboardType="phone-pad"
                        >+91</TextInput>
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
                <View style={{ height: hp('8%'), width: wp('17%'), justifyContent:'center' }}>
                    <View style={{ height: hp('7%'), width: wp('14%'), justifyContent: "center",alignItems:"center" }}>
                        <Text style={styles.calltext}>Mail</Text>
                    </View>
                </View>
                <View style={{ height: hp('8%'), width: wp('57%'), justifyContent:'center' }}>
                    <View style={{ height: hp('7%'), width: wp('57%'), justifyContent:'center' }}>
                        <TextInput style={styles.contactText}
                        ></TextInput>
                    </View>
                </View>
            </View>
            <View style={styles.socialView}>
                <View style={{height:hp('10%'),width:wp('28%'),alignSelf:'flex-end',justifyContent:"center"}}>
                    <Image source={facebook}
                    style={{alignSelf:'center',height:hp('5%'),width:wp('10%')}}
                    resizeMode='cover'
                    />
                </View>
                <View style={{height:hp('10%'),width:wp('28%'),alignSelf:'flex-end',justifyContent:"center"}}>
                    <Image source={instagram}
                    style={{alignSelf:'center',height:hp('5%'),width:wp('10%')}}
                    resizeMode='cover'
                    />
                </View>
                <View style={{height:hp('10%'),width:wp('28%'),alignSelf:'flex-end',justifyContent:"center"}}>
                    <Image source={twitter}
                    style={{alignSelf:'center',height:hp('5%'),width:wp('10%')}}
                    resizeMode='cover'
                    />
                </View>
            </View>
            <View style={{height:hp('8%'),width:wp('86%'),justifyContent:"flex-end",alignSelf:"center"}}>
                <Text style={styles.writetext}>Write us</Text>
            </View>
            {/* <View style={{height:hp('1%')}}></View> */}
            <View style={{height:hp('16%'),width:wp('86%'),alignSelf:'center'}}>
                <View style={{height:hp('9%'),width:wp('86%'),justifyContent:'flex-end'}}>
                    <TextInput style={styles.typetext}>Type here ....</TextInput>
                </View>
            </View>
            <CustomBtn
            OnBtnPress={()=> {props.navigation.goBack()}}
             btnText={"Send Query"}   
                            // containerStyle={{ marginTop: hp("2%") }}
                        />

        </View >
    )
}

export default Contact;
