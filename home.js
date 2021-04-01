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
    // Add geolocate control to the map.
    map.addControl(
        new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true
        })
        );

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



    const maker = (e) => {
        var marker = new mapboxgl.Marker({ color: 'black' })
        .setLngLat([e.lngLat.lng, e.lngLat.lat])
        .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
        .addTo(map);
    }

    
    const choose = (e) => {
            window.alert('choose on the map');
            map.on('click', () => console.log('selected'))
            
        }
        

    // map.on('click', maker)
        