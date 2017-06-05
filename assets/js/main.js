/*función que trae al mapa*/

var obtenerUbicacion = function (e) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(mostrarPosicion);
	} else {
		alert("Carga de nuevo el navegador");
	}
};

var mostrarPosicion = function (posicion) {
	/*objeto que alberga las coordenadas*/ 
	var coordenadas = {
		lat: posicion.coords.latitude, 
		lng: posicion.coords.longitude
	};
	mostrarMapa(coordenadas);
};

/*función que brinda google maps*/
var mostrarMapa = function (coordenadas) {
	var map = new google.maps.Map($('#map')[0], {
      zoom: 17,
      center: coordenadas
    });
    var marker = new google.maps.Marker({
      position: coordenadas,
      map: map
    });
}

$(document).ready(obtenerUbicacion);
/*termina función del mapa*/

/*creamos  arreglo de objetos*/

var taquerias = [
	{
	  "nombre":"Tacos el güero",
	   "direccion":"Manuel María Contreras 59, San Rafael, 06470 Ciudad de México, CDMX"
	},
	{
	  "nombre":"Tacos el paisa",
	   "direccion":"06470, Joaquin Garcia Icazbalceta 36, San Rafael, 06470 Ciudad de México, CDMX"
	},
	{
		"nombre":"Taquería Selene",
	   "direccion":"Leibnitz 51 - C, Miguel Hidalgo, Anzures, 11590 Ciudad de México, CDMX"
	},
	{
		"nombre":"Tacos Manolo",
	   "direccion":"Calle Luz Saviñón 1305, Narvarte Poniente, 03020 Ciudad de México, CDMX"
	},
	{
		"nombre":"Taqueria los primos",
	   "direccion":"Avenida Universidad 784, Narvarte Poniente, 03020 Ciudad de México, CDMX"
	},	
];
/*llevamos objetos al dom */
/*iterar arreglo para ser mostrados en html*/

/*siermpre pasa como parametro el elemento del arreglo,ex. una sola taqueria, la unidad tu arreglo*/
taquerias.forEach(function(taqueria){
   var $almancenTaquerias = $("#almacen-taqueria");
	
	var $taquito = $("<img>",{"class": "responsive-img imagen-logo2"});
	 $taquito.attr('src', 'assets/img/taco.png'); 
	
	
   var $fila = $("<div/>",{"class":"row"});	
   var $taqueria = $("<div/>",{"class":"card-panel col s8 offset-s2 amber lighten-4"});
	var $nombre =$("<p/>",{"class":"green-text text-darken-1 right-align"});
	var $direccion =$("<p/>",{"class":"orange-text text-darken-1 center-align"});
	$nombre.text("TAQUERIA:" +" "+taqueria.nombre );
	$direccion.text("DIRECCIÓN:" +" "+taqueria.direccion);	
	$taqueria.append($nombre);
	$taqueria.append($direccion);
	$taqueria.append($taquito);
	$fila.append($taqueria);
	$almancenTaquerias.append($fila);	
});