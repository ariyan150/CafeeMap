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
    map['doubleClickZoom'].disable();
    

    // Add geolocate control to the map.
    var geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true
        });
    map.addControl(geolocate)
    geolocate.on('geolocate', function(e) {
        var lon = e.coords.longitude;
        var lat = e.coords.latitude
        var position = [lon, lat];
        console.log(position);
        });
        

    const content = `
        <h1 style='color:blue;'>Hello World!</h1><h2>Hello World!</h2><h4>Hello World!</h4>
        <style>
            h2   {color: red;}
        </style>
    `

    fetch("data.json")
    .then(response => response.json())
    .then(json => json.features)
    .then(list => list.map(p => {
            var marker = new mapboxgl.Marker({ color: p.properties.color })
            .setLngLat(p.geometry.coordinates)
            .setPopup(new mapboxgl.Popup().setHTML(content))
            .addTo(map);
    }));


    
    
        