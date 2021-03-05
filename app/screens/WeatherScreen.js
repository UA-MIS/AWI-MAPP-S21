import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Screen from "../components/Screen";
import WeatherDetails from "../components/WeatherDetails";
import { API_KEY } from "../utils/WeatherApiKey";
import LocationService from "../utils/LocationService";
import AddressService from "../utils/AddressService";
import { Icon } from "../hooks/useCachedResources";

export default function WeatherScreen({ navigation, route }) {
  // const initialWeatherState = {
  //   isLoading: true,
  //   dtCalled: "",
  //   dtCalculated: "",
  //   temperature: 0,
  //   weatherCondition: null,
  // };

  //const [weatherState, setWeatherState] = useState(initialWeatherState);

  const [location, setLocation] = useState(LocationService());

  const fetchWeather = (lat, lon) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`
    )
      .then((res) => res.json())
      .then((json) => {
        var t = Math.round(json.main.temp);
        setWeatherState({
          isLoading: false,
          temperature: t,
          weatherCondition: json.weather[0].main,
          error: null,
        });
      });
  };

  const initialWeatherState = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null,
  };
  const [weatherState, setWeatherState] = useState(initialWeatherState);

  // Add refresh and map buttons in header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={styles.leftHeaderButton}>
          <TouchableOpacity
            onPress={() => fetchWeather(location.latitude, location.longitude)}
          >
            <Icon name="arrows-cw" size={23} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={styles.rightHeaderButton}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("WeatherMapScreen", {
                initLocation: location,
              })
            }
          >
            <Icon name="location" size={23} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [location]);

  setLocation;

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
    <Screen style={styles.container}>
      {weatherState.isLoading ? (
        <Text>Is Loading</Text>
      ) : (
        <WeatherDetails
          weather={weatherState.weatherCondition}
          temperature={weatherState.temperature}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  leftHeaderButton: {
    marginLeft: 30,
  },
  rightHeaderButton: {
    marginRight: 30,
  },
});
