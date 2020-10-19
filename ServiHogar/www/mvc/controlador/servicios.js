document.getElementById('nbbarra').style.backgroundColor="#D9233C";
document.getElementById('tbbarra').style.backgroundColor="#D9233C";
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
