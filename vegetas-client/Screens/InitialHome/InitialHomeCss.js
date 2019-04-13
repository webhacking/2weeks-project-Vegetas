import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImg: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 3,
  },
  textInputContain: {
    flex: 2,
  },
  buttonContain: {
    flex: 1.5,
    marginHorizontal: 45,
  },
  bottomBlankContain: {
    flex: 1.5,
  },
  text: {
    flex: 1,
    fontSize: hp('8%'),
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingTop: 100,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  textInput: {
    height: hp('7%'),
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#fff',
  },
  btnStyle: {
    flex: 1,
    marginHorizontal: 50,
    marginBottom: 20,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'rgba(0, 0, 0, 0.75)',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  btnStyle3: {
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  textBtnStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  textBtnStyle2: {
    color: 'rgb(56,31,31)',
  },
});
