
// "DTO" destinada a transportar los datos correspondientes a
// la tabla "clientes" del modelo. 
// Las columnas de la tabla son "id", "nombre", "username", "password", direccion, sexo, fechanac, avatar
// Contiene los metodos "set" y "get" para todas las variables
// 
class DtoContraciones {
	constructor(setId = '', setFecha = '', 
				setId_cliente = '', setId_profesional = '',
				setDescripcion) {
		this.id = setId;
		this.fecha = setFecha;
		this.id_cliente = setId_cliente;
		this.id_profesional = setId_profesional;
		this.discrepcion = setDescripcion;
		
	}	
	
	set setId(id) {
		this.id = id;
	}	
	
	set setFecha(fecha) {
		this.fecha = fecha;
	}	

	
	
	
	get getId(){
		return this.id;
	}

	get getFecha(){
		return this.fecha;
	}

	get getId_cliente(){
		return this.id_cliente;
	}
	
	get getId_profesional(){
		return this.id_profesional;
	}
	
	get getDiscripcion(){
		return this.descripcion;
	}

	
}	