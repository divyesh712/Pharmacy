
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MyStatusBar from '../../components/Statusbar';
import styles from './styles';
import { HeaderComponent, TitleTextCompnent, SearchComponent, AlterModal } from '../../components/sharedComponents';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Medicine3, BagIcon } from '../../constants/Imgconstants';
import { FlatList } from 'react-native-gesture-handler';

const TabletData = [
    {
        id: 1,
        image: Medicine3,
        title: "Crocin Advance Tablet",
        price: "₹50",
        percentage: "₹2999",
        package: "25",
    },

]
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

]
const TabletData1 = [
    {
        id: 1,
        image: Medicine3,
        title: "Crocin Advance Tablet",
        price: "₹50",
        percentage: "(+100%)",
        package: "25",
    },

]

const FindGeneric = () => {

    const [alterModalVisible, setAlterModalVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const OnAlternativesPress = () => {
        setAlterModalVisible(true);
    }

    return (
        <View style={styles.container}>
            <MyStatusBar />
            <HeaderComponent
                headerText={"Hey Sherya"}
                basketItemExist={true}
                OnDrawerPress={() => { props.navigation.openDrawer() }}
            />
            <SearchComponent
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                placeholderText={"Search for anything"}
                searchContainerStyle={{
                    marginTop: hp("3%")
                }}
            />
            <View style={{ height: hp('10%'), width: wp('86%'), flexDirection: "row", alignItems: 'center', alignSelf: "center", }}>
                <View style={{ height: hp('6%'), width: wp('36%'), backgroundColor: '#DFF1F9', justifyContent: "center" }}>
                    <Text style={styles.salttext}>Salt Composition:</Text>
                </View>
                <View style={{ height: hp('6%'), width: wp('50%'), backgroundColor: '#DFF1F9', justifyContent: "center" }}>
                    <Text style={styles.tablettext}>Paracetamol (650mg)</Text>
                </View>
            </View>
            <View style={{ height: hp('12%'), width: wp('86%'), alignSelf: "center", }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    data={TabletData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <View style={styles.alterListContainer1}>
                            <View style={styles.aleterImgContainer1}>
                                <Image
                                    source={item.image}
                                    resizeMode="contain"
                                    style={styles.alterImgStyle1}
                                />
                            </View>
                            <View style={styles.alterListtitleMAinContainer1}>
                                <View style={styles.alterListTitleContainer1}>
                                    <Text style={styles.alterListTitleTextStyle1}>
                                        {item.title}
                                    </Text>
                                </View>
                                <View style={styles.alterListSubtitleMainContainer1}>
                                    <Text style={styles.alterListPriceStyle1}>
                                        {item.price}
                                    </Text>
                                    <View>
                                        <Text style={styles.alterPercentageStyle1}>
                                            {item.percentage}
                                        </Text>

                                    </View>

                                    <Text style={styles.alterPackStyle1}>
                                        Pack of
                                    </Text>
                                    <Text style={styles.alterPackegeStyle1}>
                                        {item.package}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    }
                />

            </View>
            <View style={{ height: hp('15%'), width: wp('100%'), alignSelf: "center", backgroundColor: '#DFF1F9', justifyContent: "center", }}>
                <View style={styles.alterTitleMainContainer}>
                    <Text style={styles.alterTitleTextStyle}>
                        Alternatives
                    </Text>
                </View>

                <View style={styles.subtitleMainContainer}>
                    <Text style={styles.subtitleContainer}>
                        These are of same composition but from different manufactures. They work the same
                    </Text>
                </View>
            </View>
            <View style={{ height: hp('25%'), width: wp('86%'), alignSelf: "center" }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    data={medicineItem}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <View style={styles.alterFlatlistMainContainer}>
                            <View style={styles.alterListContainer}>
                                <View style={styles.aleterImgContainer}>
                                    <Image
                                        source={item.image}
                                        resizeMode="contain"
                                        style={styles.alterImgStyle}
                                    />
                                </View>
                                <View style={styles.alterListtitleMAinContainer}>
                                    <View style={styles.alterListTitleContainer}>
                                        <Text style={styles.alterListTitleTextStyle}>
                                            {item.title}
                                        </Text>
                                    </View>
                                    <View style={styles.mainaltertitle}>
                                        <View style={styles.alterListTitleContainer2}>
                                            <Text style={styles.malterListTitleTextStyle}>
                                                {item.title1}
                                            </Text>
                                        </View>
                                        <View style={styles.alterListTitleContainer3}>
                                            <Text style={styles.LalterListTitleTextStyle}>
                                                {item.title2}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.alterListSubtitleMainContainer}>
                                        <Text style={styles.alterListPriceStyle}>
                                            {item.price}
                                        </Text>
                                        <Text style={styles.alterPercentageStyle}>
                                            {item.percentage}
                                        </Text>
                                        <Text style={styles.alterPackStyle}>
                                            Pack of
                                        </Text>
                                        <Text style={styles.alterPackegeStyle}>
                                            {item.package}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.ProductSecondMainContainer}>
                                <View style={[styles.ProductBagMainContainer, { alignItems: 'center' }]}>
                                    <Image
                                        source={BagIcon}
                                        style={styles.ProductBagIconStyle}
                                    />
                                </View>
                                <View style={styles.ProductBottomTextContainer}>
                                    <Text style={styles.ProductBottomTextStyle}>
                                        {"Add to Bag"}
                                    </Text>
                                </View>
                                <View style={styles.ProductCountMainContainer}>
                                    <View style={styles.CountIconMainContainer}>
                                        <Text style={styles.CountIconStyle}>
                                            -
                                        </Text>
                                    </View>
                                    <View style={styles.CountTextMainContiner}>
                                        <Text style={styles.CountTextStyle}>
                                            01
                                        </Text>
                                    </View>
                                    <View style={styles.CountIconMainContainer}>
                                        <Text style={styles.CountIconStyle}>
                                            +
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    }
                />
            </View>
            <View style={{ height: hp('12%'), width: wp('86%'), alignSelf: "center", }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    data={TabletData1}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <View style={styles.alterListContainer3}>
                            <View style={styles.aleterImgContainer3}>
                                <Image
                                    source={item.image}
                                    resizeMode="contain"
                                    style={styles.alterImgStyle3}
                                />
                            </View>
                            <View style={styles.alterListtitleMAinContainer3}>
                                <View style={styles.alterListTitleContainer3}>
                                    <Text style={styles.alterListTitleTextStyle3}>
                                        {item.title}
                                    </Text>
                                </View>
                                <View style={styles.alterListSubtitleMainContainer3}>
                                    <Text style={styles.alterListPriceStyle3}>
                                        {item.price}
                                    </Text>
                                    <Text style={styles.alterPercentageStyle3}>
                                        {item.percentage}
                                    </Text>
                                    <Text style={styles.alterPackStyle3}>
                                        Pack of
                                    </Text>
                                    <Text style={styles.alterPackegeStyle3}>
                                        {item.package}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    }
                />

            </View>

        </View>
    );
};
export default FindGeneric;
