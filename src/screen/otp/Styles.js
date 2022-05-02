
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../utils/color';

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
    textInputMainContainer: {
        height: hp('10%'),
        width: wp('100%'),
        // backgroundColor:'green',
        alignItems: 'center'
    },
    textinput1: {
        height: hp('5%'),
        width: wp('85%'),
        justifyContent: 'flex-end'

    },
    textstyle1: {
        fontSize: hp('3%'),
        fontWeight: '900',
        color: color.black

    },
    textinput2: {
        height: hp('5%'),
        width: wp('85%'),

    },
    textstyle2: {
        fontSize: hp('3%'),
        fontWeight: '900',
        color: color.black
    },
    inputmain1: {
        height: hp('10%'),
        width: wp('100%'),
        // backgroundColor:'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputmain: {
        height: hp('5%'),
        width: wp('85%'),
        // backgroundColor:'pink',
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    countrycode: {
        // backgroundColor:'red',
        height: hp('5%'),
        width: wp('17%'),
        justifyContent: 'center',
        alignItems: "center"
        // flexDirection:'row'
    },
    countrycodeText: {
    },
    numberInput: {
        // backgroundColor:'yellow',
        height: hp('5%'),
        justifyContent: 'center',
        fontSize: hp('2.4%')

    },
    BlankView: {
        height: hp('3%')
    },
    ButtonMain: {
        height: hp('6%'),
        width: wp('85%'),
        backgroundColor: '#000000',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: wp('1%')

    },
    buttontext: {
        alignSelf: 'center',
        fontSize: hp('2.6%'),
        color: '#fff'
    }
});