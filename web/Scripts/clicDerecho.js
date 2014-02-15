/**
* @autor skuarch
* funcion para deshabilitar el click derecho en la pagina
*
* estas funciones no dejan dar click derecho en la pagina
* son dos, una es para ie y la otra para netscape
*/
var message="";


function clickIE(){
	if (document.all) {(message);return false;}
}




function clickNS(e){
	if(document.layers||(document.getElementById&&!document.all)){

		if (e.which==2||e.which==3) {(message);return false;
	
		}
	}
}




if (document.layers){
		document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;
	}else{
		document.onmouseup=clickNS;document.oncontextmenu=clickIE;
	}

document.oncontextmenu=new Function("return false");
