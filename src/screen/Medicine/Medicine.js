import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, TitleTextCompnent, SearchComponent, AlterModal, MedicationModal } from '../../components/sharedComponents';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ChevronRight, Medicine3, PrescriptionIcon, Medicine2, ArrowUpIcon } from '../../constants/Imgconstants';
import styles from './styles';
import MedicineRenderComponent from '../../components/MedicineRenderComponent';
import { CustomBtn } from '../../components/CustomBtn';
import { color } from '../../utils/color';
import { SliderBox } from "react-native-image-slider-box";
import fontFamily from '../../utils/fontFamily';
import NetworkCheck from '../../utils/networkcheck';
import MYDROP from '../../utils/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Get_AlternatemedicineApi,View_Medicine_Api } from '../../redux/action';
const medicineItem = [
    {
        id: 1,
        image: Medicine3,
        title: "Crocin Advance Tablet",
        title1: "Manufacture:",
        title2: "Micro Labs Ltd",
        price: "₹50",
        percentage: "(+100%)",
        package: "25",
    },
    {
        id: 2,
        image: Medicine3,
        title: "Crocin Advance Tablet",
        title1: "Manufacture:",
        title2: "Micro Labs Ltd",
        price: "₹50",
        percentage: "(+100%)",
        package: "25",
    },
    {
        id: 3,
        image: Medicine3,
        title: "Crocin Advance Tablet",
        title1: "Manufacture:",
        title2: "Micro Labs Ltd",
        price: "₹50",
        percentage: "(+100%)",
        package: "25",
    },
    {
        id: 4,
        image: Medicine3,
        title: "Crocin Advance Tablet",
        title1: "Manufacture:",
        title2: "Micro Labs Ltd",
        price: "₹50",
        percentage: "(+100%)",
        package: "25",
    },
]
const Medicine = (props) => {

    const [images, setImages] = useState([
        Medicine2,
        Medicine2,
        Medicine2,
        Medicine2,
    ])

    const dispatch = useDispatch();
    const state = useSelector(state => state.userReducers);
    const loading = useSelector(state => state.userReducers.loading)

    const [alterModalVisible, setAlterModalVisible] = useState(false);
    const [alterMedicine, setalterMedicine] = useState(false);
    const [GetAlterData,setGetAlterData] = useState('')
    const [MedicineCat,SetMedicineCat] = useState ('')
    const [MedicineId,SetMedicineId] = useState (props.route.params.medicine_Id)
    
    useEffect(() => {
            Medicine_category();
    }, [])

    const OnDrawerPress = () => {
        props.navigation.openDrawer()
    }

    const OnAlternativesPress = () => {
        setAlterModalVisible(true);
        GetAlternateMedicine();
    }


    const GetAlternateMedicine = async () => {
        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {
            let data = { salt_Id: '1', medicine_Id:'1' }  
            dispatch(Get_AlternatemedicineApi(data,res => {
                if(res.status == 200){
                    setGetAlterData(res.data);
                }
              
            }))

        }
        else {
            MYDROP.alert('error', 'No Internet Connection', "please check your device connection");
        }
    }

    const Medicine_category = async () => {
        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {
            let data = {medicine_Id :MedicineId}  
            dispatch(View_Medicine_Api(data,res => {
                if(res.status == 200){
                    SetMedicineCat(res.data[0]);
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
            <ScrollView>

                <HeaderComponent
                    headerText={"Hey Sherya"}
                    OnDrawerPress={OnDrawerPress}
                    basketItemExist={true}
                />

                <View style={styles.titleMainContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.mainTextStyle}>
                            All Medications
                        </Text>
                    </View>
                    <View style={styles.IconMainContainer}>
                        <Image
                            source={ChevronRight}
                            style={styles.IconStyle}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.SecondTitleMainContainer}>
                        <Text style={styles.secondTextStyle}>
                            Dolo 650
                        </Text>
                    </View>
                </View>

                <View style={styles.PresMainContainer}>
                    <View style={styles.PresIconContainer}>
                        <Image
                            source={PrescriptionIcon}
                            resizeMode="contain"
                            style={styles.PresIconStlye}
                        />
                    </View>
                    <View style={styles.PresTextMaiNContainer}>
                        <Text style={styles.PresTextStyle}>
                            Prescription Required
                        </Text>
                    </View>
                </View>

                <View style={styles.MediTextContainer}>
                    <Text style={styles.MediFontStyle}>
                    {MedicineCat.medicine_Name}
                    </Text>
                </View>

                <View style={styles.sliderImgMainContainer}>
                    <SliderBox
                        images={images}
                        sliderBoxHeight={hp("28%")}
                        onCurrentImagePressed={index =>
                            console.warn(`image ${index} pressed`)
                        }
                        dotColor={color.dotColor}
                        inactiveDotColor={color.bg_main}
                        autoplay
                        circleLoop
                        resizeMethod={'resize'}
                        resizeMode={'cover'}
                        paginationBoxStyle={{
                            backgroundColor: color.bg_main,
                            padding: 0
                        }}
                        dotStyle={styles.sliderDotStyle}
                        ImageComponentStyle={styles.sliderImgStyle}
                        // imageLoadingColor="#000000"
                    />
                </View>

                <View style={styles.desMainContainer}>
                    <View style={styles.desTitleMainContainer}>
                        <Text style={styles.desTitleTextStyle}>
                            Why does my medication look different?
                        </Text>
                    </View>
                    <View style={styles.dessubtitleMaincontainer}>
                        <Text style={styles.dessubtitleFontStyle}>
                            Different manufactures produce different looking medications to distingush themselves from one another, but the drug, strength, and ingredients are the same.
                        </Text>
                    </View>
                </View>

                <View style={styles.mrpMainContainier}>
                    <View style={styles.mrpTextContainer}>
                        <Text style={styles.mrpTextStyle}>
                            MRP  ₹{MedicineCat.MRP}
                        </Text>
                    </View>
                    <View style={styles.mrpTextContainer}>
                        <Text style={[styles.mrpTextStyle, { color: color.highlighfont }]}>
                            50% off
                        </Text>
                    </View>
                </View>

                <View style={styles.priceMainContainer}>
                    <Text style={styles.MediFontStyle}>
                        Our Price ₹{MedicineCat.Our_Price}
                    </Text>
                </View>

                <View style={styles.manuMainContainer}>
                    <View style={styles.manufactureContainer}>
                        <Text style={styles.ManuTextStyle}>
                            Manufacture:
                        </Text>
                        <Text style={[styles.ManuTextStyle, { color: color.mainfont }]}>
                            {" "} {MedicineCat.brand_Name}
                        </Text>
                    </View>

                    <View style={styles.manufactureContainer}>
                        <Text style={styles.ManuTextStyle}>
                            1 Strip:
                        </Text>
                        <Text style={[styles.ManuTextStyle, { color: color.mainfont }]}>
                            {" "} {MedicineCat.pack_qty_units}
                        </Text>
                    </View>

                    <View style={styles.manufactureContainer}>
                        <Text style={styles.ManuTextStyle}>
                            Salt Composition:
                        </Text>
                        <Text style={[styles.ManuTextStyle, { color: color.mainfont }]}>
                            {" "} {MedicineCat.salt_Name}
                        </Text>
                    </View>
                </View>

                <View style={styles.btnMainContainer}>
                    <View style={styles.BtnContainer}>
                        <Text style={styles.BtnTextStyle}>
                            Add to Cart
                        </Text>
                    </View>
                    <View style={styles.CountMainContainer}>
                        <View style={styles.countIconMainContainer}>
                            <Text>
                                -
                            </Text>
                        </View>
                        <View style={styles.CountTextMainContainer}>
                            <Text style={styles.CountTextStyle}>
                                01
                            </Text>
                        </View>
                        <View style={styles.countIconMainContainer}>
                            <Text>
                                +
                            </Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={OnAlternativesPress} style={styles.alterMainContainer}>
                    <View style={styles.alterTextMainContainer}>
                        <Text style={styles.alterTextStyle}>
                            View alternatives
                        </Text>
                    </View>
                    <View style={styles.alterIconMainContainer}>
                        <Image
                            source={ArrowUpIcon}
                            resizeMode="contain"
                            style={styles.alterIconStyle}
                        />
                    </View>
                </TouchableOpacity>

                <View style={styles.InfoMainContainer}>
                    <Text style={styles.InfoTextStyle}>
                        Product Info
                    </Text>
                </View>

                <View style={styles.questionMAinContainer}>
                    <Text style={[styles.qestionTextStyle, { fontFamily: fontFamily.BLACK_FONT_FAMILY }]}>
                        Q1. What is the use of the Dolo 650MG tablet?
                    </Text>
                    <Text style={[styles.qestionTextStyle, { fontFamily: fontFamily.REGULAR_FORT_FAMILY }]}>
                       {MedicineCat.medicine_Description}
                        {/* The tablet is used as first line therapy for the treatment of fever, pain and inflammation according to the international guidelines and recommendations. It is used in moderate to severe pain relief, treatment of rheumatoid arthritis, osteoarthritis and in conditions such as headaches, body aches, tooth aches, menstrual pain and common cold. The tablet effectively relieves muscle stiffness, thereby improving muscle movement. */}
                    </Text>
                </View>

                <AlterModal
                    modalVisible={alterModalVisible}
                    setModalVisible={setAlterModalVisible}
                    data={medicineItem}
                />
            </ScrollView>
            {
                loading &&
                <View style={styles.loadingStyle}>
                    <ActivityIndicator size="large" color='#000000' />
                </View>
            }
        </View>
    )
}

export default Medicine;
