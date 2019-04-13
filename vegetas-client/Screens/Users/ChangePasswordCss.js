import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  textInputContain: {
    flex: 3,
    flexDirection: 'column',
    marginLeft: 50,
    marginRight: 50,
  },
  blankContain: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#efefef',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
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
    justifyContent: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'rgb(130,130,130)',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  textBtnStyle3: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
});
