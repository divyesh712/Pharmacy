import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, SearchComponent, TitleTextCompnent } from '../../components/sharedComponents';
import {
    Category4,
    Category6,
    Category7,
    Category8,
    Category9,
    Category10,
    Category11,
    Category12,
    Category13,
} from '../../constants/Imgconstants';
import AuthServices from '../../Api/authservices';
import NetworkCheck from '../../utils/networkcheck';
import MYDROP from '../../utils/Dropdown';

const catItem = [
    {
        id: 1,
        name: "medicine",
    },
    {
        id: 2,
        name: "medicine",
    },
    {
        id: 3,
        name: "medicine",
    },
    {
        id: 4,
        name: "medicine",
    },
    {
        id: 5,
        name: "medicine",
    },
    {
        id: 6,
        name: "medicine",
    },
    {
        id: 7,
        name: "medicine",
    },
    {
        id: 8,
        name: "medicine",
    },
    {
        id: 9,
        name: "medicine",
    },
]

export const CatergoryComponent = ({
    catImg,
    catText,
    OnCatPress,
}) => {
    return (
        <TouchableOpacity onPress={OnCatPress} style={styles.catMainContainer}>
            <View style={styles.catImgContainer}>
                <Image
                    source={catImg}
                    resizeMode="contain"
                    style={styles.CatImgStyle}
                />
            </View>
            <View style={styles.catTextContainier}>
                <Text style={styles.catTextStyle}>
                    {catText}
                </Text>
            </View>

        </TouchableOpacity>
    )
}

const AllCategories = (props) => {

    useEffect(() => {
        All_Categories();

    }, [])

    const [searchTerm, setSearchTerm] = useState("");
    const [allCategories, setAllCategories] = useState([]);
    const [isAppLoading, Setisapp_loding] = useState(false);

    const OnSupplimentPress = () => {
        props.navigation.navigate("Suppliments")
    }
    const All_Categories = async () => {

        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {

            try {

                const { data } = await AuthServices.All_Categories()

                if (data.status !== 200) {
                    Setisapp_loding(false)
                }
                if (data.status == 200) {
                    Setisapp_loding(false);
                    setAllCategories(data.data);
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
                title={"All Categories"}
                containerStyle={{ marginTop: hp("2%") }}
            />

            <SearchComponent
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                placeholderText={"Search for anything"}
                searchContainerStyle={{
                    marginTop: hp("3%")
                }}
            />

            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={true}
                data={catItem}
                contentContainerStyle={{ marginTop: hp("1%"), paddingBottom: hp("10%") }}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>

                    <TouchableOpacity style={{
                        width: wp("40%"),
                        height: hp("12%"),
                        marginLeft: wp("7%"),
                        marginTop: hp("3%")
                    }}>
                        <CatergoryComponent
                            catText={item.name}
                            catImg={Category12}
                            OnCatPress={() => {props.navigation.navigate("Suppliments",{category_Id:item.category_Id})}}
                        />

                    </TouchableOpacity>
                }

            />

        </View>
    )
}

export default AllCategories;