import { MAP_API_KEY } from '../utils/GoogleApiKey';


export default function AddressService(lat, lon){
    var address = '';
    let storableLocation = {};
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + lat + ',' + lon + '&key=' + MAP_API_KEY)
    .then((response) => response.json())
    .then((responseJson) => {
        //console.log(JSON.stringify(responseJson));
        for (var ac = 0; ac < responseJson.results[0].address_components.length; ac++) {
            var component = responseJson.results[0].address_components[ac];

            switch(component.types[0]) {
                case 'locality':
                    storableLocation.city = component.long_name;
                    break;
                case 'administrative_area_level_1':
                    storableLocation.state = component.short_name;
                    break;
                case 'country':
                    storableLocation.country = component.long_name;
                    storableLocation.registered_country_iso_code = component.short_name;
                    break;
                case 'establishment':
                    storableLocation.establishment = component.long_name;
                    break;
            }
        };
        if(storableLocation.city !== 'undefined'){
            // console.log(storableLocation.city);
                address = storableLocation.city;
                if(storableLocation.state !== 'undefined'){
                    address = address.concat(', ' + storableLocation.state);
                }
            }else if(storableLocation.establishment !== 'undefined'){
                address = storableLocation.establishment;
            }else{
                address = lat + ', ' + lon;
            }
        return address;
  
          
        
    
   });
//    const getCity = async (lat, lon) => {
//     let responseData  = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + lat + ',' + lon + '&key=' + MAP_API_KEY)
//     //use string literals
//     let responseJ = await responseData.json();
//     return responseJ;
//    }
//    const getActivity = async () => {
//     let responseJson = await getCity(lat, lon);
//      //now you can directly use jsonData
//      for (var ac = 0; ac < responseJson.results[0].address_components.length; ac++) {
//         var component = responseJson.results[0].address_components[ac];

//         switch(component.types[0]) {
//             case 'locality':
//                 storableLocation.city = component.long_name;
//                 break;
//             case 'administrative_area_level_1':
//                 storableLocation.state = component.short_name;
//                 break;
//             case 'country':
//                 storableLocation.country = component.long_name;
//                 storableLocation.registered_country_iso_code = component.short_name;
//                 break;
//             case 'establishment':
//                 storableLocation.establishment = component.long_name;
//                 break;
//         }
//     };
//     if(storableLocation.city !== 'undefined'){
//         // console.log(storableLocation.city);
//             address = storableLocation.city;
//             if(storableLocation.state !== 'undefined'){
//                 address = address.concat(', ' + storableLocation.state);
//             }
//         }else if(storableLocation.establishment !== 'undefined'){
//             address = storableLocation.establishment;
//         }else{
//             address = lat + ', ' + lon;
//         }
//         console.log("hello");
//     return address;
  

   }


   
   
   