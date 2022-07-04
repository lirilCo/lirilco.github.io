var map= `
______________________________________________________________________________________________________
|                                                                                                    |
|                                                                                                    |
|                             ___________________________                                            |
|     __________♥____________█                             __                                        |
|                                                  _________                                         |
|                                         __________                                                 |
|                            ____$_________                                                          |
|        _____________________                                                                       |
|     __                         ██  █  █         ██  █  █           ____           _                |
|         __                    ██████  █        █████████                ______                     |
|       _                      ███████  █       ██████████            _____                          |
|_____________♥__$______♥♥♥♥♥♥████████_________██████████____________________________________________|
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
|                                                        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░|
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
`; 
var kitchen_oil_map= `
______________________________________________________________________________________________________
|                                                                                                    |
|                                                                                                    |
|                                                                                                    |
|                                                                                                    |
|                                                                                                    |
|                                                                                                    |
|                                                                                                    |
|                                                                                                    |
|                                                                                                    |
|                                     ░░ ░░░░░░░░                                                    |
|                                     ░░ ░░░░░░░                                                     |
|                                     ░░░░░░░░░                                                      |
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
var saved_position= [x, y]; 
var grabbed= []; 
var just_spawned= false; 
var direction= 1; 

$.fn.selectRange= function(start, end) {if(!end) end= start; return this.each(function() {if(this.setSelectionRange){this.focus(); this.setSelectionRange(start, end); }else if(this.createTextRange){var range= this.createTextRange(); range.collapse(true); range.moveEnd('character', end); range.moveStart('character', start); range.select(); }});}; 

set= function(z){ 
	//console.log("Actual: " + x + "Prev: " + saved_position[0]);  
	if(grabbed.length){
		for(ei in grabbed){ 
			grabbed[ei][1] == "♥"? $("#lives b").text(function(){return parseInt($(this).text()) + 1}): 1; 
			grabbed[ei][1] == "$"? $("#currency b").text(function(){return parseInt($(this).text()) + 1}): 1; 
			$("#grid").val($("#grid").val().slice(0, 100 * saved_position[1] + saved_position[1] + grabbed[ei][0] - 102) + "_" + $("#grid").val().slice(100 * saved_position[1] + saved_position[1] + grabbed[ei][0] + 1 - 102)); 
			$("#holes").val($("#grid").val().replaceAll("_", " ").replaceAll("█", " ").replaceAll("♥", "_").replaceAll("$", "_")); 
		}
		grabbed= []; 
	}
	$("#grid").selectRange((!!z[0] || !z[0]? (100 * z[1] + z[1] + z[0] - 101): (1 || 2 || 3))); 
	if(saved_position[0] < x){
		for(l= saved_position[0] + 1; l <= x; l++){ 
			if($("#grid").val()[100 * y + y + l - 102] == "$" || $("#grid").val()[100 * y + y + l - 102] == "♥"){ 
				console.log($("#grid").val()[100 * y + y + l - 102])
				!just_spawned? (function(){grabbed[grabbed.length]= [l, $("#grid").val()[100 * y + y + l - 102]]})(): 1; 
				!just_spawned? $("#grid").selectRange(100 * y + y + saved_position[0] - 101, 100 * y + y + x - 101): (function(){just_spawned= false; })(); 
			} 
		} 
	}else{ 
		for(l= saved_position[0]; l > x; l--){ 
			if($("#grid").val()[100 * y + y + l - 102] == "$" || $("#grid").val()[100 * y + y + l - 102] == "♥"){ 
				console.log($("#grid").val()[100 * y + y + l - 102])
				!just_spawned? (function(){grabbed[grabbed.length]= [l, $("#grid").val()[100 * y + y + l - 102]]})(): 1; 
				!just_spawned? $("#grid").selectRange(100 * y + y + x - 101, 100 * y + y + saved_position[0] - 101): (function(){just_spawned= false; })(); 
			} 
		} 
	} 
	saved_position= [z[0], z[1]]
} 

wet= function(){ 
    return ($("#water").val()[100 * y + y + x - 101] == "░" || $("#water").val()[100 * y + y + x - 1 - 101] == "░")? "water_wet": ($("#kitchen_oil").val()[100 * y + y + x - 101] == "░" || $("#kitchen_oil").val()[100 * y + y + x - 1 - 101] == "░")? "kitchen_oil_wet": false; 
} 

hitTest= {}; 

hitTest.bottom= function(t, i, sT){
	if($(t).val()[100 * (sT? y: y + 1) + (sT? y: y + 1) + x - 1 - 101] == i || $(t).val()[100 * (sT? y: y + 1) + (sT? y: y + 1) + x - 101] == i){
		return true; 
	}else{
		return false; 
	}
}
hitTest.top= function(t, i){
	if($(t).val()[100 * (y - 1) + (y - 1) + x - 101] == i || $(t).val()[100 * (y - 1) + (y - 1) + x - 1 - 101] == i){
		return true; 
	}else{
		return false; 
	}
}

function replace(i, j, w){ 
	return i.slice(0, j) + w + i.slice(j + 1); 
}; 

$(function(){ 
	$("#grid").val(map.replaceAll("|", "").slice(104, -104)); 
	$("#holes").val(map.replaceAll("|", "").slice(104, -104).replaceAll("_", " ").replaceAll("█", " ").replaceAll("♥", "_").replaceAll("$", "_")); 
	$("#water").val(water_map.replaceAll("|", "").slice(104, -104)); 
	$("#kitchen_oil").val(kitchen_oil_map.replaceAll("|", "").slice(104, -104)); 

	$("#grid").on("input keydown keyup", function(i){i.preventDefault(); }); 

	$("#grid").on("keydown", function(i){ 
		switch(i.keyCode){ 
	    	case 37: 
				((!jumping || wet()) && x - 1 >= 0)? (function(){speed - 1 >= -max_speed? speed--: 1; l_r[0]= true; })(): 1; 
				break; 
	    	case 38: 
	    		!wet()? ((hitTest.bottom("#grid", "█", false) || hitTest.bottom("#grid", "_", true) || hitTest.bottom("#holes", "_", true)) && !jumping && y - 1 >= 0)? (function(){jumping= 2;})(): 1: (function(){swimming= 1;})(); 
				break; 
	    	case 40: 
				break; 
	    	case 39: 
				((!jumping || wet()) && x + 1 <= 100)? (function(){speed + 1 <= max_speed? speed++: 1; l_r[1]= true; })(): 1; 
				break; 
			case 173: 
				direction == 1? (i.shiftKey && x < 100)? (function(){console.log("X" + x + "Y" + y); $("#grid").val(replace($("#grid").val(), (100 * y + y + x - 101), "_")); x++; set([x, y]); })(): 1: (i.shiftKey && x > 0)? (function(){console.log("X" + x + "Y" + y); $("#grid").val(replace($("#grid").val(), (100 * y + y + x - 102), "_")); x--; set([x, y]); })(): 1; 
				break; 
			case 54: 
				direction == 1? (i.shiftKey && x < 100)? (function(){console.log("X" + x + "Y" + y); $("#water").val(replace($("#water").val(), (100 * y + y + x - 101), "░")); x++; set([x, y]); })(): 1: (i.shiftKey && x > 0)? (function(){console.log("X" + x + "Y" + y); $("#water").val(replace($("#water").val(), (100 * y + y + x - 102), "░")); x--; set([x, y]); })(): 1; 
				break; 
			case 55: 
				direction == 1? (i.shiftKey && x < 100)? (function(){console.log("X" + x + "Y" + y); $("#kitchen_oil").val(replace($("#kitchen_oil").val(), (100 * y + y + x - 101), "░")); x++; set([x, y]); })(): 1: (i.shiftKey && x > 0)? (function(){console.log("X" + x + "Y" + y); $("#kitchen_oil").val(replace($("#kitchen_oil").val(), (100 * y + y + x - 102), "░")); x--; set([x, y]); })(): 1; 
				break; 
			case 53: 
				direction == 1? (i.shiftKey && x < 100)? (function(){console.log("X" + x + "Y" + y); $("#grid").val(replace($("#grid").val(), (100 * y + y + x - 101), "█")); x++; set([x, y]); })(): 1: (i.shiftKey && x > 0)? (function(){console.log("X" + x + "Y" + y); $("#grid").val(replace($("#grid").val(), (100 * y + y + x - 102), "█")); x--; set([x, y]); })(): 1; 
				break; 
			case 34: 
				direction == 1? (i.altKey  && x < 100)? (function(){console.log("X" + x + "Y" + y); $("#grid").val(replace($("#grid").val(), (100 * y + y + x - 101), "♥")); x++; just_spawned= true; set([x, y]); })(): 1: (i.altKey  && x > 0)? (function(){console.log("X" + x + "Y" + y); $("#grid").val(replace($("#grid").val(), (100 * y + y + x - 102), "♥")); x--; just_spawned= true; set([x, y]); })(): 1; 
				break; 
			case 52: 
				direction == 1? (i.shiftKey && x < 100)? (function(){console.log("X" + x + "Y" + y); $("#grid").val(replace($("#grid").val(), (100 * y + y + x - 101), "$")); x++; just_spawned= true; set([x, y]); })(): 1: (i.shiftKey && x > 0)? (function(){console.log("X" + x + "Y" + y); $("#grid").val(replace($("#grid").val(), (100 * y + y + x - 102), "$")); x--; just_spawned= true; set([x, y]); })(): 1; 
				break; 
			case 48: 
				direction == 1? (i.shiftKey && x < 100)? (function(){console.log("X" + x + "Y" + y); $("#grid").val(replace($("#grid").val(), (100 * y + y + x - 101), " ")); $("#water").val(replace($("#water").val(), (100 * y + y + x - 101), " ")); $("#kitchen_oil").val(replace($("#kitchen_oil").val(), (100 * y + y + x - 101), " ")); x++; just_spawned= true; set([x, y]); })(): 1: (i.shiftKey && x > 0)? (function(){console.log("X" + x + "Y" + y); $("#grid").val(replace($("#grid").val(), (100 * y + y + x - 102), " ")); $("#water").val(replace($("#water").val(), (100 * y + y + x - 102), " ")); $("#kitchen_oil").val(replace($("#kitchen_oil").val(), (100 * y + y + x - 102), " ")); x--; just_spawned= true; set([x, y]); })(): 1; 
				break; 
		} 

		$("#holes").val($("#grid").val().replaceAll("_", " ").replaceAll("█", " ").replaceAll("♥", "_").replaceAll("$", "_")); 
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




        direction= speed > 0? 1: speed < 0? -1: direction; 
                         
                         
        /*console.log( direction ); */ 
        
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

		(!skip && !jumping && !swimming && (!hitTest.bottom("#grid", "_", true) && !hitTest.bottom("#holes", "_", true) && !hitTest.bottom("#grid", "█", false)) && (map_height != y))? (function(){y++; set([x, y])})(): (!skip && swimming && (y - 1 >= 0 && !hitTest.top("#grid", "_") && ($("#grid").val()[100 * (y - 1) + (y - 1) + x - 101] != "█" || $("#grid").val()[100 * y + y + x - 101] == "█") && y - 1 >= 0 && ($("#grid").val()[100 * (y - 1) + (y - 1) + x - 1 - 101] != "█" || $("#grid").val()[100 * y + y + x - 1 - 101] == "█")))? (function(){y--; set([x, y])})(): 1; 

		if(jumping && jumping > 0 && (y - 1 >= 0 && !hitTest.top("#grid", "_") && ($("#grid").val()[100 * (y - 1) + (y - 1) + x - 101] != "█" || $("#grid").val()[100 * y + y + x - 101] == "█") && y - 1 >= 0 && ($("#grid").val()[100 * (y - 1) + (y - 1) + x - 1 - 101] != "█" || $("#grid").val()[100 * y + y + x - 1 - 101] == "█"))){ 
			(function(){y--; set([x, y]); })(); 
			jumping--; 
			skip= 0; 
		}else{ 
			jumping= false; 
		} 

		!wet()? (function(){swimming= 0;})(): 1; 

		wet() == "kitchen_oil_wet"? $("#grid").addClass("fried"): 1; 
	}, 31); 
}); 