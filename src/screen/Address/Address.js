import React, { useRef, useState } from 'react';
import { View, Text, Image, FlatList, } from 'react-native';
import styles from './styles';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, TitleTextCompnent } from '../../components/sharedComponents';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RemoveIcon, EditIcon } from '../../constants/Imgconstants';
import { CustomBtn } from '../../components/CustomBtn';
import { color } from '../../utils/color';
import AddAddress from './AddAddress';

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

    const OnAddAddressPress = () => {
        setPage(page + 1);
    }
    const AddressRenderItem = (item) => {
        return (
            <View style={styles.AddressMainContainer}>
                <View style={styles.AddressTextMainContainer}>
                    <Text style={styles.AddressMainFontStyle}>
                        {item.name}
                    </Text>
                    <Text style={styles.AddressFontStyle}>
                        {item.Address}
                    </Text>
                </View>
                <View style={styles.AddressBottomMainContainer}>
                    <View style={styles.AddressRemoveMainContainer}>
                        <Image
                            source={RemoveIcon}
                            style={styles.removeIconStyle}
                        />
                        <Text style={styles.removeTextStyle}>
                            Remove
                        </Text>
                    </View>
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
                                data={AddressItems}
                                // contentContainerStyle={{ backgroundColor : 'pink'}}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => AddressRenderItem(item)}
                            />
                        </View>

                        <CustomBtn
                            btnText={"+   Add New Address"}
                            containerStyle={{
                                marginTop: hp("5%"),
                                borderStyle: 'dotted',
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
