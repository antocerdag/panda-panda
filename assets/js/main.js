document.getElementById("a1").addEventListener("onclick", eliminar());

function eliminar(){
	var a1 = document.getElementById("a1");
	var padre = a1.parentNode;
	padre.removeChild(a1);

}