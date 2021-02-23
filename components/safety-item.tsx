import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { SafetyItemFormat } from '../assets/safety/safety-data';

export default function SafetyItem(item: SafetyItemFormat) {

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: item.image}}
            />
            <Text style={styles.description}>
                {item.description}
            </Text>
            <Text style={styles.link}>
                {item.link}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    image: {
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    description: {
        marginTop: 10,
        padding: 20,
        backgroundColor: '#d3d3d3',
        fontSize: 40
    },
    link: {

    }
});
