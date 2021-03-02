
import MapScreen from './MapScreen';
import React, {Component, useEffect, useState} from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import TideDetails from '../components/TideDetails';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import LocationService from '../utils/LocationService';


export default function TidesScreen() {
    let station = '8729840';
    let beginDate= '20210304';
    let endDate = '20210307';


   
    const fetchTides = (station, beginDate, endDate) => {


        const fetchUrl = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=${beginDate}&end_date=${endDate}&station=${station}&product=predictions&datum=STND&time_zone=gmt&interval=hilo&units=english&format=json`;

        fetch(fetchUrl)
        
        .then(res => res.json())
        .then(json => {
        console.log(json);
        setTideState({
            isLoading: false,
            station: station,
            day: json.predictions.t,
            height: json.predictions.v,
            type: json.predictions.type,
            error: null
        })      
    })
        
    }
  
    const initialTideState = {
        isLoading: true,
        day: null,
        height: 0,
        type: null,
        error: null
    }

    const [tideState, setTideState] = useState(initialTideState);


    return (
        <Screen style={styles.container}>
            {tideState.isLoading ? (
                <AppButton title="Today's Tides" onPress={()=> fetchTides(station, beginDate, endDate)}  />
                ):(
                  
                   <TideDetails 
                         station = {tideState.station}
                         day = {tideState.day}
                         height = {tideState.height}
                         type = {tideState.type}
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

