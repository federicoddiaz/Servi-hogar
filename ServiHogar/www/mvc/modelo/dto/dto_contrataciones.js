
// "DTO" destinada a transportar los datos correspondientes a
// la tabla "clientes" del modelo. 
// Las columnas de la tabla son "id", "nombre", "username", "password", direccion, sexo, fechanac, avatar
// Contiene los metodos "set" y "get" para todas las variables
// 
class DtoContrataciones {
	constructor(setId = 0, setFecha = '', 
				setId_cliente = 0, setId_profesional = 0,
				setUsuario = '', setDescripcion = '',
				setDireccion = '') {
		this.id = setId;
		this.fecha = setFecha;
		this.id_cliente = setId_cliente;
		this.id_profesional = setId_profesional;
		this.descripcion = setDescripcion;
		this.usuario = setUsuario;
		this.direccion = setDireccion;
	}	
	
	set setId(id) {
		this.id = id;
	}	
	
	set setFecha(fecha) {
		this.fecha = fecha;
	}	

	set setId_cliente(id_cliente) {
		this.id_cliente = id_cliente;
	}
	
	set setId_profesional(id_profesional) {
		this.id_profesional = id_profesional;
	}

	set setUsuario(usuario) {
		this.usuario = usuario;
	}

	set setDescripcion(descripcion) {
		this.descripcion = descripcion;
	}

	set setDireccion(direccion){
		this.direccion = direccion;
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
	
	get getDescripcion(){
		return this.descripcion;
	}

	get getUsuario(){
		return this.usuario;
	}
	
	get getDireccion() {
		return this.direccion;
	}
}	