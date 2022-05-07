import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';
import { HeaderComponent, TitleTextCompnent } from '../../components/sharedComponents';
import MyStatusBar from '../../components/Statusbar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';

const OrderItem = [
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

const Orders = (props) => {
    return (
        <View style={styles.container}>
            <MyStatusBar />
            <HeaderComponent
                headerText={"Hey Sherya"}
                basketItemExist={true}
                OnDrawerPress = {() => {props.navigation.openDrawer()}}
            />

            <TitleTextCompnent
                title={"Your Orders"}
                containerStyle={{ marginTop: hp("2%") }}
            />

            <View style={styles.subTitleMainContainer}>
                <Text style={styles.subtitleFontStyle}>
                    Total savings   
                </Text>
                <Text style={styles.subtitlePriceFontStyle}>
                    {" "}  ₹4500
                </Text>
            </View>

        </View>
    )
}

export default Orders;
