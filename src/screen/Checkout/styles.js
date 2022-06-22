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
    subTitleMainContainer : {
        height : hp("4%"),
        width : wp("86%"),
        alignSelf : 'center',
        flexDirection : 'row'
    },
    subtitleFontStyle : {
        fontSize : fontSize.regular,
        fontFamily : fontFamily.REGULAR_FORT_FAMILY,
        color : color.mainfont
    },
    subtitlePriceFontStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.regular,
        color : color.mainfont
    },
    selectedAddressContainer : {
        height : hp("6%"),
        width : wp("86%"),
        marginTop : hp("2.5%"),
        alignSelf : 'center',
        justifyContent : 'center',
    },
    selectedAddressStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.mlarge,
        color : color.mainfont,
    },
    radioButtonMainContainer : {
        height  :hp("18%"),
        width  :wp("86%"),
        alignSelf : 'center',
        flexDirection : 'row',
    },
    radioButtonContainer : {
        height : hp("18%"),
        width : wp("10%"),
    },
    radioTextMAinContainer : {
        height  :hp("18%"),
        width  :wp("70%"),
        justifyContent : 'center',
    },
    radioTextContainer : {
        height  :hp("4%"),
        width  :wp("70%"),
        justifyContent : 'center',
    },
    radioTextStyle : {
        fontFamily : fontFamily.BLACK_FONT_FAMILY,
        fontSize : fontSize.xsmall,
        color : color.mainfont,
    },
    radioSubTitleStyle :{
        fontFamily : fontFamily.REGULAR_FORT_FAMILY,
        fontSize : fontSize.xsmall,
        color : color.mainfont,
        lineHeight : hp("3.3%")
    },
    MrpMainContainer : {
        height : hp("18%"),
        width  :wp("86%"),
        alignSelf : 'center',
        marginTop : hp("4%")
    },
    MrpFirstContainer  :{
        height : hp("12%"),
        width  :wp("70%"),
        alignSelf : 'center',
        borderBottomColor : color.mainfont,
        borderBottomWidth : hp("0.2%"),
    },
    mrpTitleMainContainer : {
        height  :hp("3.5%"),
        width : wp("70%"),
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
    },
    mrpMainTextStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.msmall,
        color : color.mainfont,
        lineHeight : hp("3%"),
    },
    mrpsubtitleTextStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.msmall,
        color : color.secondfont,
        lineHeight : hp("3%"),
    },
    mrpTotalMAinContainer  :{
        height  :hp("6%"),
        width  :wp("70%"),
        alignSelf : 'center',
        justifyContent : 'center',
    },
    AddAddressMainContainer  :{
        height : hp("42%"),
        width : wp("86%"),
        alignSelf : 'center',
        marginTop : hp("2%")
    },
    AddAddressTitleMainContainer  :{
        height  :hp("5%"),
        width : wp("86%"),
        justifyContent : 'center',
    },
    AddAddressStyle  :{
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.regular,
        color : color.mainfont,
    },
    PresMainContainer : {
        height : hp("7%"),
        width : wp("86%"),
        backgroundColor : color.secondary_bg,
        alignSelf : 'center',
        borderRadius : hp("1%"),
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : hp("1%"),
        justifyContent : 'center',
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
    },
})