const ua = navigator.userAgent;
const msie = ua.indexOf("MSIE ");
if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    console.log("Sorry, but you use IE(((");
}
else {
    const loadGoogleMapsApi = require('load-google-maps-api');
    class Map {
        static loadGoogleMapsApi() {
            return loadGoogleMapsApi({ key: "AIzaSyB-sP5GaXPOGwR_-QWfmHkeX7VXTXJT-KQ"});
        }
        static createMap(googleMaps, mapElement) {
            return new googleMaps.Map(mapElement, {
                center: { lat: 45.520562, lng: -122.677438 },
                zoom: 14
            });
        }
    }

    document.addEventListener("DOMContentLoaded", ()=>{
        let mapElement = document.querySelector(".map");

        Map.loadGoogleMapsApi().then(function(googleMaps) {
            Map.createMap(googleMaps, mapElement);
        });
    });
}