import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, } from 'react-native';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../utils/color';
import fontSize from '../utils/fontsize';
import fontFamily from '../utils/fontFamily';
import { BagIcon } from '../constants/Imgconstants';

const MedicineRenderComponent = ({
    data,
    containerStyle,
    OnMedicinePress,
}) => {

    const MedicineRenderItem = (item) => {
        return (
            <TouchableOpacity onPress={OnMedicinePress} style={styles.MainContainer}>
                <View style={styles.firstContainer}>
                    <View style={styles.ImgMainContainer}>
                        <Image
                            source={item.image}
                            style={styles.ImgStyle}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.TextMainContainer}>
                        <View style={styles.titleTextMainContainer}>
                            <Text style={styles.titleFontStyle}>
                                {item.name}
                            </Text>
                        </View>
                        <View style={styles.subtitleMainContainer}>
                            <Text style={styles.subtitleFontStyle}>
                                {item.subtitle}
                            </Text>
                        </View>
                        <View style={styles.ProuctPricingMainContainer}>
                            <View style={styles.ProductPriceContainer}>
                                <Text style={styles.ProductTotalPriceStyle}>
                                    {item.totalPrice}
                                </Text>
                            </View>
                            <View style={styles.ProductPriceContainer}>
                                <Text style={styles.ProductOldPriceFontStyle}>
                                    {item.oldPrice}
                                </Text>
                            </View>
                            <View style={styles.ProductPriceContainer}>
                                <Text style={styles.DiscountFontStyle}>
                                    {item.discount} off
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.tabletMainContainer}>
                        <Text style={styles.tabletTextStyle}>
                            {item.total} Tablets
                        </Text>
                    </View>
                </View>
                <View style={styles.secondContainer}>
                    <View style={[styles.ProductBagMainContainer, { alignItems: 'center' }]}>
                        <Image
                            source={BagIcon}
                            style={styles.ProductBagIconStyle}
                        />
                    </View>
                    <View style={styles.ProductBottomTextContainer}>
                        <Text style={styles.ProductBottomTextStyle}>
                            {item.Added ? "Added" : "Add to Bag"} 
                        </Text>
                    </View>
                    <View style={styles.ProductCountMainContainer}>
                        <View style={styles.CountIconMainContainer}>
                            <Text style={styles.CountIconStyle}>
                                -
                            </Text>
                        </View>
                        <View style={styles.CountTextMainContiner}>
                            <Text style={styles.CountTextStyle}>
                                01
                            </Text>
                        </View>
                        <View style={styles.CountIconMainContainer}>
                            <Text style={styles.CountIconStyle}>
                                +
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={data}
            contentContainerStyle={{ paddingBottom: hp('15%'), ...containerStyle }}
            keyExtractor={item => item.id}
            renderItem={({ item }) => MedicineRenderItem(item)}
        />
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        height: hp("20%"),
        width: wp("86%"),
        alignSelf: 'center',
        marginBottom : hp("2%"),
        borderBottomColor : color.lineColor,
        borderBottomWidth : hp("0.2%")
    },
    firstContainer: {
        height: hp("14%"),
        width: wp("86%"),
        alignItems: 'center',
        flexDirection: 'row'
    },
    ImgMainContainer: {
        height: hp("12%"),
        width: wp("20%"),
        justifyContent: 'center',
    },
    ImgStyle: {
        height: hp("10%"),
        width: hp("10%"),
    },
    TextMainContainer: {
        height: hp("12%"),
        width: wp("45%"),
        justifyContent: 'center',
    },
    titleTextMainContainer: {
        height: hp("4%"),
        width: wp("43%"),
        justifyContent: 'center'
    },
    titleFontStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.xsmall,
        color: color.mainfont
    },
    subtitleMainContainer: {
        height: hp("3%"),
        width: wp("43%"),
        justifyContent: 'center'
    },
    subtitleFontStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.small,
        color: color.thirdfont,
    },
    ProuctPricingMainContainer: {
        height: hp("3%"),
        width: wp("43%"),
        flexDirection: 'row'
    },
    ProductPriceContainer: {
        height: hp("3%"),
        width: wp("15%"),
        justifyContent: 'center',
    },

    ProductTotalPriceStyle: {
        fontSize: fontSize.lsmall,
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        color: color.mainfont,
    },
    ProductOldPriceFontStyle: {
        fontSize: fontSize.lsmall,
        fontFamily: fontFamily.REGULAR_FORT_FAMILY,
        color: color.secondfont,
        textDecorationLine : "line-through",
    },
    DiscountFontStyle: {
        fontSize: fontSize.lsmall,
        fontFamily: fontFamily.REGULAR_FORT_FAMILY,
        color: color.highlighfont
    },
    tabletMainContainer: {
        height: hp("8%"),
        width: wp("20%"),
    },
    tabletTextStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.lsmall,
        color: color.thirdfont
    },
    secondContainer: {
        height: hp("5%"),
        width: wp("86%"),
        flexDirection: 'row',
        alignItems: 'center',
    },
    ProductBagMainContainer: {
        height: hp("5%"),
        width: wp("15%"),
        justifyContent: 'center',
    },
    ProductBagIconStyle: {
        height: hp("3%"),
        width: hp("3%"),
    },
    ProductBottomTextContainer: {
        height: hp("5%"),
        width: wp("30%"),
        justifyContent: 'center',
    },
    ProductBottomTextStyle: {
        fontSize: fontSize.msmall,
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        color: color.mainfont,
    },
    ProductCountMainContainer: {
        height: hp("5%"),
        width: wp("40%"),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: wp("2%")
    },
    CountIconMainContainer: {
        height: hp("4.4%"),
        width: hp("4.4%"),
        backgroundColor: color.countColor,
        borderRadius: hp("6%"),
        justifyContent: 'center',
        alignItems: 'center'
    },
    CountIconStyle: {
        fontSize: fontSize.regular,
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        color: color.mainfont
    },
    CountTextMainContiner: {
        height: hp("4%"),
        width: wp("15%"),
        justifyContent: 'center',
        alignItems: 'center'
    },
    CountTextStyle: {
        fontSize: fontSize.msmall,
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        color: color.mainfont
    },
})

export default MedicineRenderComponent;