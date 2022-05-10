import React, { useRef, useState } from 'react';
import { View, Text, Image, FlatList, } from 'react-native';
import styles from './styles';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, TitleTextCompnent } from '../../components/sharedComponents';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PrescriptionRenderProduct from '../../components/PrescriptionRenderProduct';
import { PrescriptionImg } from '../../constants/Imgconstants';

const prescriptionProduct = [
    {
        id : 1,
        underReview : true ,
        name : "Prescription 01",
        date : "Apr 15, 22",
        products : 25,
        totalPrice : "₹1500",
        oldPrice : "₹2999",
        discount : "50%",
        PrescriptionImg : PrescriptionImg,
    },
    {
        id : 2,
        underReview : false ,
        name : "Shreya Shetty",
        date : "Apr 15, 22",
        products : 25,
        totalPrice : "₹1500",
        oldPrice : "₹2999",
        discount : "50%",
        PrescriptionImg : PrescriptionImg,
    },
    {
        id : 3,
        underReview : false ,
        name : "Priyanka Mohanra",
        date : "Apr 15, 22",
        products : 25,
        totalPrice : "₹1500",
        oldPrice : "₹2999",
        discount : "50%",
        PrescriptionImg : PrescriptionImg,
    },
    {
        id : 4,
        underReview : false ,
        name : "Shreya Shetty",
        date : "Apr 15, 22",
        products : 25,
        totalPrice : "₹1500",
        oldPrice : "₹2999",
        discount : "50%",
        PrescriptionImg : PrescriptionImg,
    },
]
const Prescriptions = (props) => {

    const OnViewPress = (item) => {
        props.navigation.navigate("ViewPrescription" , {Prescription : item});
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
                title={"Prescriptions"}
                containerStyle={{ marginTop: hp("2%") }}
            />

            <PrescriptionRenderProduct
            data={prescriptionProduct}
            containerStyle = {{marginTop : hp("3%")}}
            OnViewPress = {OnViewPress}
            />
        </View>
    )
}

export default Prescriptions;
