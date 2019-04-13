import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('90%'),
  },
  contain: {
    width: wp('90%'),
  },
  mainImageContain: {
    position: 'relative',
    width: wp('80%'),
    height: wp('100%'),
    marginHorizontal: wp('5%'),
    marginTop: wp('10%'),
    shadowOffset: { width: 0, height: 4 },
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  imageContain: {
    position: 'absolute',
    top: 0,
    width: wp('80%'),
    height: wp('80%'),
    borderRadius: 25,
  },
  textContain: {
    position: 'absolute',
    bottom: 0,
    width: wp('60%'),
    height: wp('10%'),
    textAlign: 'center',
    fontSize: hp('2.5%'),
    paddingTop: 8,
    color: '#666',
    marginHorizontal: wp('15%'),
    marginTop: wp('15%'),
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: wp('10%') / 2,
  },
});
