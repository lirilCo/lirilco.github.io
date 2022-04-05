var map= `
______________________________________________________________________________________________________
|                                                                                                    |
|                                                                                                    |
|                             ___________________________                                            |
|     _______________________█                             __                                        |
|                                                  _________                                         |
|                                         __________                                                 |
|                            ______________                                                          |
|        _____________________                                                                       |
|     __                         ██  █  █         ██  █  █           ____           _                |
|         __                    ██████  █        █████████                ______                     |
|       _                      ███████  █       ██████████            _____                          |
|_____________________________████████_________██████████____________________________________________|
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
`; 
var water_map= `
______________________________________________________________________________________________________
|                                                                                                    |
|                                                                                                    |
|                                                                                                    |
|                                                                                                    |
|                                                                                                    |
|                                                                                                    |
|                                                                                                    |
|                                                                                                    |
|                                                         ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░|
|                                                         ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░|
|                                                         ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░|
|________________________________________________________░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░|
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
`; 
var x= 0; 
var y= 0; 
var jumping= false; 
var swimming= 0; 
var max_speed= 4; 
var speed= 0; 
var friction= 1; 
var l_r= [false, false]; 
var map_height= (function(){a= 0; 
	for(e in map){ 
		map[e] == "\n"? a++: 1; 
	}; 
	return a - 3; })(); 
var skip= 0; 

$.fn.selectRange= function(start, end) {if(!end) end= start; return this.each(function() {if(this.setSelectionRange){this.focus(); this.setSelectionRange(start, end); }else if(this.createTextRange){var range= this.createTextRange(); range.collapse(true); range.moveEnd('character', end); range.moveStart('character', start); range.select(); }});}; 

set= function(z){ 
	$("#grid").selectRange((!!z[0] || !z[0]? (100 * z[1] + z[1] + z[0] - 101): (1 || 2 || 3))); 
} 

wet= function(){ 
    return $("#water").val()[100 * y + y + x - 101] == "░" || $("#water").val()[100 * y + y + x - 1 - 101] == "░"; 
} 

$(function(){ 
	$("#grid").val(map.replaceAll("|", "").slice(104, -104)); 
	$("#water").val(water_map.replaceAll("|", "").slice(104, -104)); 

	$("#grid").on("input keydown keyup", function(i){i.preventDefault(); }); 

	$("#grid").on("keydown", function(i){ 
		switch(i.keyCode){ 
	    	case 37: 
				((!jumping || wet()) && x - 1 >= 0)? (function(){speed - 1 >= -max_speed? speed--: 1; l_r[0]= true; })(): 1; 
				break; 
	    	case 38: 
	    		!wet()? (($("#grid").val()[100 * y + y + x - 101] == "_" || $("#grid").val()[100 * (y + 1) + (y + 1) + x - 101] == "█" || $("#grid").val()[100 * (y + 1) + (y + 1) + x - 1 - 101] == "█" || $("#grid").val()[100 * y + y + x - 1 - 101] == "_") && !jumping && y - 1 >= 0)? (function(){jumping= 2;})(): 1: (function(){swimming= 1;})(); 
				break; 
	    	case 40: 
				break; 
	    	case 39: 
				((!jumping || wet()) && x + 1 <= 100)? (function(){speed + 1 <= max_speed? speed++: 1; l_r[1]= true; })(): 1; 
				break; 
		} 
	}); 

	$(document).on("keyup", function(i){
		switch(i.keyCode){ 
	    	case 37: 
				l_r[0]= false; 
				break; 
	    	case 38: 
	    		swimming= 0; 
				break; 
	    	case 40: 
				break; 
	    	case 39: 
				l_r[1]= false; 
				break; 
		} 

		//console.log(l_r); 
	}); 
        
	$("textarea").on("click", function(m){ 
		m.preventDefault(); 
		set([x, y]); 
	}); 
        
	setInterval(function(){ 
		if(!l_r[0] && !l_r[1]){ 
			speed > 0? speed -= friction: speed < 0? speed += friction: 1; 
		} 

		if(speed === 0){
			speed= speed; 
		}else if(x + speed >= 100){ 
			x= 100; 
			speed= null; 
		}else if(x + speed <= 0){ 
			x= 0; 
			speed= null; 
		}else if(speed !== 0){ 
			if(speed > 0){ 
				for(e= 0; e <= speed; e++){ 
					$("#grid").val()[100 * y + y + x + parseInt(e) - 101] == "█"? (function(){speed= parseInt(e)})(): 1; 
				} 
			}else if(speed < 0){ 
				for(e= 0; e <= -speed; e++){ 
					$("#grid").val()[100 * y + y + x - parseInt(e) - 1 - 101] == "█"? (function(){speed= -parseInt(e)})(): 1; 
				} 
			} 
			x += speed; 
		}; 
           
		(speed !== 0)? set([x, y]): 1; 

		speed= speed === null? 0: speed; 

		(wet() && !skip)? (function(){skip= 10})(): 1

		skip - 1 >= 0? (!jumping || skip > 1)? skip--: 1: 1; 

		(!skip && !jumping && !swimming && (($("#grid").val()[100 * y + y + x - 101] != "_" && $("#grid").val()[100 * (y + 1) + (y + 1) + x - 101] != "█" && $("#grid").val()[100 * y + y + x - 1 - 101] != "_" && $("#grid").val()[100 * (y + 1) + (y + 1) + x - 1 - 101] != "█")) && (map_height != y))? (function(){y++; set([x, y])})(): (!skip && swimming && (y - 1 >= 0 && $("#grid").val()[100 * (y - 1) + (y - 1) + x - 101] != "_" && ($("#grid").val()[100 * (y - 1) + (y - 1) + x - 101] != "█" || $("#grid").val()[100 * y + y + x - 101] == "█") && y - 1 >= 0 && $("#grid").val()[100 * (y - 1) + (y - 1) + x - 1 - 101] != "_" && ($("#grid").val()[100 * (y - 1) + (y - 1) + x - 1 - 101] != "█" || $("#grid").val()[100 * y + y + x - 1 - 101] == "█")))? (function(){y--; set([x, y])})(): 1; 

		if(jumping && jumping > 0 && (y - 1 >= 0 && $("#grid").val()[100 * (y - 1) + (y - 1) + x - 101] != "_" && ($("#grid").val()[100 * (y - 1) + (y - 1) + x - 101] != "█" || $("#grid").val()[100 * y + y + x - 101] == "█") && y - 1 >= 0 && $("#grid").val()[100 * (y - 1) + (y - 1) + x - 1 - 101] != "_" && ($("#grid").val()[100 * (y - 1) + (y - 1) + x - 1 - 101] != "█" || $("#grid").val()[100 * y + y + x - 1 - 101] == "█"))){ 
			(function(){y--; set([x, y]); })(); 
			jumping--; 
			skip= 0; 
		}else{ 
			jumping= false; 
		} 

		!wet()? (function(){swimming= 0;})(): 1; 
	}, 31); 
}); 