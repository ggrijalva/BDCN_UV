///////////////////////////////////////////////////
// Función de Carga de datos del Catalogo
//function downloadUrl(edo,callback) {
function leeCatalogoCsv(File, callback) {
 var request = window.ActiveXObject ?
     new ActiveXObject('Microsoft.XMLHTTP') :
     new XMLHttpRequest;

 request.onreadystatechange = function() {
   if (request.readyState == 4 && request.status==200) {
     //request.onreadystatechange = doNothing;
     callback(request.responseText, request.status);
	 //successFunction(request.responseTex);
	 //document.getElementById("datos").innerHTML=request.responseText;
    }//else{document.getElementById("datos").innerHTML="cargando...";}
 };
 request.open('GET', File, true);
 request.send();
}
//////////////////////////////////////
// Función vacia
function doNothing() {}
// Estilos para quitar los caminos o poner
var stylez = [{
	"featureType" : "road",
   "stylers" : [{"visibility" : "on"}]
}];	
//////////////////////////////////////
function cargarmap() {
// Configurar opciones del mapa para quitar carreteras.	
var mapOptions = {
		  styles: stylez,
          center: new google.maps.LatLng(29.0474,-105.7949),//Centro Relativo del País
          zoom: 7,mapTypeId: google.maps.MapTypeId.ROADMAP,mapTypeControl:true,
						mapTypeControlOptions: {
    							style:google.maps.MapTypeControlStyle.DROPDOWN_MENU}};
	// Se define el mapa					
	map = new google.maps.Map(document.getElementById("map3"),mapOptions); // Para definir como variable global
	// Cargar las estaciones siguientes
	leeCatalogoCsv("CatalogoConchos.csv", function(data) {
		var allRows = data.split(/\r\n|\r/);
		var Marcadores = Array();
		var infowindowActivo = false;
		  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
			var rowCells = allRows[singleRow].split(',');
			if ((rowCells[2]  !== "" | rowCells[3]  !== "") & singleRow > 0){
				var Pos = new google.maps.LatLng(rowCells[2], rowCells[3]);
				var titulo = rowCells[0]+ " - " + rowCells[5];
				var icon2 = new google.maps.MarkerImage("images/ltblue-dot.png",
				new google.maps.Size(30, 30));
				// Marcadores 
				var mark = new google.maps.Marker({
									position: Pos,
									map: map,
									icon: icon2,
									title: titulo
									});
				var div = '<div><h5><b>Información</b></h5><b>Clave</b>: ' + rowCells[0] + 
							 '<br><b>Estación: </b> ' + rowCells[5] + 
							 '<br><b>Municipio: </b> ' + rowCells[6] + 
							 '<br><div><form action = "ConsultaEst.html" method = "get">' +
								'<input type="hidden" name="Est" value="' + rowCells[0] +'">' +
							    '<button class = "btn" type = "submit"><b>Datos</b></button>' +
							 '</form></div></div>';
							 
				mark.infoWindow=new google.maps.InfoWindow({
					content: div					
				});
				google.maps.event.addListener(mark, 'click', function(){     
					if(infowindowActivo)
						infowindowActivo.close();
					infowindowActivo = this.infoWindow;
					infowindowActivo.open(map, this);

				});
				// Aquí se generan los puntos a cargar  
				Marcadores.push(mark);
			} // Cierre del if para que solo cargue aquellos con coordenadas 
		  } // Cierre del for
	});
} 
//////////////////////////////////////////
// Tabla para el archivo CSV
function successFunction(data) {
  //alert(data);
  var allRows = data.split(/\r\n|\r/);
  var table = '<br><br><table>';
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    if (singleRow === 0) {
      table += '<thead>';
      table += '<tr>';
    } else {
      table += '<tr>';
    }
    var rowCells = allRows[singleRow].split(',');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (singleRow === 0) {
        table += '<th>';
        table += rowCells[rowCell];
        table += '</th>';
      } else {
        table += '<td>';
        table += rowCells[rowCell];
        table += '</td>';
      }
    }
    if (singleRow === 0) {
      table += '</tr>';
      table += '</thead>';
      table += '<tbody>';
    } else {
      table += '</tr>';
    }
  } 
  table += '</tbody>';
  table += '</table>';
  document.getElementById("datos").innerHTML=table;
}
//////
function loadCsv() {
	leeCatalogoCsv("CatalogoConchos.csv", function(data) {
		successFunction(data);}
	);
}