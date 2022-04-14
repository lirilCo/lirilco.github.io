var curve; 
var aX= false; 
var z; 
var evet; 

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

    curve = new Bezier( [ {x: a,y: b},{x: c,y: d},{x: e,y: f},{x: g,y: h} ] ); 

    curve.failed= false; 

    //set_curve(a, b, c, d, e, f, g, h);  

	document.querySelector("path").setAttribute("d", curve.toSVG()); 
	document.querySelector("svg path").style.stroke= "rgba(" + (parseInt(curve.project({x: evet.clientX, y: evet.clientY}).d)  <= 51? 255/51 * parseInt(curve.project({x: evet.clientX, y: evet.clientY}).d): (function(){curve.failed= true; return parseInt(curve.project({x: evet.clientX, y: evet.clientY}).d) / 7 == Math.floor(parseInt(curve.project({x: evet.clientX, y: evet.clientY}).d) / 7)? 255: 0})()? 0: 255) + ", 0, 0, 1)"; 
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
	a= setInterval(function(){}, 11230); 
} 

tutorial.reset= function(){ 
	document.querySelector("p#loaded").innerHTML= "[" + (function(){ 
					text= ""; 
					for(aa= 27; aa > 0; aa--){ 
						text+= "&nbsp"; 
					}; 
					return text; })() + "Presiona cualquiera de Las Flechas del teclado" + (function(){ 
					text= ""; 
					for(aa= 27; aa > 0; aa--){ 
						text+= "&nbsp"; 
					}; 
					return text; })() + "]"; 
} 

Confirm= function(){ 
	!confirm("Don't Resize! \n\nReset Tutorial\n\n\n\nCierra todos los mspaint que tengas abiertos\n\n\n¿Listo?")? Confirm(): tutorial.display(); 
} 

var rC= [false, false, false, false]; 

presionando_flechas= function(){ 
	return rC.indexOf(true) != -1; 
} 

var clearAx= function(){ 
	clearInterval(aX); 
	aX= false; 
} 

document.addEventListener("DOMContentLoaded", function(){ 
	window.addEventListener("resize", function(er){Confirm(); }); 
	tutorial.display(); 
	document.querySelector("svg").addEventListener("mousemove", function(ev){ 
		document.querySelector("#Start").style.rotate= Math.atan2((ev.movementY),(ev.movementX))*(180/Math.PI) >= 0? Math.atan2((ev.movementY),(ev.movementX))*(180/Math.PI) + "deg": 180 + (180 + Math.atan2((ev.movementY),(ev.movementX))*(180/Math.PI)) + "deg"; 
		document.querySelector("#Start").style.left= ev.clientX - 10 + "px"; 
		document.querySelector("#Start").style.top= ev.clientY - 10 + "px"; 
		document.querySelector("html").clientHeight != document.querySelector("html").scrollHeight && !curve.failed? (function(){document.querySelector("svg path").style.stroke= "#d8eE8d"; curve.failed= "Not failed, completed";  console.log("Not Failed"); tutorial.reset(); })(): document.querySelector("html").clientHeight != document.querySelector("html").scrollHeight && curve.failed != "Not failed, completed"? (function(){document.querySelector("svg path").style.stroke= "#d8888d"; curve.failed= "Completed, failed"; console.log("Failed"); tutorial.reset(); })(): 1; 
	}); 
	document.addEventListener("mousemove", function(r){
		evet= r; 
		if(!!window.active && ((r.clientX < 127? 127 - r.clientX: r.clientX - 127) > 40 || (r.clientY < document.querySelector("body > aside").clientHeight / 2? document.querySelector("body > aside").clientHeight / 2 - r.clientY: r.clientY - document.querySelector("body > aside").clientHeight / 2) > 40)){ 
			document.querySelector("#fantasma_de_Start").style.border= "none"; 
		}else{ 
			document.querySelector("#fantasma_de_Start").style.border= "1px #33df9e dotted"; 
		} 
		if(typeof curve != "undefined" && ["Not failed, completed", "Completed, failed"].indexOf(curve.failed) == -1){ 
			document.querySelector("svg path").style.stroke= "rgba(" + (parseInt(curve.project({x: r.clientX, y: r.clientY}).d)  <= 51? 255/51 * parseInt(curve.project({x: r.clientX, y: r.clientY}).d): (function(){curve.failed= true; return parseInt(curve.project({x: r.clientX, y: r.clientY}).d) / 7 == Math.floor(parseInt(curve.project({x: r.clientX, y: r.clientY}).d) / 7)? 255: 0})()? 0: 255) + ", 0, 0, 1)"; 
		} 
	}); 
	document.addEventListener("keydown", function(ev){ 
		if([39, 38, 37, 40].indexOf(ev.keyCode) != -1){
			switch(ev.keyCode){ 
				case 37: 
					rC[0]= true; 
					break; 
				case 39: 
					rC[1]= true; 
					break; 
				case 38: 
					rC[2]= true; 
					break; 
				case 40: 
					rC[3]= true; 
					break; 
			}; 
		}; 
		

		if(!aX && presionando_flechas()){
			z= 0; 
			aX= setInterval(function(){ 
		  		z++; 
		  		document.querySelector("p#loaded").innerHTML= "[" + (function(){
					text= ""; 
					for(aa= z; aa > 0; aa--){ 
						text+= "#"; 
					} 
					for(aa= 100 - z; aa > 0; aa--){ 
						text+= "&nbsp"; 
					}; 

					return text; })() + "]"; 
				if(z >= 100){ 
					console.log("Completed"); 
					update_curve(); 
					clearAx(); 
				}else if(!presionando_flechas()){ 
					console.log("not completed"); 
					document.querySelector("p#loaded").innerHTML= "[" + (function(){
					text= ""; 
					for(aa= 100; aa > 0; aa--){ 
						text+= "&nbsp"; 
					}; 

					return text; })() + "]"; 
					clearAx(); 
				}; 
			}, 29); 
		}
	}); 
	document.addEventListener("keyup", function(ev){ 
		if([39, 38, 37, 40].indexOf(ev.keyCode) != -1){
			switch(ev.keyCode){ 
				case 37: 
					rC[0]= false; 
					break; 
				case 39: 
					rC[1]= false; 
					break; 
				case 38: 
					rC[2]= false; 
					break; 
				case 40: 
					rC[3]= false; 
					break; 
			}; 

		}; 
		//console.log(rC);  
	}); 
	window.addEventListener('blur', function (event){ 
    	rC= [false, false, false, false]; 
    	window.active= false; 
    	document.querySelector("body").style.overflow= "hidden"; 
    	document.querySelector("#fantasma_de_Start").style.border= "1px #33df9e dotted"; 
	}); 
	window.addEventListener('focus', function (event){ 
    	window.active= true; 
    	document.querySelector("body").style.overflow= ""; 
    	console.log("focus")
	}); 
}); 