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
	return ((y < document.querySelector("table tbody").children.length && x < document.querySelector("table tbody").children[0].children.length)? document.getElementsByTagName("div")[y].children[x]: "undefined"); 
}; 
   
function sweep(coor, s){ 
	for(e= coor[0]; e >= coor[0] - s; e--) 
		for(a= coor[1] - s; a <= coor[1] + s; a++) 
			typeof AntiEngineerer(e, a) != "undefined"? AntiEngineerer(e, a).checked= true: 1; 
	for(e= coor[0] + 1; e <= coor[0] + s; e++) 
		for(a= coor[1] - s; a <= coor[1] + s; a++) 
			typeof AntiEngineerer(e, a) != "undefined"? AntiEngineerer(e, a).checked= true: 1; 
}; 
  
document.addEventListener("DOMContentLoaded", function(){ 
	populate= function(w, h){ 
		for(e= 1; e <= h; e++){ 
		    document.getElementsByTagName("tbody")[document.getElementsByTagName("tbody").length - 1].innerHTML+= "<div></div>"; 
		    for(i= 1; i < w; i++){ 
		        document.getElementsByTagName("tbody")[document.getElementsByTagName("tbody").length - 1].children[document.getElementsByTagName("tbody")[document.getElementsByTagName("tbody").length - 1].children.length - 1].innerHTML+= "<input></input>"; 
		    	document.getElementsByTagName("tbody")[document.getElementsByTagName("tbody").length - 1].children[document.getElementsByTagName("tbody")[document.getElementsByTagName("tbody").length - 1].children.length - 1].children[document.getElementsByTagName("tbody")[document.getElementsByTagName("tbody").length - 1].children[document.getElementsByTagName("tbody")[document.getElementsByTagName("tbody").length - 1].children.length - 1].children.length - 1].type= "checkbox"; 
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

        for(a= 0; a <= document.querySelectorAll("table tbody div")[document.querySelectorAll("table tbody div").length - 1].children.length; a++){ 
			document.querySelectorAll("table tbody div")[a].style.height= document.querySelectorAll("table tbody div input")[0].clientHeight + "px"; 
		} 

		for(a= 0; a <= document.querySelectorAll("table tbody div input").length - 1; a++){ 
    		document.querySelectorAll("table tbody div input")[a].mined= parseInt(Math.random() * 9) == 1? true: false; 
    		document.querySelectorAll("table tbody div input")[a].addEventListener("change", function(e){console.log(["Mined: ", this.mined]); console.log([Array.prototype.indexOf.call(e.target.parentElement.children, e.target), Array.prototype.indexOf.call(e.target.parentElement.parentElement.children, e.target.parentElement)]); cosaParaengineerer= Array.prototype.indexOf.call(e.target.parentElement.parentElement.querySelectorAll("input"), e.target)}); 
		} 
	}; 
       
	populate(10, 10); 
}); 