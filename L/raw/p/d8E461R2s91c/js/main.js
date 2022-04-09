var engineerer= function(b){
	za= b; 
	d= 0; 
          
	while(za >= 9){ 
    	d++; 
    	za-= 9; 
	} 
      
	return [za, d]; 
}; 
   
AntiEngineerer= function(x, y){ 
	return ((y >= 0 && x >= 0 && y < document.querySelector("table tbody").children.length && x < document.querySelector("table tbody").children[0].children.length)? document.getElementsByTagName("div")[y].children[x]: "undefined"); 
}; 
   
function sweep(coor, s){ 
	coo= coor; 
	for(u= coor[0]; u >= coor[0] - s; u--) 
		for(y= coor[1] - s; y <= coor[1] + s; y++) 
			typeof AntiEngineerer(u, y) != "undefined"? (function(){AntiEngineerer(u, y).checked= true; AntiEngineerer(u, y).mined? (function(){AntiEngineerer(u, y).setAttribute("disabled", true); Demine(); })(): 1; })(): 1; 
	for(r= coor[0] + 1; r <= coor[0] + s; r++) 
		for(w= coor[1] - s; w <= coor[1] + s; w++) 
			typeof AntiEngineerer(r, w) != "undefined"? (function(){AntiEngineerer(r, w).checked= true; AntiEngineerer(r, w).mined? (function(){AntiEngineerer(r, w).setAttribute("disabled", true); Demine(); })(): 1; })(): 1; 
}; 
   
function Demine(){ 
	throw new Error("Demining..."); 
}; 
   
function Continue(){
	coor= coo; 
	admited= true;
	s= 2
	right= (typeof u == "undefined" || u === NaN || (u == coor[0] - s && y == coor[1] + s))? true: false; 
	right? (function(){typeof w != "undefined"? w++: (function(){w= coor[1] - s; })(); })(): y++; 
	if(!right){
		for(u= (y > coor[1] + s)? u - 1: u; u >= coor[0] - s; u--){
			for(y= (admited? (y > coor[1] + s)? (coor[1] - s): y: (coor[1] - s)); y <= coor[1] + s; y++){
				admited= false; 
				typeof AntiEngineerer(u, y) != "undefined"? (function(){AntiEngineerer(u, y).checked= true; AntiEngineerer(u, y).mined? (function(){AntiEngineerer(u, y).setAttribute("disabled", true); Demine(); })(): 1; })(): 1; 
			} 
		} 
	}
	u= undefined; 
	y= undefined; 
	for(r= ((typeof r != "undefined")? (w > coor[1] + s)? r + 1: r: (coor[0] + 1)); r <= coor[0] + s; r++){
		for(w= (admited? (typeof w == "undefined" || w > coor[1] + s)? (coor[1] - s): w: (coor[1] - s)); w <= coor[1] + s; w++){
			admited= false; 
			typeof AntiEngineerer(r, w) != "undefined"? (function(){AntiEngineerer(r, w).checked= true; AntiEngineerer(r, w).mined? (function(){AntiEngineerer(r, w).setAttribute("disabled", true); Demine(); })(): 1; })(): 1; 
		}
	}
	r= undefined; 
	w= undefined; 
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

		//document.getElementsByTagName("body")[0].innerHTML= document.getElementsByTagName("body")[0].innerHTML;  
		for(E= 0; E <= document.querySelectorAll("tr").length - 1; E++){ 
        	for(o= 0; o <= document.querySelectorAll("tr")[E].children.length - 1; o++){ 
                mine= '<input type "checkbox"></input>'; 
                document.querySelectorAll("tr")[E].children[o].innerHTML= "<input></input>"; 
                document.querySelectorAll("tr")[E].children[o].children[0].type= "checkbox"; 
        	} 
        } 

        for(a= 0; a <= document.querySelectorAll("table tbody div")[document.querySelectorAll("table tbody div").length - 1].children.length - 1; a++){ 
			document.querySelectorAll("table tbody div")[a].style.height= document.querySelectorAll("table tbody div input")[0].clientHeight + "px"; 
		} 

		for(a= 0; a <= document.querySelectorAll("table tbody div input").length - 1; a++){ 
    		document.querySelectorAll("table tbody div input")[a].mined= parseInt(Math.random() * 9) == 1? true: false; 
    		document.querySelectorAll("table tbody div input")[a].addEventListener("change", function(e){/*console.log(["Mined: ", this.mined]); */ cosaParaengineerer= Array.prototype.indexOf.call(e.target.parentElement.parentElement.querySelectorAll("input"), e.target); sweep([Array.prototype.indexOf.call(e.target.parentElement.children, e.target), Array.prototype.indexOf.call(e.target.parentElement.parentElement.children, e.target.parentElement)], 2); }); 
		} 
	}; 
       
	populate(20, 20); 
}); 