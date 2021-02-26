import React, {useEffect, useState} from 'react';
import { Alert, Dimensions, Button, SafeAreaView, StyleSheet, Constants, Location, Permissions } from 'react-native';
import MapView from 'react-native-maps';
import { MAP_API_KEY } from '../utils/GoogleApiKey';


export default function MapScreen({navigation, route}) {
    const { screenName } = route.params;

    const handleMapPress = (event)=>{
        console.log(event.nativeEvent.coordinate);
        setMapState({
            mapRegion: mapState.mapRegion,
            locationResult: mapState.locationResult,
            location: {coords: {latitude: event.nativeEvent.coordinate.latitude, longitude: event.nativeEvent.coordinate.longitude}}
        })
    }

    findCoordinates = () => {
        useEffect(() => {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setMapState({
                        mapRegion: mapState.mapRegion,
                        locationResult: mapState.locationResult,
                        location: {coords: {latitude: position.coords.latitude, longitude: position.coords.longitude}}
                    })
                },
                error => Alert.alert(error.message),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );
        }, [])

    };

    const initialMapRegion = { latitude: 33.1254, longitude: -87.3248, latitudeDelta: 0.0922, longitudeDelta: 0.0421 };
    const initialMapState = {
        mapRegion: initialMapRegion,
        locationResult: null,
        location: {coords: {latitude: 33.1254, longitude: -87.3248}}
    }

    const [mapState, setMapState] = useState(initialMapState);
    // const city = Geocoder.from({
    //     lat: mapState.location.coords.latitude,
    //     lng: mapState.location.coords.longitude
    // }).then(json => 
    //     {
    //     var addressComponent = json.results[0].formatted_address;
    //     this.setState({addressComponent})

    //       // Alert.alert(this.state.addressComponent)
    //   }) ;
    
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + mapState.location.coords.latitude + ',' + mapState.location.coords.longitude + '&key=' + MAP_API_KEY)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
      
            let storableLocation = {};

    for (var ac = 0; ac < responseJson.results[0].address_components.length; ac++) {
        var component = responseJson.results[0].address_components[ac];

        switch(component.types[0]) {
            case 'locality':
                storableLocation.city = component.long_name;
                break;
            case 'administrative_area_level_1':
                storableLocation.state = component.short_name;
                break;
            case 'country':
                storableLocation.country = component.long_name;
                storableLocation.registered_country_iso_code = component.short_name;
                break;
            case 'establishment':
                    storableLocation.establishment = component.long_name;
                    break;
        }
    };
    
            console.log(storableLocation);
   
          

})
   // console.log(city);

    return (
            <SafeAreaView style={styles.container}>
                <MapView style={styles.map} 
                    region={{latitude: mapState.location.coords.latitude, longitude: mapState.location.coords.longitude,latitudeDelta: 0.0922, longitudeDelta: 0.0921}}
                    onPress={(event) => {handleMapPress(event)}}
                    //onRegionChange={(region) => {console.log(region);}}
                >
                    <MapView.Marker
                        coordinate={mapState.location.coords}
                        title="Location"
                        description="Your Current Location"
                    />
                </MapView>
                
      <Button
title="Dismiss"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate(screenName,  {
              lat: mapState.location.coords.latitude,
              long: mapState.location.coords.longitude
            }
          );
        }}
      />
            </SafeAreaView>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    map:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})
