var espacios = { 
  "sala_reuniones": "images/planta2.jpg", 
  "sala_trabajo": "images/planta3.jpg", 
  "sala_visionado": "images/planta4.jpg", 
  "sala_grupo": "images/planta5.jpg", 
  "sala_grande": "images/planta6.jpg"}

area = document.getElementsByClassName("area")

for(var i=0;i<area.length;i++){
  area[i].addEventListener("click",changeRoom)
}

function changeRoom(){
  var sala = this.id;
  document.getElementById("mapa").src=espacios[sala];
}

/*
var mapa = document.getElementById("mapa");
var salagrande = document.getElementById("sala_grande");
var salagrupo = document.getElementById("sala_grupo");
var salavisionado = document.getElementById("sala_visionado");
var salareuniones = document.getElementById("sala_reuniones");
var salatrabajo = document.getElementById("sala_trabajo");

salagrande.onclick = showsala6
salagrupo.onclick = showsala5
salavisionado.onclick = showsala4
salatrabajo.onclick = showsala3
salareuniones.onclick = showsala2 */

//salas.key.onclick = showsala;

function showsala() {
  mapa.src = salas.area_id;
}

/*
function showsala6 () {
       mapa.src = "images/planta6.jpg";
    }

function showsala5 () {
       mapa.src = "images/planta5.jpg";
    }

function showsala4 () {
       mapa.src = "images/planta4.jpg";
    }

function showsala3 () {
       mapa.src = "images/planta3.jpg";
    }

function showsala2 () {
       mapa.src = "images/planta2.jpg";
    }
*/
