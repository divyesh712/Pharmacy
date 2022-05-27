//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet,Modal,TextInput,TouchableOpacity } from 'react-native';
import { CustomBtn } from '../../components/CustomBtn';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../utils/color';
import fontSize from '../../utils/fontsize';
import fontFamily from '../../utils/fontFamily';
// create a component
const ChangeNameComponent = (props) => {

        return (
            <Modal
                statusBarTranslucent={true}
                animationType="slide"
                transparent={true}
              
            >
                <View style={styles.PresModalMainContainer}>
                    <View style={{ flex: 1 }}>
                        <View style={{ height: hp('23%'),}}></View>
                        <View style={styles.changenameview}>
                            <Text style={styles.changenametext}>Want to change your name? Go ahead</Text>
                        </View>
                        <View style={{height:hp('5.5%'),width:wp('86%'),}}></View>
                            <View style={styles.nameview}>
                                <TextInput style={styles.nametext}>Shreya</TextInput>
                            </View>
                            <View style={styles.lineview}></View>
                            <View style={{height:hp('6%'),width:wp('100%')}}></View>
                            <CustomBtn
                            btnText={"Change it"}
                            OnBtnPress={()=> {props.navigation.goBack()}}
                            // containerStyle={{ marginTop: hp("2%") }}
                        />
                        <View style={{height:hp('8%'),width:wp('86%'),alignSelf:'center'}}>
                            <TouchableOpacity onPress={() => { props.navigation.goBack() }}  style={styles.nevermindview}>
                                <Text style={styles.nevermindtext}>Never Mind</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
        }

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    PresModalMainContainer: {
        backgroundColor: color.backDrpoColor,
        flex: 1,
    },
    changenameview:{
        height:hp('10%'),
        width:wp('86%'),
        alignSelf:'center'
    },
    changenametext:{
        fontSize: fontSize.large,
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        color: color.mainfont
    },
    nameview:{
        height:hp('5%'),
        width:wp('76%'),
        alignSelf:'center',
        justifyContent:'center'
    },
    nametext:{
        fontSize: fontSize.mlarge,
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
         color: color.mainfont,
    },
    lineview:{
        height: hp("1%"),width: wp("86%"),
         alignSelf: 'center', 
        borderBottomColor: color.mainfont, 
        borderBottomWidth: hp("0.3%"),
    },
    nevermindview:{
        height:hp('8%'),
        width:wp('86%'),
        justifyContent:'center',
        alignItems:'center'
    },
    nevermindtext:{
        fontSize: fontSize.regular,
        fontFamily: fontFamily.BOLD_FONT_FAMILY, 
        color: color.mainfont,
    },
});

//make this component available to the app
export default ChangeNameComponent;
