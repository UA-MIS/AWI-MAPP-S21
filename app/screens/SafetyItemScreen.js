import * as React from 'react';
import { StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import SafetyItem from '../components/SafetyItem';

export default function SafetyItemScreen({ route }) {

    const { item } = route.params;

    return (
        <Screen style={styles.container}>
            <SafetyItem
                id={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
                link={item.link}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})