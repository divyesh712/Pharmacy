import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity,ActivityIndicator } from 'react-native';
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
import NetworkCheck from '../../utils/networkcheck';
import MYDROP from '../../utils/Dropdown';
import { AllCategories } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
export const CatergoryComponent = ({
    catImg,
    catText,
    OnCatPress,
    item
}) => {

    return (

        <TouchableOpacity onPress={OnCatPress} style={styles.catMainContainer}>
            <View style={styles.catImgContainer}>
                <Image
                    source={{ uri: item.media }}
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

const AllCategoriesFunction = (props) => {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        All_CategoriesApi();

    }, [])
    const dispatch = useDispatch();
    const state = useSelector(state => state.userReducers);
    const loading = useSelector(state => state.userReducers.loading);

    const All_CategoriesApi = async () => {

        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {
            dispatch(AllCategories(res => {
                if (res.status == 200) {
                    setAllCategories(res.data)
                    // console.log('ALL CATEGORY HERE DATA ',res)
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
                data={allCategories}
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
                            catText={item.category_Name}
                            catImg={Category12}
                            item={item}
                            OnCatPress={() => { props.navigation.navigate("Suppliments", { category_Id: item.category_Id }) }}
                        />

                    </TouchableOpacity>
                }

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


export default AllCategoriesFunction;