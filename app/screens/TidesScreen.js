import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import MapScreen from './MapScreen';

export default function TidesScreen({navigation}) {
    //const lat = navigation.getParam('lat');   
    
    return (
        <View style={styles.container}>
         <Button
        onPress={() => navigation.navigate('MyModal', {
            screenName: 'TidesScreen',
          })}
        title="Open Modal"
      />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})