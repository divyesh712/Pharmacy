import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, TitleTextCompnent, SearchComponent } from '../../components/sharedComponents';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ChevronRight } from '../../constants/Imgconstants';
import styles from './styles';
import AuthServices from '../../Api/authservices';
import NetworkCheck from '../../utils/networkcheck';
import MYDROP from '../../utils/Dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { Medicine_Category_View_AllApi } from '../../redux/action';

const MedicationsItem = [
    {
        id: 1,
        name: "Acid Reflux"
    },
    {
        id: 2,
        name: "Alcohol Dependence"
    },
    {
        id: 3,
        name: "Allergies"
    },
    {
        id: 4,
        name: "Angina"
    },
    {
        id: 5,
        name: "Anti-fungal"
    },
    {
        id: 6,
        name: "Anti-Parasitic"
    },
    {
        id: 7,
        name: "Asthma/COPD"
    },
    {
        id: 8,
        name: "Birth Thinner"
    },
    {
        id: 9,
        name: "Bone Health"
    },
    {
        id: 10,
        name: "Blodd Control"
    },
    {
        id: 11,
        name: "High Cholestrol"
    },
    {
        id: 12,
        name: "Demetia Medications"
    },
    {
        id: 13,
        name: "Acid Reflux"
    },
    {
        id: 14,
        name: "Acid Reflux"
    },

]

const Medications = (props) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.userReducers);
    const loading = useSelector(state => state.userReducers.loading);
    const [searchTerm, setSearchTerm] = useState("");
    const [allMedicineCategories, setAllMedicineCategories] = useState([]);

    const OnDrawerPress = () => {
        props.navigation.openDrawer()
    }

    const OnViewMedicationPress = () => {
        props.navigation.navigate("Viewmedication")
    }
    useEffect(() => {
        Medicine_Category_View_All()
    }, [])

    const Medicine_Category_View_All = async () => {

        const isConnected = await NetworkCheck.isNetworkAvailable()
        if (isConnected) {
            dispatch(Medicine_Category_View_AllApi(res => {
                if (res.status == 200) {
                    setAllMedicineCategories(res.data)
                }

            }))

        }
        else {
            MYDROP.alert('error', 'No Internet Connection', "please check your device connection");
        }
    }


    const MedicationRenderItem = (item) => {
        return (
            <View style={styles.ListContainer}>
                <View style={styles.ListTextMainContiner}>
                    <Text numberOfLines={1} style={styles.ListTextSyle}>
                        {item.medicine_Category_Name}
                    </Text>
                </View>
                <TouchableOpacity onPress={OnViewMedicationPress} style={styles.ListIconMAinContainer}>
                    <Image
                        source={ChevronRight}
                        style={styles.IconStyle}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <MyStatusBar />


            <HeaderComponent
                headerText={"Hey Sherya"}
                OnDrawerPress={OnDrawerPress}
                basketItemExist={true}
            />

            <TitleTextCompnent
                title={"All Medications"}
                containerStyle={{ marginTop: hp("2%") }}
            />

            <SearchComponent
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                placeholderText={"Search by disease"}
                searchContainerStyle={{ marginTop: hp("3%") }}
            />

            <View style={styles.ListMainContainer}>
                <FlatList
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={allMedicineCategories}
                    contentContainerStyle={{ paddingBottom: hp("15%") }}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => MedicationRenderItem(item)}
                />
            </View>
            {
                loading &&
                <View style={styles.loadingStyle}>
                    <ActivityIndicator size="large" color='#000000' />
                </View>
            }
        </View>
    )
}

export default Medications;
