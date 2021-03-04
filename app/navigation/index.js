import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

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
        <Stack.Navigator>
            <Stack.Screen name='Root' component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name='NotFound' component={NotFoundScreen} />
        </Stack.Navigator>
    )
}
