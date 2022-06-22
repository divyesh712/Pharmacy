import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../utils/color';
import fontSize from '../../utils/fontsize';
import fontFamily from '../../utils/fontFamily';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.bg_main,
    },
    ListMainContainer : {
        height : hp("70%"),
        width : wp("86%"),
        alignSelf : 'center',
        marginTop : hp("2%")
    },
    ListContainer : {
        height : hp("7%"),
        width  :wp("80%"),
        marginTop : hp("1%"),
        flexDirection : 'row',
        alignItems :'center',
        borderBottomColor : color.lineColor,
        borderBottomWidth : hp("0.2%")
    },
    ListTextMainContiner : {
        height : hp("6%"),
        width : wp("70%"),
        justifyContent : "center",
    },
    ListTextSyle : {
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
        fontSize : fontSize.msmall,
        color : color.mainfont,
    },
    ListIconMAinContainer : {
        height : hp("6%"),
        width : wp("10%"),
        justifyContent : 'center'
    },
    IconStyle : {
        height : hp("2%"),
        width  :hp("2%")
    }
})