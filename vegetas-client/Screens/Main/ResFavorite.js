import React from 'react';
import {
  View, ScrollView, StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  // heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import axios from 'axios';
import MainRestaurantInfo from './MainRestaurantInfo';

export default class ResFavorites extends React.Component {
    static navigationOptions = {
      title: '즐겨찾기',
    };

    state = {
      favoritea: [],
    }

    async componentDidMount() {
      await this.getFavoriteFunc();
    }

    getFavoriteFunc = async () => {
      const { navigation } = this.props;
      const { email } = navigation.state.params;
      const arr = [];
      const datas = await axios.post('http://52.79.109.78:3000/res/join', {
        email,
      });

      for (let i = 0; i < datas.data.length; i += 1) {
        arr.push(datas.data[i].restaurant);
      }
      await this.setState({
        favoritea: arr,
      });
    };

    restaurantInfo = (data) => {
      const { navigation } = this.props;
      const { email } = navigation.state.params;
      navigation.navigate('RestaurantDetails', {
        restDetailData: data,
        getFavorite: this.state.favoritea,
        email,
        getFavoriteFunc: this.getFavoriteFunc,
      });
    };


    render() {
      return (
        <View style={styles.contain}>
          <ScrollView>
            <MainRestaurantInfo
              getTargetArr={this.state.favoritea}
              restaurantInfo={this.restaurantInfo}
            />
          </ScrollView>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    width: wp('90%'),
    marginHorizontal: wp('5%'),
    flexDirection: 'column',
  },
});
