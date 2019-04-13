import React from 'react';
import {
  TouchableOpacity, Text, View, Image,
} from 'react-native';
import styles from './MainRestaurantInfoCss';

const MainRestaurantInfo = ({ restaurantInfo, getTargetArr }) => getTargetArr.map(data => (
  <View key={data.name} style={styles.container}>
    <TouchableOpacity key={data.name} onPress={() => restaurantInfo(data)} style={styles.contain}>
      <View style={styles.mainImageContain}>
        <Image
          style={styles.imageContain}
          source={
              {
                uri:
                  data.imageURL !== ''
                    ? data.imageURL.split(',')[0]
                    : 'https://www.freeiconspng.com/uploads/vegetable-icon-png-14.png', // 정적인 이미지로
              } || require('../../assets/default_rest_image.png')
            }
        />
      </View>
      <Text style={styles.textContain}>{data.name}</Text>
    </TouchableOpacity>
  </View>
));

export default MainRestaurantInfo;
