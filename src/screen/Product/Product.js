import React, { useRef, useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, TitleTextCompnent, SearchComponent, AlterModal, MedicationModal } from '../../components/sharedComponents';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ChevronRight, Medicine3, PrescriptionIcon, Product1, ArrowUpIcon } from '../../constants/Imgconstants';
import styles from './styles';
import MedicineRenderComponent from '../../components/MedicineRenderComponent';
import { CustomBtn } from '../../components/CustomBtn';
import { color } from '../../utils/color';
import { SliderBox } from "react-native-image-slider-box";
import fontFamily from '../../utils/fontFamily';

const medicineItem = [
    {
        id: 1,
        image: Medicine3,
        title: "Crocin Advance Tablet",
        price: "₹50",
        percentage: "(+100%)",
        package: "25",

    },
    {
        id: 2,
        image: Medicine3,
        title: "Crocin Advance Tablet",
        price: "₹50",
        percentage: "(+100%)",
        package: "25",

    },
    {
        id: 3,
        image: Medicine3,
        title: "Crocin Advance Tablet",
        price: "₹50",
        percentage: "(+100%)",
        package: "25",
    },
    {
        id: 4,
        image: Medicine3,
        title: "Crocin Advance Tablet",
        price: "₹50",
        percentage: "(+100%)",
        package: "25",
    },
]
const Product = (props) => {

    const [images, setImages] = useState([
        Product1,
        Product1,
        Product1,
        Product1,
    ])
    const [alterModalVisible, setAlterModalVisible] = useState(false);

    const OnDrawerPress = () => {
        props.navigation.openDrawer()
    }

    const OnAlternativesPress = () => {
        setAlterModalVisible(true);
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
                            Categories
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
                            Suppliments
                        </Text>
                    </View>
                </View>

                <View style={styles.MediTextContainer}>
                    <Text style={styles.MediFontStyle}>
                        Optimum Nutrition (ON) Gold Standard 100% Whey Protein
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
                        imageLoadingColor="#2196F3"
                    />
                </View>

                <View style={styles.mrpMainContainier}>
                    <View style={styles.mrpTextContainer}>
                        <Text style={styles.mrpTextStyle}>
                            MRP  ₹49.99
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
                        Our Price ₹25
                    </Text>
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
                        The tablet is used as first line therapy for the treatment of fever, pain and inflammation according to the international guidelines and recommendations. It is used in moderate to severe pain relief, treatment of rheumatoid arthritis, osteoarthritis and in conditions such as headaches, body aches, tooth aches, menstrual pain and common cold. The tablet effectively relieves muscle stiffness, thereby improving muscle movement.
                    </Text>
                </View>

                <AlterModal
                    modalVisible={alterModalVisible}
                    setModalVisible={setAlterModalVisible}
                    data={medicineItem}
                />
            </ScrollView>
        </View>
    )
}

export default Product;
