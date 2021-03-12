import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import WeatherScreen from "../screens/WeatherScreen";
import WeatherMapScreen from "../screens/WeatherMapScreen";
import TidesScreen from "../screens/TidesScreen";
import TidesMapScreen from "../screens/TidesMapScreen";
import SafetyScreen from "../screens/SafetyScreen";
import SafetyItemScreen from "../screens/SafetyItemScreen";
import HomeScreen from "../screens/HomeScreen";
import { Icon } from "../hooks/useCachedResources";

const BottomTab = createBottomTabNavigator();

const activeColor = "#007AFF";
const inactiveColor = "gray";

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Weather"
      tabBarOptions={{
        activeTintColor: activeColor,
        inactiveTintColor: inactiveColor,
      }}
    >
      <BottomTab.Screen
        name="Weather"
        component={WeatherNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            let color = focused ? activeColor : inactiveColor;
            return <Icon name="cloud" size={25} color={color} />; // Proposed color: gray
          },
        }}
      />

      <BottomTab.Screen
        name="Tides"
        component={TidesNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            let color = focused ? activeColor : inactiveColor;
            return <Icon name="waves" size={25} color={color} />; // Proposed color: gray
          },
        }}
      />

      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            let color = focused ? activeColor : inactiveColor;
            return <Icon name="ios-home" size={25} color={color} />; // Proposed color: gray
          },
        }}
      />

      <BottomTab.Screen
        name="Safety"
        component={SafetyNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            let color = focused ? activeColor : inactiveColor;
            return <Icon name="lifebuoy" size={25} color={color} />; // Proposed color: gray
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

const WeatherStack = createStackNavigator();

function WeatherNavigator() {
  return (
    <WeatherStack.Navigator>
      <WeatherStack.Screen
        name="WeatherScreen"
        component={WeatherScreen}
        options={{ headerTitle: "Weather" }}
      />
      <WeatherStack.Screen
        name="WeatherMapScreen"
        component={WeatherMapScreen}
        options={{ headerTitle: "Select a Location..." }}
      />
    </WeatherStack.Navigator>
  );
}

const TidesStack = createStackNavigator();

function TidesNavigator() {
  return (
    <TidesStack.Navigator>
      <TidesStack.Screen
        name="TidesMapScreen"
        component={TidesMapScreen}
        options={{ headerTitle: "Select a Station..." }}
      />
      <TidesStack.Screen
        name="TidesScreen"
        component={TidesScreen}
        options={{ headerTitle: "Tides" }}
      />
    </TidesStack.Navigator>
  );
}
const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home" }}
      />
    </HomeStack.Navigator>
  );
}

const SafetyStack = createStackNavigator();

function SafetyNavigator() {
  return (
    <SafetyStack.Navigator>
      <SafetyStack.Screen
        name="SafetyScreen"
        component={SafetyScreen}
        options={{ headerTitle: "Safety" }}
      />
      <SafetyStack.Screen
        name="SafetyItemScreen"
        component={SafetyItemScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </SafetyStack.Navigator>
  );
}
