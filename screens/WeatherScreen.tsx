import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function WeatherScreen() {
    return (
        <View style={styles.container}>
            <Text onPress={() => console.log("Weather text pressed")}>
                This is weather
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    }
})