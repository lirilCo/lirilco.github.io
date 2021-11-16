//onClipEvent(load){ 
  update= function(e, i){ 
    document.getElementById(e).innerText= i; 
  }; 
 mousedown= false; 
 control= false; 
 lastChild= false; 
 var xI; 

 sSeloMeteoryt= function(){ 
  newSet= ""; 

  eilnsrss= document.getElementsByClassName("rwr").length - 1; 

  while(eilnsrss >= 0){ 
   newSet= (newSet) + (document.getElementsByClassName("rwr")[eilnsrss].outerHTML); 

      eilnsrss--; 
 } 

  $("#rawr")[0].innerHTML= newSet; 
  } 
  dsrcrs= ["#39ed23", "#52ff15", "#c34g51", "#0e3", "#06fe31", "#93ff10", "#30ce30", "#15fe25", "#f1ff3e", "#2fe45a", "#1e0", "#f3ee22", "#31df2d", "#00ff00", "#df3"]; 
//} 

//onClipEvent(enterFrame){ 
  setInterval(function(){ 
    
  lasrxs= dsrcrs[parseInt(Math.random() * dsrcrs.length)]; 

  update("lasrxs", lasrxs); 

  update("vrbl", vrbl); 

  document.getElementById("vrbl").style.backgroundColor= dsrcrs[parseInt(Math.random() * dsrcrs.length)]; 

  document.getElementById("vrbl").style.color= dsrcrs[parseInt(Math.random() * dsrcrs.length)]; 

  update("me", me); 

  $("#rawrrawrrawrrawr style")[0].innerHTML == ".rwr{cursor: nw-resize; } "? $("#rawrrawrrawrrawr style")[0].innerHTML= ".rwr{cursor: sw-resize; } ": $("#rawrrawrrawrrawr style")[0].innerHTML= ".rwr{cursor: nw-resize; } "; 
  }, 0.00); 
  
  document.addEventListener("mousemove", function(i){ 
    (mousedown && i.target == lastChild)? $(".rwr")[$(".rwr").length - 1].innerHTML = $(".rwr")[$(".rwr").length - 1].innerHTML + "<div class= 'rwarr' style='position: absolute; width: 5px; height:5px; " + "background-color: " + dsrcrs[parseInt(Math.random() * dsrcrs.length)] + "; " + "left: " + i.layerX + "px; " + "top: " + i.layerY + "px; "+ "'></div>": 1; 
  }); 

  document.addEventListener("mousedown", function(i){ 
    mousedown= true; 
  }); 

  document.addEventListener("mouseup", function(i){ 
    mousedown= false; 

    (i.target.outerHTML.indexOf("rwrwr") != -1 && i.target.innerHTML.indexOf("rwrwr") === -1)? sSeloMeteoryt() : 1; 
  }); 

  document.addEventListener("keydown", function(i){ 
    event.preventDefault(); 
    
    if(i.keyCode == 16 && !control && !shift){ 
      shift= true; 

      $("#rawr")[0].innerHTML= $("#rawr")[0].innerHTML + "<div class= 'rwr' ></div>"; 

      lastChild= $(".rwr")[$(".rwr").length - 1]; 

      lasrxs= $("#rawrrawrrawrrawr")[0].scrollLeft= $(".rwr").length * 78 - $(window).width() / 2 - 39; 
}; 

  if(i.keyCode == 17 && !control){ 
    control= true; 
  
    $("#rawr")[0].innerHTML= $("#rawr")[0].innerHTML + "<div class= 'rwrwr'></div>"; 
  
    lastChild= false; 
                                                    
    $("input").attr("corrupt")? jQuery("input")[0].outerHTML= "<input type= 'text'> ": 1; 

    $("input").focus(); 
  }; 
}); 

  document.addEventListener("keyup", function(i){ 
    i.keyCode == 16? shift= false: 1; 
    
    i.keyCode == 17? control= false: 1;  
    
    i.keyCode == 17 && !lastChild? $(".rwrwr")[0].outerHTML= "": 1; 

    switch(xI.target){
      case document.getElementById("dinosaurios"): case document.getElementsByClassName("rwrwr")[0]:case document.getElementsByTagName("input")[0]: case document.getElementById("lasrxs"): case document.getElementById("me"): case document.getElementById("vrbl"):
        $("input").attr("corrupt")? jQuery("input")[0].outerHTML= "<input type= 'text'> ": 1; 

        $("input").focus(); 
        break; 
      default:
        document.activeElement.blur(); 
        break; 
    } 
      
    vrbl= dsrcrs[a]; 
  }); 
      
  document.addEventListener("mousemove", function(i){ 
    switch(i.target){
      case document.getElementById("dinosaurios"): case document.getElementsByClassName("rwrwr")[0]:case document.getElementsByTagName("input")[0]: case document.getElementById("lasrxs"): case document.getElementById("me"): case document.getElementById("vrbl"):
        $("input").attr("corrupt")? jQuery("input")[0].outerHTML= "<input type= 'text'> ": 1; 

        $("input").focus(); 
        break; 
      default:
        jQuery("input")[0].outerHTML= "<input corrupt='true'  type= 'text'>"
        break; 
    } 

    xI= i; 
  }); 
//} 
