// JavaScript Document
/**
* @autor skuarch
* AJAX PARA CONTACTO
* esta funcion crea un objeto ajax y no muestra ningun resultado
* contiene una variable para el control de cache
* param0 asunto string
* @param1 mensaje string
* @param2 nombre string
* @param3 correo electronico string
*/
function ajaxContacto(asunto,mensaje,remitente){
	
	ajax = nuevoAjax();
	
	//control de cache
	var r1 = Math.random()*1000;	
	var r2 = Math.random();		
	var r3 = r1+r2;	

	
	var ruta = "Scripts/enviaCorreo.php?mensaje="+mensaje+"&asunto="+asunto+"&remitente="+remitente;
	
	//alert(ruta);
	
	
	ajax.open("GET",ruta, true);
	ajax.onreadystatechange=function(){
		
		if(ajax.readyState==1){			
			
		}//fin 1
		
		
		if(ajax.readyState==2){		
		
		}//fin 2
		

		if(ajax.readyState==3){
			
		}//fin 3
		
	
		if(ajax.readyState==4){
		
			//alert(ajax.responseText);	
		
			//document.getElementById('contenedor1').innerHTML = ajax.responseText;
			
			
		}//fin 4
		
	}//fin onreadystate

ajax.send(null);
return;	
	
	
}//fin funcion