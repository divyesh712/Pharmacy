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
    blankview:{
        height:hp('6%'),
    },
    mainview:{
        height:hp('9%'),
        width:wp('86%'),
        alignSelf:'center',
        flexDirection:"row",
        borderBottomWidth:wp('0.5%'),
        borderBottomColor:color.lineColor
    },
    calltext:{
        fontSize: fontSize.xsmall ,
        color: color.mainfont, 
        fontFamily: fontFamily.REGULAR_FORT_FAMILY,
    },
    contactText:{
        fontSize: fontSize.xsmall ,
        color: color.mainfont, 
        fontFamily: fontFamily.REGULAR_FORT_FAMILY,
        fontWeight:'700'
    },
    socialView:{
        height:hp('12%'),
        width:wp('86%'),
        flexDirection:'row',
        alignSelf:"center",
        justifyContent:'center',
        borderBottomWidth:wp('0.5%'),
        borderBottomColor:color.lineColor
    },
    writetext:{
        fontSize: fontSize.mlarge ,
        color: color.mainfont, 
        fontFamily: fontFamily.BOLD_FONT_FAMILY,
    },
    typetext:{
        borderBottomWidth:wp('0.5%'),
        borderBottomColor:color.lineColor,
        marginLeft:wp('4%'),
        fontSize: fontSize.xsmall ,
        color: color.lineColor, 
        fontFamily: fontFamily.REGULAR_FORT_FAMILY,
      
    }
})