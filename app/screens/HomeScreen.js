import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import routes from "../navigation/routes";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.h1}>AlligatorChef</Text>
        <Text style={styles.h2}>Providing cajun bacon recipes since 1987.</Text>
      </View>
      <View>
        <Text style={styles.h2}>Hello</Text>
        <Button
          title="Weather"
          onPress={() => navigation.navigate(routes.WEATHER)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#000",
    alignItems: "center",
    width: "100%",
  },
  h1: {
    color: "#008F68",
    fontSize: 40,
  },
  h2: {
    color: "#FAE042",
    fontSize: 18,
    marginTop: 8,
  },
  topContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  middleContainer: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  bottomContainer: {
    justifyContent: "flex-end",
    width: "90%",
    margin: 20,
    padding: 10,
  },
});
