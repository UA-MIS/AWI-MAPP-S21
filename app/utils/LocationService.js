import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";

export default function LocationService() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {

      let { status } = await Location.requestPermissionsAsync();
      //  let { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  //let fakeLocation = {};
  const coord = {
    altitude: 0,
    altitudeAccuracy: -1,
    latitude: 30.6954,
    accuracy: 5,
    longitude: -88.0399,
    heading: -1,
    speed: -1,
  };
  if (errorMsg) {
      text = errorMsg;
      alert(errorMsg);
      return { latitude: coord.latitude, longitude: coord.longitude };
  } else if (location) {
      const coord = location.coords;
      return { latitude: coord.latitude, longitude: coord.longitude };
  } else {
      return { latitude: coord.latitude, longitude: coord.longitude };
  }
}
