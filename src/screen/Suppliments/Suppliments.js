import React, { useRef, useState,useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';
import { HeaderComponent, SearchComponent, TitleTextCompnent } from '../../components/sharedComponents';
import MyStatusBar from '../../components/Statusbar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';
import ProductRenderComponent from "../../components/ProductRenderCompopnent";
import AuthServices from '../../Api/authservices';
import NetworkCheck from '../../utils/networkcheck';
import MYDROP from '../../utils/Dropdown';

const ProductIrems = [
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

const Suppliments = (props) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [ViewBycategories, setViewByCategories] = useState([]);
    console.log('VIEW BY CATEGORRIES DATA ',ViewBycategories)
    const [isAppLoading, Setisapp_loding] = useState(false);
    const [category_Id, Setcategory_Id] = useState(props.route.params.category_Id);

    const OnProductPress = () => {
        props.navigation.navigate("Product");
    }

    useEffect(() => {
        View_ByCategories();

    }, [])

    // useEffect(() => {
    // }, [ViewBycategories])

    const View_ByCategories = async () => {

        let Apidata = {};
        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {
            Apidata = {
                'category_Id':category_Id
            }
            try {

                const { data } = await AuthServices.View_By_Categories(Apidata)

                if (data.status !== 200) {
                    Setisapp_loding(false)
                }
                if (data.status == 200) {
                    Setisapp_loding(false);
                    setViewByCategories(data.data);

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
                title={"Suppliments"}
                containerStyle={{ marginTop: hp("2%") }}
            />

            <SearchComponent
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                placeholderText={"Search for anything"}
                searchContainerStyle = {{
                    marginTop : hp("3%")
                }}
            />

            <ProductRenderComponent
                data={ViewBycategories}
                containerStyle = {{
                    marginTop : hp("2%")
                }}
                OnProductPress = {OnProductPress}
            />
        </View>
    )
}

export default Suppliments;
