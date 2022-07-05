var engineerer= function(b){
	za= b; 
	d= 0; 
          
	while(za >= (Math.sqrt(document.querySelector("tbody").querySelectorAll("input").length))){ 
    	d++; 
    	za-= (Math.sqrt(document.querySelector("tbody").querySelectorAll("input").length)); 
	} 
      
	return [za, d]; 
}; 
   
AntiEngineerer= function(x, y){ 
	return ((y >= 0 && x >= 0 && y < document.querySelector("table tbody").children.length && x < document.querySelector("table tbody").children[0].children.length)? document.getElementsByTagName("div")[y].children[x]: "undefined"); 
}; 
   
function sweep(coor, xu){ 
	s= xu; 
	coo= coor; 
	for(u= coor[0]; u >= coor[0] - s; u--) 
		for(y= coor[1] - s; y <= coor[1] + s; y++) 
			(typeof AntiEngineerer(u, y) != "undefined" && !AntiEngineerer(u, y).checked)? (function(){AntiEngineerer(u, y).checked= true; AntiEngineerer(u, y).mined && !AntiEngineerer(u, y).disabled? (function(){AntiEngineerer(u, y).setAttribute("disabled", true); Demine(); })(): 1; })(): 1; 
	u= undefined; 
	y= undefined; 
	for(r= coor[0] + 1; r <= coor[0] + s; r++) 
		for(w= coor[1] - s; w <= coor[1] + s; w++) 
			(typeof AntiEngineerer(r, w) != "undefined" && !AntiEngineerer(r, w).checked)? (function(){AntiEngineerer(r, w).checked= true; AntiEngineerer(r, w).mined && !AntiEngineerer(r, w).disabled? (function(){AntiEngineerer(r, w).setAttribute("disabled", true); Demine(); })(): 1; })(): 1; 
	r= undefined; 
	w= undefined; 
}; 
   
var s; 

function Demine(){ 
                                                           
	var deactivators= '<div class= "deactivators"></div>'; 
                                                           
	document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", deactivators); 
                                                                                            
	deactivator= '<div><input type= "radio" style= "float: left; " name= "x"></input><div class= "deactivator"><div></div></div><input type= "radio" style= "float: right; " name= "x"></input></div>'; 
	                       
	answers= []; 

	for(e= 0; e < 3; e++){ 
		document.getElementsByClassName("deactivators")[0].innerHTML+= deactivator.replaceAll("x", ("x" + e)); 
                                                             
		answers[answers.length]= Math.random() >= 0.5? 1: 0; 
	}; 
       
    var timeToTimeout= '<div style="vertical-align: bottom;margin-left: -200px;" class="timeToTimeout"><div class="countdown"><div style= "width: 700px; height: 1px; "></div></div></div>'; 
	                                                                                           
	document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", timeToTimeout); 
                                                                                             
	for(i= 0; i <= document.querySelectorAll(".deactivators .deactivator").length - 1; i++){ 
		document.querySelectorAll(".deactivators .deactivator")[i].scrollLeft = (document.querySelectorAll(".deactivators .deactivator")[i].scrollWidth - document.querySelectorAll(".deactivators .deactivator")[i].clientWidth) / 2; 
	}; 

	for(o= 0; o < document.querySelectorAll("input[type=radio]").length; o++){ 
		document.querySelectorAll("input[type=radio]")[o].addEventListener("click", function(ev){ev.preventDefault()}); 
	}; 
       
	for(i= 0; i <= document.querySelectorAll(".deactivators .deactivator").length - 1; i++){ 
		document.querySelectorAll(".deactivators .deactivator")[i].addEventListener("scroll", function(e){ 
			if(e.target.scrollLeft == e.target.scrollWidth - e.target.clientWidth){ 
				e.target.parentElement.querySelectorAll("input")[1].checked= true; 
				evaluate() == "right"? Continue(): 1; 
			}else if(e.target.scrollLeft == 0){ 
				e.target.parentElement.querySelectorAll("input")[0].checked= true; 
				evaluate() == "right"? Continue(): 1; 
			}; 
		}); 
	}; 

	document.querySelector(".timeToTimeout .countdown").scrollLeft= document.querySelector(".timeToTimeout .countdown").scrollWidth - document.querySelector(".timeToTimeout .countdown").clientWidth; 
                                                                                                                                                                                                       
	countdown= setInterval(function(){
		(function(){document.querySelector(".timeToTimeout .countdown").scrollLeft-= 500 / 10})(); 

		document.querySelector(".timeToTimeout .countdown").scrollLeft <= (document.querySelector(".timeToTimeout .countdown").scrollWidth - document.querySelector(".timeToTimeout .countdown").clientWidth) / 4? typeof flashing == "undefined"? flash(): 1: 1; 

		document.querySelector(".timeToTimeout .countdown").scrollLeft == 0? (function(){clearInterval(countdown); clearInterval(flashing); flashing= undefined; document.querySelector(".timeToTimeout .countdown").style.backgroundColor= "#fff"; })(): 1; 

	}, 1000); 
                                    
	throw new Error("Demining..."); 
}; 
   
function Continue(){ 
	!!document.getElementsByClassName("deactivators").length? document.getElementsByClassName("deactivators")[0].remove(): 1; 

	!!document.getElementsByClassName("timeToTimeout").length? document.getElementsByClassName("timeToTimeout")[0].remove(): 1; 

	clearInterval(countdown); 

	typeof flashing != "undefined"? clearInterval(flashing): 1; 

	flashing= undefined; 
	coor= coo; 
	admited= true;
	//s= 2;  
	right= (typeof u == "undefined" || u === NaN || (u == coor[0] - s && y == coor[1] + s))? true: false; 
	right? (function(){typeof w != "undefined"? w++: (function(){w= coor[1] - s; })(); })(): y++; 
	if(!right){
		for(u= (y > coor[1] + s)? u - 1: u; u >= coor[0] - s; u--){
			for(y= (admited? (y > coor[1] + s)? (coor[1] - s): y: (coor[1] - s)); y <= coor[1] + s; y++){
				admited= false; 
				(typeof AntiEngineerer(u, y) != "undefined" && !AntiEngineerer(u, y).checked)? (function(){AntiEngineerer(u, y).checked= true; AntiEngineerer(u, y).mined && !AntiEngineerer(u, y).disabled? (function(){AntiEngineerer(u, y).setAttribute("disabled", true); Demine(); })(): 1; })(): 1; 
			} 
		} 
	}
	u= undefined; 
	y= undefined; 
	for(r= ((typeof r != "undefined")? (w > coor[1] + s)? r + 1: r: (coor[0] + 1)); r <= coor[0] + s; r++){
		for(w= (admited? (typeof w == "undefined" || w > coor[1] + s)? (coor[1] - s): w: (coor[1] - s)); w <= coor[1] + s; w++){
			admited= false; 
			(typeof AntiEngineerer(r, w) != "undefined" && !AntiEngineerer(r, w).checked)? (function(){AntiEngineerer(r, w).checked= true; AntiEngineerer(r, w).mined && !AntiEngineerer(r, w).disabled? (function(){AntiEngineerer(r, w).setAttribute("disabled", true); Demine(); })(): 1; })(): 1; 
		}
	}
	r= undefined; 
	w= undefined; 
}; 
   
function evaluate(){ 
	ans= []; 

	for(v= 0; v < document.querySelectorAll(".deactivators .deactivator").length; v++){ 
    	ans[v]= [document.querySelectorAll(".deactivators .deactivator")[v].parentElement.querySelectorAll("input")[0].checked, document.querySelectorAll(".deactivators .deactivator")[v].parentElement.querySelectorAll("input")[1].checked]; 
	}; 

	for(an in answers){
  		if(!ans[an][answers[an]]){ 
  			return "wrong"; 
  		} 
	}; 

	return "right"; 
}; 
   
flash= function(){ 
	flashing= setInterval(function(){document.querySelector(".timeToTimeout .countdown").style.backgroundColor= document.querySelector(".timeToTimeout .countdown").style.backgroundColor != "rgb(34, 34, 34)"? "#222": "#fff"; }, 230); 
}; 

var right= false; 
document.addEventListener("DOMContentLoaded", function(){ 
	populate= function(w, h){ 
		for(e= 1; e <= h; e++){ 
		    document.getElementsByTagName("tbody")[0].innerHTML+= "<div></div>"; 
		    for(i= 1; i <= w; i++){ 
		        document.getElementsByTagName("tbody")[0].children[document.getElementsByTagName("tbody")[0].children.length - 1].innerHTML+= "<input></input>"; 
		    	document.getElementsByTagName("tbody")[0].children[document.getElementsByTagName("tbody")[0].children.length - 1].children[document.getElementsByTagName("tbody")[0].children[document.getElementsByTagName("tbody")[0].children.length - 1].children.length - 1].type= "checkbox"; 
		    } 
		} 

		w= undefined; 
		//document.getElementsByTagName("body")[0].innerHTML= document.getElementsByTagName("body")[0].innerHTML;  
		for(E= 0; E <= document.querySelectorAll("tr").length - 1; E++){ 
        	for(o= 0; o <= document.querySelectorAll("tr")[E].children.length - 1; o++){ 
                mine= '<input type "checkbox"></input>'; 
                document.querySelectorAll("tr")[E].children[o].innerHTML= "<input></input>"; 
                document.querySelectorAll("tr")[E].children[o].children[0].type= "checkbox"; 
        	} 
        } 

        var nodo_de_estilo= document.createElement( 'style' ); 
        nodo_de_estilo.type= "text/css"; 
                                         
        if( !!( window.attachEvent && !window.opera ) ){ 
            nodo_de_estilo.styleSheet.cssText= 'table tbody div{height: ' + document.querySelectorAll( "table tbody div input" )[0].clientHeight + "px" + '}'; 
        }else{ 
            var hoja_de_estilos= document.createTextNode('table tbody div{height: ' + document.querySelectorAll( "table tbody div input" )[0].clientHeight + "px" + '}'); 
            nodo_de_estilo.appendChild( hoja_de_estilos ); 
        } 
          
        document.getElementsByTagName('head')[0].appendChild( nodo_de_estilo ); 
        

		for(a= 0; a <= document.querySelectorAll("table tbody div input").length - 1; a++){ 
    		document.querySelectorAll("table tbody div input")[a].mined= parseInt(Math.random() * 9) == 1? true: false; 
    		document.querySelectorAll("table tbody div input")[a].addEventListener("change", function(e){ if((typeof u != "undefined") || (typeof y != "undefined") || !(typeof r == "undefined") || !(typeof w == "undefined")){/*console.log((typeof u != "undefined"), (typeof y != "undefined"), !(typeof r == "undefined"), (typeof w != "undefined")); */this.checked= !this.checked; return; }; this.checked= !this.checked; /*console.log(["Mined: ", this.mined]); */ cosaParaengineerer= Array.prototype.indexOf.call(e.target.parentElement.parentElement.querySelectorAll("input"), e.target); sweep([Array.prototype.indexOf.call(e.target.parentElement.children, e.target), Array.prototype.indexOf.call(e.target.parentElement.parentElement.children, e.target.parentElement)], 2); }); 
		} 
	}; 
       
	populate(20, 20); 
}); 

/*Editar los archivos like it was 
a local host. No upload but like... 
be able to save the files 
and try the htmls keeping in mind the 
saved files 
   
   
*/ 