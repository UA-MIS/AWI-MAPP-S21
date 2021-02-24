import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapScreen from './MapScreen';

export default function WeatherScreen() {
    return (
        <View style={styles.container}>
            <MapScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    }
})