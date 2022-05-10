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
    TextMainContainer : {
        height : hp("6%"),
        width : wp("86%"),
        marginTop : hp("3%"),
        alignSelf : 'center',
        justifyContent : 'center',
    },
    TextStyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.mlarge,
        color : color.mainfont
    }
})