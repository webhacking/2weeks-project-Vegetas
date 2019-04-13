import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

module.exports = StyleSheet.create({
  contain: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#ddd',
    width: wp('80%'),
    height: hp('10%'),
    marginVertical: hp('3%'),
    shadowColor: 'rgba(0, 0, 0,0.5)',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  text: {
    textAlign: 'center',
    lineHeight: hp('10%'),
    fontSize: 20,
    letterSpacing: 5,
    color: 'rgb(83,127,38)',
  },
});
