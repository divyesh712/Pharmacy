import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, } from 'react-native';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../utils/color';
import fontSize from '../utils/fontsize';
import fontFamily from '../utils/fontFamily';
import { RemoveIcon, BagIcon, ArrowUpIcon } from '../constants/Imgconstants';

const ProductRenderComponent = ({
    data,
    containerStyle,
    comeFromBasket,
    comeFromOrders,
    OnArrowPress,
    OnProductPress,
    Remove_item_to_cart
}) => {

    const OnRemovePress = (item) => {
        if (comeFromBasket) {
            Remove_item_to_cart(item)
        }

    }
    const ProductRenderItem = (item) => {

        let ImageUrl;

        if (item.media) {
            let ImgObj = JSON.parse(item.media)
            ImageUrl = ImgObj[0].path
            console.log("==========MEDIA IS=======>", ImageUrl)
        }


        return (
            <TouchableOpacity onPress={() => { OnProductPress(item) }} style={styles.ProductMainContainer}>
                <View style={styles.ProductFirstMainContainer}>
                    <View style={styles.ProductImgMainContainer}>
                        <Image
                            source={{uri : ImageUrl}}
                            style={styles.ProductImgStyle}
                            resizeMode='contain'
                        />
                    </View>
                    <View style={styles.ProductTextMainContainer}>
                        <View style={styles.ProudctTitleMainContainer}>
                            <Text style={styles.ProductTitleFontStyle}>
                                {item.product_Name}
                            </Text>
                        </View>
                        <View style={styles.ProductSubTitleMAinContainer}>
                            <Text style={styles.ProductSubtitleFontStyle}>
                                {item.Item_Code}
                            </Text>
                        </View>
                        <View style={styles.ProuctPricingMainContainer}>
                            <View style={styles.ProductPriceContainer}>
                                <Text style={styles.ProductTotalPriceStyle}>
                                    {item.MRP}
                                </Text>
                            </View>
                            <View style={styles.ProductPriceContainer}>
                                <Text style={styles.ProductOldPriceFontStyle}>
                                    {item.Our_Price}
                                </Text>
                              
                            </View>
                            <View style={styles.ProductPriceContainer}>
                                <Text style={styles.DiscountFontStyle}>
                                    {item.discount} off
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                {
                    comeFromOrders ?
                        <View style={styles.ProductSecondMainContainer}>
                            <View style={styles.OrdersBottomMainContainer}>
                                <Text style={styles.orderBottomTextStyle}>
                                    {item.date}
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => { OnArrowPress(item) }} style={styles.OrderBottomIConMAinContainer}>
                                <Image
                                    source={ArrowUpIcon}
                                    style={styles.ArrowUpStyle}
                                />
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.ProductSecondMainContainer}>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { OnRemovePress(item) }} >
                                <View style={[styles.ProductBagMainContainer, { alignItems: comeFromBasket ? 'flex-end' : 'center' }]}>
                                    <Image
                                        source={comeFromBasket ? RemoveIcon : BagIcon}
                                        style={styles.ProductBagIconStyle}
                                    />
                                </View>
                                <View style={styles.ProductBottomTextContainer}>
                                    <Text style={styles.ProductBottomTextStyle}>
                                        {comeFromBasket ? "Remove" : "Add to Bag"}
                                    </Text>
                                </View>
                            </TouchableOpacity>
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
                }

                <View style={styles.footerMainContainer}>
                    <View style={styles.footerContainer}></View>
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
            renderItem={({ item }) => ProductRenderItem(item)}
        />
    )
}

const styles = StyleSheet.create({
    ProductMainContainer: {
        height: hp("22%"),
        width: wp("86%"),
        alignSelf: 'center',
        marginVertical: hp("1%"),
    },
    ProductFirstMainContainer: {
        height: hp("15%"),
        width: wp("86%"),
        flexDirection: 'row'
    },
    ProductImgMainContainer: {
        height: hp("15%"),
        width: wp("25%"),
        justifyContent: 'center',
        alignItems: 'center'
    },
    ProductImgStyle: {
        height: hp("12%"),
        width: hp("10%"),
    },
    ProductTextMainContainer: {
        height: hp("15%"),
        width: wp("60%"),
        justifyContent: 'center',
    },
    ProudctTitleMainContainer: {
        height: hp("6%"),
        width: wp("60%"),
        justifyContent: 'center'
    },
    ProductTitleFontStyle: {
        fontSize: fontSize.lsmall,
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        color: color.mainfont
    },
    ProductSubTitleMAinContainer: {
        height: hp("3%"),
        width: wp("60%"),
        justifyContent: 'center'
    },
    ProductSubtitleFontStyle: {
        fontSize: fontSize.small,
        fontFamily: fontFamily.REGULAR_FORT_FAMILY,
        color: color.secondfont,
    },
    ProuctPricingMainContainer: {
        height: hp("3%"),
        width: wp("60%"),
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
    ProductSecondMainContainer: {
        height: hp("6%"),
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
    footerMainContainer: {
        height: hp("1%"),
        width: wp("86%"),
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    footerContainer: {
        height: hp("0.2%"),
        width: wp("80%"),
        backgroundColor: color.lineColor
    },
    OrdersBottomMainContainer: {
        height: hp("5%"),
        width: wp("70%"),
        justifyContent: 'center',
        paddingLeft: wp("7%"),
    },
    orderBottomTextStyle: {
        fontSize: fontSize.lsmall,
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        color: color.mainfont,
    },
    OrderBottomIConMAinContainer: {
        height: hp("5%"),
        width: wp("15%"),
        justifyContent: 'center'
    },
    ArrowUpStyle: {
        height: hp("3%"),
        width: hp("3%"),
    },
})

export default ProductRenderComponent;