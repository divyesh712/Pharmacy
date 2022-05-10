import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, TitleTextCompnent, SearchComponent, MedicationModal } from '../../components/sharedComponents';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Medicine1 } from '../../constants/Imgconstants';
import styles from './styles';
import MedicineRenderComponent from '../../components/MedicineRenderComponent';
import { CustomBtn } from '../../components/CustomBtn';
import { color } from '../../utils/color';

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

    const [searchTerm, setSearchTerm] = useState("");
    const [ modalVisible , setModalVisible ] = useState(false);
    const [ drugName , setDrugName ] = useState("");
    const [ number , setNumber ] = useState("");

    const OnDrawerPress = () => {
        props.navigation.openDrawer()
    }

    const OnMedicationPress = () => {
        setModalVisible(true)
    }

    const OnMedicinePress = () => {
        props.navigation.navigate("Medicine")
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

            <View style={styles.TextMainContainer}>
                <Text numberOfLines={1} style={styles.TextStyle}>
                    Demetia Medications
                </Text>
            </View>

            <MedicineRenderComponent
                data={MedicineItem}
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

        </View>
    )
}

export default Viewmedication;
