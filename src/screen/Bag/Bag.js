import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity,ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, TitleTextCompnent } from '../../components/sharedComponents';
import { CustomBtn } from '../../components/CustomBtn';
import ProductRenderComponent from '../../components/ProductRenderCompopnent';
import AuthServices from '../../Api/authservices';
import NetworkCheck from '../../utils/networkcheck';
import MYDROP from '../../utils/Dropdown';
import {useSelector, useDispatch } from 'react-redux';
import { ViewCartByIdApi,RemoveItemToCart } from '../../redux/action';


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

    const dispatch = useDispatch();
    const state = useSelector(state => state.userReducers);
    const loading = useSelector(state => state.userReducers.loading);
    const [cart_Id, setcart_Id] = useState('');
    const [cart_Items_Id, Setcart_Items_Id] = useState('');
    

    useEffect(() => {
        View_cart_By_id();

    }, [])

    const OnProductPress = () => {
        props.navigation.navigate("Product");
    }

    const View_cart_By_id = async () => {
        const isConnected = await NetworkCheck.isNetworkAvailable();
        if (isConnected){
            let data = { cart_Id: '1'}
            dispatch(ViewCartByIdApi(data,res => {
                if(res.status == 200){
                    setcart_Id(res.data)
                }
             
            }))

        }
        else {
            MYDROP.alert('error', 'No Internet Connection', "please check your device connection");
        }
    }

    const Remove_item_to_cart  = async (item) => {
        const isConnected = await NetworkCheck.isNetworkAvailable();
        if (isConnected){
            let data = { cart_Items_Id: item.cart_Items_Id}
            dispatch(RemoveItemToCart(data,res => {
                if(res.status == 200){
                    Setcart_Items_Id(res.data)
                    View_cart_By_id();
                }
            }))

        }
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
                btnText={"Proceed to Buy(2 items)"}
                containerStyle={{ marginTop: hp("4%") }}
            />

            <ProductRenderComponent
                data={cart_Id}
                containerStyle={{ marginTop: hp("3%") }}
                comeFromBasket={true}
                OnProductPress={OnProductPress}
                Remove_item_to_cart={Remove_item_to_cart}
            />
  {
                loading &&
                <View style={styles.loadingStyle}>
                    <ActivityIndicator size="large" color='#000000'/>
                </View>
            }
        </View>
    )
}

export default Bag;