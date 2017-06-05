/*función que trae al mapa*/

function initMap() {
        var uluru = {lat: 19.4177435, lng: -99.16479129999999};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru
        });
	
	
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

}
/*termina función del mapa*/