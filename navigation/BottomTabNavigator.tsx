import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { BottomTabParamList, WeatherParamList, TidesParamList, SafetyParamList } from '../types';

import WeatherScreen from '../screens/WeatherScreen';
import TidesScreen from '../screens/TidesScreen';
import SafetyScreen from '../screens/SafetyScreen';

import SafetyItemScreen from '../screens/SafetyItemScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

    return (
        <BottomTab.Navigator
            initialRouteName='Weather'>
            
            <BottomTab.Screen
                name='Weather'
                component={WeatherNavigator}
            />

            <BottomTab.Screen
                name='Tides'
                component={TidesNavigator}
            />

            <BottomTab.Screen
                name='Safety'
                component={SafetyNavigator}
            />
        </BottomTab.Navigator>
    );
}

const WeatherStack = createStackNavigator<WeatherParamList>();

function WeatherNavigator() {
    return (
        <WeatherStack.Navigator>
            <WeatherStack.Screen
                name="WeatherScreen"
                component={WeatherScreen}
                options={{ headerTitle: 'Weather' }}
            />
        </WeatherStack.Navigator> 
    );
}

const TidesStack = createStackNavigator<TidesParamList>();

function TidesNavigator() {
    return (
        <TidesStack.Navigator>
            <TidesStack.Screen
                name="TidesScreen"
                component={TidesScreen}
                options={{ headerTitle: 'Tides' }}
            />
        </TidesStack.Navigator> 
    );
}

const SafetyStack = createStackNavigator<SafetyParamList>();

function SafetyNavigator() {
    return (
        <SafetyStack.Navigator
            initialRouteName='SafetyScreen'
        >
            <SafetyStack.Screen
                name="SafetyScreen"
                component={SafetyScreen}
                options={{ headerTitle: 'Safety' }}
            />

            <SafetyStack.Screen
                name="SafetyItemScreen"
                component={SafetyItemScreen}
            />
        </SafetyStack.Navigator> 
    );
}
