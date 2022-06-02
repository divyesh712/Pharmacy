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
    },
    MediTextContainer : {
        height : hp("10%"),
        width : wp("86%"),
        alignSelf : 'center',
        justifyContent : 'center',
    },
    MediFontStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.large,
        color : color.mainfont
    },
    sliderImgMainContainer : {
        height : hp("30%"),
        width : wp("86%"),
        alignSelf :'center',
        justifyContent : 'center',
        alignItems : "center",
    },
    sliderImgStyle : {
        height : hp("28%"),
        width : wp("70%"),
    },
    sliderDotStyle  :{
        height  :hp("2%"),
        width  : hp("2%"),
        borderRadius : hp("5%"),
        borderWidth : hp("0.2%"),
        borderColor : color.dotColor,
    },
    desMainContainer : {
        height : hp("16%"),
        width : wp("86%"),
        backgroundColor : color.ModalBgColor,
        alignSelf : 'center',
        borderRadius : hp("1%")
    },
    desTitleMainContainer : {
        height : hp("4%"),
        width  :wp("79%"),
        alignSelf : 'center',
        justifyContent : 'center',
        marginTop : hp("1%"),
    
    },
    desTitleTextStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.msmall,
        color : color.mainfont,
    },
    dessubtitleMaincontainer : {
        height : hp("10%"),
        width : wp("78%"),
        alignSelf : 'center'
    },
    dessubtitleFontStyle : {
        fontFamily : fontFamily.REGULAR_FORT_FAMILY,
        fontSize : fontSize.vsmall,
        color : color.mainfont,
    },
    mrpMainContainier : {
        height : hp("3%"),
        width : wp("86%"),
        alignSelf : 'center',
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : hp("2%"),
    },
    mrpTextContainer : {
        height : hp("3%"),
        width : wp("25%"),
        justifyContent : 'center',
    },
    mrpTextStyle : {
        fontFamily : fontFamily.REGULAR_FORT_FAMILY,
        fontSize : fontSize.msmall,
        color : color.mainfont,
    },
    priceMainContainer : {
        height : hp("5%"),
        width : wp("86%"),
        alignSelf : 'center',
        justifyContent : 'center',
    },
    manuMainContainer : {
        height : hp("12%"),
        width : wp("86%"),
        alignSelf : 'center',
        justifyContent : 'center',
    },
    manufactureContainer : {
        height : hp("3%"),
        width : wp("86%"),
        alignItems : 'center',
        flexDirection : 'row',
    },
    ManuTextStyle : {
        fontFamily : fontFamily.REGULAR_FORT_FAMILY,
        fontSize : fontSize.lsmall,
        color : color.secondfont,
    },
    btnMainContainer : {
        height : hp("7%"),
        width : wp("86%"),
        alignSelf : 'center',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    BtnContainer : {
        height : hp("7%"),
        width : wp("54%"),
        backgroundColor : color.mainfont,
        borderRadius : hp("1%"),
        justifyContent : 'center',
        alignItems : 'center',
    },
    BtnTextStyle : {
        fontSize : fontSize.regular,
        color : color.bg_main,
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
    },
    CountMainContainer : {
        height : hp("7%"),
        width  :wp("30%"),
        backgroundColor : color.mainfont,
        borderRadius : hp("1%"),
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
    },
    countIconMainContainer  :{
        height  :hp("4%"),
        width  :hp("4%"),
        backgroundColor: color.countBgColor,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : hp("5%")
    },
    CountTextMainContainer : {
        height  :hp("5%"),
        width : wp("10%"),
        alignItems : 'center',
        justifyContent : 'center',
    },
    CountTextStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.regular,
        color : color.bg_main,
    },
    alterMainContainer : {
        height : hp("7%"),
        width  :wp("86%"),
        backgroundColor:color.bg_main,
        alignSelf : "center",
        borderRadius : hp("1%"),
        borderWidth  :hp("0.2%"),
        borderColor : color.mainfont,
        marginTop : hp("2%"),
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
    },
    alterTextMainContainer  :{
        height  :hp("5%"),
        width : wp("55%"),
        justifyContent : 'center',
        alignItems : 'center',
    },
    alterTextStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.regular,
        color : color.mainfont,
    },
    alterIconMainContainer : {
        height : hp("5%"),
        width : wp("10%"),
        justifyContent : 'center',
    },
    alterIconStyle : {
        height : hp("3%"),
        width : hp("3%")
    },
    InfoMainContainer  :{
        height : hp("5%"),
        width : wp("86%"),
        alignSelf : 'center',
        marginTop : hp("3%"),
        justifyContent : 'center',
    },
    InfoTextStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.mlarge,
        color : color.mainfont
    },
    questionMAinContainer : {
        minHeight  :hp("15%"),
        width  :wp("86%"),
        marginTop : hp("1%"),
        alignSelf : 'center',
        marginBottom : hp("5%"),
    },
    qestionTextStyle : {
        fontSize  :fontSize.lsmall,
        color : color.mainfont,
        lineHeight  :hp("3.1%")
    }

})