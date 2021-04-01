// const infobar = document.querySelector('.infobar')


// const choose = async (e) => {
//     window.alert('choose on the map');
//     map.on('dblclick', (e) => {
//         var pos = e.lngLat

//         const card = `
//         <div class="card text-white bg-warning my-3" style="max-width: 18rem;">
//                 <div class="card-header">Header</div>
//                 <div class="card-body">
//                     <h5 class="card-title">${pos}</h5>
//                 </div>
//                 </div>
//         `

//         console.log(pos);
//         map.remove();
//         infobar.innerHTML += card
        
        
//     })
// }

var map2 = new mapboxgl.Map({
    container: 'map2',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [
        51.40571594238281,
        35.70547135425509
      ],
    zoom: 15
});
map2['doubleClickZoom'].disable();

const location_peaker = document.querySelector('.chosen_pos')

// markers saved here
var currentMarkers=[];


map2.on('dblclick', (e) => {
    var pos = e.lngLat
    location_peaker.innerHTML = pos

    // remove markers 
    if (currentMarkers!==null) {
        for (var i = currentMarkers.length - 1; i >= 0; i--) {
        currentMarkers[i].remove();
        }
    }
    
    // tmp marker
    var oneMarker= new mapboxgl.Marker({ color: 'black' })
    .setLngLat([e.lngLat.lng, e.lngLat.lat])
    .addTo(map2);

    // save tmp marker into currentMarkers
    currentMarkers.push(oneMarker);

    // const marker = new mapboxgl.Marker({ color: 'black' })
    // .setLngLat([e.lngLat.lng, e.lngLat.lat])
    // .addTo(map2);
})




