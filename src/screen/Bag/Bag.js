import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, TitleTextCompnent } from '../../components/sharedComponents';
import { CustomBtn } from '../../components/CustomBtn';
import ProductRenderComponent from '../../components/ProductRenderCompopnent';


const ProductItems = [
    {
        id: 1,
        title: "Optimum Nutrition (ON) Gold Standard 100% Whet Protein",
        subtitle: "jar of 21b powder",
        totalPrice: "₹1500",
        oldPrice: "₹2999",
        discount: "50%",
        image: require("../../assets/image/Product1.png")
    },
    {
        id: 2,
        title: "Optimum Nutrition (ON) Gold Standard 100% Whet Protein",
        subtitle: "jar of 21b powder",
        totalPrice: "₹1500",
        oldPrice: "₹2999",
        discount: "50%",
        image: require("../../assets/image/Product2.png")
    },
    {
        id: 3,
        title: "Optimum Nutrition (ON) Gold Standard 100% Whet Protein",
        subtitle: "jar of 21b powder",
        totalPrice: "₹1500",
        oldPrice: "₹2999",
        discount: "50%",
        image: require("../../assets/image/Product1.png")
    },
    {
        id: 4,
        title: "Optimum Nutrition (ON) Gold Standard 100% Whet Protein",
        subtitle: "jar of 21b powder",
        totalPrice: "₹1500",
        oldPrice: "₹2999",
        discount: "50%",
        image: require("../../assets/image/Product2.png")
    },
]

const Bag = (props) => {
    return (
        <View style={styles.container}>
            <MyStatusBar />
            <HeaderComponent
                headerText={"Hey Sherya"}
                basketItemExist={true}
                OnDrawerPress = {() => {props.navigation.openDrawer()}}
            />

            <TitleTextCompnent
                title={"Your Bag"}
                containerStyle={{ marginTop: hp("2%") }}
            />

            <View style={styles.subTitleMainContainer}>
                <Text style={styles.subtitleFontStyle}>
                    Subtotal
                </Text>
                <Text style={styles.subtitlePriceFontStyle}>
                   {" "}  ₹4500
                </Text>
            </View>

            <CustomBtn 
            btnText = {"Proceed to Buy(2 items)"}
            containerStyle = {{marginTop : hp("4%")}}
            />

            <ProductRenderComponent 
            data={ProductItems}
            containerStyle = {{marginTop : hp("3%")}}
            comeFromBasket = {true}
            />

        </View>
    )
}

export default Bag;