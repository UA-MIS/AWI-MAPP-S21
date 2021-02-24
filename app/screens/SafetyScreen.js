import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SafetyList from '../components/SafetyList';


export default function SafetyScreen() {
    return (
        <View style={styles.container}>
            <SafetyList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    }
})