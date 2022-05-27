import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, TitleTextCompnent } from '../../components/sharedComponents';
import { CustomBtn } from '../../components/CustomBtn';
import ProductRenderComponent from '../../components/ProductRenderCompopnent';
import AuthServices from '../../Api/authservices';
import NetworkCheck from '../../utils/networkcheck';
import MYDROP from '../../utils/Dropdown';


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

    const [isAppLoading, Setisapp_loding] = useState(false);
    // const [cart_Items_Id, setcart_Items_Id] = useState('');
    const [cart_Id, setcart_Id] = useState('');
    // console.log('Cart Id Here =>>>>>>>>>>>>>', cart_Id)

    useEffect(() => {
        View_Cart_By_Id();

    }, [])

    const OnProductPress = () => {
        props.navigation.navigate("Product");
    }

    const View_Cart_By_Id = async () => {

        let Apidata = {};

        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {

            try {
                Apidata = {
                    "cart_Id": '1'
                }

                const { data } = await AuthServices.ViewCartById(Apidata)

                if (data.status !== 200) {
                    Setisapp_loding(false)
                }
                if (data.status == 200) {
                    Setisapp_loding(false);
                    setcart_Id(data.data);

                }
            }
            catch (error) {

                Setisapp_loding(false);
                console.log(error)
            }
        }
        else {
            MYDROP.alert('error', 'No Internet Connection', "please check your device connection");
        }
    }

    const Remove_item_to_cart = async (item) => {
        // console.log('Item here =>>>>>>>>>', item)
        let Apidata = {};

        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {

            try {
                Apidata = {
                    "cart_Items_Id": item.cart_Items_Id
                }

                const { data } = await AuthServices.RemoveItemToCart(Apidata)

                if (data.status !== 200) {
                    Setisapp_loding(false)
                }
                if (data.status == 200) {
                    Setisapp_loding(false);

                }
            }
            catch (error) {

                Setisapp_loding(false);
                console.log(error)
            }
        }
        else {
            MYDROP.alert('error', 'No Internet Connection', "please check your device connection");
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

        </View>
    )
}

export default Bag;