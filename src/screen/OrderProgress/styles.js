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
    orderMainContainer : {
        height : hp("20%"),
        width  :wp("86%"),
        alignSelf : 'center',
        flexDirection : 'row',
        alignItems : 'center',
    },
    OdereImgMainContainer : {
        height : hp("20%"),
        width : wp("25%"),
        justifyContent : 'center',
        alignItems : 'center',
    },
    OrderImgStyle : {
        height : hp("16%"),
        width  :hp("12%"),
    },
    orderTextMainContainer : {
        height : hp("20%"),
        width : wp("60%"),
        justifyContent : 'center',
        paddingLeft : wp("3%"),
    },
    orderTextContainer : {
        height : hp("7%"),
        width  :wp("60%"),
        justifyContent : 'center'
    },
    OrderTextStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.msmall,
        color : color.mainfont,
        lineHeight : hp("3.4%")
    },
    OrderSubTitleContainer : {
        height : hp("4%"),
        width : wp("60%"),
        flexDirection : 'row',
        alignItems : 'center'
    },
    OrderPriceMainContainer : {
        height : hp("3%"),
        width : wp("15%"),
    },
    ordertTextStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.msmall,
    },
    OrderDateMainContainer : {
        height : hp("6%"),
        width :wp("86%"),
        alignSelf : 'center',
        justifyContent : 'center'
    },
    OrderDateTExtStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.msmall,
        color : color.mainfont
    }

})