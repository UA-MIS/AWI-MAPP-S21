import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Screen from '../components/Screen';
import WeatherDetails from '../components/WeatherDetails';
import { API_KEY } from '../utils/WeatherApiKey';
import LocationService from '../utils/LocationService';
import AddressService from '../utils/AddressService';
import { Icon } from '../hooks/useCachedResources';


export default function WeatherScreen({ navigation, route }) {

    const initialWeatherState = {
        isLoading: true,
        dtCalled: '',
        dtCalculated: '',
        temperature: 0,
        weatherCondition: null
    }
    
    const [weatherState, setWeatherState] = useState(initialWeatherState);

    const [location, setLocation] = useState(LocationService());

    const fetchWeather = async (lat, lon) => {

        const response = await fetch (
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&APPID=${API_KEY}&units=imperial`
        )
        const json = await response.json();

        setWeatherState({
            isLoading: false,
            dtCalled: Date.now(),
            dtCalculated: json.dt,
            currentWeather: json.current,
            dailyWeather: json.daily,
        })
    };

    // Add refresh and map buttons in header
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={styles.leftHeaderButton}>
                    <TouchableOpacity onPress={() => fetchWeather(location.latitude, location.longitude)}>
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
                        onPress={() => navigation.navigate('WeatherMapScreen', { initLocation: location })}
                    >
                        <Icon
                            name='location'
                            size={23}
                        />
                    </TouchableOpacity>
                </View>
            )
        });
    }, [location]);

    setLocation

    // Watch for updates to location from map
    useEffect(() => {
        if (route.params?.location) {
            setLocation(route.params?.location);
        }
    }, [route.params?.location]);

    // Call API
    useEffect(() => {
        fetchWeather(location.latitude, location.longitude);
    }, [location.latitude, location.longitude]);
    let city = AddressService(location);

    return (
        <View style={styles.container}>
            {weatherState.isLoading ? (
                <ActivityIndicator
                    size='large'
                    loading={weatherState.isLoading}
                />
            ) : (
                <View>
                    <View>
                        <Text>{city}</Text>
                        <Text>Datetime: {weatherState.dtCalled}</Text>
                        <Text>Current Temperature: {weatherState.currentWeather.temp}</Text>
                        <Text>Wind Speed: {weatherState.currentWeather.wind_speed}</Text>
                        <Text>Wind Degree: {weatherState.currentWeather.wind_deg}</Text>
                        <Text>Air Pressure: {weatherState.currentWeather.pressure}</Text>
                        <Text>Visibility: {weatherState.currentWeather.visibility}</Text>
                        <Text>Dew Point: {weatherState.currentWeather.dew_point}</Text>
                    </View>
                    <View>
                        <Text>Date: {weatherState.dailyWeather[1].dt}</Text>
                        <Text>Current Temperature: {weatherState.dailyWeather[1].temp}</Text>
                        <Text>Wind Speed: {weatherState.dailyWeather[1].wind_speed}</Text>
                        <Text>Wind Degree: {weatherState.dailyWeather[1].wind_deg}</Text>
                        <Text>Air Pressure: {weatherState.dailyWeather[1].pressure}</Text>
                        <Text>Visibility: {weatherState.dailyWeather[1].visibility}</Text>
                        <Text>Dew Point: {weatherState.dailyWeather[1].dew_point}</Text>
                    </View>
                    <View>
                        <Text>Date: {weatherState.dailyWeather[2].dt}</Text>
                        <Text>Current Temperature: {weatherState.dailyWeather[2].temp}</Text>
                        <Text>Wind Speed: {weatherState.dailyWeather[2].wind_speed}</Text>
                        <Text>Wind Degree: {weatherState.dailyWeather[2].wind_deg}</Text>
                        <Text>Air Pressure: {weatherState.dailyWeather[2].pressure}</Text>
                        <Text>Visibility: {weatherState.dailyWeather[2].visibility}</Text>
                        <Text>Dew Point: {weatherState.dailyWeather[2].dew_point}</Text>
                    </View>
                    <View>
                        <Text>Date: {weatherState.dailyWeather[3].dt}</Text>
                        <Text>Current Temperature: {weatherState.dailyWeather[3].temp}</Text>
                        <Text>Wind Speed: {weatherState.dailyWeather[3].wind_speed}</Text>
                        <Text>Wind Degree: {weatherState.dailyWeather[3].wind_deg}</Text>
                        <Text>Air Pressure: {weatherState.dailyWeather[3].pressure}</Text>
                        <Text>Visibility: {weatherState.dailyWeather[3].visibility}</Text>
                        <Text>Dew Point: {weatherState.dailyWeather[3].dew_point}</Text>
                    </View>
                    <View>
                        <Text>Date: {weatherState.dailyWeather[4].dt}</Text>
                        <Text>Current Temperature: {weatherState.dailyWeather[4].temp}</Text>
                        <Text>Wind Speed: {weatherState.dailyWeather[4].wind_speed}</Text>
                        <Text>Wind Degree: {weatherState.dailyWeather[4].wind_deg}</Text>
                        <Text>Air Pressure: {weatherState.dailyWeather[4].pressure}</Text>
                        <Text>Visibility: {weatherState.dailyWeather[4].visibility}</Text>
                        <Text>Dew Point: {weatherState.dailyWeather[4].dew_point}</Text>
                    </View>
                    <View>
                        <Text>Date: {weatherState.dailyWeather[5].dt}</Text>
                        <Text>Current Temperature: {weatherState.dailyWeather[5].temp}</Text>
                        <Text>Wind Speed: {weatherState.dailyWeather[5].wind_speed}</Text>
                        <Text>Wind Degree: {weatherState.dailyWeather[5].wind_deg}</Text>
                        <Text>Air Pressure: {weatherState.dailyWeather[5].pressure}</Text>
                        <Text>Visibility: {weatherState.dailyWeather[5].visibility}</Text>
                        <Text>Dew Point: {weatherState.dailyWeather[5].dew_point}</Text>
                    </View>
                    <View>
                        <Text>Date: {weatherState.dailyWeather[6].dt}</Text>
                        <Text>Current Temperature: {weatherState.dailyWeather[6].temp}</Text>
                        <Text>Wind Speed: {weatherState.dailyWeather[6].wind_speed}</Text>
                        <Text>Wind Degree: {weatherState.dailyWeather[6].wind_deg}</Text>
                        <Text>Air Pressure: {weatherState.dailyWeather[6].pressure}</Text>
                        <Text>Visibility: {weatherState.dailyWeather[6].visibility}</Text>
                        <Text>Dew Point: {weatherState.dailyWeather[6].dew_point}</Text>
                    </View>
                    <View>
                        <Text>Date: {weatherState.dailyWeather[7].dt}</Text>
                        <Text>Current Temperature: {weatherState.dailyWeather[7].temp}</Text>
                        <Text>Wind Speed: {weatherState.dailyWeather[7].wind_speed}</Text>
                        <Text>Wind Degree: {weatherState.dailyWeather[7].wind_deg}</Text>
                        <Text>Air Pressure: {weatherState.dailyWeather[7].pressure}</Text>
                        <Text>Visibility: {weatherState.dailyWeather[7].visibility}</Text>
                        <Text>Dew Point: {weatherState.dailyWeather[7].dew_point}</Text>
                    </View>
                    <View>
                        <Text>Date: {weatherState.dailyWeather[8].dt}</Text>
                        <Text>Current Temperature: {weatherState.dailyWeather[8].temp}</Text>
                        <Text>Wind Speed: {weatherState.dailyWeather[8].wind_speed}</Text>
                        <Text>Wind Degree: {weatherState.dailyWeather[8].wind_deg}</Text>
                        <Text>Air Pressure: {weatherState.dailyWeather[8].pressure}</Text>
                        <Text>Visibility: {weatherState.dailyWeather[8].visibility}</Text>
                        <Text>Dew Point: {weatherState.dailyWeather[8].dew_point}</Text>
                    </View>
                </View>
            )}
        </View>
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
