import React, { useRef, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, } from 'react-native';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, TitleTextCompnent } from '../../components/sharedComponents';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GoogleMapIcon } from '../../constants/Imgconstants';

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

    const OnDrawerPress = () => {
        props.navigation.openDrawer()
    }

    const StoresRenderItem = (item) => {
        return(
            <View style = {styles.StoresMAinContainer}>
                <View style = {styles.StoresContainer}>
                    <Text style = {styles.StoreTextStyle}>
                        {item.Address}
                    </Text>
                </View>
                <View style = {styles.StoreIconMainContainer}>
                    <View style = {styles.StoreIconContainer}>
                        <Image
                        source={GoogleMapIcon}
                        style = {styles.StoreIconStyle}
                        resizeMode = "contain"
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
                OnDrawerPress={OnDrawerPress}
                basketItemExist={true}
            />

            <TitleTextCompnent
                title={"Our Stores"}
                containerStyle={{ marginTop: hp("2%") }}
            />

            <FlatList
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={StoresItems}
                // contentContainerStyle={{ backgroundColor : 'pink'}}
                keyExtractor={item => item.id}
                renderItem={({ item }) => StoresRenderItem(item)}
            />
        </View>
    )
}

export default Stores;
