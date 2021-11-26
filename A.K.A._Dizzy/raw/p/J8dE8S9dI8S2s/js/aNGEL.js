aNGEL= function(r){ 
  Mistery= r.toLowerCase().replaceAll('ʻ', "'").replaceAll('’', "'"); 
  Cinnamon= ""; 
  Dizzy= ""; 
  Winter= false; 
                 
  for(i= 0; (i+= 1); i < Mistery.length){ 
    if(Mistery[i] == " " || i == Mistery.length){ 
      walkiwalki= true; 
                        
      i == " "? (Tsunami= i - 1): (Tsunami= i); 
                                   
      rageComics= [",", ".", ";"]; 
	    Anti_joint= ["¡", "¿", "'"]; /*Está hecho de arrugami y es un porro que soplas, thereof, anti_joint*/ 
	    Chocolate= ["!", "?", "'"]; /*ElDelprincipio's decision*/ 
                                                                
      if(rageComics.indexOf(Mistery[Tsunami - 1]) != -1){ 
        Summer= Mistery[Tsunami - 1]; 
        Tsunami-= 1; 
                     
		    alert("Summer"); 
      }else{ 
        Summer= ""; 
      } 
        
      for(e= Tsunami; e--; !walkiwalki){ 
        Mistery[e] == " "? (walkiwalki= false): 1; 
                                           
        e == -1 ? (walkiwalki= false) : 1; 
                                    
		    if(Anti_joint.indexOf(Mistery[e]) != -1 || Chocolate.indexOf(Mistery[e]) != -1){ 
		      Winter= ""; 
		    }else if(!Winter){ 
          Winter= Mistery[e]; 
        } 

        for(eForensics in Accents){ 
		      Accents[eForensics].indexOf(Mistery[e]) >= 1? Winter= "<b>" + Accents[eForensics][0] + "</b>": 1; 
		    } 
          
        if(Anti_joint.indexOf(Mistery[e-1]) != -1 || Chocolate.indexOf(Mistery[e+1]) != -1){ 
		      Winter= "<b>" + Winter + "</b>"; 
		    } 
		      
		    (((e == Tsunami - 1 && (Chocolate.indexOf(Mistery[e]) == -1 && Anti_joint.indexOf(Mistery[e]) == -1) )  || (e == Tsunami - 2 && (Chocolate.indexOf(Mistery[e]) == -1 && Anti_joint.indexOf(Mistery[e]) == -1) && (Chocolate.indexOf(Mistery[Tsunami - 1]) != -1 || Anti_joint.indexOf(Mistery[Tsunami - 1]) != -1) ) || (e == Tsunami - 3 && (Chocolate.indexOf(Mistery[e]) == -1 && Anti_joint.indexOf(Mistery[e]) == -1) && ((Chocolate.indexOf(Mistery[Tsunami - 1]) != -1 || Anti_joint.indexOf(Mistery[Tsunami - 1]) != -1) && (Chocolate.indexOf(Mistery[Tsunami - 2]) != -1 || Anti_joint.indexOf(Mistery[Tsunami - 2]) != -1)) ) ) && Summer)? Winter= Winter + Summer: 1; 
				                                              
        walkiwalki? (Cinnamon= Cinnamon + Winter): 1; 
                       
        Winter= false; 
      } 
    } 
  } 
    
  return Cinnamon; 
}; 