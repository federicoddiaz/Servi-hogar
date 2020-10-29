
$('#btContratar').click(Contratar);

function Contratar(){

	var inFecha = $('#Fecha');
	var fecha = inFecha.val().trim();
	inid.val(fecha);

	var inDescripcion = $('#Descripcion');
	var descripcion = inDescripcion.val().trim();
	inDescripcion.val(Descripcion);


var contratar = contratar(fecha, descripcion);
	if ( "") {
		alert("Profesional disponible, aguarde su visita");
		window.location.href='../vista/contratacionesUsuario';	
		return false;
	} else {
		alert ("Profesional No disponible esa fecha");
	}
}