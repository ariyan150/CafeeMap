var currentMarkers2=[];
fetch("data.json")
.then(response => response.json())
.then(json => json.features)
.then(fetched_list => {

    const refresh = ()=> {
        const pos = map.getCenter()
    
        const lat = pos.lat
        const lng = pos.lng
    
        const num = 0.02
    
        const lat_range = [lat-num,lat+num]
        const lng_range = [lng-num,lng+num]
        
        var range = {
            "lat": lat_range,
            "lng": lng_range
        };

        // remove markers 
        if (currentMarkers2!==null) {
            for (var i = currentMarkers2.length - 1; i >= 0; i--) {
            currentMarkers2[i].remove();
            }
        }
    
    
        const addmarker = ()=> {
            var filter_data = fetched_list.filter(function(loc) {
                var lng = loc.geometry.coordinates[0]
                return lng <= range.lng[1] && lng >= range.lng[0];
            });

            filter_data = fetched_list.filter(function(loc) {
                var lat = loc.geometry.coordinates[1]
                return lat <= range.lat[1] && lat >= range.lat[0];
            });
            console.log(filter_data)
            filter_data.map(p => {
                var marker = new mapboxgl.Marker()
                .setLngLat(p.geometry.coordinates)
                .addTo(map);
                currentMarkers2.push(marker);
        })
        };
        addmarker()
    
    }
    
    
    var interval = setInterval(function(){refresh()},6000);

})



