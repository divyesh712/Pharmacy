import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';
import MyStatusBar from '../../components/Statusbar';
import { HeaderComponent, TitleTextCompnent, SearchComponent, MedicationModal } from '../../components/sharedComponents';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ChevronRight , PrescriptionIcon } from '../../constants/Imgconstants';
import styles from './styles';
import MedicineRenderComponent from '../../components/MedicineRenderComponent';
import { CustomBtn } from '../../components/CustomBtn';
import { color } from '../../utils/color';

const Medicine = (props) => {

    const OnDrawerPress = () => {
        props.navigation.openDrawer()
    }

    return (
        <View style={styles.container}>
            <MyStatusBar />

            <HeaderComponent
                headerText={"Hey Sherya"}
                OnDrawerPress={OnDrawerPress}
                basketItemExist={true}
            />

            <View style = {styles.titleMainContainer}>
                <View style = {styles.titleContainer}>
                    <Text style = {styles.mainTextStyle}>
                        All Medications
                    </Text>
                </View>
                <View style={styles.IconMainContainer}>
                    <Image
                    source={ChevronRight}
                    style = {styles.IconStyle}
                    resizeMode = "contain"
                    />
                </View>
                <View style = {styles.SecondTitleMainContainer}>
                    <Text style = {styles.secondTextStyle}>
                        Dolo 650
                    </Text>
                </View>
            </View>

            <View style = {styles.PresMainContainer}>
                <View style = {styles.PresIconContainer}>
                    <Image
                    source={PrescriptionIcon}
                    resizeMode = "contain"
                    style = {styles.PresIconStlye}
                    />
                </View>
                <View style={styles.PresTextMaiNContainer}>
                    <Text style = {styles.PresTextStyle}>
                        Prescription Required
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Medicine;
