import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const SafetyItem = ({ ...props }) => {

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'powderblue'}} />
            <View style={{flex: 2, backgroundColor: 'skyblue'}} />
            <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        </View>
    );

    /*
    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.image}
                source={props.image}
                onError={() => console.log('Unable to load image')}
            />
            <Text style={styles.description}>
                {props.description}
            </Text>
            <Text style={styles.link}>
                {props.link}
            </Text>
        </ScrollView>
    );
    */
};

export default SafetyItem;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        maxWidth: 375,
        resizeMode: 'contain',
    },
    description: {
        marginTop: 10,
        padding: 20,
        backgroundColor: '#fff',
        fontSize: 20
    },
    link: {
    }
});
