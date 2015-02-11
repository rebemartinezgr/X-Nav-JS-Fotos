
function picture(){
	

	var lista = document.getElementById('lista');
	var fotos = lista.getElementsByTagName('li');
	var imagen = document.getElementById('imagen');
	
	var URL = fotos[Math.floor(Math.random()*fotos.length)].innerHTML;
	imagen.setAttribute('src', URL);
}	

