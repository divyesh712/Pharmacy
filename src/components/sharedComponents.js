import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, } from 'react-native';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../utils/color';
import fontSize from '../utils/fontsize';
import fontFamily from '../utils/fontFamily';
import { DrawerIcon, BagIcon, SearchIcon, EditIcon } from '../constants/Imgconstants';

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
    categoryName
}) => {
    return (
        <View style={styles.CategoriesContainer}>
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
        </View>
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
    }
})