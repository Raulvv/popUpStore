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

var links = document.getElementsByClassName("brand");
for (var i=0;i<links.length;i++)
{
	links[i].onclick=pressBrand;
}

function pressBrand(event) {
	console.log("1")
	var encontrado;
	var x= 0;
	var images = 5;
	console.log("2")
	for (var i=1;i<=images;i++)
	{
		console.log("3")
		document.getElementById("img_"+i).style.display="none";
	}
	
	var marca=event.target.firstChild.nodeValue;
	var imgBrand
	console.log("4")

	while(x<brands.length&&!encontrado)
	{
		console.log("1")
		if (brands[x].key==marca)
		{
			
			imgBrand=document.getElementById(brands[x].value);
			console.log(brands[x].value)
			encontrado=true;
		}
		x++;
	}

	var numImg=marca.split(" ");

	imgBrand.style.display="inline";
}

