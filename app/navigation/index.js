import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MapScreen from '../screens/MapScreen';

import NotFoundScreen from '../screens/NotFoundScreen';
import BottomTabNavigator from './BottomTabNavigator';

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}

const Stack = createStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator mode="modal">
            <Stack.Screen name='Root' component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="MyModal" component={MapScreen}  options={{ headerShown: false }}/>
            <Stack.Screen name='NotFound' component={NotFoundScreen} />
        </Stack.Navigator>
    )
}
