import React, { useRef, useState,useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity,ActivityIndicator } from 'react-native';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, TitleTextCompnent, SearchComponent, MedicationModal } from '../../components/sharedComponents';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Medicine1 } from '../../constants/Imgconstants';
import styles from './styles';
import MedicineRenderComponent from '../../components/MedicineRenderComponent';
import { CustomBtn } from '../../components/CustomBtn';
import { color } from '../../utils/color';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NetworkCheck from '../../utils/networkcheck';
import MYDROP from '../../utils/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { ViewAllMedicineApi } from '../../redux/action';
import { useIsFocused } from "@react-navigation/native";

const MedicineItem = [
    {
        id: 1,
        name: "Zincovit Tablet",
        total: 20,
        subtitle: "Paracetamol (650mg)",
        totalPrice: "₹1600",
        oldPrice: "₹2999",
        discount: "50%",
        image: Medicine1,
        Added: false,
    },
    {
        id: 2,
        name: "Zincovit Tablet",
        total: 40,
        subtitle: "Paracetamol (650mg)",
        totalPrice: "₹1600",
        oldPrice: "₹2999",
        discount: "50%",
        image: Medicine1,
        Added: true,
    },
    {
        id: 3,
        name: "Zincovit Tablet",
        total: 60,
        subtitle: "Paracetamol (650mg)",
        totalPrice: "₹1600",
        oldPrice: "₹2999",
        discount: "50%",
        image: Medicine1,
        Added: true,
    },
]
const Viewmedication = (props) => {
    const isFocused = useIsFocused();

    const [searchTerm, setSearchTerm] = useState("");
    const [ modalVisible , setModalVisible ] = useState(false);
    const [ drugName , setDrugName ] = useState("");
    const [ number , setNumber ] = useState("");
    const [ Medicine , SetAllMedicine ] = useState("");

    const dispatch = useDispatch();
    const state = useSelector(state => state.userReducers);
    const loading = useSelector(state => state.userReducers.loading)

 
useEffect(() => {
    if (isFocused) {
        View_All_Medicine()
    }
  }, [props, isFocused]);


const OnMedicinePress = (item) => {
    props.navigation.navigate("Medicine",{medicine_Id:item.medicine_Id})

}

const View_All_Medicine = async () => {
    const isConnected = await NetworkCheck.isNetworkAvailable()

    if (isConnected) {
        let data = {}  
        dispatch(ViewAllMedicineApi(data,res => {
            if(res.status == 200){
                SetAllMedicine(res.data);
            }
          
        }))

    }
    else {
        MYDROP.alert('error', 'No Internet Connection', "please check your device connection");
    }
}

    const OnDrawerPress = () => {
        props.navigation.openDrawer()
    }

    const OnMedicationPress = () => {
        setModalVisible(true)
    }


    return (
        <View style={styles.container}>
            <MyStatusBar />
            <KeyboardAwareScrollView
                style={styles.container}
                enableOnAndroid={true}
                extraHeight={hp('15%')}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
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

            <View style={styles.TextMainContainer}>
                <Text numberOfLines={1} style={styles.TextStyle}>
                    Demetia Medications
                </Text>
            </View>

            <MedicineRenderComponent
                data={Medicine}
                OnMedicinePress = {OnMedicinePress}
                
            />

            <CustomBtn
                btnText={"Didn't find your medication?"}
                containerStyle={{
                    backgroundColor: color.bg_main,
                    borderWidth: hp("0.3%"),
                    borderColor: color.mainfont,
                    marginTop: hp("5%")
                }}
                TextStyle={{
                    color: color.mainfont
                }}
                OnBtnPress = {OnMedicationPress}
            />

            <MedicationModal 
            modalVisible = {modalVisible}
            setModalVisible = {setModalVisible}
            setDrugName = {setDrugName}
            drugName = {drugName}
            setNumber = {setNumber}
            number = {number}
            />
            </KeyboardAwareScrollView>
            {
                loading &&
                <View style={styles.loadingStyle}>
                    <ActivityIndicator size="large" color='#000000' />
                </View>
            }
        </View>
    )
}

export default Viewmedication;
