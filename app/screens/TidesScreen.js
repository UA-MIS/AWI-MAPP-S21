
import MapScreen from './MapScreen';
import React, {Component, useEffect, useState} from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import TideDetails from '../components/TideDetails';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import LocationService from '../utils/LocationService';



export default function TidesScreen() {
  
    let station = '8729840'

    let locationName = 'Pensacola, FL'

    var myDate = new Date();

    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
      if(month <= 9)
        month = '0'+month;
    var day= myDate.getDate();
      if(day <= 9)
        day = '0'+day;
    var tom = myDate.getDate()+8;
      if(tom <= 9)
        tom = '0'+tom;
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

