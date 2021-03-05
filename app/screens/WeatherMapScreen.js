import React, { useLayoutEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { HeaderBackButton } from 'react-navigation-stack';

import Screen from '../components/Screen';


export default function TidesMapScreen({ navigation, route }) {

    const { initLocation, previousScreen } = route.params;

    const handleMapPress = (event) => {
        
        setMapState({
            mapRegion: mapState.mapRegion,
            locationResult: mapState.locationResult,
            location: event.nativeEvent.coordinate
        })
    };

    const initialMapRegion = { latitude: 33.1254, longitude: -87.3248, latitudeDelta: 0.0922, longitudeDelta: 0.0421 };

    const initialMapState = {
        mapRegion: initialMapRegion,
        locationResult: null,
        location: initLocation
    }

    const [mapState, setMapState] = useState(initialMapState);

    useLayoutEffect(() => {
        //console.log(mapState.location);
        navigation.setOptions({
            headerLeft: () => (
                <HeaderBackButton onPress={() => {
                    navigation.navigate(previousScreen, {
                        location: mapState.location
                    });
                }}/>
            )
        });
    }, [mapState.location])
    
    
    return (
        <Screen style={styles.container}>
            <MapView style={styles.map} 
                region={{
                    latitude: mapState.location.latitude,
                    longitude: mapState.location.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0921
                }}

                onPress={(event) => {handleMapPress(event)}}
            >
                <MapView.Marker
                    coordinate={mapState.location}
                    title="Location"
                    description="Your Current Location"
                />
            </MapView>
        </Screen>
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
