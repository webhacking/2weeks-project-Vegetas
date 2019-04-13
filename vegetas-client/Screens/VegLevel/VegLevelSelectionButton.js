import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { vegLevelData } from './vegLevelData';
import styles from './VegLevelSelectionButtonCss';

const VegLevelSelectionButton = ({ onPressVegLevel, email }) => vegLevelData.map(vegLevelList => (
  <TouchableOpacity
    style={styles.contain}
    key={vegLevelList.name}
    onPress={() => onPressVegLevel(email, vegLevelList.name)}
  >
    <Text style={styles.text}>{vegLevelList.name}</Text>
  </TouchableOpacity>
));

export default VegLevelSelectionButton;
