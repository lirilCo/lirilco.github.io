por_siLaBas= function(í){ 
  Text= ("-" + í.toLowerCase() + "     ").replaceAll('ʻ', "'").replaceAll('’', "'"); 
  word= ""; 
  syl= ""; 
  Widgets= true; 
  Cinnamon= ""; 
  Chocolate= ["!", "?", "'"]; 
  Anti_joint= ["¡", "¿", "'"]; 
                  
  for(e in Text){ 
    constructor= function(u){ 
      u? word= word + "<b>" + syl + "</b>": word= word + syl; 
               
      syl= ""; 
      raged= false; 
  } 
      
  Widgets= true; 
  raged= false; 
                  
  if(Text[e] == " " || e == Text.length - 1){ 
      for(Text[e] == " "? i= e: i= e; i--; Widgets === false){ 
        (Text[i] == " " || i == 0)? Widgets= false: 1; 
                                    
        for(eForensics in Accents){ 
          Accents[eForensics].indexOf(Text[i]) >= 1? raged= true: 1; 
                                                                     
          Accents[eForensics].indexOf(Text[i]) >= 1? Text= Text.slice(0, i) + Accents[eForensics][0] + Text.slice(i + 1, Text.length - 1): 1; 
        } 
          
        (Widgets && Anti_joint.indexOf(Text[i]) != -1)? raged= true: 1; 
                                                                        
        (Widgets && Anti_joint.indexOf(Text[i]) != -1 && Anti_joint.indexOf(Text[i]) != Anti_joint.length - 1)? constructor(raged): 1; 
                                                                                                                                   
        (Widgets && Anti_joint.indexOf(Text[i]) != -1 && Anti_joint.indexOf(Text[i]) != Anti_joint.length - 1)? Widgets= false: 1; 
                                                                                                                                   
        (Widgets && Chocolate.indexOf(Text[i]) != -1)? raged= true: ((Widgets && Text[i] == "-") || i == 0)? constructor(raged): Widgets? syl= Text[i] + syl: 1; 
      } 
      
      Cinnamon= Cinnamon + word; 
      word= ""; 
    } 
  } 
} 