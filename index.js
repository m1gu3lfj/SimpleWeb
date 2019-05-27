/*funcion() 
	- obtiene la información del HTML
	- guarda la información en resultado
*/	
function funcion(){	
	//Alert de inicio
	alert("Ejecuta funcion() del script");
	
	//Variables array
	var aLugares = ["Madrid", "Barcelona"];
	
	//Obtiene datos del HTML
	var nombre = document.getElementById("nombre").value;
	var lugar = document.getElementById("lugar").value;
	var admin = document.getElementById("admin").checked;
	
	//Procesa la información y la guarda en resultado
	var texto = "";
	if (nombre.length > 0){
		texto = "Nombre: " + nombre;
	}	
	if (lugar == 1){
		texto = texto + "  Lugar: " + aLugares[0];
	}	
	if (lugar == 2){
		texto = texto + "  Lugar: " + aLugares[1];
	}	
	if (admin){
		texto = texto + "  Administrador: Si";
	}
	else{
		texto = texto + "  Administrador: No";	
	}
	document.getElementById("resultado").innerHTML = texto;
}