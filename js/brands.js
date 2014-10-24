var brands = [
{key:"Mr. Boho",
value: "img_1"},
{key:"Carmina",
value: "img_2"},
{key:"Gant",
value: "img_3"},
{key:"And Other Stories",
value: "img_4"},
{key:"Laguna B",
value: "img_5"}
]

window.onload = function (){
	console.log("hola")
	var links = document.getElementsByClassName("brand");
	for (var i=0;i<links.length;i++)
	{
		links[i].onclick=pressBrand;
	}
};

function pressBrand(event) {
	console.log("hola")
	var encontrado;
	var x= 0;
	var images = document.getElementsByClassName("img_brand");
	
	for (var i=0;i<images.length;i++)
	{
		images[i].style.display="none";
	}
	
	var marca=event.target.firstChild.nodeValue;
	var imgBrand

	while(x<brands.length&&!encontrado)
	{
		if (brands[x].key==marca)
		{
			imgBrand=document.getElementById(brands[x].value);
			encontrado=true;
		}
		x++;
	}

	var numImg=marca.split(" ");

	imgBrand.style.display="inline";
}

