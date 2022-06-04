import React, { useRef, useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, TextInput, FlatList, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, AddAddressTextInput, CheckoutUploadPrecriptionModal, TitleTextCompnent } from '../../components/sharedComponents';
import { CustomBtn } from '../../components/CustomBtn';
import ProductRenderComponent from '../../components/ProductRenderCompopnent';
import { color } from '../../utils/color';
import { RadioButton } from 'react-native-paper';
import { MapIcon, PrescriptionIcon } from '../../constants/Imgconstants';
import AuthServices from '../../Api/authservices';
import NetworkCheck from '../../utils/networkcheck';
import MYDROP from '../../utils/Dropdown';
import * as ImagePicker from 'expo-image-picker';
import RazorpayCheckout from 'react-native-razorpay';

const ProductItems = [
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

]

const Checkout = (props) => {

    const [checked, setChecked] = useState('');
    const [page, setPage] = useState(0);
    const [address, setAddress] = useState("");
    const [patientName, setPatientName] = useState("");
    const [landMark, setLandMark] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [uploadPresModal, setUploadPresModal] = useState(false);
    const [cart_Id, setcart_Id] = useState('');
    const [media, setmedia] = useState('');
    const [isAppLoading, Setisapp_loding] = useState(false);
    const [image, setImage] = useState("");
    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setcamera] = useState("");
    const [amount, setamount] = useState("100");
    const OnAddAddressPress = () => {
        setPage(1);
    }

    const OnUploadPresPress = () => {
        setUploadPresModal(true)
    }

    const OnGalleryPress = () => {
        setUploadPresModal(false);
        setPage(2);
    }

    const makepayment = () => {
        var options = {
            description: 'Be Unique Be Divine',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_live_xjbwZJHoEAklgd',
            amount: amount,
            name: 'Test',
            prefill: {
                email: 'void@razorpay.com',
                contact: '9191919191',
                name: 'Razorpay Software',
            },
            theme: { color: '#F37254' }
        }
        
        RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
        });
        // RazorpayCheckout.onExternalWalletSelection(data => {
        //     alert(`External Wallet Selected: ${data.external_wallet} `);
        // });
    }

    const OnPaymentPress = () => {
        if (page == 2) {
            makepayment() 

        }
        else {
            OnUploadPresPress()
        }

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
            setImage(result.uri);
            setUploadPresModal(false);

        }
    };
    const CameraOpen = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [2, 2],
            quality: 1,
        });

        console.log('uri result here ', result);

        if (!result.cancelled) {
            setImage(result.uri);
            setUploadPresModal(false);

        }
    };

    useEffect(() => {
        if (image) {
            Prescription_Uploaded();
        }
        console.log("URL IS=====>", image)
    }, [image])

    const Prescription_Uploaded = async (uri) => {

        let Apidata = {};

        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {

            Apidata = {
                "cart_Id": '1',
                "media": {
                    name: `filedocument.jpg`,
                    uri: image,
                    type: "*/*"
                },
            }

            try {
             
                const { data } = await AuthServices.Prescription_Uploaded(Apidata)
                console.log("DATA IS====>", data)
                if (data.status !== 200) {
                    Setisapp_loding(false)
                }
                if (data.status == 200) {
                    Setisapp_loding(false);
                    setcart_Id(data.data);

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
            <ScrollView>
                <HeaderComponent
                    headerText={"Hey Sherya"}
                    basketItemExist={true}
                    OnDrawerPress={() => { props.navigation.openDrawer() }}
                />

                <TitleTextCompnent
                    title={"Checkout"}
                    containerStyle={{ marginTop: hp("2%") }}
                />

                <View style={styles.subTitleMainContainer}>
                    <Text style={styles.subtitleFontStyle}>
                        Subtotal
                    </Text>
                    <Text style={styles.subtitlePriceFontStyle}>
                        {" "}  ₹4500
                    </Text>
                </View>
                <View>
                    <ProductRenderComponent
                        data={ProductItems}
                        containerStyle={{ marginTop: hp("1%"), paddingBottom: hp('0%') }}
                        comeFromBasket={true}
                    />
                </View>

                <CustomBtn
                    btnText={"Add More Medicines"}
                    containerStyle={{
                        marginTop: hp("2%"),
                        borderStyle: 'dotted',
                        backgroundColor: color.bg_main,
                        borderWidth: hp("0.2%"),
                        borderRadius: 0.001
                    }}
                    TextStyle={{
                        color: color.mainfont
                    }}
                />

                <CustomBtn
                    btnText={"Click here for offers"}
                    containerStyle={{
                        marginTop: hp("3%"),
                    }}
                />

                {
                    page == 1 ?

                        <View style={styles.AddAddressMainContainer}>
                            <View style={styles.AddAddressTitleMainContainer}>
                                <Text style={styles.AddAddressStyle}>
                                    Delivery Address
                                </Text>
                            </View>

                            <AddAddressTextInput
                                AddressValue={patientName}
                                onAddressChangeText={setPatientName}
                                placeholderText={"Patient Name"}
                                containerStyle={{ width: wp("80%"), marginTop: hp("1%") }}
                            />

                            <AddAddressTextInput
                                AddressValue={address}
                                onAddressChangeText={setAddress}
                                placeholderText={"Address"}
                                containerStyle={{
                                    width: wp("80%"),
                                    marginTop: hp("1%"),
                                    alignItems: 'center',
                                    flexDirection: "row"
                                }}
                                textInputStyle={{ width: wp("70%") }}
                                Icon={MapIcon}
                            />

                            <AddAddressTextInput
                                AddressValue={landMark}
                                onAddressChangeText={setLandMark}
                                placeholderText={"Land Mark(optional)"}
                                containerStyle={{ width: wp("80%"), marginTop: hp("1%") }}
                            />

                            <AddAddressTextInput
                                AddressValue={city}
                                onAddressChangeText={setCity}
                                placeholderText={"City"}
                                containerStyle={{ width: wp("80%"), marginTop: hp("1%") }}
                            />

                            <AddAddressTextInput
                                AddressValue={postalCode}
                                onAddressChangeText={setPostalCode}
                                placeholderText={"Postal Code"}
                                containerStyle={{ width: wp("80%"), marginTop: hp("1%") }}
                            />

                        </View>

                        :

                        <View>
                            <View style={styles.selectedAddressContainer}>
                                <Text style={styles.selectedAddressStyle}>
                                    Select Delivery Address
                                </Text>
                            </View>

                            <View style={styles.radioButtonMainContainer}>
                                <View style={styles.radioButtonContainer}>
                                    <RadioButton
                                        value="first"
                                        color={color.mainfont}
                                        uncheckedColor={color.mainfont}
                                        status={checked === 'first' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('first')}
                                    />
                                </View>
                                <View style={styles.radioTextMAinContainer}>
                                    <View style={styles.radioTextContainer}>
                                        <Text style={styles.radioTextStyle}>
                                            {page == 2 ? "Home-" : "Nithya"}
                                        </Text>
                                    </View>
                                    <Text style={styles.radioSubTitleStyle}>
                                        Opposite Hard Rock Cafe, Next to Shree Simandhar Swami Jain Temple, Worli, Mumbai, Maharashtra 400013
                                    </Text>
                                </View>
                            </View>


                            <View style={styles.radioButtonMainContainer}>
                                <View style={styles.radioButtonContainer}>
                                    <RadioButton
                                        color={color.mainfont}
                                        uncheckedColor={color.mainfont}
                                        value="second"
                                        status={checked === 'second' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('second')}
                                    />
                                </View>
                                <View style={styles.radioTextMAinContainer}>
                                    <View style={styles.radioTextContainer}>
                                        <Text style={styles.radioTextStyle}>
                                            {page == 2 ? "office-" : "Shreya"}
                                        </Text>
                                    </View>
                                    <Text style={styles.radioSubTitleStyle}>
                                        Opposite Hard Rock Cafe, Next to Shree Simandhar Swami Jain Temple, Worli, Mumbai, Maharashtra 400013
                                    </Text>
                                </View>
                            </View>

                            <CustomBtn
                                btnText={"+  Add New Address"}
                                containerStyle={{
                                    marginTop: hp("3%"),
                                    borderStyle: 'dashed',
                                    backgroundColor: color.bg_main,
                                    borderWidth: hp("0.2%"),
                                    borderRadius: 0.001
                                }}
                                TextStyle={{
                                    color: color.mainfont
                                }}
                                OnBtnPress={OnAddAddressPress}
                            />
                        </View>
                }


                <View style={styles.MrpMainContainer}>
                    <View style={styles.MrpFirstContainer}>
                        <View style={styles.mrpTitleMainContainer}>
                            <Text style={[styles.mrpMainTextStyle]}>
                                MRP Total
                            </Text>
                            <Text style={[styles.mrpMainTextStyle]}>
                                ₹1101
                            </Text>
                        </View>

                        <View style={styles.mrpTitleMainContainer}>
                            <Text style={[styles.mrpsubtitleTextStyle]}>
                                Discount
                            </Text>
                            <Text style={[styles.mrpMainTextStyle]}>
                                ₹165
                            </Text>
                        </View>

                        <View style={styles.mrpTitleMainContainer}>
                            <Text style={[styles.mrpsubtitleTextStyle]}>
                                Delivery
                            </Text>
                            <Text style={[styles.mrpMainTextStyle]}>
                                ₹40
                            </Text>
                        </View>
                    </View>

                    <View style={styles.mrpTotalMAinContainer}>
                        <View style={styles.mrpTitleMainContainer}>
                            <Text style={[styles.mrpsubtitleTextStyle]}>
                                Grand Total
                            </Text>
                            <Text style={[styles.mrpMainTextStyle]}>
                                ₹976
                            </Text>
                        </View>
                    </View>
                </View>

                {
                    page == 2 ?
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
                                    Prescription Uploaded
                                </Text>
                            </View>
                        </View>
                        :
                        null

                }


                <CustomBtn
                    btnText={page == 2 ? "Make Payment" : "Upload Prescription"}
                    containerStyle={{
                        marginTop: hp("3%"),
                        width: wp("100%"),
                        borderRadius: 0,
                    }}
                    OnBtnPress={OnPaymentPress}
                />

            </ScrollView>

            <CheckoutUploadPrecriptionModal
                setUploadPresModal={setUploadPresModal}
                uploadPresModal={uploadPresModal}
                OnGalleryPress={OnGalleryPress}
                pickImage={pickImage}
                CameraOpen={CameraOpen}
            />
        </View>
    )
}

export default Checkout;