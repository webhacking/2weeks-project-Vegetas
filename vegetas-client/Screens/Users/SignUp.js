/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  Text, View, TouchableOpacity, TextInput, Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './SignUpCss';

class SignUp extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
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
    email: '',
    name: '',
    password: '',
    pwConfirm: '',
  };

  onPressSendUserDB = () => {
    const { navigation } = this.props;
    const { name, email, password } = this.state;
    axios
      .post('http://52.79.109.78:3000/users/signUp', {
        name,
        email,
        password,
      })
      .then(() => {
        Alert.alert('Vegetas', 'congraturation :D');
        navigation.navigate('InitialHome');
      })
      .catch(() => {
        Alert.alert('Vegetas', 'failed ㅠㅠ');
      });
  };

  render() {
    const {
      name, email, password, pwConfirm,
    } = this.state;

    const TextInputPassword = [
      {
        onChangeText: (inputName) => {
          this.setState({ name: inputName });
        },
        value: name,
        placeholder: 'NAME',
      },
      {
        onChangeText: (inputEmail) => {
          this.setState({ email: inputEmail });
        },
        value: email,
        placeholder: 'EMAIL',
      },
      {
        onChangeText: inputPw => this.setState({ password: inputPw }),
        value: password,
        placeholder: 'PASSWORD',
      },
      {
        onChangeText: inputPwConfirm => this.setState({ pwConfirm: inputPwConfirm }),
        value: pwConfirm,
        placeholder: 'PASSWORD CONFIRM',
      },
    ];

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text2}>🍀</Text>
        </View>
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
              if (name.length > 0 && email.length > 0 && password.length > 0) {
                if (password === pwConfirm) {
                  // axios 로 데이터 server 로 보내기
                  this.onPressSendUserDB();
                } else {
                  Alert.alert('Please, check blank');
                }
              } else {
                Alert.alert('Please, fill blank');
              }
              this.setState({
                name: '',
                email: '',
                password: '',
                pwConfirm: '',
              });
            }}
          >
            <Text style={styles.textBtnStyle3}>확 인</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SignUp;
