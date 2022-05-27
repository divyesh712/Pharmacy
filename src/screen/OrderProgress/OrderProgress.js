import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';
import { HeaderComponent, OrderProgressReport } from '../../components/sharedComponents';
import MyStatusBar from '../../components/Statusbar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';
import { Product1 } from '../../constants/Imgconstants';
import { color } from '../../utils/color';
import { CustomBtn } from '../../components/CustomBtn';

const OrderProgress = (props) => {

    const [order, setOrder] = useState(props.route.params.order);
    
    return (
        <View style={styles.container}>
            <MyStatusBar />
            <HeaderComponent
                headerText={"Hey Sherya"}
                basketItemExist={true}
                OnDrawerPress = {() => {props.navigation.openDrawer()}}
            />

            <View style={styles.orderMainContainer}>
                <View style={styles.OdereImgMainContainer}>
                    <Image
                        source={Product1}
                        style={styles.OrderImgStyle}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.orderTextMainContainer}>
                    <View style={styles.orderTextContainer}>
                        <Text style={styles.OrderTextStyle}>
                            {order.title}
                        </Text>
                    </View>
                    <View style={styles.OrderSubTitleContainer}>
                        <View style={styles.OrderPriceMainContainer}>
                            <Text style={[styles.ordertTextStyle, { color: color.mainfont }]}>
                                {order.totalPrice}
                            </Text>
                        </View>
                        <View style={styles.OrderPriceMainContainer}>
                            <Text style={[styles.ordertTextStyle, { color: color.secondfont }]}>
                                {order.oldPrice}
                            </Text>
                            <View style = {styles.oldPricelineStyle }>

                                </View>
                        </View>
                        <View style={styles.OrderPriceMainContainer}>
                            <Text style={[styles.ordertTextStyle, { color: color.highlighfont }]}>
                                {order.discount} off
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.OrderDateMainContainer}>
                <Text style={styles.OrderDateTExtStyle}>
                    {order.date}
                </Text>
            </View>

            <OrderProgressReport
                orderProgressStep={"A"}
                orderProgressText={"Order Processing"}
                orderProgressComplete={true}
                containerStyle={{ marginTop: hp("2%") }}
            />

            <OrderProgressReport
                orderProgressStep={"B"}
                orderProgressText={"Packed"}
            />

            <OrderProgressReport
                orderProgressStep={"C"}
                orderProgressText={"On its way"}
            />

            <OrderProgressReport
                orderProgressStep={"D"}
                orderProgressText={"Delivered"}
            />

            <CustomBtn
                btnText={"Cancel the Order"}
                containerStyle={{
                    backgroundColor: color.bg_main,
                    borderWidth: hp("0.3%"),
                    borderColor: color.mainfont,
                    marginTop  :hp("5%")
                }}
                TextStyle={{
                    color: color.mainfont
                }}
            />

            <CustomBtn
                btnText={"Add to Bag"}
                containerStyle = {{
                    marginTop : hp("3%")
                }}
            />
        </View>
    )
}

export default OrderProgress;
