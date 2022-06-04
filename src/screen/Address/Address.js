import React, { useRef, useState,useEffect } from 'react';
import { View, Text, Image, FlatList, } from 'react-native';
import styles from './styles';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, TitleTextCompnent } from '../../components/sharedComponents';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RemoveIcon, EditIcon } from '../../constants/Imgconstants';
import { CustomBtn } from '../../components/CustomBtn';
import { color } from '../../utils/color';
import AddAddress from './AddAddress';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AuthServices from '../../Api/authservices';
import NetworkCheck from '../../utils/networkcheck';
import MYDROP from '../../utils/Dropdown';

const AddressItems = [
    {
        id: 1,
        name: "Nithya Deshpande -",
        Address: "Opposite Hard Rock cafe ,  Next to Shree Simandhar Swami Jain Temple , Worli , Mumbai, Maharastra 400013"
    },
    {
        id: 2,
        name: "Sherya Deshpande -",
        Address: "Opposite Hard Rock cafe ,  Next to Shree Simandhar Swami Jain Temple , Worli , Mumbai, Maharastra 400013"
    },
]
const Address = (props) => {

    const [page, setPage] = useState(0);
    const [Hnumber , setHnumber ] =useState("");
    const [ address ,  setAddress ] = useState("");
    const [ landMark , setLandMark ] = useState("");
    const [ city , setCity ] = useState("");
    const [postalCode , setPostalCode ] = useState("");
    const [address_Id , setaddress_Id ] = useState("");
    const [isAppLoading, Setisapp_loding] = useState(false);
    const [View_userId , setView_userId ] = useState([]);


    const OnAddAddressPress = () => {
        setPage(page + 1);
    }
    useEffect(() => {
        VIew_By_USERID()
        if(page == 1){
            PincodeApi();
        }
    }, [])
    useEffect(() => {
        console.log('View USer ID HEre =============> ',View_userId)
    },[View_userId])
    
    const Remove_Address = async () => {
        let Apidata = {};

        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {
            Apidata = {
                "address_Id": '1'
            }

            try {

                const { data } = await AuthServices.User_address_delete(Apidata)

                if (data.status !== 200) {
                    Setisapp_loding(false)
                }
                if (data.status == 200) {
                    Setisapp_loding(false);

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
    const VIew_By_USERID = async () => {

        let Apidata = {};

        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {
            
            Apidata = {
                "user_Id":'2'
            }

            try {

                const { data } = await AuthServices.View_By_userID(Apidata)
               
                if (data.status !== 200) {
                    Setisapp_loding(false)
                }
                if (data.status == 200) {
                    Setisapp_loding(false);
                    setView_userId(data.data)

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

    
    const PincodeApi = async (uri) => {

        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {

            try {
             
                const { data } = await AuthServices.Pincode()
                console.log("DATA IS====>", data)
                if (data.status !== 200) {
                    Setisapp_loding(false)
                }
                if (data.status == 200) {
                    Setisapp_loding(false);
                    setPostalCode(data.data[0].pincode);
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

    const AddressRenderItem = (item) => {
        console.log('$$$$$$$$$$$$$',item)
        return (
            <View style={styles.AddressMainContainer}>
                <View style={styles.AddressTextMainContainer}>
                    <Text style={styles.AddressMainFontStyle}>
                    Nithya Deshpande
                    </Text>
                    <Text style={styles.AddressFontStyle}>
                        {item.address}
                    </Text>
                </View>
                <View style={styles.AddressBottomMainContainer}>
                    <TouchableOpacity onPress={Remove_Address} style={styles.AddressRemoveMainContainer}>
                        <Image
                            source={RemoveIcon}
                            style={styles.removeIconStyle}
                        />
                        <Text style={styles.removeTextStyle}>
                            Remove
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.AddressEditMianContainer}>
                        <Image
                            source={EditIcon}
                            style={styles.EditIconStyle}
                        />
                    </View>
                </View>
            </View>
        )
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
                title={"Your Address"}
                containerStyle={{ marginTop: hp("2%") }}
            />

            {
                page == 1 ?
                    <AddAddress
                    page = {page}
                    setPage = {setPage}
                    Hnumber = {Hnumber}
                    setHnumber = {setHnumber}
                    address = {address}
                    setAddress = {setAddress}
                    landMark = {landMark}
                    setLandMark = {setLandMark}
                    city = {city}
                    setCity = {setCity}
                    postalCode = {postalCode}
                    setPostalCode = {setPostalCode}
                    />
                    :
                    <View>
                        <View>
                            <FlatList
                                nestedScrollEnabled={true}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                data={View_userId}
                                // contentContainerStyle={{ backgroundColor : 'pink'}}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => AddressRenderItem(item)}
                            />
                        </View>

                        <CustomBtn
                            btnText={"+   Add New Address"}
                            containerStyle={{
                                marginTop: hp("5%"),
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

        </View>
    )
}

export default Address;
