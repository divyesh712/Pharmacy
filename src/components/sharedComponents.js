import React, { useRef, useState } from 'react';
import { View, Text, Modal, Image, TextInput, TouchableOpacity, } from 'react-native';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../utils/color';
import fontSize from '../utils/fontsize';
import fontFamily from '../utils/fontFamily';
import { DrawerIcon, BagIcon, SearchIcon, EditIcon, GalleryIcon, TackPhotoIcon } from '../constants/Imgconstants';
import { CustomBtn } from './CustomBtn';

export const HeaderComponent = ({
    headerText,
    basketItemExist,
    OnDrawerPress,
}) => {
    return (
        <View style={styles.HeaderMainContainer}>
            <TouchableOpacity onPress={OnDrawerPress} style={styles.HeaderIconMainContainer}>
                <Image
                    source={DrawerIcon}
                    style={styles.headerIconStyle}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <View style={styles.HeadetTextMainContainer}>
                <Text style={styles.HeadetTextFontStyle}>
                    {headerText}
                </Text>
            </View>
            <View style={[styles.HeaderIconMainContainer, { alignItems: 'flex-end' }]}>
                <View style={[styles.BagIconContainer, {
                    width: basketItemExist ? hp("8%") : hp("5%"),
                    flexDirection: basketItemExist ? 'row' : 'column'
                }]}>
                    <Image
                        source={BagIcon}
                        style={styles.BagIconStyle}
                    />
                    {
                        basketItemExist ?
                            <View style={styles.BasketItemCountMainContainer}>
                                <Text style={styles.BasketItemFontStyle}>
                                    03
                                </Text>
                            </View>
                            :
                            null
                    }

                </View>
            </View>
        </View>
    )
}

export const CategoriesComponents = ({
    categoryImg,
    categoryName,
    OnCategoryPress,
}) => {
    return (
        <TouchableOpacity onPress={OnCategoryPress} style={styles.CategoriesContainer}>
            <View style={styles.categoriesImgMainContainer}>
                <Image
                    source={categoryImg}
                    style={styles.cateImgStyle}
                />
            </View>
            <View style={styles.CatTextMainContainer}>
                <Text style={styles.CatTextStyle} numberOfLines={2}>
                    {categoryName}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export const SearchComponent = ({
    setSearchTerm,
    searchTerm,
    searchContainerStyle,
    placeholderText
}) => {
    return (
        <View style={{ ...styles.searchMainContainer, ...searchContainerStyle }}>
            <View style={styles.SearchIconContainer}>
                <Image
                    style={styles.SearchIconStyle}
                    source={SearchIcon}
                />
            </View>
            <TextInput
                style={styles.SearchTextInputMainContainer}
                placeholder={placeholderText}
                onChangeText={setSearchTerm}
                value={searchTerm}
                underlineColorAndroid="transparent"
                placeholderTextColor={color.secondfont}
            />
        </View>
    )
}

export const TitleTextCompnent = ({
    title,
    containerStyle,
    editable,
}) => {
    return (
        <View style={{ ...styles.TitleTextMainContainer, ...containerStyle }}>
            <Text style={styles.titleTextFontStyle}>
                {title}
            </Text>
            {
                editable ?
                    <TouchableOpacity>
                        <Image
                            source={EditIcon}
                            style={styles.EditIconStyle}
                        />
                    </TouchableOpacity>
                    :
                    null
            }

        </View>
    )
}

export const OrderProgressReport = ({
    containerStyle,
    orderProgressText,
    orderProgressStep,
    orderProgressComplete,
}) => {
    return (
        <View style={{ ...styles.OrderReportMainContainer, ...containerStyle }}>
            <View style={styles.BoxMainContainer}>
                <View style={[styles.BoxContainer, { borderStyle: orderProgressComplete ? 'solid' : 'dotted', borderRadius: 0.1 }]}>
                    <Text style={[styles.BoxTextStyle, { color: orderProgressComplete ? color.mainfont : color.secondfont }]}>
                        {orderProgressStep}
                    </Text>
                </View>
            </View>
            <View style={styles.OrderReportTextMainContainer}>
                <Text style={[styles.OrderReportTextStyle, { color: orderProgressComplete ? color.mainfont : color.secondfont }]}>
                    {orderProgressText}
                </Text>
            </View>
        </View>
    )
}

export const AddAddressTextInput = ({
    onAddressChangeText,
    AddressValue,
    placeholderText,
    containerStyle,
}) => {
    return (
        <View style={{ ...styles.AddAddrssTextInputMainContainer, ...containerStyle }}>
            <TextInput
                style={styles.AddAddressInputContainer}
                placeholder={placeholderText}
                onChangeText={onAddressChangeText}
                value={AddressValue}
                underlineColorAndroid="transparent"
                placeholderTextColor={color.secondfont}
            />
        </View>
    )
}

export const UploadPrecriptionModal = ({
    setUploadPresModal,
    uploadPresModal,
}) => {
    return (
        <Modal
            statusBarTranslucent={true}
            animationType="slide"
            transparent={true}
            visible={uploadPresModal}
        >
            <View style={styles.PresModalMainContainer}>
                <TouchableOpacity onPress={() => { setUploadPresModal(false) }} style={styles.PresFirstContainer}>

                </TouchableOpacity>
                <View style={styles.PresModalContainer}>
                    <View style={styles.PresTextMainContainer}>
                        <Text style={styles.PresTextFontStyle}>
                            Upload Prescription
                        </Text>
                    </View>
                    <View style={styles.PresOptionMainContainer}>
                        <View style={styles.PresOtionImgMainContainer}>
                            <Image
                                source={TackPhotoIcon}
                                style={styles.PresImgStyle}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.PresOptionTextMainContainer}>
                            <Text style={styles.PresOptionTextStyle}>
                                Take a Photo
                            </Text>
                        </View>
                    </View>

                    <View style={styles.PresOptionMainContainer}>
                        <View style={styles.PresOtionImgMainContainer}>
                            <Image
                                source={GalleryIcon}
                                style={styles.PresImgStyle}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.PresOptionTextMainContainer}>
                            <Text style={styles.PresOptionTextStyle}>
                                Select from gallery
                            </Text>
                        </View>
                    </View>

                    <View style={styles.PresModalBottomMainContainer}>
                        <Text style={styles.PresModalBottomTextStyle}>
                            Valid Prescription
                        </Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export const TalkToPharmasiticModal = ({
    talkPharModal,
    setTalkPharModal,
    pharmNumber,
    setPharmNumber,
}) => {
    return (
        <Modal
            statusBarTranslucent={true}
            animationType="slide"
            transparent={true}
            visible={talkPharModal}
        >
            <View style={styles.PresModalMainContainer}>
                <TouchableOpacity onPress={() => { setTalkPharModal(false) }} style={styles.PresFirstContainer}>

                </TouchableOpacity>
                <View style={styles.PresModalContainer}>
                    <View style={styles.PresTextMainContainer}>
                        <Text style={styles.PresTextFontStyle}>
                            Talk to Pharmasitic
                        </Text>
                    </View>
                    <View style={styles.TalkPharTextInputMainContainer}>
                        <TextInput
                            style={styles.TalkPharmTextInputMainContainer}
                            placeholder={"Phone Number"}
                            onChangeText={setPharmNumber}
                            value={pharmNumber}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={color.secondfont}
                            keyboardType="number-pad"
                        />
                    </View>
                    <CustomBtn
                        btnText={"Call me"}
                        containerStyle={{ marginTop: hp("4%") }}
                    />
                </View>
            </View>
        </Modal>
    )
}

export const MedicationModal = ({
    setModalVisible,
    modalVisible,
    drugName,
    setDrugName,
    number ,
    setNumber,
}) => {
    return (
        <Modal
            statusBarTranslucent={true}
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
           <View style={styles.PresModalMainContainer}>
               <TouchableOpacity onPress={() => {setModalVisible(false)}} style = {styles.MediFirstContainer}>

               </TouchableOpacity>
               <View style={styles.MedicationModalMainContainer}>
                   <View style = {styles.MediTitleMainContainer}>
                       <Text numberOfLines={1} style = {styles.MediTitleFontStyle}>
                           Didn't find your medication?
                       </Text>
                   </View>
                   <View style = {styles.MediSubTextContainer}>
                       <Text style={styles.MediSubTextStyle}>
                           We're always adding new medications to our pharmacy. Tell us which drugs you're looking for and we'll let you know when they become available.
                       </Text>
                   </View>

                   <View style={styles.MediInputMainContainer}>
                       <TextInput
                       style = {styles.MediInputContainer}
                       placeholder={"Drug Name"}
                       onChangeText={setDrugName}
                       value={drugName}
                       underlineColorAndroid="transparent"
                       placeholderTextColor={color.secondfont}
                       />
                   </View>
                   <View style={styles.MediInputMainContainer}>
                       <TextInput
                       style = {styles.MediInputContainer}
                       placeholder={"Your Number"}
                       onChangeText={setNumber}
                       value={number}
                       underlineColorAndroid="transparent"
                       placeholderTextColor={color.secondfont}
                       />
                   </View>
                   <CustomBtn
                        btnText={"Notify me"}
                        containerStyle={{ marginTop: hp("2%") }}
                    />
               </View>
           </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    HeaderMainContainer: {
        height: hp("10%"),
        width: wp("86%"),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    HeaderIconMainContainer: {
        height: hp("6%"),
        width: wp("15%"),
        justifyContent: 'center',
    },
    headerIconStyle: {
        height: hp("3.5%"),
        width: hp("3.5%")
    },
    HeadetTextMainContainer: {
        height: hp("6%"),
        width: wp("56%"),
        justifyContent: 'center',
        alignItems: 'center',
    },
    HeadetTextFontStyle: {
        fontSize: fontSize.regular,
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        color: color.mainfont
    },
    BagIconStyle: {
        height: hp("2.8%"),
        width: hp("2.8%")
    },
    BagIconContainer: {
        height: hp("5%"),
        backgroundColor: color.secondary_bg,
        borderRadius: hp("1%"),
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchMainContainer: {
        height: hp("6%"),
        width: wp("86%"),
        borderRadius: hp("1%"),
        borderWidth: 1,
        borderColor: color.borderColor,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    SearchIconContainer: {
        height: hp("5%"),
        width: wp("10%"),
        justifyContent: 'center',
        alignItems: 'center'
    },
    SearchIconStyle: {
        height: hp("3%"),
        width: hp("3%")
    },
    SearchTextInputMainContainer: {
        height: hp("5%"),
        width: wp("76%"),
        justifyContent: 'center',
        fontSize: fontSize.msmall,
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        color: color.mainfont,
        paddingHorizontal: wp("3%")
    },
    CategoriesContainer: {
        height: hp("15%"),
        width: wp("25%"),
        backgroundColor: color.light_bg,
        justifyContent: 'center',
        borderRadius: hp("1%")
    },
    categoriesImgMainContainer: {
        height: hp("8%"),
        width: wp("25%"),
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateImgStyle: {
        height: hp("7%"),
        width: hp("7%")
    },
    CatTextMainContainer: {
        height: hp("5%"),
        width: wp("25%"),
        justifyContent: 'center',
        alignItems: 'center'
    },
    CatTextStyle: {
        fontSize: fontSize.small,
        fontFamily: fontFamily.REGULAR_FORT_FAMILY,
        color: color.mainfont,
    },
    BasketItemCountMainContainer: {
        height: hp("3%"),
        width: wp("6%"),
        justifyContent: 'center',
        alignItems: 'center'
    },
    BasketItemFontStyle: {
        fontSize: fontSize.xsmall,
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        color: color.mainfont
    },
    TitleTextMainContainer: {
        height: hp("6%"),
        width: wp("86%"),
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 0
    },
    titleTextFontStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.vlarge,
        color: color.mainfont
    },
    OrderReportMainContainer: {
        height: hp("9%"),
        width: wp("86%"),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    BoxMainContainer: {
        height: hp("6%"),
        width: wp("20%"),
        justifyContent: 'center',
        alignItems: 'center'
    },
    BoxContainer: {
        height: hp("4.5%"),
        width: hp("4.5%"),
        borderWidth: hp("0.3%"),
        color: color.mainfont,
        justifyContent: 'center',
        alignItems: 'center',

    },
    BoxTextStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.xsmall,
    },
    OrderReportTextMainContainer: {
        height: hp("6%"),
        width: wp("60%"),
        justifyContent: 'center'
    },
    OrderReportTextStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.slarge,
    },
    AddAddrssTextInputMainContainer: {
        height: hp("6%"),
        width: wp("86%"),
        alignSelf: 'center',
        borderBottomWidth: hp("0.2%"),
        borderBottomColor: color.mainfont,
        justifyContent: 'center'
    },
    AddAddressInputContainer: {
        height: hp("6%"),
        width: wp("86%"),
        justifyContent: 'center',
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.regular,
        color: color.mainfont,
        paddingLeft: wp("5%")
    },
    EditIconStyle: {
        height: hp("3%"),
        width: hp("3%"),
        marginRight: wp("10%")
    },
    PresModalMainContainer: {
        backgroundColor: color.backDrpoColor,
        flex: 1,
    },
    PresModalContainer: {
        height: hp("35%"),
        width: wp("100%"),
        backgroundColor: color.ModalBgColor,
        position: 'absolute',
        bottom: 0
    },
    PresTextMainContainer: {
        height: hp("10%"),
        width: wp("86%"),
        alignSelf: 'center',
        justifyContent: 'center'
    },
    PresTextFontStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.mlarge,
        color: color.mainfont,
    },
    PresOptionMainContainer: {
        height: hp("7%"),
        width: wp("86%"),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp("2%")
    },
    PresOtionImgMainContainer: {
        height: hp("6%"),
        width: wp("20%"),
        justifyContent: 'center',
        alignItems: 'center'
    },
    PresImgStyle: {
        height: hp("4.4%"),
        width: hp("4.4%")
    },
    PresOptionTextMainContainer: {
        height: hp("5%"),
        width: wp("50%"),
        justifyContent: 'center',
    },
    PresOptionTextStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.xsmall,
        color: color.mainfont
    },
    PresModalBottomMainContainer: {
        height: hp("5%"),
        width: wp("86%"),
        marginTop: hp("1%"),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    PresModalBottomTextStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.lsmall,
        color: color.mainfont
    },
    PresFirstContainer: {
        height: hp("65%"),
        width: wp("100%"),
    },
    TalkPharTextInputMainContainer: {
        height: hp("8%"),
        width: wp("86%"),
        alignSelf: 'center',
        marginTop: hp("1%"),
        justifyContent: 'center',
        borderBottomColor: color.mainfont,
        borderBottomWidth: hp("0.3%")
    },
    TalkPharmTextInputMainContainer: {
        height: hp("7%"),
        width: wp("70%"),
        alignSelf: 'center',
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.large,
        color: color.mainfont
    },
    MediFirstContainer : {
        height : hp("55%"),
        width : wp("100%")
    },
    MedicationModalMainContainer : {
        height : hp("45%"),
        width : wp("100%"),
        backgroundColor : color.ModalBgColor,
    },
    MediTitleMainContainer : {
        height : hp("6%"),
        width : wp("86%"),
        alignSelf : 'center',
        justifyContent : 'center',
        marginTop : hp("2%")
    },
    MediTitleFontStyle : {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.mlarge,
        color: color.mainfont,
    },
    MediSubTextContainer : {
        height : hp("12%"),
        width : wp("86%"),
        alignSelf : 'center',
        justifyContent : 'center',
    },
    MediSubTextStyle : {
        fontFamily : fontFamily.REGULAR_FORT_FAMILY,
        fontSize : fontSize.lsmall,
        color : color.secondMainFont
    },
    MediInputMainContainer : {
        height : hp("7%"),
        width : wp("86%"),
        alignSelf : 'center',
        borderBottomColor : color.mainfont,
        borderBottomWidth : hp("0.2%"),
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : hp("0.5%")
    },
    MediInputContainer : {
        height : hp("6%"),
        width : wp("70%"),
        justifyContent : 'center',
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.regular,
        color : color.mainfont
    }
})