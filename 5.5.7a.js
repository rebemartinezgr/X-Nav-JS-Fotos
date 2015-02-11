

function picture(){
	var lista = ["http://upload.wikimedia.org/wikipedia/commons/f/f2/Kleurschema_ordinair_en_interval.PNG",
			"http://upload.wikimedia.org/wikipedia/commons/8/81/Kleurschema_chorochromatisch_nominaal.PNG",
			"http://upload.wikimedia.org/wikipedia/commons/d/da/Sequential_kleurenschema_2_kleuren.PNG",
			"http://upload.wikimedia.org/wikipedia/commons/4/42/Sequentieel_kleurenschema_zwart_wit.PNG"];

	
	var element = document.getElementById('imagen');
	var URL = lista[Math.floor(Math.random()*lista.length)];
	element.setAttribute('src', URL);
}	


