document.getElementById('nbbarra').style.backgroundColor="#D9233C";
document.getElementById('tbbarra').style.backgroundColor="#D9233C";

document.getElementById('pcimagenes').align="center";

$('#btsalir').click(btsalir);
function btsalir(){
 navigator.app.exitApp();
 } 
 
$('#bteditarp').click(bteditarp);
 function bteditarp(){
 window.location.href='../vista/editarperfil.html';
 } 
 
 $('#btlogout').click(btlogout);
 function btlogout(){
 window.location.href='../vista/login.html';
 } 
 
$('#inicio').click(inicio);
 function inicio(){
 window.location.href='../vista/principal.html';
 }
  
$('#perfil').click(perfil);
 function perfil(){
 window.location.href='../vista/principalperfil.html';
 }
 
 $('#mensajes').click(mensajes);
 function mensajes(){
 window.location.href='../vista/mensajes.html';
 }
 
 $('#configuraciones').click(configuraciones);
 function configuraciones(){
 window.location.href='../vista/configuraciones.html';
 }
 
 
 