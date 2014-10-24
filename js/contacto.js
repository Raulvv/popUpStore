var nombre = document.getElementById('txt1').value;
var aparecer = document.getElementById('alerta');

function validar(){
 if (nombre == ""){
 	return aparecer;
    
    return false; 
	}
 else {
 	return true;
	};
}

function mensajeEnviado(){
	console.log("Su mensaje se ha enviado con éxito");
}

//crear div para que te avise que debes introducir mail en vez de alert
//lo mismo con el nombre
//

//var email = document.getElementById('txt2').value;
//var necesario = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//var asunto = document.getElementById('txt3').value;
//var mensaje = document.getElementById('txt4').value;