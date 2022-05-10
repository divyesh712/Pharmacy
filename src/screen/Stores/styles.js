import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../utils/color';
import fontSize from '../../utils/fontsize';
import fontFamily from '../../utils/fontFamily';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.bg_main
    },
    StoresMAinContainer : {
        height : hp("20%"),
        width : wp("86%"),
        alignSelf : 'center',
        marginTop : hp("3.5%"),
        borderBottomColor : color.lineColor,
        borderBottomWidth : hp("0.2%")
    },
    StoresContainer : {
        height : hp("14%"),
        width : wp("70%"),
    },
    StoreTextStyle : {
        fontFamily : fontFamily.REGULAR_FORT_FAMILY,
        fontSize : fontSize.xsmall,
        color : color.mainfont,
        lineHeight : hp("3.5%")
    },
    StoreIconMainContainer : {
        height : hp("6%"),
        width : wp("86%"),
        justifyContent:'center',
        alignItems : 'flex-end'
    },
    StoreIconContainer : {
        height : hp("6%"),
        width  :wp("15%"),
    },
    StoreIconStyle : {
        height : hp("5%"),
        width : hp("5%")
    }
})