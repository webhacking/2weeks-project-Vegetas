import { StyleSheet } from 'react-native';
import {
  // widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: "yellow"
  },
  textInputContain: {
    flex: 3,
  },
  textInput: {
    flex: 0.13,
    // backgroundColor: "red",
    borderBottomWidth: 2,
    borderBottomColor: '#efefef',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
    // fontFamily: 'Hack-Italic',
  },
  text2: {
    fontSize: hp('15%'),
    textAlign: 'center',
  },
  btnStyle3: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    backgroundColor: 'rgb(245,245,245)',
    borderRadius: 10,
    justifyContent: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#eee',
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  textBtnStyle3: {
    fontSize: 18,
    // fontFamily: 'Hack-Bold',
    color: '#666',
    textAlign: 'center',
  },
});
