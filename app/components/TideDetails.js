/*
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
 
function TideDetails({station, time, type, tide}) {
    return (
        <View >
                <Text>{station}  {time}  {type}  {tide}</Text>         
        </View>
    );
}
 
const styles = StyleSheet.create({
    tideContainer: {
        flex: 0,
        backgroundColor: '#f7b733'
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tideText: {
        fontSize: 10,
        color: '#fff'
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
    },
    title: {
        fontSize: 48,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    }
})
 
export default TideDetails;
*/


import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';


function TideDetails({ station, locationName, tideArray, startDate, endDate}) {

   

    // var s = tideArray[0].t.replace(" ", "T") ;
    // s= s.concat(":00");
    // var d = new Date(s);


for(let i = 0; i < tideArray.length; i++){
    if(tideArray.type === "L"){
        tideArray.type = "Low Tide"
    }else{
        tideArray.type = "High Tide"
    }
}

    
    return (

        <View style={styles.container}>
            <Text style={styles.header}>Station: {locationName} (#{station})</Text>
                
            <ScrollView>
                {tideArray.map((data, index) => {
                    return (
                        <View key={index} style={styles.entry}>
                            <Text>
                                Type: {data.type}{'\n'}Time: {data.t}{'\n'}Height: {data.v}
                            </Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>

    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
	},
    header: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },
    entry: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 4,
        backgroundColor: '#d3d3d3',
        borderLeftColor: '#696969',
        borderLeftWidth: 3
    }
})


export default TideDetails;
