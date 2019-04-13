import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contain: {
    flex: 1,
  },
  searchImage: {
    width: 'auto',
    height: wp('50%'),
  },
  searchBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 0, height: 5 },
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 6,
  },
  textInput: {
    height: 60,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 30,
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 20,
    fontSize: 16,
    paddingLeft: 20,
    color: '#FFF',
  },
  distances: {
    width: wp('40%'),
    height: wp('10%'),
    textAlign: 'center',
    paddingTop: (wp('10%') - 14) / 2,
    marginHorizontal: wp('30%'),
    fontSize: 14,
    borderRadius: wp('10%') / 2,
    borderWidth: 1,
    color: '#FFF',
    borderColor: '#fff',
  },
  mainRestInfo: {
    width: wp('90%'),
    marginHorizontal: wp('5%'),
  },
});
