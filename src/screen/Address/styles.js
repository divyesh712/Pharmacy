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
    AddressMainContainer : {
        height : hp("25%"),
        width : wp("86%"),
        alignSelf : 'center',
        marginTop : hp("4%"),
    },
    AddressTextMainContainer : {
        height : hp("18%"),
        width : wp("70%"),
    },
    AddressMainFontStyle : {
        fontFamily : fontFamily.BLACK_FONT_FAMILY,
        fontSize : fontSize.xsmall,
        color : color.mainfont,
        lineHeight : hp("3.5%")
    },
    AddressFontStyle : {
        fontFamily : fontFamily.REGULAR_FORT_FAMILY,
        fontSize : fontSize.xsmall,
        color : color.mainfont,
        lineHeight : hp("3.5%"),
    },
    AddressBottomMainContainer : {
        height : hp("7%"),
        width :wp("80%"),
        alignItems : 'center',
        borderBottomWidth : hp("0.2%"),
        borderBottomColor : color.lineColor,
        flexDirection : 'row',
    },
    AddressRemoveMainContainer : {
        height : hp("4%"),
        width : wp("70%"),
        flexDirection : 'row',
        alignItems : 'center',
        paddingLeft : wp("10%"),
    },
    removeIconStyle : {
        height : hp("3%"),
        width : hp("3%"),
    },
    removeTextStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.msmall,
        color : color.mainfont
    },
    AddressEditMianContainer : {
        height : hp("4%"),
        width : wp("10%"),
        justifyContent :'center'
    },
    EditIconStyle : {
        height : hp("3%"),
        width : hp("3%")
    }
})