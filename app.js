

var map;
function initMap() {
//  var directionsService = new google.maps.DirectionsService;
//  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 33.0149231, lng: -96.9464376}
  });
}
