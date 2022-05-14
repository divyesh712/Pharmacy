import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, SearchComponent, TitleTextCompnent } from '../../components/sharedComponents';
import { 
    Category4,
    Category6,
    Category7,
    Category8,
    Category9,
    Category10,
    Category11,
    Category12,
    Category13,
 } from '../../constants/Imgconstants';

export const CatergoryComponent = ({
    catImg,
    catText,
    OnCatPress,
}) => {
    return (
        <TouchableOpacity onPress={OnCatPress} style={styles.catMainContainer}>
            <View style={styles.catImgContainer}>
                <Image
                    source={catImg}
                    resizeMode="contain"
                    style={styles.CatImgStyle}
                />
            </View>
            <View style={styles.catTextContainier}>
                <Text style={styles.catTextStyle}>
                    {catText}
                </Text>
            </View>

        </TouchableOpacity>
    )
}

const AllCategories = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    const OnSupplimentPress = () => {
        props.navigation.navigate("Suppliments")
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
                title={"All Categories"}
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

            <View style={styles.mainContainer}>
                <CatergoryComponent
                    catText={"Medicine"}
                    catImg={Category4}
                />

                <CatergoryComponent
                    catText={"Beauty & Health"}
                    catImg={Category7}
                />
            </View>

            <View style={styles.mainContainer}>
                <CatergoryComponent
                    catText={"Home & Cleaning"}
                    catImg={Category10}
                />

                <CatergoryComponent
                    catText={"Suppliments"}
                    catImg={Category11}
                    OnCatPress = {OnSupplimentPress}
                />
            </View>

            <View style={styles.mainContainer}>
                <CatergoryComponent
                    catText={"Baby Care"}
                    catImg={Category8}
                />

                <CatergoryComponent
                    catText={"Hygiene"}
                    catImg={Category9}
                />
            </View>

            <View style={styles.mainContainer}>
                <CatergoryComponent
                    catText={"Sanitations"}
                    catImg={Category12}
                />

                <CatergoryComponent
                    catText={"General"}
                    catImg={Category13}
                />
            </View>



        </View>
    )
}

export default AllCategories;