var salas = [
{key:"sala_grande",
value: "images/planta6.jpg"},
{key:"sala_grupo",
value: "images/planta5.jpg"},
{key:"sala_visionado",
value: "images/planta4.jpg"},
{key:"sala_reuniones",
value: "simages/planta2.jpg"},
{key:"sala_trabajo",
value: "images/planta3.jpg"}
]

var area = document.getElementsByClassName("area");

for (var i=0;i<area.length;i++)
{
	area[i].onclick=showsala;
	//area[i].getElementById(salas[x].key)
	var area_id = event.target.id
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

