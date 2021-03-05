import * as React from 'react';
import { StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import SafetyList from '../components/SafetyList';

export default function SafetyScreen({navigation}) {
    
    return (
        <Screen style={styles.container}>
            <SafetyList navigation={navigation}/>
        </Screen>
    );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
