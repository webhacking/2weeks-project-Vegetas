import React from 'react';
import { MapView } from 'expo';
import PropTypes from 'prop-types';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
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

  render() {
    const { navigation } = this.props;
    const { currentLocation, getTargetArr, location } = navigation.state.params;
    if (currentLocation === 'ok') {
      return (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsMyLocationButton
          showsUserLocation
          provider={MapView.PROVIDER_GOOGLE}
        >
          {getTargetArr.map(restPosition => (
            <MapView.Marker
              coordinate={{
                latitude: Number(restPosition.latitude),
                longitude: Number(restPosition.longitude),
              }}
              key={Number(restPosition.latitude)}
              title={restPosition.name}
              description={restPosition.address}
            />
          ))}
        </MapView>
      );
    }
    if (currentLocation !== 'ok') {
      const {
        name, address, latitude, longitude,
      } = navigation.state.params;
      return (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: Number(latitude),
            longitude: Number(longitude),
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsMyLocationButton
          showsUserLocation
          provider={MapView.PROVIDER_GOOGLE}
        >
          <MapView.Marker
            coordinate={{
              latitude: Number(latitude),
              longitude: Number(longitude),
            }}
            title={`${name}`}
            description={`${address}`}
          />
        </MapView>
      );
    }
  }
}
