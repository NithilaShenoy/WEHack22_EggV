// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 15,
  });
  infoWindow = new google.maps.InfoWindow();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    };
    var cs1 = {lat:32.98670957381987, lng: -96.75762701142023};
    var cs2 = {lat: 32.98580963782793, lng: -96.75063181057897};
    var cs3 = {lat:32.986385597919686, lng: -96.7453532234411};
    var cs4 = {lat: 32.99289805505906, lng: -96.75378461905194};
    var cs5 = {lat:32.996538650886755, lng: -96.76276528026158};
    var cs6 = {lat: 32.98002340505598, lng: -96.77129012693484};
    var marker = new google.maps.Marker({
        position: cs1,
        map: map,
        title: 'Charging Station'
    });
    var marker = new google.maps.Marker({
        position: cs2,
        map: map,
        title: 'Charging Station'
    });
    var marker = new google.maps.Marker({
        position: cs3,
        map: map,
        title: 'Charging Station'
    });
    var marker = new google.maps.Marker({
        position: cs4,
        map: map,
        title: 'Charging Station'
    });
    var marker = new google.maps.Marker({
        position: cs5,
        map: map,
        title: 'Charging Station'
    });
    var marker = new google.maps.Marker({
        position: cs6,
        map: map,
        title: 'Charging Station'
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}