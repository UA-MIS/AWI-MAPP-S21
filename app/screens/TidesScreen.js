import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import MapScreen from './MapScreen';

export default function TidesScreen({navigation, route}) {
    //const lat = navigation.getParam('lat');   
    React.useEffect(() => {
        if (route.params?.lat) {
          console.log(route.params?.lat);
        }
      }, [route.params?.lat]);
      React.useEffect(() => {
        if (route.params?.long) {
          console.log(route.params?.long);
        }
      }, [route.params?.long]);
    return (
        <View style={styles.container}>
         <Button
        onPress={() => navigation.navigate('MyModal', {
            screenName: 'TidesScreen',
          })}
        title="Open Modal"
      />
<Text style={{ margin: 10 }}>Latitude: {route.params?.lat}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})