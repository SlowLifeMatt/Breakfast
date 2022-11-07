
            function initMap() {
                let lat = "<%= Bed.lat%>"
                let lng = "<%= Bed.lng%>"
                console.log(lat)
                console.log(lng)
                let location = {lat: parseInt(lat), lng: parseInt(lng)};
                let map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 16, 
                    center: location
                });
                let marker = new google.maps.Marker({
                    position: location,
                    map: map
                });
            }