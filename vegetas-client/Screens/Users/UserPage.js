import React from 'react';
import {
  Text, View, TouchableOpacity, Image, Alert, AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './UserPageCss';

export default class UserPage extends React.Component {
  static navigationOptions = {
    title: 'My Page',
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

  componentWillUnmount() {
    const { navigation } = this.props;
    const { getFavoriteFunc } = navigation.state.params;
    getFavoriteFunc();
  }

  onPressGetFavoritedata = async () => {
    const { navigation } = this.props;
    const { email } = navigation.state.params;


    navigation.navigate('ResFavorite', {
      email,
    });
  }

  render() {
    const { navigation } = this.props;
    const { email } = navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.imageContain}
            source={require('../../assets/default_rest_image.png')}
          />
        </View>
        <View style={styles.buttonContain}>
          <TouchableOpacity
            style={styles.btnStyle3}
            onPress={() => {
              navigation.navigate('ChangePassword', {
                email,
              });
            }}
          >
            <Text style={styles.textBtnStyle3}>비밀번호 변경</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnStyle3}
            onPress={() => {
              Alert.alert('로그아웃 하시겠습니까?', '', [
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: async () => {
                    await AsyncStorage.clear();
                    navigation.navigate('InitialHome');
                  },
                },
              ]);
            }}
          >
            <Text style={styles.textBtnStyle3}>로그 아웃</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnStyle3}
            onPress={() => {
              navigation.navigate('VegLevelSelection');
            }}
          >
            <Text style={styles.textBtnStyle3}>채식 유형</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnStyle3}
            onPress={() => {
              navigation.navigate('Policy');
            }}
          >
            <Text style={styles.textBtnStyle3}>약관 및 정책</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnStyle3}
            onPress={() => { this.onPressGetFavoritedata(); }}
          >
            <Text style={styles.textBtnStyle3}>즐겨찾기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blankContain} />
      </View>
    );
  }
}
