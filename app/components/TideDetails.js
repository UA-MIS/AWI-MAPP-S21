import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';


function TideDetails({ station, tideArray }) {
    return (
        <View style={styles.container}>
            <Text>
                {tideArray[0].t}
                {tideArray[0].v}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
		flex: 1,
        borderRadius: 10, 
        marginBottom: 20, 
        borderWidth: 2, 
        width: 375,  
        backgroundColor: 'powderblue'
	}
})


export default TideDetails;