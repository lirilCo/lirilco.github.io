var set_curve= function (a, b, c, d, e, f, g, h){ 
	curve= "M " + a + " " + b + " C " + c + " " + d +", " + e + " " + f + ", " + g + " " + h; 
} 

var update_curve= function(){ 
	a= 127; 
	b= document.querySelector("body > aside").clientHeight / 2; 
	c= 127 + parseInt(Math.random() * document.querySelector("body > aside").clientWidth / 2 - 127); 
	d= parseInt(Math.random() * document.querySelector("body > aside").clientHeight); 
	e= c + parseInt(Math.random() * (document.querySelector("body > aside").clientWidth - c)); 
	f= parseInt(Math.random() * document.querySelector("body > aside").clientHeight); 
	g= document.querySelector("body > aside").clientWidth; 
	h= parseInt(Math.random() * document.querySelector("body > aside").clientHeight); 

	set_curve(a, b, c, d, e, f, g, h); 

	document.querySelector("path").setAttribute("d", curve); 
} 

var tutorial= {}; 

tutorial.display= function(){ 
	alert("⚠️"); 
	alert("⚠️"); 
	alert("Presiona Inicio + r"); 
	alert("⚠️"); 
	alert("⚠️"); 
	alert("Presiona Inicio + r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nEscribe mspaint y presiona enter\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n⚠️\n\n⚠️⚠️.\n\n\nVe a la pestaña Ver\n\n\n\n⚠️\n⚠️\n⚠️\n⚠️\n⚠️\n\n\n\n\n⚠️\n\n\n\n⚠️\n\n꒷꒦\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nDeschulea las opciones Reglas y Barra De Estado\n\n\n\n\n\n\n\n\n\nEn Microsoft Paint, presiona el Botón De Minimizar (el que está a la izquierda de el Botón De Cerrar), arriba a la derecha de ms Paint sólo si parece ❐ y no ▭ y luego arrastra la ventana hacia la mitad de la pantalla desde donde dice Sin Título - Paint y cámbialo de ancho hasta que sólo se vea Sin Título - Paint arrastrando mspaint desde la esquina inferior derecha; y de alto hazlo lo más pequeño que se pueda; por completo\n\nℹ Puedes usar la Rueda De En Medio Del Mouse para desplazarte por las instrucciones con mspaint abierto\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n⚠️\n\n\n⚠️\n\n\n\n꒷꒦\n\n\nArrastra mspaint desde donde dice Sin Título - Paint hasta que la esquina inferior izquierda de mspaint esté 1/4 dentro del cuadrado tanto vertical (de arriba hacia abajo) como horizontalmente (de izquierda a derecha)\n\nHazlo lo más pequeño que se pueda horizontalmente.\n\n⚠️\n⚠️\n⚠️\n⚠️\n⚠️\n\n\n\n\n⚠️\n\n\n\n⚠️\n\n꒷꒦\n⚠️\n⚠️\n⚠️\n\nCierra mspaint.\n⚠️\n\nPresiona Inicio + r, asegurate de que dice mspaint, presiona Enter y luego da click muy rápido sin parar por unos ocho segundos dentro de la página web o el Live."); 
	setTimeout(function(){alert("Presiona cualquiera de Las Flechas del teclado cuando quieras devolver el Cursor Del Mouse a #Start"); }, 10000); 
	a= setInterval(function(){update_curve(); }, 11230); 
} 

Confirm= function(){ 
	!confirm("Don't Resize! \n\nReset Tutorial")? Confirm(): tutorial.display(); 
} 

document.addEventListener("DOMContentLoaded", function(){ 
	window.addEventListener("resize", function(er){Confirm(); }); 
	tutorial.display(); 
}); 