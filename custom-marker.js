
var geojson = {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'properties': {
'message': 'Foo',
'iconSize': [60, 60]
},
'geometry': {
'type': 'Point',
'coordinates': [-66.324462890625, -16.024695711685304]
}
},
{
'type': 'Feature',
'properties': {
'message': 'Bar',
'iconSize': [50, 50]
},
'geometry': {
'type': 'Point',
'coordinates': [-61.2158203125, -15.97189158092897]
}
},
{
'type': 'Feature',
'properties': {
'message': 'Baz',
'iconSize': [40, 40]
},
'geometry': {
'type': 'Point',
'coordinates': [-63.29223632812499, -18.28151823530889]
}
}
]
};
 
 
// add markers to map
geojson.features.forEach(function (marker) {
// create a DOM element for the marker
var el = document.createElement('div');
el.className = 'marker';
el.style.backgroundImage =
'url(https://placekitten.com/g/' +
marker.properties.iconSize.join('/') +
'/)';
el.style.width = marker.properties.iconSize[0] + 'px';
el.style.height = marker.properties.iconSize[1] + 'px';
el.style.backgroundSize = '100%';
 
el.addEventListener('click', function () {
window.alert(marker.properties.message);
});
 
// add marker to map
new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.addTo(map);
});