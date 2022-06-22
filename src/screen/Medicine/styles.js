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
    titleMainContainer  :{
        height : hp("8%"),
        width  :wp("86%"),
        alignSelf : 'center',
        flexDirection : 'row',
        alignItems : 'center',
    },
    titleContainer : {
        height : hp("6%"),
        width : wp("35%"),
        justifyContent : 'center'
    },
    mainTextStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.regular,
        color : color.orangeColor
    },
    IconMainContainer : {
        height : hp("6%"),
        width :wp("10%"),
        justifyContent : 'center',
        alignItems : 'center'
    },
    IconStyle : {
        height : hp("2%"),
        width :hp("2%")
    },
    SecondTitleMainContainer : {
        height : hp("6%"),
        width : wp("40%"),
        justifyContent : 'center',
    },
    secondTextStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.regular,
        color : color.mainfont
    },
    PresMainContainer : {
        height : hp("7%"),
        width : wp("86%"),
        backgroundColor : color.secondary_bg,
        alignSelf : 'center',
        borderRadius : hp("1%"),
        flexDirection : 'row',
        alignItems : 'center',
    },
    PresIconContainer : {
        height : hp("5%"),
        width : wp("12%"),
        justifyContent : 'center',
        alignItems : 'center'
    },
    PresIconStlye : {
        height : hp("5%"),
        width : hp("5%")
    },
    PresTextMaiNContainer : {
        height : hp("5%"),
        width : wp("70%"),
        justifyContent : 'center',
    },
    PresTextStyle : {
        fontFamily : fontFamily.BLACK_FONT_FAMILY,
        fontSize : fontSize.regular,
        color : color.mainfont
    }
})