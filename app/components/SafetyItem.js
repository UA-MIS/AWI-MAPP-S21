import React from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Linking from 'expo-linking';

import AppButton from './AppButton';

const SafetyItem = ({ ...props }) => {

    function onLinkPress() {
        Alert.alert(
            'Leave MAPP?',
            'Clicking Continue will open webpage in your browser.',
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Continue",
                    onPress: () => Linking.openURL(props.link)
                }
            ],
            { cancelable: false }
        );
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                {props.image !== '' &&
                <Image
                    style={styles.image}
                    source={props.image}
                    onError={() => console.log('Unable to load image')}
                />
                }
                <Text style={styles.description}>
                    {props.description}
                </Text>
                <AppButton
                    title={'Click here for more information'}
                    onPress={onLinkPress}
                />
            </View>
        </ScrollView>
    );
};

export default SafetyItem;


const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: {
        maxWidth: '100%',
        maxHeight: 255,
        resizeMode: 'contain'
    },
    description: {
        marginTop: 10,
        padding: 20,
        fontSize: 20
    },
    link: {
        
    }
});
