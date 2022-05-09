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
        marginTop : hp("2%")
    },
    subtitleFontStyle : {
        fontSize : fontSize.regular,
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        color : color.mainfont
    },
    ImgMainContainer : {
        height : hp("25%"),
        width :wp("86%"),
        alignSelf : 'center',
        marginTop : hp("3%")
    },
    imgContainer : {
        height : hp("25%"),
        width : wp("86%"),
 
    }
})