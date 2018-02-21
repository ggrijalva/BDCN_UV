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
	leeCatalogoCsv("CatalogoConchos.csv", function(data){
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
	// Cargar la tabla con los datos tambien
	successFunction(data);
	}); // Cierre de función que usa ajax
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
      table += '<tr>';   }
    else {
      table += '<tr>';
    }
    var rowCells = allRows[singleRow].split(',');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (singleRow === 0) {
        if (rowCell > 1 | rowCell == 0){
	        table += '<th>';
   	     table += rowCells[rowCell];
      	  table += '</th>';
      	}
      } 
      if (singleRow != 0) {
      	if (rowCell == 0){
	        table += '<td>';
   	     table += '<a href="ConsultaEst.html?Est='+ rowCells[rowCell] +'">' + rowCells[rowCell] + '</a>';
      	  table += '</td>';
      	}
			if (rowCell > 1){
	        table += '<td>';
   	     table += rowCells[rowCell];
      	  table += '</td>';
      	}
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
///////////////////////////////////////
// Darken a color
function darkenColor(colorStr) {
  // Defined in dygraph-utils.js
  var color = Dygraph.toRGB_(colorStr);
  color.r = Math.floor((255 + color.r) / 2);
  color.g = Math.floor((255 + color.g) / 2);
  color.b = Math.floor((255 + color.b) / 2);
  return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
}

// This function draws bars for a single series. See
// multiColumnBarPlotter below for a plotter which can draw multi-series
// bar charts.
function barChartPlotter(e) {
  var ctx = e.drawingContext;
  var points = e.points;
  var y_bottom = e.dygraph.toDomYCoord(0);

  ctx.fillStyle = darkenColor(e.color);
  // Find the minimum separation between x-values.
  // This determines the bar width.
  var min_sep = Infinity;
  for (var i = 1; i < points.length; i++) {
    var sep = points[i].canvasx - points[i - 1].canvasx;
    if (sep < min_sep) min_sep = sep;
  }
  var bar_width = Math.floor(3.0 / 4 * min_sep);
  // Do the actual plotting.
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    var center_x = p.canvasx;
    ctx.fillRect(center_x - bar_width / 2, p.canvasy,
        bar_width, y_bottom - p.canvasy);
    ctx.strokeRect(center_x - bar_width / 2, p.canvasy,
        bar_width, y_bottom - p.canvasy);
  }
}
//////////////////////////////////////////////////////////////////////
// Tabla diferencias
//var datos0 = leeCatalogoCsv(filecsv0, function(data) {return data});
ComparaFiles = function(){
	//var datosFile0 = leeCatalogoCsv(filecsv0, function(data) {return data})
	//var datosFile1 = leeCatalogoCsv(filecsv1, function(data) {return data})
	//alert(datosFile0);
// Se divide por filas el archivo por su salto de linea
	  var rowsFile0 = datosFile0.split(/\r\n|\r/); 
	  var rowsFile1 = datosFile1.split(/\r\n|\r/);
	  // Definir Tabla a imprimir
     var table   = "<div style='overflow-y:scroll; height:400px;' ><table class='table table-condensed table-hover'>"; 
     		 table +=   '<thead>';
     		 table +=   '<tr>';
     		 table +=		'<th>No.</th>';
     		 table +=		'<th>Fecha</th>';
     		 table +=		'<th>Variable</th>';
     		 table +=		'<th>Antes</th>';
     		 table +=   	'<th>Después</th>';
     		 table +=      '<th>Comentario</th>';
          table +=	'</tr>';
          table +=   '</thead>';
     var Cons = 1;
     ///////////////////////////////////////////////////////////
  	  for (var fila = 0; fila < rowsFile0.length; fila++) {
    	// Dividir cada fila separado por comas
	    var rowCellsFile0 = rowsFile0[fila].split(',');
	    var rowCellsFile1 = rowsFile1[fila].split(',');
	    // Recorrer celdas de cada archivo 	    
	    for (var rowCell = 0; rowCell < rowCellsFile0.length; rowCell++) {
	        	if (rowCell > 0){
	        	  Val0 = rowCellsFile0[rowCell]; if (Val0 === ''){Val0 = 'ND';}
	        	  Val1 = rowCellsFile1[rowCell]; if (Val1 === ''){Val1 = 'ND';}
	        	  var Vari = "";
	        	  if (Val0 != Val1){
	        	  	  switch(rowCell) { 
	        	  	  	case 1: Vari = 'Prec'; break;
	        	  	  	case 2: Vari = 'Tmax'; break;
	        	  	  	case 3: Vari = 'Tmin'; break;
	        	  	  } // Cierre switch y case
			        table += '<tr><td><b>' + Cons + '</b></td>'; Cons++;		// Consecutivo	        	  	  
			        table += "<td><button onclick='zoomfecha(this.value);' value='" + rowCellsFile0[0] + ";" + Vari + ";" + Val0 + ";" + Val1 +"'>" + rowCellsFile0[0] + "</button></td>"; 	// Fecha
			        table += '<td><b>' + Vari + '</b></td>'; 				// Variable
		   	     table += '<td>' + Val0 + '</td>'; 						// Antes
		   	     table += '<td>' + Val1 + '</td>'; 						// Después
		      	  table += '</tr>';
	        	  } // Cierre if condiciones diferentes 
	      	} // Cierre if analizar datos diferentes a la fecha
   	 } // Cierre de for recorre celdas
   } // Cierre de for recorre filas
  table += '</table></div>';
  document.getElementById("test").innerHTML=table;
} // Cierre de la función ComparaFiles 
/////////////////////////////////////////////////
// Objeto Fecha en formato  
Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();
  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('-');
}; // Cierre
/////////////////////////////////////////////////
// Funcion de convertir Csv a arreglo javascript para Dygraphs
/*var toArray = function(data) {
  var lines = data.split("\n");
  var arry = [];
  for (var idx = 0; idx < lines.length; idx++) {
    var line = lines[idx];
    // Oftentimes there's a blank line at the end. Ignore it.
    if (line.length == 0) {
      continue;
    }
    var row = line.split(",");
    // Special processing for every row except the header.
    if (idx >= 0) {
      row[0] = Date.parse(row[0] + " 00:00"); // Turn the string date into a Date.
      for (var rowIdx = 1; rowIdx < row.length; rowIdx++) {
        // Turn "123" into 123.
       // if (row[rowIdx] == ""){row[rowIdx] = "";}
       // if (row[rowIdx] != ""){row[rowIdx] = parseFloat(row[rowIdx]);} 
        row[rowIdx] = parseFloat(row[rowIdx])
      }     
    }     
    arry.push(row);
  }     
  return arry;
}
/////////////////////////////////////////////////
// Funcion de convertir Csv a arreglo sin formato de fecha o NaN para 
var toArraysf = function(data) {
  var lines = data.split("\n");
  var arry = [];
  for (var idx = 0; idx < lines.length; idx++) {
    var line = lines[idx];
    // Oftentimes there's a blank line at the end. Ignore it.
    if (line.length == 0) {
      continue;
    }
    var row = line.split(",");
    // Special processing for every row except the header.
    if (idx >= 0) {
      //row[0] = Date.parse(row[0] + " 00:00"); // Turn the string date into a Date.
      for (var rowIdx = 1; rowIdx < row.length; rowIdx++) {
        // Turn "123" into 123.
        if (row[rowIdx] == ""){row[rowIdx] = "";}
        if (row[rowIdx] != ""){row[rowIdx] = parseFloat(row[rowIdx]);} 
      }     
    }     
    arry.push(row);
  }     
  return arry;
}
///////////////////////////////////////////////////////
// Extrae columna de un arreglo
 function getColDate(matrix, col){
    var column = [];
    for(var i=0; i<matrix.length; i++){
       column.push(Date.parse(matrix[i][col] + " 00:00"));
    }
    return column;
 }
 ////////////////////////////////////////
 // Funciones para extraer indice del primer valor encontrado sobre las fechas graficadas
 function getIndxIni(matrix, valor){
  	valor = parseFloat(valor);  
    for(var i = 0; i < matrix.length; i++){
       if (valor <= matrix[i]){return i;}
    }
 }
 
 function getIndxFin(matrix, valor){
  	valor = parseFloat(valor);  
    for(var i = matrix.length - 1; i > 0; i--){
       if (valor >= matrix[i]){return i;}
    }
 }
 ////////////////////////////////////////
 // Extrae columna de un arreglo
 function getCol(matrix, col){
    var column = [];
    for(var i=0; i < matrix.length; i++){
       column.push(matrix[i][col]);
    }
    return column;
 }
 //////////////////////////////////////////
 // Tabla html desde array
 function tableHtml(matrix){
 	//var table = "<table id = 'tableTest' class = 'table-bordered table-hover center-block'>\n";
 	var	 table = "\n<thead>\n<tr><th>Fecha</th>\n<th>Precipitación (mm)</th>\n<th>Temp.Máxima (°C)</th>\n<th>Temp.Mínima (°C)</th>\n</tr></thead>\n<tbody>";
    for(var i = 0; i < matrix.length; i++){
    	var row = matrix[i];
    	table += "<tr>\n"
    	for(var j = 0; j < row.length; j++){
       table += "<td>"+ row[j] +"</td>\n";
    	}
    	table += "</tr>\n"
 	 }
 	 //table += "</tbody>\n</table>";
 	 table += "</tbody>\n";
    return table;
 }
//////////////////////////////////////////////////
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "non-empty-string-asc": function (str1, str2) {
        if(str1 == "")
            return 1;
        if(str2 == "")
            return -1;
        return ((parseFloat(str1) < parseFloat(str2)) ? -1 : ((parseFloat(str1) > parseFloat(str2)) ? 1 : 0));
    },
 
    "non-empty-string-desc": function (str1, str2) {
        if(str1 == "")
            return 1;
        if(str2 == "")
            return -1;
        return ((parseFloat(str1) < parseFloat(str2)) ? 1 : ((parseFloat(str1) > parseFloat(str2)) ? -1 : 0));
    }
} );
*/