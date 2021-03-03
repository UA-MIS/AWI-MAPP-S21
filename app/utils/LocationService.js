import useLocation from "../hooks/useLocation";

// Returns lat and lon of current location as numbers

export default function LocationService() {
  const userLocation = useLocation();
  console.log(JSON.stringify(userLocation.latitude));
  // var lat = userLocation.latitude;
  var lat = 30;
  // var lon = userLocation.longitude;
  var lon = -80;

  return { lat, lon };
}
