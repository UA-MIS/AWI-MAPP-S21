import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { weatherConditions } from "../utils/WeatherConditions";

function WeatherDetails({ weather, temperature }) {
  return (
    <View
      style={[
        styles.weatherContainer,
        { backgroundColor: weatherConditions[weather].color },
      ]}
    >
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          name={weatherConditions[weather].icon}
          color={"#fff"}
          size={48}
        />
        <Text style={styles.tempText}>{temperature}˚</Text>
      </View>

      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherConditions[weather].title}</Text>
        <Text style={styles.subtitle}>
          {weatherConditions[weather].subtitle}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherContainer: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: "#f7b733",
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempText: {
    fontSize: 48,
    color: "#fff",
    justifyContent: "center",
  },
  bodyContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    color: "#fff",
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 24,
    color: "#fff",
  },
});

export default WeatherDetails;
