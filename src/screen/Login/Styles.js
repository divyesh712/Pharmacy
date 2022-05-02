
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
    flatlistcontainer: {
        height: hp('65%'),
        width: wp('100%'),
        backgroundColor: 'red',
    },
    SecondMainContainer : {
        height : hp("35%"),
        width : wp("100%"),
        backgroundColor : color.bg_main
    },
    titleMainContainer : {
        height :hp("10%"),
        width :wp("86%"),
        alignSelf :'center',
        justifyContent :'center',
    },
    titleFontStyle : {
        fontSize : fontSize.large,
        color : color.mainfont,
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
    },
    textInputMainContainer : {
        height :hp("9%"),
        width : wp("86%"),
        alignSelf : 'center',
        marginTop : hp("1%"),
        justifyContent : 'flex-end',
    },
    BtnMainContainer : {
        height :hp("7%"),
        width :wp("86%"),
        backgroundColor : color.mainfont,
        borderRadius : hp("1%"),
        justifyContent : 'center',
        marginTop :hp("3%"),
        alignSelf : 'center',
        alignItems :'center'
    },
    BtnTextStyle : {
        fontSize : fontSize.regular,
        color : color.bg_main,
        fontFamily : fontFamily.BOLD_FONT_FAMILY,
    },
    TextInputContaier : {
        height :hp("6%"),
        width : wp("86%"),
        flexDirection : 'row',
        alignItems :'center'
    },
    TextinputTextContainer : {
        height :hp("5%"),
        width :wp("20%"),
        justifyContent :'center',
        alignItems :'center'
    },
    regularFontStyle : {
        fontSize : fontSize.regular,
        color : color.mainfont,
        fontFamily : fontFamily.REGULAR_FORT_FAMILY,
    },
    TextInputStyle : {
        height :hp("5%"),
        width : wp("60%"),
        justifyContent : 'center',
        alignItems :'center'
    },
    LastBottomContainer : {
        height :hp("5%"),
        width :wp("86%"),
        justifyContent : 'center',
        alignItems :'flex-end',
        alignSelf :'center',
        flexDirection : 'row'
    },
    BottomTextFontStyle : {
        fontSize : fontSize.xsmall,
        fontFamily : fontFamily.REGULAR_FORT_FAMILY
    }
});