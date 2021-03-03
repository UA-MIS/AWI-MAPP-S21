import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//import DatePicker from 'react-native-datepicker';


function TideDetails({ station, tideArray, startDate, endDate}) {
    console.log(tideArray)
    console.log(startDate)
    return (
      <ScrollView>
            <View style={styles.container}>
                <Text style={{fontWeight: "bold", textAlign: 'center', fontSize: 20}}>Station: {station}</Text>
                <Text style={{fontWeight: "bold", textAlign: 'center', fontSize: 18}}>Today</Text>
                <Text >Day and Time: {tideArray[0].t}</Text>
                <Text>Tide Change: {tideArray[0].v} ft {tideArray[0].type}{'\n'}</Text>
                <Text>Date: {tideArray[1].t}</Text>
                <Text>Tide Change: {tideArray[1].v} ft {tideArray[1].type}{'\n'}</Text>
                <Text>Date: {tideArray[2].t}</Text>
                <Text>Tide Change: {tideArray[2].v} ft {tideArray[2].type}{'\n'}</Text>
                <Text>Date: {tideArray[3].t}</Text>
                <Text>Tide Change: {tideArray[3].v} ft {tideArray[3].type}</Text>
            </View>
            <View style={styles.forecastContainer}>
                <Text>This is the forecasted data</Text>
                {/*
                <DatePicker
                style={styles.datePickerStyle}
                startDate={tideState.startDate} // Initial date from state 
                mode="date" // The enum of date, datetime and time
                placeholder="select date"
                format="YYYY/MM/DD"
                minDate="2021/01/01"
                maxDate="2021/12/30" //--------?
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                    display: 'none',
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                    },
                    dateInput: {
                    marginLeft: 36,
                    },
                }}
                onStartDateChange={(startDate) => {
                    setStartDate(startDate);

                }}
            />*/}

            </View>
        </ScrollView>

    
    );
}

const styles = StyleSheet.create({
    container: {
        height: 310,
        borderRadius: 8, 
        marginBottom: 3, 
        marginTop: 3,
        borderWidth: 3, 
        width: 385,  
        backgroundColor: 'powderblue', 
        
	},
    forecastContainer: {
        borderRadius: 8, 
        marginBottom: 3, 
        marginTop: 3,
        borderWidth: 3, 
        width: 385,  
        height: 310,
        backgroundColor: 'powderblue', 
        
	},
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
      },
      datePickerStyle: {
        width: 200,
        marginTop: 20,
      },
})


export default TideDetails;