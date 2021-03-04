import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";

export default function LocationService() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      console.log("get location was called");

      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  const coord = {
    altitude: 0,
    altitudeAccuracy: -1,
    latitude: 37.785834,
    accuracy: 5,
    longitude: -122.406417,
    heading: -1,
    speed: -1,
  };
  if (errorMsg) {
    text = errorMsg;
    alert(errorMsg);
    let fakeLocation = {
      coords: {
        altitude: 0,
        altitudeAccuracy: -1,
        latitude: 37.785834,
        accuracy: 5,
        longitude: -122.406417,
        heading: -1,
        speed: -1,
      },
      timestamp: 1614872382359.7021,
    };
    const coord = fakeLocation.coords;
    return { coord };
  } else if (location) {
    text = JSON.stringify(location);
    let lat = JSON.stringify(location.coords.latitude);
    //console.log(lat);
    const coord = location.coords;
    //console.log(coord.latitude);
    return { coord };
  } else {
    return { coord };
  }
}
