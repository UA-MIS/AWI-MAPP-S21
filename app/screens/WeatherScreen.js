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
  const initialWeatherState = {
    isLoading: true,
    dtCalled: "",
    dtCalculated: "",
    temperature: 0,
    weatherCondition: null,
  };

  const [weatherState, setWeatherState] = useState(initialWeatherState);

  const [location, setLocation] = useState(LocationService());

  const fetchWeather = async (lat, lon) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`
    );
    const json = await response.json();

    setWeatherState({
      isLoading: false,
      dtCalled: Date.now(),
      dtCalculated: json.dt,
      temperature: json.main.temp,
      weatherCondition: json.weather[0].main,
    });
  };

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
    <View style={styles.container}>
      {weatherState.isLoading ? (
        <ActivityIndicator size="large" loading={weatherState.isLoading} />
      ) : (
        <View>
          <Text>{city}</Text>
          <Text>Current temperature: {weatherState.temperature}</Text>
          <Text>Datetime: {weatherState.dtCalled}</Text>
        </View>
      )}
    </View>
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
