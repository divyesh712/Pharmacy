import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Modal, Image, TextInput, FlatList, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, SearchComponent, UploadPrecriptionModal, TalkToPharmasiticModal, CategoriesComponents, ChangeNameComponent, EnterNameComponent } from '../../components/sharedComponents';
import { color } from '../../utils/color';
import ProductRenderComponent from '../../components/ProductRenderCompopnent';
import { Category1, Category2, Category3, Category4, Category5, Category6 } from '../../constants/Imgconstants';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

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
    const [uploadPresModal, setUploadPresModal] = useState(false);
    const [talkPharModal, setTalkPharModal] = useState(false);
    const [pharmNumber, setPharmNumber] = useState("+91  ");
    const [EnterNameModel, setEnterNameModel] = useState(false);
    const [image, setImage] = useState({});

    const OnDrawerPress = () => {
        props.navigation.openDrawer()
    }

    const BasketItem = () => {
        props.navigation.navigate('Bag')
    }

    const closeModal = () => {
        setEnterNameModel(false)
    }
    const OnUploadPresPress = () => {
        setUploadPresModal(true)
    }

    const OnEnterNamePress = () => {
        setEnterNameModel(true)
    }

    const OnTalkPharmasticPress = () => {
        setTalkPharModal(true);
    }

    const OnStorePress = () => {
        props.navigation.navigate("Stores");
    }

    const OnAllMedicationPress = () => {
        props.navigation.navigate("Medications");
    }

    const OnAllCategoriesPrerss = () => {
        props.navigation.navigate("AllCategories");
    }
    const FindGenericPress = () => {
        props.navigation.navigate('FindGeneric');
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [2, 2],
            quality: 1,
        });

        console.log('uri result here ', result);

        if (!result.cancelled) {
            setImage({ uri: result.uri });
            setUploadPresModal(false);
        }
    };
    const CameraOpen = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [2,2],
          quality: 1,
        });
    
        console.log('uri result here ',result);
    
        if (!result.cancelled) {
            setImage(result.uri);
          setUploadPresModal(false);
       
        }
      };
      useEffect(() => {
        if(image){
        //   Prescription_Uploaded();
        }
        // console.log("URL IS=====>", image)
    }, [image])


    return (
        <View style={styles.container}>

            <MyStatusBar />
            <ScrollView>
                <HeaderComponent
                    headerText={"Hey Sherya"}
                    OnDrawerPress={OnDrawerPress}
                    BasketItem={BasketItem}
                />

                <SearchComponent
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    placeholderText={"Search anything , we got all them"}
                />

                <TouchableOpacity onPress={OnEnterNamePress} style={styles.BlankViewMainContainer}>


                </TouchableOpacity>

                <View style={styles.categoriesMainContainer}>
                    <CategoriesComponents
                        categoryName={"Upload Prescription"}
                        categoryImg={Category1}
                        OnCategoryPress={OnUploadPresPress}

                    />

                    <CategoriesComponents
                        categoryName={"Talk to Pharmasitic"}
                        categoryImg={Category2}
                        OnCategoryPress={OnTalkPharmasticPress}
                    />

                    <CategoriesComponents
                        categoryName={"Store Locator"}
                        categoryImg={Category3}
                        OnCategoryPress={OnStorePress}
                    />
                </View>

                <View style={[styles.categoriesMainContainer, { marginTop: hp("2%") }]}>
                    <CategoriesComponents
                        categoryName={"View all Medications"}
                        categoryImg={Category4}
                        OnCategoryPress={OnAllMedicationPress}
                    />

                    <CategoriesComponents
                        categoryName={"All Categories"}
                        categoryImg={Category5}
                        OnCategoryPress={OnAllCategoriesPrerss}
                    />

                    <CategoriesComponents
                        categoryName={"Find Generic"}
                        categoryImg={Category6}
                        OnCategoryPress={FindGenericPress}

                    />
                </View>

                <View style={styles.BottomTextContainer}>
                    <Text style={styles.BottomTextStyle}>
                        Deal Of The Day
                    </Text>
                </View>

                <ProductRenderComponent
                    data={ProductIrems}
                // Remove_item_to_cart = {Remove_item_to_cart}
                />

                <UploadPrecriptionModal
                    setUploadPresModal={setUploadPresModal}
                    uploadPresModal={uploadPresModal}
                    pickImage={pickImage}
                    CameraOpen={CameraOpen}

                />

                <TalkToPharmasiticModal
                    setTalkPharModal={setTalkPharModal}
                    talkPharModal={talkPharModal}
                    setPharmNumber={setPharmNumber}
                    pharmNumber={pharmNumber}
                />

                <EnterNameComponent
                    setEnterNameModel={setEnterNameModel}
                    EnterNameModel={EnterNameModel}
                    closeModal={closeModal}
                />

            </ScrollView>
        </View>
    )
}

export default Home;