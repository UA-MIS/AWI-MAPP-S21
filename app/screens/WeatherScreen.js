import React, {Component, useEffect, useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import MapScreen from './MapScreen';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import WeatherDetails from '../components/WeatherDetails';
import { API_KEY } from '../utils/WeatherApiKey';
import LocationService from '../utils/LocationService';


export default function WeatherScreen({navigation, route}) {
    //const { latt } = route.params;
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
  //console.log(latt);

    // const fetchWeather = (lat, lon) => {
    //     console.log("In the fetch Weather");
    //     useEffect(() => {
    //         fetch(
    //             `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    //         )
    //             .then(res => res.json())
    //             .then(json => {
    //                 setWeatherState({
    //                     isLoading: false,
    //                     temperature: json.main.temp,
    //                     weatherCondition: json.weather[0].main,
    //                     error: null
    //                 })
    //         }, [])

    //     });
    // }

    const fetchWeather = (lat, lon) => {

            fetch(
                `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`
            )
                .then(res => res.json())
                .then(json => {
                    setWeatherState({
                        isLoading: false,
                        temperature: json.main.temp,
                        weatherCondition: json.weather[0].main,
                        error: null
                    })
            });
        }


    const initialWeatherState = {
        isLoading: true,
        temperature: 0,
        weatherCondition: null,
        error: null
    }
    const [weatherState, setWeatherState] = useState(initialWeatherState);

    let { lat, lon } = LocationService();

    return (
        <Screen style={styles.container}>
            {weatherState.isLoading ? (
                <AppButton title="Load Weather Data" onPress={()=> fetchWeather(lat, lon)} />

            ): (
                <WeatherDetails 
                    weather = {weatherState.weatherCondition}
                    temperature = {weatherState.temperature}
                />
            )}
                            <Text style={{ margin: 10 }}>Post: {route.params?.lat}</Text>

               <Button
        onPress={() => navigation.navigate('MyModal', {
            screenName: 'WeatherScreen',
          })}
        title="Open Modal"
      />
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
