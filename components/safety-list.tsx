import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, StyleSheet, Pressable, Text, View } from 'react-native';

import { SafetyData, SafetyItemFormat } from '../assets/safety/safety-data';
import { SafetyParamList } from '../types';


type SafetyScreenNavigationProp =
    StackNavigationProp<SafetyParamList, 'SafetyScreen'>;

type Props = {
    navigation: SafetyScreenNavigationProp;
}


const SafetyList = ({ navigation }: Props) => {
    
    return (
        <View style={styles.container}>
            <FlatList
                // Convert id from number to string
                keyExtractor={(item) => item.id.toString()}
                data={SafetyData}
                renderItem={({ item }) => (
                    <Pressable style={styles.item} onPress={() => navigation.navigate('SafetyItemScreen', {item: item})}>
                        <Text>{item.title}</Text>
                    </Pressable>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    item: {
        marginTop: 10,
        padding: 20,
        backgroundColor: '#d3d3d3',
        fontSize: 40
    }
});

export default SafetyList;