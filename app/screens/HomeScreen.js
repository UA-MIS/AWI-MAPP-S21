import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import routes from "../navigation/routes";
import Ocean from "../assets/ocean.jpg";
import AWILogo from "../assets/awi.png";
import SeaGrantLogo from "../assets/SeaGrant.png";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ImageBackground source={Ocean} style={styles.image}>
          <View style={styles.logoflex}>
            <Image style={styles.logo} source={AWILogo} />
            <Image style={styles.logo} source={SeaGrantLogo} />
          </View>
          <Text style={styles.h1}>Tuscaloosa</Text>
          <Text style={styles.h2}>33.189281, -87.56515</Text>
        </ImageBackground>
      </View>
      <View style={styles.tileContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.WEATHER)}
          style={[styles.tile, { backgroundColor: "#E9F2FF" }]}
        >
          <Text style={styles.tileText}>WEATHER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.TIDES)}
          style={[styles.tile, { backgroundColor: "#E6E6E6" }]}
        >
          <Text style={styles.tileText}>TIDES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.SAFETY)}
          style={[styles.tile, { backgroundColor: "#CFDFD8" }]}
        >
          <Text style={styles.tileText}>SAFETY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.REGULATIONS)}
          style={[styles.tile, { backgroundColor: "#FFF" }]}
        >
          <Text style={styles.tileText}>REGULATIONS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const win = Dimensions.get("window");
const styles = StyleSheet.create({
  image: {
    width: win.width,
    height: 300,
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
    flex: 1,
    alignItems: "center",
  },
  tileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  logo: {
    backgroundColor: "rgba(0,0,0,0)",
    width: 200,
    height: 200,
  },
  logoflex: {
    flexDirection: "row",
  },
  tile: {
    width: "47%",
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 50,
    margin: 5,
  },
  tileText: {
    fontSize: 25,
    fontFamily: "opensansregular",
  },
});
