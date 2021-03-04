import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';


function TideDetails({ station, locationName, tideArray, startDate, endDate}) {

   

    var s = tideArray[0].t.replace(" ", "T") ;
    s= s.concat(":00");
    console.log(s);



    var d = new Date(s);
    console.log(d.getDay());


for(let i = 0; i < tideArray.length; i++){
    if(tideArray.type === "L"){
        tideArray.type = "Low Tide"
    }else{
        tideArray.type = "High Tide"
    }
}

    
    return (
      <ScrollView>
             
            <View style={styles.container}>
                <Text style={{fontWeight: "bold", textAlign: 'center', fontSize: 20}}>Station: {station} {locationName}</Text>
                <Text style={{fontWeight: "bold", textAlign: 'center', fontSize: 18}}>Current Tides{'\n'}</Text>
                <Text style={styles.textContainer}>Today's Tide Change: <Text style={styles.dataContainer}> {tideArray[0].t} </Text></Text>
                <Text style={styles.textContainer}>Tide Change: <Text style={styles.dataContainer}>{tideArray[0].v} ft {tideArray[0].type}{'\n'}</Text></Text>
                <Text style={styles.textContainer}>Today's Tide Change: <Text style={styles.dataContainer}> {tideArray[1].t} </Text></Text>
                <Text style={styles.textContainer}>Tide Change: <Text style={styles.dataContainer}>{tideArray[1].v} ft {tideArray[1].type}{'\n'}</Text></Text>
                <Text style={styles.textContainer}>Next tide change at: <Text style={styles.dataContainer}> {tideArray[2].t} </Text></Text>
                <Text style={styles.textContainer}>Tide Change: <Text style={styles.dataContainer}>{tideArray[2].v} ft {tideArray[2].type}{'\n'}</Text></Text>
                <Text style={styles.textContainer}>Next tide change at: <Text style={styles.dataContainer}> {tideArray[3].t} </Text></Text>
                <Text style={styles.textContainer}>Tide Change: <Text style={styles.dataContainer}>{tideArray[3].v} ft {tideArray[3].type}{'\n'}</Text></Text>
                <Text style={styles.textContainer}>Next tide change at: <Text style={styles.dataContainer}> {tideArray[4].t} </Text></Text>
                <Text style={styles.textContainer}>Tide Change: <Text style={styles.dataContainer}>{tideArray[4].v} ft {tideArray[4].type}{'\n'}</Text></Text>
                <Text style={styles.textContainer}>Next tide change at: <Text style={styles.dataContainer}> {tideArray[5].t} </Text></Text>
                <Text style={styles.textContainer}>Tide Change: <Text style={styles.dataContainer}>{tideArray[5].v} ft {tideArray[5].type}{'\n'}</Text></Text>
                <Text style={styles.textContainer}>Next tide change at: <Text style={styles.dataContainer}> {tideArray[6].t} </Text></Text>
                <Text style={styles.textContainer}>Tide Change: <Text style={styles.dataContainer}>{tideArray[6].v} ft {tideArray[6].type}{'\n'}</Text></Text>
                <Text style={styles.textContainer}>Next tide change at: <Text style={styles.dataContainer}> {tideArray[7].t} </Text></Text>
                <Text style={styles.textContainer}>Tide Change: <Text style={styles.dataContainer}>{tideArray[7].v} ft {tideArray[7].type}{'\n'}</Text></Text>
                <Text style={styles.textContainer}>Next tide change at: <Text style={styles.dataContainer}> {tideArray[8].t} </Text></Text>
                <Text style={styles.textContainer}>Tide Change: <Text style={styles.dataContainer}>{tideArray[8].v} ft {tideArray[8].type}{'\n'}</Text></Text>
                <Text style={styles.textContainer}>Next tide change at: <Text style={styles.dataContainer}> {tideArray[9].t} </Text></Text>
                <Text style={styles.textContainer}>Tide Change: <Text style={styles.dataContainer}>{tideArray[9].v} ft {tideArray[9].type}{'\n'}</Text></Text>
                <Text style={styles.textContainer}>Next tide change at: <Text style={styles.dataContainer}> {tideArray[10].t} </Text></Text>
                <Text style={styles.textContainer}>Tide Change: <Text style={styles.dataContainer}>{tideArray[10].v} ft {tideArray[10].type}{'\n'}</Text></Text>
                <Text style={styles.textContainer}>Next tide change at: <Text style={styles.dataContainer}> {tideArray[11].t} </Text></Text>
                <Text style={styles.textContainer}>Tide Change: <Text style={styles.dataContainer}>{tideArray[11].v} ft {tideArray[11].type}{'\n'}</Text></Text>
                <Text style={styles.textContainer}>Next tide change at: <Text style={styles.dataContainer}> {tideArray[12].t} </Text></Text>
                <Text style={styles.textContainer}>Tide Change: <Text style={styles.dataContainer}>{tideArray[12].v} ft {tideArray[12].type}{'\n'}</Text></Text>
                <Text style={styles.textContainer}>Next tide change at: <Text style={styles.dataContainer}> {tideArray[13].t} </Text></Text>
                <Text style={styles.textContainer}>Tide Change: <Text style={styles.dataContainer}>{tideArray[13].v} ft {tideArray[3].type}{'\n'}</Text></Text>
                
          </View>
            {/*
            <View style={styles.forecastContainer}>
                <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 20}}>Choose Date</Text>
                
                <DatePicker

                style={styles.datePickerStyle}
                startDate={startDate} // Initial date from state 
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
                    setEndDate(endDate)

                }}
            />

            </View>*/}
        </ScrollView>

    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        marginBottom: 3, 
        marginTop: 3,
        width: 350,  
        backgroundColor: '#d3d3d3',
        borderLeftColor: '#696969',
        borderLeftWidth: 3 
        
	},
    textContainer:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 1
        
    },
    dataContainer:{
        fontSize: 17,
        color: 'black'
    },

    forecastContainer: {
        borderRadius: 8, 
        marginBottom: 3, 
        marginTop: 3,
        borderWidth: 3, 
        width: 385,  
        height: 310,
        backgroundColor: '#D1E2D2', 
        
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
        marginLeft: 75
      },
})


export default TideDetails;