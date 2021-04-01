mapboxgl.accessToken = 'pk.eyJ1IjoiYXJpeWFuMTUwIiwiYSI6ImNrbXprYnQ4ODBlbnMydXQ3bnV2ZDUweG0ifQ.lfpDtDAq3YVS8_PNnmJuXQ';
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
                    'coordinates': [
                        51.40571594238281,
                        35.70547135425509
                      ]
                }
            }
        ]
    };
    
    

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [
            51.40571594238281,
            35.70547135425509
          ],
        zoom: 5
    });

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