// JavaScript Document

function validarEmail(mail) {
	
		
	
		var at="@"
		var dot="."
		var lat=mail.indexOf(at)
		var lstr=mail.length
		var ldot=mail.indexOf(dot)
		if (mail.indexOf(at)==-1){
		   //alert("Invalido E-mail ID")
		   return false
		}

		if (mail.indexOf(at)==-1 || mail.indexOf(at)==0 || mail.indexOf(at)==lstr){
		   //alert("Invalido E-mail ID")
		   return false
		}

		if (mail.indexOf(dot)==-1 || mail.indexOf(dot)==0 || mail.indexOf(dot)==lstr){
		    //alert("Invalido E-mail ID")
		    return false
		}

		 if (mail.indexOf(at,(lat+1))!=-1){
		    //alert("Invalido E-mail ID")
		    return false
		 }

		 if (mail.substring(lat-1,lat)==dot || mail.substring(lat+1,lat+2)==dot){
		    //alert("Invalido E-mail ID")
		    return false
		 }

		 if (mail.indexOf(dot,(lat+2))==-1){
		    //alert("Invalido E-mail ID")
		    return false
		 }
		
		 if (mail.indexOf(" ")!=-1){
		    //alert("Invalido E-mail ID")
		    return false
		 }

	return true					
		
	
}



		