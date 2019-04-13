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
    flex: 3,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  blankContain: {
    flex: 1,
  },
  buttonContain: {
    flex: 3,
    flexDirection: 'column',
    marginLeft: 50,
    marginRight: 50,
  },
  imageContain: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -100,
    marginTop: -100,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'rgb(230,230,230)',
    borderWidth: 1,
  },
  text2: {
    fontSize: 100,
    textAlign: 'center',
  },
  btnStyle3: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'rgb(250,250,250)',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#eee',
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  textBtnStyle3: {
    height: 20,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#666',
    textAlign: 'center',
  },
});
