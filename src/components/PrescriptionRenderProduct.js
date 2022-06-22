import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, } from 'react-native';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../utils/color';
import fontSize from '../utils/fontsize';
import fontFamily from '../utils/fontFamily';
import {  ArrowUpIcon } from '../constants/Imgconstants';

const PrescriptionRenderProduct = ({
    data,
    containerStyle,
    OnViewPress,
}) => {

    const ProductRenderItem = (item) => {
        return (
            <View style={{ ...styles.MainContainer, ...containerStyle }}>
                <View style={styles.firstContainer}>
                    <View style={styles.ImgMainContainer}>
                        <Image
                            style={styles.ImgContainer}
                            source={item.PrescriptionImg}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.TextMainContainer}>
                        <View style={styles.titleTextMainContainer}>
                            <Text numberOfLines={1} style={styles.titleTextStyle}>
                                {item.name}
                            </Text>
                        </View>
                        <View style={styles.subtitleMainContainer}>
                            <Text style={styles.subtitleStyle}>
                                {item.underReview ? "Yet to be reviwed" : `${item.products}` + " products"}
                            </Text>
                        </View>
                        {
                            item.underReview ?
                            null
                            :
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
                        }
                        
                    </View>
                    <View style={styles.dateMainContainer}>
                        <Text style={styles.dateTextStyle}>
                            {item.date}
                        </Text>
                    </View>
                </View>
                <View style = {styles.secondMainContainer}>
                     <TouchableOpacity onPress={() => {OnViewPress(item)}} style = {styles.secondtextContainer}>
                         <Text style = {styles.secondTextStyle}>
                             View Precription
                         </Text>
                     </TouchableOpacity>
                     <View style = {styles.secondImgStyle}>
                         <Image
                         source={ArrowUpIcon}
                         style = {styles.secondImgContainer}
                         />
                     </View>
                </View>
            </View>
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
            renderItem={({ item }) => ProductRenderItem(item)}
        />
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        height: hp("20%"),
        width: wp("86%"),
        alignSelf: 'center',
        marginTop: hp("1%"),
        alignItems: 'center'
    },
    firstContainer: {
        height: hp("14%"),
        width: wp("80%"),
        flexDirection: 'row',
        alignItems: 'center'
    },
    ImgMainContainer: {
        height: hp("12%"),
        width: wp("25%"),
        justifyContent: 'center',
    },
    ImgContainer: {
        height: hp("12%"),
        width: hp("12%"),
    },
    TextMainContainer: {
        height: hp("12%"),
        width: wp("35%"),
    },
    titleTextMainContainer: {
        height: hp("4%"),
        width: wp("35%"),
        justifyContent: 'center',
        paddingHorizontal: wp("1%")
    },
    titleTextStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.xsmall,
        color: color.mainfont
    },
    subtitleMainContainer: {
        height: hp("3%"),
        width: wp("35%"),
        justifyContent: 'center'
    },
    subtitleStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.small,
        color: color.thirdfont
    },
    ProuctPricingMainContainer: {
        height: hp("3%"),
        width: wp("60%"),
        flexDirection: 'row'
    },
    ProductPriceContainer: {
        height: hp("3%"),
        width: wp("13%"),
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
    dateMainContainer: {
        height: hp("10%"),
        width: wp("20%"),
    },
    dateTextStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.small,
        color: color.thirdfont,
    },
    secondMainContainer : {
        height : hp("6%"),
        width : wp("80%"),
        flexDirection : 'row',
        alignItems : 'center',
        borderBottomColor : color.lineColor,
        borderBottomWidth : hp("0.2%")
    },
    secondtextContainer : {
        height : hp("5%"),
        width : wp("70%"),
        justifyContent : 'center',
       
    },
    secondTextStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.msmall,
        color : color.mainfont
    },
    secondImgStyle : {
        height : hp("5%"),
        width : wp("10%"),
        justifyContent : 'center'
    },
    secondImgContainer : {
        height : hp("3%"),
        width : hp("3%")
    }
})

export default PrescriptionRenderProduct;