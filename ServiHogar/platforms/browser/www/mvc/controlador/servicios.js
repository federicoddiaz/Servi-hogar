document.getElementById('nbbarra').style.backgroundColor="#0075d9;"
document.getElementById('tbbarra').style.backgroundColor="#0075d9;"
document.getElementById('pcimagenes').align="center";

 
$('#inicio').click(inicio);
 function inicio(){
 window.location.href='../vista/principal.html';
 }

 $('#IesLunes').click(iesLunes);
 function iesLunes(){
	alert ("La oferta educativa del IES incluye los niveles:\n" + 
	" – Primario\n – Secundario\n – Terciario\n - Universitario");
 }
