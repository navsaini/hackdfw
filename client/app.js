
var map;
var markerRef;
var winRef;

function initMap() {

    var here = {lat: 33.0149231, lng: -96.9464376};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
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
    winRef = infowindow;

    var marker = new google.maps.Marker({
      position: here,
      draggable: true,
      map: map,
      title: 'Here (Gilley\'s Dallas)'
    });
    markerRef = marker;
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

    google.maps.event.addListener(map, 'click', function(event) {
        addMarker(event.latLng, map);
    });
}


function addMarker(location, map) {
  // remove old marker
  markerRef.setMap(null);
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'New Marker'
  });
  markerRef = marker;

  // get lat/lng from location
  var lat = location.lat(),
      lng = location.lng();

  updateWindow(lat + ', ' + lng, map);

 $.get('/submit/' + lat + '/' + lng, function(data) {
     console.log(data);
 });
       
  // attach click event on marker to openning infowindow
  marker.addListener('click', function() {
    winRef.open(map, marker);
  });
    
}

function updateWindow(content, map) {
    winRef.close();
    var iwindow = new google.maps.InfoWindow({
      content : content
    });
    winRef = iwindow;
}
