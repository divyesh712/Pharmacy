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
    BlankViewMainContainer : {
        height : hp("20%"),
        width : wp("86%"),
        backgroundColor : color.light_bg,
        alignSelf : 'center',
        borderRadius : hp("1%"),
        marginTop : hp("3%"),
        marginBottom : hp("1.5%")
    },
    categoriesMainContainer : {
        height : hp("15%"),
        width : wp("86%"),
        alignSelf : 'center',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    BottomTextContainer : {
        height : hp("8%"),
        width : wp("86%"),
        alignSelf : 'center',
        justifyContent : 'center',
    },
    BottomTextStyle : {
        fontSize : fontSize.regular,
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        color : color.mainfont
    },
})