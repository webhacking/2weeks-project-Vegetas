import React from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Text,
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import { Location } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import axios from 'axios';
import geolib from 'geolib';
import restRadius from './MainRestRadius';
import MainRestaurantInfo from './MainRestaurantInfo';
import styles from './MainCss';

const API_KEY = '0597f5619d0de8485e22c9067ab5d428';

export default class Main extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      gesturesEnabled: false,
      title: params.name,
      headerStyle: {
        backgroundColor: 'rgb(83,127,38)',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },
      headerLeft: (
        <TouchableOpacity onPress={() => params.userInfo()}>
          <Image
            style={{ width: 25, height: 25, marginLeft: 10 }}
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/1776/PNG/512/user1_114209.png',
            }}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => params.mapEvent()}>
          <Image
            style={{ width: 25, height: 25, marginRight: 10 }}
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/67/PNG/512/map_marker_13571.png',
            }}
          />
        </TouchableOpacity>
      ),
    };
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    searchValue: '',
    restData: '',
    searchedData: '',
    currentLocation: 'ok',
    targetArr: [],
    searchRadius: 2000,
    favoriteArr: [],
  };

  async componentDidMount() {
    const location = await Location.getCurrentPositionAsync({});
    this.setState({ location });

    const { navigation } = this.props;
    const { vegLevel } = navigation.state.params;

    navigation.setParams({ userInfo: this.userInfo });
    navigation.setParams({ mapEvent: this.mapEvent });

    await this.filetedVegLevel(vegLevel);
    await this.filterRest();

    await this.getFavoriteFunc();

    await this.getPosition(location.coords.latitude, location.coords.longitude);
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
          favoriteArr: arr,
        });
      };

  showActionSheet = () => {
    this.ActionSheet.show();
  };

  getPosition = (lat, lon) => {
    const { navigation } = this.props;
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
      .then(response => response.json())
      .then((json) => {
        navigation.setParams({ name: json.name });
      });
  };


  filterRest = () => {
    const { restData, location, searchRadius } = this.state;
    if (searchRadius === 400000) {
      this.setState({
        targetArr: restData,
      });
      return;
    }
    const result = [];
    for (let i = 0; i < restData.length; i += 1) {
      const distanceCalculator = geolib.getDistance(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        { latitude: Number(restData[i].latitude), longitude: Number(restData[i].longitude) },
      );
      if (distanceCalculator < searchRadius) {
        result.push(restData[i]);
      }
    }
    this.setState({
      targetArr: result,
    });
  };

  filetedVegLevel = async (vegType) => {
    const res = await axios.post('http://52.79.109.78:3000/res/getRes', {
      vegLevel: vegType,
    });
    this.setState({
      restData: res.data,
    });
  };

  userInfo = () => {
    const { navigation } = this.props;
    const { email, vegLevel, vegLevelRestaurantData } = navigation.state.params;
    navigation.navigate('UserPage', {
      email,
      getFavoriteFunc: this.getFavoriteFunc,
    });
  };

  mapEvent = () => {
    const {
      searchedData, currentLocation, location, targetArr,
    } = this.state;
    const { navigation } = this.props;
    let getTargetArr;
    if (searchedData === '' || searchedData.length === 0) {
      getTargetArr = targetArr;
    } else {
      getTargetArr = searchedData;
    }
    navigation.navigate('MapScreen', {
      currentLocation,
      getTargetArr,
      location,
    });
  };

  searchMenuNameAndRestaurant = () => {
    const { searchValue } = this.state;
    const { navigation } = this.props;
    const { vegLevel } = navigation.state.params;

    axios
      .post('http://52.79.109.78:3000/res/search', {
        query: searchValue,
        vegLevel,
      })
      .then((result) => {
        // 검색결과를 main page에 뿌려줘야함
        this.setState({
          searchedData: result.data,
        });
      })
      .catch((error) => {
        if (error.response.status === 401) {
          Alert.alert('검색하세요.');
        } else if (error.response.status === 403) {
          Alert.alert('검색 결과가 없습니다.');
        }
      });
  };


  restaurantInfo = (data) => {
    console.log('Main function : ', this.state.favoriteArr);
    const { navigation } = this.props;
    const { email } = navigation.state.params;
    navigation.navigate('RestaurantDetails', {
      email,
      getFavorite: this.state.favoriteArr,
      getFavoriteFunc: this.getFavoriteFunc,
      restDetailData: data,
    });
  };

  render() {
    const {
      searchValue, restData, searchedData, targetArr, location,
    } = this.state;
    let getTargetArr;
    if (searchedData === '' || searchedData.length === 0) {
      getTargetArr = targetArr;
    } else {
      getTargetArr = searchedData;
    }

    if (restData === '') {
      return (
        <View style={styles.container}>
          <ActivityIndicator color="rgb(83,127,38)" size="large" />
        </View>
      );
    }
    return (
      <View style={styles.contain}>
        <ImageBackground
          style={styles.searchImage}
          source={require('../../assets/searchImage.jpg')}
        >
          <View style={styles.searchBackground}>
            <TextInput
              style={styles.textInput}
              onChangeText={inputEmail => this.setState({ searchValue: inputEmail })}
              value={searchValue}
              placeholder="Search"
              placeholderTextColor="#fff"
              onSubmitEditing={() => {
                this.searchMenuNameAndRestaurant();
                this.setState({
                  searchValue: '',
                });
              }}
            />
            <View>
              <Text style={styles.distances} onPress={this.showActionSheet}>
                <Icon
                  style={styles.icons}
                  name="road"
                  size={14}
                  color="#fff"
                  backgroundColor="#fff"
                />
                {' Change Distance'}
              </Text>
              <ActionSheet
                ref={o => (this.ActionSheet = o)}
                title="How long do you want to set the distance?"
                options={restRadius.map(el => el.value)}
                cancelButtonIndex={5}
                onPress={async (index) => {
                  const distances = Number(restRadius.map(el => el.label)[index]);
                  await this.setState({
                    searchRadius: distances,
                    targetArr: [],
                    searchedData: [],
                  });
                  await this.filterRest();
                }}
              />
            </View>
          </View>
        </ImageBackground>
        <ScrollView>
          <View style={styles.mainRestInfo}>
            <MainRestaurantInfo
              restaurantInfo={this.restaurantInfo}
              location={location}
              getTargetArr={getTargetArr}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
