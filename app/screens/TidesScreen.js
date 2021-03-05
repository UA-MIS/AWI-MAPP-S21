import React, {Component, useEffect, useLayoutEffect, useState} from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import TideDetails from '../components/TideDetails';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import LocationService from '../utils/LocationService';
import TideStationService from '../utils/TideStationService';
import { Icon } from '../hooks/useCachedResources';


export default function TidesScreen({ navigation, route }) {

    function initDates() {
        let myDate = new Date();

        let year = myDate.getFullYear();
        let month = myDate.getMonth() + 1;

        if (month <= 9) {
            month = '0' + month;
        }

        let day = myDate.getDate();

        if (day <= 9) {
            day = '0' + day;
        }
        let tom = myDate.getDate() + 8;

        if (tom <= 9) {
            tom = '0' + tom;
        }

        let startDate = year + month + day;
        let endDate = year + month + tom;

        return {
            startDate: startDate,
            endDate: endDate
        };
    }

    console.log('Setting initial states');

    const [location, setLocation] = useState(LocationService());

    const [station, setStation] = useState(TideStationService(location));

    const [dates, setDates] = useState(initDates());
     
    const initialTidesState = {
        isLoading: true,
        dtCalled: '',
        tideArray: [],
    }

    const [tidesState, setTidesState] = useState(initialTidesState);

    const fetchTides = async (station, startDate, endDate) => {

        console.log('Station: ' + station) // FIXME

        const response = await fetch (
            `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=${startDate}&end_date=${endDate}&station=${station}&product=predictions&datum=STND&time_zone=lst_ldt&interval=hilo&units=english&format=json`
        )
        const json = await response.json();

        //console.log(json);

        setTidesState({
            isLoading: false,
            dtCalled: Date.now(),
            tideArray: json.predictions
        })
    };

    // Add refresh and map buttons in header
    useLayoutEffect(() => {

        console.log('Header useLayoutEffect');

        navigation.setOptions({
            headerLeft: () => (
                console.log('REFRESH'),
                <View style={styles.leftHeaderButton}>
                    <TouchableOpacity onPress={() => fetchTides(station.stationNum, dates.startDate, dates.endDate)}>
                        <Icon
                            name='arrows-cw'
                            size={23}
                        />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View style={styles.rightHeaderButton}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(
                            'MapScreen',
                            { initLocation: location, previousScreen: 'TidesScreen' }
                        )}
                    >
                        <Icon
                            name='location'
                            size={23}
                        />
                    </TouchableOpacity>
                </View>
            )
        });
    }, [station.stationNum]);

    // Watch for updates to location to map
    useEffect(() => {

        console.log('Map update useEffect');

        if (route.params?.location) {
            console.log('Map update useEffect is doing something for real');
            setLocation(route.params?.location);
            setStation(TideStationService(location));
        }
    }, [route.params?.location]);

    // Call API
    useEffect(() => {

        console.log('Call API useEffect');

        fetchTides(station.stationNum, dates.startDate, dates.endDate);
    }, [station.stationNum]);

    
    return (
        console.log('RETURNING'),
        <Screen style={styles.container}>
            {tidesState.isLoading ? (
                <View>
                    <ActivityIndicator
                        size='large'
                        loading={tidesState.isLoading}
                    />
                    <Text>Loading tides data</Text>
                </View>
                ):(
                   <TideDetails 
                        tideArray = {tidesState.tideArray}
                        station = {station.stationNum}
                        locationName = {station.stationName}
                        startDate = {dates.startDate}
                        endDate = {dates.endDate}
                    />
                )}
        </Screen>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftHeaderButton: {
        marginLeft: 30
    },
    rightHeaderButton: {
        marginRight: 30
    }
});



/*
export default function TidesScreen({ navigation, route }) {
    let station = '8729840';
    let locationName = 'Pensacola, FL';
    
    var myDate = new Date();

    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;

    if (month <= 9) {
        month = '0'+month;
    }

    var day= myDate.getDate();

    if (day <= 9) {
        day = '0'+day;
    }
    var tom = myDate.getDate() + 8;

    if (tom <= 9) {
        tom = '0'+tom;
    }

    let startDate = year + month + day;
    let endDate = year + month + tom;

    const fetchTides = (station, locationName, startDate, endDate) => {

        const fetchUrl = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=${startDate}&end_date=${endDate}&station=${station}&product=predictions&datum=STND&time_zone=gmt&interval=hilo&units=english&format=json`;

        fetch(fetchUrl)
        
        .then(res => res.json())
        .then(json => {
            setTideState({
                isLoading: false,
                station: station,
                locationName: locationName,
                tideArray: json.predictions,
                startDate: startDate, //--------??
                endDate: endDate,
                error: null
            })      
        })
    }
  
    const initialTideState = {
        isLoading: true,
        station: null,
        locationName: null,
        tideArray: null,
        startDate: '0',
        endDate: '0',
        error: null,
    }

    const [tideState, setTideState] = useState(initialTideState);
  
    return (
        <Screen style={styles.container}>
            {tideState.isLoading ? (
                <AppButton title="Today's Tides" onPress={()=> fetchTides(station,locationName, startDate, endDate)}  />
                ):(
                   <TideDetails 
                        tideArray = {tideState.tideArray}
                        station ={tideState.station}
                        locationName = {tideState.locationName}
                        startDate = {tideState.startDate}
                        endDate = {tideState.endDate}
                    />
                )}
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
*/

