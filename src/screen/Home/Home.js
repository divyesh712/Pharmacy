import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, SearchComponent, CategoriesComponents } from '../../components/sharedComponents';
import { color } from '../../utils/color';
import ProductRenderComponent from '../../components/ProductRenderCompopnent';
import { Category1 , Category2 , Category3 , Category4, Category5 , Category6 } from '../../constants/Imgconstants';
import { ScrollView } from 'react-native-gesture-handler';

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


const Home = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    const OnDrawerPress = () => {
         props.navigation.openDrawer()
    }

    return (
        <View style={styles.container}>
          
            <MyStatusBar />
            <ScrollView>
            <HeaderComponent
                headerText={"Hey Sherya"}
                OnDrawerPress = {OnDrawerPress}
            />

            <SearchComponent
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                placeholderText={"Search anything , we got all them"}
            />

            <View style={styles.BlankViewMainContainer}>
            </View>

            <View style={styles.categoriesMainContainer}>
                <CategoriesComponents
                    categoryName={"Upload Prescription"}
                    categoryImg={Category1}
                />

                <CategoriesComponents
                    categoryName={"Talk to Pharmasitic"}
                    categoryImg={Category2}
                />

                <CategoriesComponents
                    categoryName={"Store Locator"}
                    categoryImg={Category3}
                />
            </View>

            <View style={[styles.categoriesMainContainer, { marginTop: hp("2%") }]}>
                <CategoriesComponents
                    categoryName={"View all Medications"}
                    categoryImg={Category4}
                />

                <CategoriesComponents
                    categoryName={"All Categories"}
                    categoryImg={Category5}
                />

                <CategoriesComponents
                    categoryName={"Find Generic"}
                    categoryImg={Category6}
                />
            </View>

            <View style={styles.BottomTextContainer}>
                <Text style={styles.BottomTextStyle}>
                    Deal Of The Day
                </Text>
            </View>

            <ProductRenderComponent
                data={ProductIrems}
            />
            </ScrollView>
        </View>
    )
}

export default Home;