import React, { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

function MapComponent() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMapClick = (event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMap
        mapContainerStyle={{ height: '100%', width: '100%' }}
        zoom={10}
        center={{ lat: 0, lng: 0 }}
        onClick={handleMapClick}
      >
        {selectedLocation && (
          <Marker position={selectedLocation} />
        )}
      </GoogleMap>
    </div>
  );
}

export default MapComponent;


// import React from 'react'

// const MapComponent = () => {
//   return (
//     <div>MapComponent</div>
//   )
// }

// export default MapComponent



// import React from 'react'

// const MapComponent = () => {
//   function initMap() {
//     // Create a map object and specify the DOM element for display.
//     var map = new google.maps.Map(document.getElementById('map'), {
//       center: {
//         lat: 50.8461241,
//         lng: 4.3526449
//       },
//       scrollwheel: false,
//       zoom: 15
//     });
  
  
//       $.getJSON("http://beta.json-generator.com/api/json/get/N1us4Mp-M%22)
//       .done(function(data){
//           $.each(data, function(){
//               // Create a marker and set its position.
//           var poi = this;
//           var marker = new google.maps.Marker({
//             map: map,
//             position: {lat: parseFloat(poi.latitude), lng: parseFloat(poi.longitude)},
//             title: poi.title,
//             icon: "https://mt.google.com/vt/icon?psize=20&font=fonts/Roboto-Regular.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-blue.png&ax=44&ay=48&scale=1&text=%E2%80%A2"
//           });
  
  
  
//           });
//       })
//       .fail(function(){
//           alert("cannot get data");
//       })
//   }
  
  
//   initMap();
//   return (
//     <div>MapComponent</div>
//   )
// }

// export default MapComponent