/* global vars */
var map;  
var mapCanvas;
var mapOptions;
var amsterdam;
var minchinhampton;
var myCity;

/* Swaps the display of the map to make pic visible */ 
function showImage() {	
    document.getElementById("pic").style.display = "block";
   	document.getElementById("map").style.display = "none";   
}

/* Swaps the display of the pic to make map visible */ 
function showMap() {
    document.getElementById("map").style.display = "block";
    if(document.getElementById("pic")) 
    {
    	document.getElementById("pic").style.display = "none";
    }   
}

/* The map div loads google map content - default location to Amsterdam */
function myMap() {
  amsterdam = new google.maps.LatLng(52.395715,4.888916);
  mapCanvas = document.getElementById("map");
  mapOptions = {center: amsterdam, zoom: 7};
  map = new google.maps.Map(mapCanvas,mapOptions);
 
  myCity = new google.maps.Circle({
    center: amsterdam,
    radius: 50000,
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.1
  });
  myCity.setMap(map);
}

/* Load new google map location in the map div */
function location2() {  
  lats = 51.708893;
  longs = -2.177669;
  minchinhampton=new google.maps.LatLng(lats, longs)
  map.setCenter(minchinhampton);
  map.setZoom(14);
  myCity = new google.maps.Circle({
    center: minchinhampton,
    radius: 250,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#000000",
    fillOpacity: 0.1
  });
  myCity.setMap(map);
  
  /* Make sure the div is displayed */
  showMap();
}

/* Update the map div to either make it visible or swap back to Amsterdam location */
function viewMap() {
    if(document.getElementById("map").style.display == "none")
    {
    	showMap();
    }
    else
    {
    	/* Triggers Amsterdam to be loaded when user clicks from locations 2 to Map */
      	myMap();
    }
}
