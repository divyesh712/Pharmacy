import React, { useRef, useState,useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, } from 'react-native';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, TitleTextCompnent,SearchComponent } from '../../components/sharedComponents';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GoogleMapIcon } from '../../constants/Imgconstants';
import AuthServices from '../../Api/authservices';
import NetworkCheck from '../../utils/networkcheck';
import MYDROP from '../../utils/Dropdown';
import styles from './styles';

const StoresItems = [
    {
        id: 1,
        Address: "Opposite Hard Rock cafe ,  Next to Shree Simandhar Swami Jain Temple , Worli , Mumbai, Maharastra 400013"
    },
    {
        id: 2,
        Address: "Opposite Hard Rock cafe ,  Next to Shree Simandhar Swami Jain Temple , Worli , Mumbai, Maharastra 400013"
    },
    {
        id: 3,
        Address: "Opposite Hard Rock cafe ,  Next to Shree Simandhar Swami Jain Temple , Worli , Mumbai, Maharastra 400013"
    },
]

const Stores = (props) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [storelocation, setstorelocation] = useState([]);
    const [isAppLoading, Setisapp_loding] = useState(false);

    const OnDrawerPress = () => {
        props.navigation.openDrawer()
    }
    useEffect(() => {
        Store_Location_View_All()
    }, [])
    
    const Store_Location_View_All = async () => {

        const isConnected = await NetworkCheck.isNetworkAvailable()

        if (isConnected) {
          
            try {

                const { data } = await AuthServices.Store_Location_View_all()

                if (data.status !== 200) {
                    Setisapp_loding(false)
                }
                if (data.status == 200) {
                    Setisapp_loding(false);
                    setstorelocation(data.data);
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

    const StoresRenderItem = (item) => {
        return(
            <View style = {styles.StoresMAinContainer}>
                <View style = {styles.StoresContainer1}>
                    <Text style = {styles.StoreTextStyle}>
                        {item.store_Name}
                    </Text>
                </View>
                <View style = {styles.StoresContainer}>
                    <Text style = {styles.StoreTextStyle}>
                        {item.store_Address}
                    </Text>
                </View>
                <View style = {styles.StoreIconMainContainer}>
                    <TouchableOpacity style = {styles.StoreIconContainer}>
                      <Text>{item.location_Link}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
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
                title={"Our Stores"}
                containerStyle={{ marginTop: hp("2%") }}
            />
                 <SearchComponent
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                placeholderText={"Search for anything"}
                searchContainerStyle={{
                    marginTop: hp("3%")
                }}
            />

            <FlatList
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={storelocation}
                // contentContainerStyle={{ backgroundColor : 'pink'}}
                keyExtractor={item => item.id}
                renderItem={({ item }) => StoresRenderItem(item)}
            />
        </View>
    )
}

export default Stores;
