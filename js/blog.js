var input = document.getElementsByClassName("barracoment");


function newcoment() {
	var comentChild = document.createElement("div");
	var target = window.event.target;

	comentChild.setAttribute("class", "comentarioSecundario")

	comentChild.textContent = target.parentNode.children[1].value;
	target.parentNode.appendChild(comentChild);


};

