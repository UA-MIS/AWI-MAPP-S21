import React, { useState } from 'react';
import { FlatList, StyleSheet, Pressable, Text, View, TouchableOpacity } from 'react-native';

import { SafetyData } from '../assets/safety/safety-data';

const SafetyList = ({ navigation }) => {
    
    return (
        <View style={styles.container}>
            <FlatList
                // Convert id from number to string
                keyExtractor={(item) => item.id.toString()}
                data={SafetyData}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate('SafetyItemScreen', { item: item})}
                    >
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    item: {
        marginTop: 10,
        padding: 20,
        backgroundColor: '#d3d3d3',
        fontSize: 40,
        borderLeftColor: '#696969',
        borderLeftWidth: 3
    }
});

export default SafetyList;
