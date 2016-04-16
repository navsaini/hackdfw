
var map;


function initMap() {
//  var directionsService = new google.maps.DirectionsService;
//  var directionsDisplay = new google.maps.DirectionsRenderer;
    var here = {lat: 33.0149231, lng: -96.9464376};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 33.0149231, lng: -96.9464376}
      });

    var contentString = '<div id="content">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">HERE</h1>'+
          '<div id="bodyContent">'+
          '<p>Gilley\'s Dallas</p>'+
          '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var marker = new google.maps.Marker({
      position: here,
      draggable: true,
      map: map,
      title: 'Here (Gilley\'s Dallas)'
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

    google.maps.event.addListener(map, 'click', function(event) {
        addMarker(event.latLng, map);
        console.log(event.latLng.lat());
        console.log(event.latLng.lng());
    });
}


function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'New Marker'
  });

  // get lat/lng from location
  var lat = location.lat(),
      lng = location.lng();
  // create a new infowindow, set content to location
  var iwindow = new google.maps.InfoWindow({
      content : (lat + ', ' + lng)
  });
  // attach click event on marker to openning infowindow
  marker.addListener('click', function() {
    iwindow.open(map, marker);
  });

}
