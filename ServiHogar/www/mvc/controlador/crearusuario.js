$('#btRegistrarse').click(Registrarse);
function Registrarse(){
//window.location.href='../vista/principal.html';	
//return false;
alert ("entre al boton");
var usuario = $('#Usuario');
var password = $('#Password');
var nombre = $('#Nombre');
var sexo = $('#Sexo');
var direccion = $('#Direccion');
//var fechanac = $('#Fechanac');
alert ("tengo los datos");
var res_agregar = agregar_usu(usuario, password, nombre, sexo, direccion);
alert ("mande los datos");
if (res_agregar == "2") {
		window.location.href='../vista/principal.html';	
		return false;
	} else {
		 
		alert ("Ingreso incorrecto");
	}
		 }
