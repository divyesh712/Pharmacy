import React, { useRef, useState,useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';
import styles from './styles';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, TitleTextCompnent } from '../../components/sharedComponents';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { PrescriptionImg, prescription_2 } from '../../constants/Imgconstants';
import { CustomBtn } from '../../components/CustomBtn';
import ProductRenderComponent from "../../components/ProductRenderCompopnent";
import NetworkCheck from '../../utils/networkcheck';
import MYDROP from '../../utils/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { User_Prescription_Upload } from '../../redux/action';


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

const ViewPrescription = (props) => {

    const [prescription, setPrescription] = useState(props.route.params.Prescription);
    const [media, setmedia] = useState('');
     const dispatch = useDispatch();
    const state = useSelector(state => state.userReducers);
    const loading = useSelector(state => state.userReducers.loading)

    const OnCheckOutPress = () => {
        props.navigation.navigate("Checkout");
    }
    // useEffect(() => {
    //     Prescription_Uploaded();
    // }, [])
    const Prescription_Uploaded = async () => {
        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {
            let data = {
                user_Id: 1,
                media: media,

            }
            dispatch(User_Prescription_Upload(data, res => {
                if (res.status == 200) {
                    setPrescription(res.data[0]);
                    console.log('Resssssssssss',res)
                }

            }))

        }
        else {
            MYDROP.alert('error', 'No Internet Connection', "please check your device connection");
        }
    }

    return (
        <View style={[styles.container]}>
            <MyStatusBar />
            <HeaderComponent
                headerText={"Hey Sherya"}
                basketItemExist={true}
                OnDrawerPress={() => { props.navigation.openDrawer() }}
            />
            <TitleTextCompnent
                title={prescription.name}
                containerStyle={{ marginTop: hp("2%"), flexDirection: "row", justifyContent: 'space-between' }}
                editable={true}
            />

            <View style={styles.subTitleMainContainer}>
                <Text style={styles.subtitleFontStyle}>
                    April 15, 22
                </Text>
            </View>

            <View style={styles.ImgMainContainer}>
                <Image
                    source={prescription_2}
                    style={styles.imgContainer}
                // resizeMode = "contain"
                />
            </View>
            {
                prescription.underReview ?
                    null
                    :
                    <View style={{ flex: 1 }}>
                        <ProductRenderComponent
                            data={ProductItems}
                            containerStyle={{ marginTop: hp("3%") }}
                            comeFromBasket={true}
                        />

                        <CustomBtn
                            containerStyle={{
                                position: 'absolute',
                                bottom: 0,
                                marginTop: hp("1%")
                            }}
                            btnText={"Checkout"}
                            OnBtnPress={OnCheckOutPress}
                        />
                    </View>
            }


        </View>
    )
}

export default ViewPrescription;
