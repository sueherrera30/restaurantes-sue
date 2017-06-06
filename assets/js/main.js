var taquerias = [
	{
	  "nombre":"Tacos el güero",
	   "direccion":"Manuel María Contreras 59, San Rafael, 06470 Ciudad de México, CDMX",
       coordenadas : {
        latitud:19.439142,
        longitud:-99.164852	
	 }
	
	},
	{
	  "nombre":"Tacos el paisa",
	   "direccion":"06470, Joaquin Garcia Icazbalceta 36, San Rafael, 06470 Ciudad de México, CDMX",
	coordenadas : {
	latitud:19.440885,
	longitud:-99.160342	
	 }
	},
	{
		"nombre":"Taquería Selene",
	   "direccion":"Leibnitz 51 - C, Miguel Hidalgo, Anzures, 11590 Ciudad de México, CDMX",
	coordenadas : {
    latitud:19.427170,
    longitud:-99.177040
	 }
	},
	{
		"nombre":"Tacos Manolo",
	   "direccion":"Calle Luz Saviñón 1305, Narvarte Poniente, 03020 Ciudad de México, CDMX",
	coordenadas : {	
      latitud:19.390734,
      longitud: -99.156774
	 }
	},
	{
		"nombre":"Taqueria los primos",
	   "direccion":"Avenida Universidad 784, Narvarte Poniente, 03020 Ciudad de México, CDMX",
	coordenadas : {
      latitud:19.392769,
      longitud: -99.150417
	 }
	}	
];



var cargarPagina = function () {
	 agregarElementos(taquerias);
	 obtenerUbicacion();
	 $(".taqueria").click(cambiarTaqueria);
	$("#search-form").submit(filtrarElementos);
};

var filtrarElementos = function(e){
	e.preventDefault();
	/*almacenamos el valor del input y lo pasamos a minusculas*/
	var taqueriaAbuscar = $("#search").val().toLowerCase();
	/*almacenamos a un arreglo nuevo*/
	var contactosFiltrados = taquerias.filter(function(taqueria){
		return taqueria.nombre.toLocaleLowerCase().indexOf(taqueriaAbuscar)>= 0;
	});
	
	agregarElementos(contactosFiltrados);
	
};

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
	
		var latitud = posicion.coords.latitude; 
		var longitud = posicion.coords.longitude;
	
	var coordenadas = {
    lat: latitud,
    lng: longitud
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

function cambiarTaqueria(){
  var latitud = $(this).data("latitud");
  var longitud = $(this).data("longitud");
	console.log(latitud,longitud);
  var coordenadas = {
	  lat: latitud,
	  lng : longitud
  };
	 mostrarMapa(coordenadas);
}


$(document).ready(cargarPagina);


/*termina función del mapa*/

/*llevamos objetos al dom */
/*iterar arreglo para ser mostrados en html*/

/*siermpre pasa como parametro el elemento del arreglo,ex. una sola taqueria, la unidad tu arreglo*/

var agregarElementos = function(taquerias){
	
var $almancenTaquerias = $("#almacen-taqueria");
	$almancenTaquerias.empty();
	
taquerias.forEach(function(taqueria){
   
	
	var $taquito = $("<img>",{"class": "responsive-img imagen-logo2"});
	 $taquito.attr('src', 'assets/img/taco.png'); 
	
	
   var $fila = $("<div/>",{"class":"row"});	
   var $taqueria = $("<div/>",{"class":"card-panel col s4 offset-s4 amber lighten-4 taqueria" });
	$taqueria.data("latitud",taqueria.coordenadas.latitud)
	$taqueria.data("longitud",taqueria.coordenadas.longitud)
	var $nombre =$("<p/>",{"class":"green-text text-darken-1 right-align"});
	var $direccion =$("<p/>",{"class":"orange-text text-darken-1 center-align"});
	$nombre.text("TAQUERIA:" +" "+taqueria.nombre);
	$direccion.text("DIRECCIÓN:" +" "+taqueria.direccion);	
	$taqueria.append($nombre);
	$taqueria.append($direccion);
	$taqueria.append($taquito);
	$fila.append($taqueria);
	$almancenTaquerias.append($fila);	
  });	
};
/*sincronizar ubicación de taqueria con mapa*/









