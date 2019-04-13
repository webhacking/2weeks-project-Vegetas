import React from 'react';
import {
  Text, View, TouchableOpacity, TextInput, Alert, AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './ChangePasswordCss';

export default class ChangePassword extends React.Component {
  static navigationOptions = {
    title: 'My Info',
    headerStyle: {
      backgroundColor: 'rgb(83,127,38)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
    },
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    password: '',
    newPw: '',
    newPwConfirm: '',
  };

  onPressSendUpdateUserDB = async (EmailPosition) => {
    const { navigation } = this.props;
    const { password, newPw } = this.state;

    axios
      .post('http://52.79.109.78:3000/users/pwUpdate', {
        email: EmailPosition,
        password,
        newPassword: newPw,
        token: await AsyncStorage.getItem('gunbaam'),
      })
      .then(async () => {
        await AsyncStorage.clear();
        Alert.alert('비밀번호를 변경했습니다.', '다시 로그인 해주시길 바랍니다.');
        navigation.navigate('InitialHome');
      })
      .catch((err) => {
        if (err.response.status === 401) {
          Alert.alert('실패 업데이트');
        } else if (err.response.status === 'undefined') {
        } else if (err.response.status === 500) {
          Alert.alert('로그인이 만료 되었습니다.');
        }
      });
  };

  render() {
    const { password, newPw, newPwConfirm } = this.state;
    const { navigation } = this.props;
    const { email } = navigation.state.params;
    const TextInputPassword = [
      {
        onChangeText: inputPw => this.setState({ password: inputPw }),
        value: password,
        placeholder: 'PASSWORD',
      },
      {
        onChangeText: inputNewPw => this.setState({ newPw: inputNewPw }),
        value: newPw,
        placeholder: 'NEW PASSWORD',
      },
      {
        onChangeText: inputNewPwConfirm => this.setState({ newPwConfirm: inputNewPwConfirm }),
        value: newPwConfirm,
        placeholder: 'NEW PASSWORD CONFIRM',
      },
    ];

    return (
      <View style={styles.container}>
        <View style={styles.content} />
        <View style={styles.textInputContain}>
          {TextInputPassword.map((input, i) => (
            <TextInput
              style={styles.textInput}
              onChangeText={input.onChangeText}
              value={input.value}
              secureTextEntry
              placeholder={input.placeholder}
              placeholderTextColor="#666"
              key={i}
            />
          ))}
          <TouchableOpacity
            style={styles.btnStyle3}
            onPress={() => {
              if (password.length > 0 || newPw.length > 0 || newPwConfirm.length > 0) {
                if (newPwConfirm === newPw) {
                  // axios 로 데이터 server 로 보내기
                  this.onPressSendUpdateUserDB(email);
                } else {
                  Alert.alert('Please, check blank');
                }
              } else {
                Alert.alert('Please, fill blank');
              }
              this.setState({
                password: '',
                newPw: '',
                newPwConfirm: '',
              });
            }}
          >
            <Text style={styles.textBtnStyle3}>확 인</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blankContain} />
      </View>
    );
  }
}
