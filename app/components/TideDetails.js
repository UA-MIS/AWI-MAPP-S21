import React from 'react';
import {  Button, Text, View, StyleSheet } from 'react-native';


function TideDetails({  station, day, highTide, lowTide}) {
    return (
        <View>
            <View style={[styles.tideContainer
            ]}>
                
                <Text>Today's Tides</Text>
                <Text>The station Number: {station}</Text>         
                <Text>Date: {day}</Text>
                <Text>High Tide: {highTide}</Text>
                <Text>Low Tide: {lowTide}</Text>
 
             </View>
             <View style={[styles.buttonContainer ]}>
                    <Button  title="Monday"/>
                    <Button  title="Tuesday"/>
                    <Button  title="Wednesday"/>
                    <Button  title="Thursday"/>
                    <Button  title="Friday"/>
                    <Button  title="Saturday"/>
                    <Button  title="Sunday"/>
             </View>
                   
         </View>
       
        
    );
}
const styles = StyleSheet.create({
    tideContainer: {
		flex: 1, 
        flexDirection: 'column', 
        borderRadius: 10, 
        marginBottom: 20, 
        borderWidth: 2, 
        width: 375,  
        backgroundColor: 'powderblue'
	},
    buttonContainer: {
        flex: 1,
        borderWidth: 4,
        borderColor: "black",
        borderRadius: 5,
        marginBottom: 5, 
        backgroundColor: 'powderblue'
      },
})


export default TideDetails;