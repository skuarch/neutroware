// JavaScript Document

function validaContacto(){
	
	var error = "";
	var nombre = document.formContacto.nombre.value;
	var correo = document.formContacto.correo.value;
	var mensaje = document.formContacto.mensaje.value;

	//validando nombre
	if(nombre.length <= 0 || nombre == null || nombre == "" || nombre == "undefined"){	
		error = error +"- Falta el mensaje\n";
		//return false;
	}
	
	//validando correo
	if(correo.length <= 0 || correo == null || correo == "" || correo == "undefined" || !validarEmail(correo)){	
		
		error = error +"- La direccion de correo electronico es incorrecta\n";	
		//return false;
	}	
	
	//validando mensaje
	if(mensaje.length <= 0 || mensaje == null || mensaje == "" || mensaje == "undefined"){
		error = error +"- Falta el nombre\n";	
		//return false;
	}
	
	
	
	if(error != "")  {
		errorValidacion(error);		
		return false;
	}else{
	
		alert("Gracias "+nombre.toUpperCase()+" por tu mensaje\nNosotros estaremos en contacto");
		//ajax para el correo
	}
	
	//se envia el correo
	mensaje = mensaje +"\n\n NOMBRE:"+nombre+"\n\n CORREO:"+correo;
	ajaxContacto("Correo Neutro",mensaje,"skuarch@yahoo.com.mx");
	
}//fin function



