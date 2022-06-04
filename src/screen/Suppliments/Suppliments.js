import React, { useRef, useState,useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity,ActivityIndicator } from 'react-native';
import { HeaderComponent, SearchComponent, TitleTextCompnent } from '../../components/sharedComponents';
import MyStatusBar from '../../components/Statusbar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';
import ProductRenderComponent from "../../components/ProductRenderCompopnent";
import AuthServices from '../../Api/authservices';
import NetworkCheck from '../../utils/networkcheck';
import MYDROP from '../../utils/Dropdown';
import { useSelector,useDispatch } from 'react-redux';
import { ViewBycategoriesApi } from '../../redux/action';

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

    const dispatch = useDispatch();
    const state = useSelector(state => state.userReducers)
    const loading = useSelector(state => state.userReducers.loading)

    const [searchTerm, setSearchTerm] = useState("");
    const [ViewBycategories, setViewByCategories] = useState([]);
    const [isAppLoading, Setisapp_loding] = useState(false);
    const [category_Id, Setcategory_Id] = useState(props.route.params.category_Id);

    const OnProductPress = () => {
        props.navigation.navigate("Product");
    }

    useEffect(() => {
        View_ByCategories();

    }, [])

    const View_ByCategories = async () => {

        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {
            let data = { category_Id: category_Id, }
            dispatch(ViewBycategoriesApi(data, res => {
                if (res.status == 200) {
                    setViewByCategories(res.data)
                }

            }))
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
              {
                loading &&
                <View style={styles.loadingStyle}>
                    <ActivityIndicator size="large" color='#000000' />
                </View>
            }
        </View>
    )
}

export default Suppliments;
