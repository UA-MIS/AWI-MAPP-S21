import HaversineGeolocation from 'haversine-geolocation';

import LocationService from './LocationService';
import * as TideStations from '../assets/TideStations.json';


export default function TideStationService() {
    const { lat, lon } = LocationService();

    const curLocation = {
        latitude: lat,
        longitude: lon
    }

    const stations = TideStations.TideStations;

    // Impossible for any point on earth to be further than 13,000 miles away from another point
    let minDist = 13000;

    let closestStation = stations[0];

    for (var i = 0; i < stations.length; i++) {

        let stationPoint = {
            latitude: stations[i].lat,
            longitude: stations[i].long
        }

        // External package that calculate distance between points using the Haversine Formula, which optimizes finding the
        // shortest distance between two points on the surface of a sphere
        let stationDist = HaversineGeolocation.getDistanceBetween(curLocation, stationPoint, 'mi');

        if (stationDist < minDist) {
            minDist = stationDist;
            closestStation = stations[i];
        }
    }

    return closestStation['station number'];
}