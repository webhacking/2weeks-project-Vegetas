import React from 'react';
import {
  View, Alert, AsyncStorage, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';
import VegLevelSelectionButton from './VegLevelSelectionButton';
import styles from './VegLevelSelectionCss';

export default class VegLevelSelection extends React.Component {
  static navigationOptions = {
    title: '채식 유형',
    gesturesEnabled: false,
    headerLeft: null,
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

  onPressVegLevel = async (emailPosition, vegTypeName) => {
    const { navigation } = this.props;

    axios
      .post('http://52.79.109.78:3000/users/vegLevel', {
        email: emailPosition,
        vegLevel: vegTypeName,
        token: await AsyncStorage.getItem('gunbaam'), // 토큰을 서버로 보냄 . async/await 를 사용해 가져와야함.
      })
      .then(async () => {
        // async await 사용함으로서 A 까지 다 진행되고 B 로 넘어간다.
        await axios
          .post('http://52.79.109.78:3000/res/getRes', {
            vegLevel: vegTypeName,
          })
          .then((res) => {
            const vegLevelRestaurantData = res.data;
            // console.log('A : 먼저 나와야함'); //
            navigation.navigate('Main', {
              email: emailPosition,
              vegLevel: vegTypeName,
              vegLevelRestaurantData,
            });
          });
        // console.log('B : 뒤에 나와야함');//
      })
      .catch(async (error) => {
        if (error.response.status === 404) {
          Alert.alert('연결 상태가 좋지 않습니다.');
        } else if (error.response.status === 500) {
          // 토큰이 만료되면 에러 코드가 500 이 뜨고
          Alert.alert('로그인이 만료 되었습니다.');
          // await AsyncStorage.removeItem('gunbaam'); // A , A 나 B 둘 중 하나를 사용해 해당 토큰을 지움.
          await AsyncStorage.clear(); // B
        }
        navigation.navigate('InitialHome');
      });
  };

  render() {
    const { navigation } = this.props;
    const { email } = navigation.state.params;
    return (
      <View style={styles.container}>
        <VegLevelSelectionButton onPressVegLevel={this.onPressVegLevel} email={email} />
        <View style={styles.blank}>
          <Text />
        </View>
      </View>
    );
  }
}
