import React, {useEffect, useState} from 'react';
import { Alert, Dimensions, View, StyleSheet, Constants, Location, Permissions } from 'react-native';
import MapView from 'react-native-maps';
import AppButton from '../components/AppButton';



export default function MapScreen(props) {

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
    
    return (
            <View style={styles.container}>
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
            </View>
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
