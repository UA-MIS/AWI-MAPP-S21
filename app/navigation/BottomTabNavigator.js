import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import WeatherScreen from '../screens/WeatherScreen';
import TidesScreen from '../screens/TidesScreen';
import SafetyScreen from '../screens/SafetyScreen';
import SafetyItemScreen from '../screens/SafetyItemScreen';

import { Icon } from '../hooks/useCachedResources';


const BottomTab = createBottomTabNavigator();

const activeColor = '#007AFF';
const inactiveColor = 'gray';

export default function BottomTabNavigator() {

    return (
        <BottomTab.Navigator
            initialRouteName='Weather'
            tabBarOptions={{
                activeTintColor: activeColor,
                inactiveTintColor: inactiveColor
            }}
        >
            
            <BottomTab.Screen
                name='Weather'
                component={WeatherNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        let color = focused ? activeColor : inactiveColor
                        return <Icon name='cloud' size={25} color={color} /> // Proposed color: gray
                    }
                }}
            />

            <BottomTab.Screen
                name='Tides'
                component={TidesNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        let color = focused ? activeColor : inactiveColor
                        return <Icon name='waves' size={25} color={color} /> // Proposed color: gray
                    }
                }}
            />

            <BottomTab.Screen
                name='Safety'
                component={SafetyNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        let color = focused ? activeColor : inactiveColor
                        return <Icon name='lifebuoy' size={25} color={color} /> // Proposed color: gray
                    }
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
                options={{ headerTitle: 'Weather' }}
            />
        </WeatherStack.Navigator> 
    );
}

const TidesStack = createStackNavigator();

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

const SafetyStack = createStackNavigator();

function SafetyNavigator() {
    return (
        <SafetyStack.Navigator>
            <SafetyStack.Screen
                name="SafetyScreen"
                component={SafetyScreen}
                options={{ headerTitle: 'Safety' }}
            />
            <SafetyStack.Screen
                name='SafetyItemScreen'
                component={SafetyItemScreen}
                options={({ route }) => ({ title: route.params.name })}
            />
        </SafetyStack.Navigator> 
    );
}
