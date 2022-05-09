import React from 'react';
import { View } from 'react-native';
import { AddAddressTextInput } from '../../components/sharedComponents';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CustomBtn } from '../../components/CustomBtn';

const AddAddress = ({
    page,
    setPage,
    Hnumber,
    setHnumber,
    address,
    setAddress,
    landMark,
    setLandMark,
    city,
    setCity,
    postalCode,
    setPostalCode,
}) => {
    return (
        <View>
            <AddAddressTextInput
                AddressValue={Hnumber}
                onAddressChangeText={setHnumber}
                placeholderText={"House Number"}
                containerStyle={{ marginTop: hp("6%") }}
            />

            <AddAddressTextInput
                AddressValue={address}
                onAddressChangeText={setAddress}
                placeholderText={"Address"}
                containerStyle={{ marginTop: hp("5%") }}
            />

            <AddAddressTextInput
                AddressValue={landMark}
                onAddressChangeText={setLandMark}
                placeholderText={"Land Mark(optional)"}
                containerStyle={{ marginTop: hp("5%") }}
            />

            <AddAddressTextInput
                AddressValue={city}
                onAddressChangeText={setCity}
                placeholderText={"City"}
                containerStyle={{ marginTop: hp("5%") }}
            />

            <AddAddressTextInput
                AddressValue={postalCode}
                onAddressChangeText={setPostalCode}
                placeholderText={"Postal Code"}
                containerStyle={{ marginTop: hp("5%") }}
            />

            <CustomBtn
            btnText={"Save this Address"}
            containerStyle = {{marginTop : hp("6%")}}
            OnBtnPress = {()=> {setPage(0)}}
            />
        </View>
    )
}

export default AddAddress;