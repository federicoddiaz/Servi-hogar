function obtenerProfesionales(profe, arreglo_profesionales) {
	//Define una variable para recibir la respuesta de la lectura	
		var resp_profesionales = "";
	//Llama a la "dao" para que acceda al webservice
		resp_profesionales = busca_prof(profe, arreglo_profesionales);
	//Si no se pudo conectar retorna "4"
		if (resp_profesionales == "er") {
			return "4";
		}	
	//Si no se pudo leer retorna "1"
		if (resp_profesionales != "ok") {
			return "1";
		} else {
			return "2";
		}	
	}	