
import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';


function TideDetails({ station, locationName, tideArray, startDate, endDate}) {



// for(let i = 0; i < tideArray.length; i++){
//     if(tideArray.type === "L"){
//         tideArray.type = "Low Tide"
//     }else{
//         tideArray.type = "High Tide"
//     }
// }

function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay() ;    
    return isNaN(dayOfWeek) ? null : 
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

    return (
        

        <View style={styles.container}>
            <Text style={styles.header}>Station: {locationName} (#{station}){'\n'}Current Tides for: {getDayOfWeek( new Date())}{'\n'}
                <Text style={styles.titles}>
                {'\t'}Type:                       Time:                       Height:{'\n'}
                </Text>
                {'\n'}Future Tides
            </Text>
            <ScrollView>
                {tideArray.map((data, index) => {
                    return (
                        <View key={index} style={styles.entry}>
                            <Text style={styles.days}>{getDayOfWeek( new Date())}</Text>
                            <Text style={styles.titles}>
                                {'\t'}Type:                       Time:                       Height:{'\n'} 
                            </Text>
                            <Text>
                                {'\t'}  {data.type}              {data.t}              {data.v} ft
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
        flex: 0,
        
	},
    header: {
        textAlign: 'center',
        fontSize: 18,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    days: {
        fontWeight: 'bold',
        fontSize: 18
    },
    titles: {
        fontWeight: 'bold',
        fontSize: 13
    },
    entry: {
        marginTop: 20,
        textAlign: 'center',
        padding: 2,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
})


export default TideDetails;