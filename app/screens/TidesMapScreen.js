import React, {useEffect, useState} from 'react';
import { ActivityIndicator, Alert, Dimensions, View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText/AppText';
import useLocation from '../hooks/useLocation';
import TideStations from '../assets/TideStations.json';
import Screen from '../components/Screen';
import * as Location from 'expo-location';


function TidesMapScreen({ navigation, route }) {

    const initialMapRegion = { latitude: 30.2786, longitude:  -87.552, latitudeDelta: 0.09, longitudeDelta: 0.04 };
    const initialMapState = {
        isLoading: true,
        mapRegion: initialMapRegion,
        locationResult: null,
        location: {coords: {latitude: 30.2786, longitude:  -87.552}}
    }
    const [mapState, setMapState] = useState(initialMapState);

    const getLocation = async () => {
        console.log("get location was called");
        try {
            const {granted} = await Location.requestPermissionsAsync();
            if(!granted){
              return;
            } else {
              const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
              console.log("in get location and found " + latitude + " " + longitude);
              isLoading = false;
              setMapState({
                    ...mapState,
                    mapRegion: { latitude: latitude, longitude: longitude, latitudeDelta: 0.09, longitudeDelta: 0.04 },
                    isLoading: false,
                    location: { coords: { latitude: latitude, longitude: longitude } }
                });

            }   
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getLocation();
    }, []);

    
    const handleMapPress = (event)=>{
        console.log("in handle Map Press");
        setMapState({
            ...mapState,
            mapRegion: { latitude: event.nativeEvent.coordinate.latitude, longitude: event.nativeEvent.coordinate.longitude, latitudeDelta: 0.9, longitudeDelta: 0.9 },
            location: {coords: {latitude: event.nativeEvent.coordinate.latitude, longitude: event.nativeEvent.coordinate.longitude}}
        })
    }

    const handleRegionChange = (region) => {
        setMapState({
            ...mapState,
            mapRegion: region,
            location: {coords: {latitude: region.latitude, longitude: region.longitude}}
        })
    }
    
    return (
            <Screen style={styles.container}>
                {mapState.isLoading ? (
                    <View>
                        <Text>Loading map...</Text>
                        <ActivityIndicator
                            size='large'
                            loading={mapState.isLoading}
                        />
                    </View>
                ):(
                    <MapView style={styles.map} 
                        onPress={(event) => {handleMapPress(event)}}
                        region = {mapState.Region}
                        onRegionChange={(region) => {handleRegionChange(region)}}
                        location = {mapState.location.coords}
                        showsUserLocation={true}
                    >
                    {TideStations.TideStations.map((markerData)=> {
                        var lat = parseFloat(markerData.lat);
                        var long = parseFloat(markerData.long)
                        return (
                        <MapView.Marker
                            key = {markerData.Location}
                            coordinate={{
                                latitude:lat,
                                longitude:long
                            }}
                            onPress={()=> navigation.navigate('TidesScreen', markerData)}
                            title = {markerData.Location}
                        />
                    )})}
                </MapView>
                )}
                
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

export default TidesMapScreen;




/*
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
*/
