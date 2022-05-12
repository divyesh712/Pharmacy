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
    mainContainer : {
        height  :hp("12%"),
        width : wp("86%"),
        marginTop : wp("6%"),
        alignSelf : 'center',
        flexDirection : 'row',
        justifyContent : "space-between",
    },
    catMainContainer : {
        height : hp("12%"),
        width : wp("40%"),
        borderRadius : hp("1%"),
        borderWidth  :hp("0.1%"),
        borderColor : color.catBorderColor,
        alignItems : 'center',
        justifyContent : 'center',
    },
    catImgContainer : {
        height : hp("7%"),
        width : wp("30%"),
        justifyContent : 'flex-end',
        alignItems : 'center',
    },
    CatImgStyle : {
        height : hp("5%"),
        width : hp("5%"),
    },
    catTextContainier : {
        height : hp("3%"),
        width : wp("40%"),
        alignItems : 'center',
        justifyContent : 'center',
    },
    catTextStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.vsmall,
        color : color.mainfont,
    }
})