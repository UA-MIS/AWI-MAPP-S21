import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import routes from "../navigation/routes";
import Ocean from "../assets/ocean.jpg";
import AWILogo from "../assets/awi.jpg";
import SeaGrantLogo from "../assets/SeaGrant.png";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground source={Ocean} style={styles.image}></ImageBackground>
      </View>
      <View style={styles.topContainer}>
        <Image style={styles.logo} source={AWILogo} />
        <Image style={styles.logo} source={SeaGrantLogo} />
        <Text style={styles.h1}>Tuscaloosa</Text>
        <Text style={styles.h2}>33.189281, -87.56515</Text>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.h2}>Hello</Text>
        <Button
          title="Weather"
          onPress={() => navigation.navigate(routes.WEATHER)}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title="Weather"
          onPress={() => navigation.navigate(routes.WEATHER)}
        />
      </View>
    </View>
  );
}
const win = Dimensions.get("window");
const styles = StyleSheet.create({
  image: {
    width: win.width,
    height: 260,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#F7F4F4",
    alignItems: "center",
    width: "100%",
  },
  h1: {
    opacity: 1,
    color: "#FFF",
    backgroundColor: "rgba(204, 204, 204, 0.5)",
    fontSize: 40,
  },
  h2: {
    color: "#FFF",
    fontSize: 18,
    marginTop: 8,
    backgroundColor: "rgba(204, 204, 204, 0.5)",
  },
  topContainer: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  middleContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    justifyContent: "flex-end",
    width: "90%",
    margin: 20,
    padding: 10,
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  logo: {
    backgroundColor: "rgba(0,0,0,0)",
    width: 200,
    height: 200,
  },
});
