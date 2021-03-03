import React, {Component, useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapScreen from './MapScreen';
import TideDetails from '../components/TideDetails';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import LocationService from '../utils/LocationService';
import TideStationService from '../utils/TideStationService';


export default function TidesScreen({ navigation, route }) {
    let station = '8729840';
    let beginDate= '20210302';
    let endDate = '20210305';

    console.log('Closest station: ');
    console.log(TideStationService());

    React.useEffect(() => {
        if (route.params?.lat) {
          console.log(route.params?.lat);
        }
      }, [route.params?.lat]);
      React.useEffect(() => {
        if (route.params?.long) {
          console.log(route.params?.long);
        }
      }, [route.params?.long]);
   
    const fetchTides = (station, beginDate, endDate) => {


        const fetchUrl = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=${beginDate}&end_date=${endDate}&station=${station}&product=predictions&datum=STND&time_zone=gmt&interval=hilo&units=english&format=json`;

        fetch(fetchUrl)
        
        .then(res => res.json())
        .then(json => {
        console.log(json);
        
        setTideState({
            isLoading: false,
            station: station,
            day: json.predictions[0].t,
            highTide: json.predictions[0].v,
            lowTide: json.predictions[0].v,
            error: null
        })      
    })
        
    }
  
    const initialTideState = {
        isLoading: true,
        day: null,
        highTide: 0,
        lowTide: 0,
        error: null
    }

    const [tideState, setTideState] = useState(initialTideState);


    return (
        <Screen style={styles.container}>
           {/* {tideState.isLoading ? (
                <AppButton title="Today's Tides" onPress={()=> fetchTides(station, beginDate, endDate)}  />
                ):(
                  
                   <TideDetails 
                         station = {tideState.station}
                        day = {tideState.day}
                         highTide = {tideState.highTide}
                         lowTide = {tideState.lowTide}
                       />
                )}*/}
            <AppButton
                onPress={() => navigation.navigate('MyModal', {
                    screenName: 'TidesScreen',
                })}
                title="Open Modal"
            />
            <Text style={{ margin: 10 }}>Latitude: {route.params?.lat}</Text>
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

