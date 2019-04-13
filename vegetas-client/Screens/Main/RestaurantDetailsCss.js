import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

module.exports = StyleSheet.create({
  parent: {
    flex: 1,
  },
  container: {
    flex: 2,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: 'rgb(130,130,130)',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  image: {
    marginTop: hp('4%'),
    marginHorizontal: wp('5%'),
  },
  iconContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginVertical: hp('4%'),
    borderWidth: 1,
    borderColor: '#eee',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'rgb(130,130,130)',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  detailsContain: {
    flex: 2,
  },
  blankContain: {
    flex: 1,
  },
  icons: {
    width: '25%',
    alignItems: 'stretch',
    paddingHorizontal: '5%',
    paddingTop: wp('7%'),
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'rgb(130,130,130)',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  caution: {
    flex: 1,
    paddingTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginHorizontal: wp('10%'),
  },
  details: {
    flex: 1,
    marginHorizontal: wp('10%'),
    paddingTop: 10,
    fontSize: 18,
    color: '#333',
  },
});
