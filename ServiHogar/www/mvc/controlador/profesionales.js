var profe = "";

var arreglo_profesionales = new Array();

var li = document.getElementById('profesionales');

document.getElementById('nbbarra').style.backgroundColor="#000000;"
document.getElementById('tbbarra').style.backgroundColor="#000000;"
document.getElementById('pcimagenes').align="center";


$('#servicios').click(servicios);
    function servicios(){
    window.location.href='../vista/servicios.html';
}

$('#inicio').click(inicio);
    function inicio(){
    window.location.href='../vista/principal.html';
}
function cargarDatos(profesion) {
    profe = profesion;
    seleccionarProfesionales();
    cargarProfesionales();
}

function seleccionarProfesionales() {
    var res_obtener_profesionales = obtenerProfesionales(profe, arreglo_profesionales);

    if (res_obtener_profesionales != "2") {
		alert ("ERROR!!!!");
	} 
}

function cargarProfesionales() {	
    for (var i = 0; i < arreglo_profesionales.length; i++) {
        agregarProf(arreglo_profesionales[i].getNombre, arreglo_profesionales[i].getDireccion);
        }
}

function agregarProf(nombre, direccion) {
    var p = document.createElement("p");
    p.innerHTML = nombre;
    li.appendChild(p);
    var p2 = document.createElement("p");
	p2.innerHTML = direccion; 
    li.appendChild(p2);
    p2 = document.createElement("button");
    p2.innerHTML = "Contratar";
    li.appendChild(p2);
}