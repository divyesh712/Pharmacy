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
    loadingStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.3)"
    },
})