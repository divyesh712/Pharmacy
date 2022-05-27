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
    salttext:{
        color: color.lineColor,
        fontSize: fontSize.xsmall ,
        fontFamily: fontFamily.REGULAR_FORT_FAMILY, 
    },
    tablettext:{
        color: color.mainfont,
        fontSize: fontSize.xsmall ,
        fontFamily: fontFamily.REGULAR_FORT_FAMILY, 
    },
    alterFlatlistMainContainer1: {
        height: hp("12%"),
        width: wp("86%"),
        alignSelf: 'center',
        borderBottomColor: color.lineColor,
        borderBottomWidth: hp("0.1%"),
        justifyContent:"center"
    },
    alterListContainer1: {
        height: hp("10%"),
        width: wp("86%"),
        flexDirection: 'row',
    },
    aleterImgContainer1: {
        height: hp("10%"),
        width: wp("25%"),
        justifyContent: 'center',
        alignItems: 'center',
    },
    alterImgStyle1: {
        height: hp("8%"),
        width: wp("20%"),
    },
    alterListtitleMAinContainer1: {
        height: hp("10%"),
        width: wp("60%"),
        justifyContent: 'center',
    },
    alterListTitleContainer1: {
        height: hp("4%"),
        width: wp("60%"),
        justifyContent: 'center'
    },
    alterListTitleTextStyle1: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.xsmall,
        color: color.mainfont
    },
    alterListSubtitleMainContainer1: {
        height: hp("4%"),
        width: wp("60%"),
        flexDirection: 'row',
        alignItems: 'center',
    },
    alterListPriceStyle1: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.msmall,
        color: color.mainfont
    },
    alterPercentageStyle1: {
        fontFamily: fontFamily.REGULAR_FORT_FAMILY,
        fontSize: fontSize.msmall,
        color: color.secondfont,
        paddingHorizontal: wp("2%"),
    },
    oldPricelineStyle : {
        height : hp("0.2%"),
        width : wp("12%"),
        backgroundColor : color.lineColor,
        position : "absolute",
        left: wp("2%"),
        top : hp("1.2%")
    },
    alterPackStyle1: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.msmall,
        color: color.secondfont,
    },
    alterPackegeStyle1: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.msmall,
        color: color.mainfont,
        paddingHorizontal: wp("2%"),
    },
    alterFlatlistMainContainer: {
        height: hp("23%"),
        width: wp("86%"),
        alignSelf: 'center',
        borderBottomColor: color.lineColor,
        borderBottomWidth: hp("0.1%"),
        justifyContent:"center"
    },
    alterListContainer: {
        height: hp("14%"),
        width: wp("86%"),
        flexDirection: 'row',
        // backgroundColor:"pink"
    },
    aleterImgContainer: {
        height: hp("14%"),
        width: wp("25%"),
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:"yellow"
    },
    alterImgStyle: {
        height: hp("8%"),
        width: wp("20%"),
        
    },
    alterListtitleMAinContainer: {
        height: hp("14%"),
        width: wp("60%"),
        justifyContent:'center'
    },
    alterListTitleContainer: {
        height: hp("3.5%"),
        width: wp("60%"),
        justifyContent: 'center',

    },
    mainaltertitle:{
        height: hp("4%"),
        width: wp("60%"),
        alignSelf:"center",
        flexDirection:"row",
      
    },
    alterListTitleContainer2: {
        height: hp("3.5%"),
        width: wp("26%"),
        justifyContent: 'center',
    },
    alterListTitleTextStyle2: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.xsmall,
        color: color.mainfont
    },
    alterListTitleContainer3: {
        height: hp("4%"),
        width: wp("30%"),
        // justifyContent: 'center',
      
    },
    alterListTitleTextStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.xsmall,
        color: color.mainfont
    },
    malterListTitleTextStyle:{
        fontFamily: fontFamily.REGULAR_FORT_FAMILY,
        fontSize: fontSize.msmall,
        color: color.secondfont,
    },
    LalterListTitleTextStyle:{
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.lsmall,
        color: color.mainfont
    },
    alterListSubtitleMainContainer: {
        height: hp("3.5%"),
        width: wp("60%"),
        flexDirection: 'row',
        alignItems: 'center',
    },
    alterListPriceStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.msmall,
        color: color.mainfont
    },
    alterPercentageStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.lsmall,
        color: color.redColor,
        paddingHorizontal: wp("2%"),
        
    },
    alterPackStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.msmall,
        color: color.secondfont,
    },
    alterPackegeStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.msmall,
        color: color.mainfont,
        paddingHorizontal: wp("2%"),
    },
    ProductSecondMainContainer: {
        height: hp("5%"),
        width: wp("86%"),
        flexDirection: 'row',
        alignItems: 'center',
    },
    ProductBagMainContainer: {
        height: hp("5%"),
        width: wp("15%"),
        justifyContent: 'center',
    },
    ProductBagIconStyle: {
        height: hp("3%"),
        width: hp("3%"),
    },
    ProductBottomTextContainer: {
        height: hp("5%"),
        width: wp("30%"),
        justifyContent: 'center',
    },
    ProductBottomTextStyle: {
        fontSize: fontSize.msmall,
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        color: color.mainfont,
    },
    ProductCountMainContainer: {
        height: hp("5%"),
        width: wp("40%"),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: wp("2%")
    },
    CountIconMainContainer: {
        height: hp("4.4%"),
        width: hp("4.4%"),
        backgroundColor: color.countColor,
        borderRadius: hp("6%"),
        justifyContent: 'center',
        alignItems: 'center'
    },
    CountIconStyle: {
        fontSize: fontSize.regular,
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        color: color.mainfont
    },
    CountTextMainContiner: {
        height: hp("4%"),
        width: wp("15%"),
        justifyContent: 'center',
        alignItems: 'center'
    },
    CountTextStyle: {
        fontSize: fontSize.msmall,
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        color: color.mainfont
    },
    alterTitleMainContainer: {
        height: hp("6%"),
        width: wp("86%"),
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft:wp('2%')
    },
    alterTitleTextStyle: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.mlarge,
        color: color.mainfont
    },
    subtitleMainContainer: {
        height: hp("6%"),
        width: wp("86%"),
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft:wp('2%')
    },
    subtitleContainer: {
        fontFamily: fontFamily.REGULAR_FORT_FAMILY,
        fontSize: fontSize.lsmall,
        color: color.mainfont
    },
    alterListContainer3: {
        height: hp("10%"),
        width: wp("86%"),
        flexDirection: 'row',
    },
    aleterImgContainer3: {
        height: hp("10%"),
        width: wp("25%"),
        justifyContent: 'center',
        alignItems: 'center',
    },
    alterImgStyle3: {
        height: hp("8%"),
        width: wp("20%"),
    },
    alterListtitleMAinContainer3: {
        height: hp("10%"),
        width: wp("60%"),
        justifyContent: 'center',
    },
    alterListTitleContainer3: {
        height: hp("3.5%"),
        width: wp("60%"),
        justifyContent: 'center'
    },
    alterListTitleTextStyle3: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.xsmall,
        color: color.mainfont
    },
    alterListSubtitleMainContainer3: {
        height: hp("4%"),
        width: wp("60%"),
        flexDirection: 'row',
        alignItems: 'center',
    },
    alterListPriceStyle3: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.msmall,
        color: color.mainfont
    },
    alterPercentageStyle3: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.lsmall,
        color: color.redColor,
        paddingHorizontal: wp("2%")
    },
    alterPackStyle3: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.msmall,
        color: color.secondfont,
    },
    alterPackegeStyle3: {
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
        fontSize: fontSize.msmall,
        color: color.mainfont,
        paddingHorizontal: wp("2%"),
    },
 
});