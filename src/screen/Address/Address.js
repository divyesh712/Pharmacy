import React, { useRef, useState, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { pincodeApi,User_address_delete_Api,User_View_By_Id } from '../../redux/action';
import { useIsFocused } from "@react-navigation/native";

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
    const [Hnumber, setHnumber] = useState("");
    const [address, setAddress] = useState("");
    const [landMark, setLandMark] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [address_Id, setaddress_Id] = useState("");
    const [isAppLoading, Setisapp_loding] = useState(false);
    const [View_userId, setView_userId] = useState([]);
    const [RemoveAddress, setRemoveAddress] = useState("");
    

    const dispatch = useDispatch();
    const state = useSelector(state => state.userReducers);
    const loading = useSelector(state => state.userReducers.loading)

    const OnAddAddressPress = () => {
        setPage(page + 1);
    }
    useEffect(() => {
        VIew_By_USERID()
        if (page == 1) {
            PincodeApiFunction();
        }
    }, [])
    
    const UserAddressdelete = async (item) => {
        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {
            let data = {address_Id:item.address_Id}
            dispatch(User_address_delete_Api(data, res => {
                if (res.status == 200) {
                    setRemoveAddress(res.data);

                }

            }))

        }
        else {
            MYDROP.alert('error', 'No Internet Connection', "Please Check Your Device Connection");
        }
    }

    const VIew_By_USERID = async () => {
        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {
            let data = {user_Id:'1'}
            dispatch(User_View_By_Id(data, res => {
                if (res.status == 200) {
                    setView_userId(res.data);

                }

            }))

        }
        else {
            MYDROP.alert('error', 'No Internet Connection', "Please Check Your Device Connection");
        }
    }

    const PincodeApiFunction = async () => {
        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {
            let data = {}
            dispatch(pincodeApi(data, res => {
                if (res.status == 200) {
                    setPostalCode(res.data[0]);

                }

            }))

        }
        else {
            MYDROP.alert('error', 'No Internet Connection', "Please Check Your Device Connection");
        }
    }


    const AddressRenderItem = (item) => {
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
                    <TouchableOpacity onPress={() =>UserAddressdelete(item)} style={styles.AddressRemoveMainContainer}>
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
                        page={page}
                        setPage={setPage}
                        Hnumber={Hnumber}
                        setHnumber={setHnumber}
                        address={address}
                        setAddress={setAddress}
                        landMark={landMark}
                        setLandMark={setLandMark}
                        city={city}
                        setCity={setCity}
                        postalCode={postalCode}
                        setPostalCode={setPostalCode}
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
