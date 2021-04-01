mapboxgl.accessToken = 'pk.eyJ1IjoiYXJpeWFuMTUwIiwiYSI6ImNrbXprYnQ4ODBlbnMydXQ3bnV2ZDUweG0ifQ.lfpDtDAq3YVS8_PNnmJuXQ';
    

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [
            51.40571594238281,
            35.70547135425509
          ],
        zoom: 15
    });


    fetch("data.json")
    .then(response => response.json())
    .then(json => json.features)
    .then(list => list.map(p => {
            console.log(p.properties.color)
            var marker = new mapboxgl.Marker({ color: p.properties.color })
            .setLngLat(p.geometry.coordinates)
            .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
            .addTo(map);
    }));



    const maker = (e) => {
        var marker = new mapboxgl.Marker({ color: 'black' })
        .setLngLat([e.lngLat.lng, e.lngLat.lat])
        .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
        .addTo(map);
    }


    map.on('click', maker)
        
        // Create a default Marker, colored black, rotated 45 degrees.
        

    // add markers to map
    // geojson.features.forEach(function (marker) {
    //     // create a DOM element for the marker
    //     var el = document.createElement('div');
    //     el.className = 'marker';
    //     el.style.backgroundImage =
    //         'url(https://placekitten.com/g/' +
    //         marker.properties.iconSize.join('/') +
    //         '/)';
    //     el.style.width = marker.properties.iconSize[0] + 'px';
    //     el.style.height = marker.properties.iconSize[1] + 'px';
    //     el.style.backgroundSize = '100%';

    //     el.addEventListener('click', function () {
    //         window.alert(marker.properties.message);
    //     });

    //     // add marker to map
    //     new mapboxgl.Marker(el)
    //         .setLngLat(marker.geometry.coordinates)
    //         .addTo(map);
    // });