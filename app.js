

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
}
