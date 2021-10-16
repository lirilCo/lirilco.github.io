getDedications= function(language, print){ 
	s= 0; 
	Name= []; 
	Name[s]= 0; 
	n= ""; 
	name= document.getElementsByTagName("input")[0].value; 
	syl= ""; 
	Syl= []; 
	i= 0; 
	text= document.getElementsByTagName("textarea")[0].value.toLowerCase().replaceAll("\n", " "); 
                    
	for(e in text){ 
		if(text[e] != "-" && text[e] != " " && parseInt(e) != text.length - 1){ 
			syl+= text[e]; 
		}else{ 
			parseInt(e) == text.length - 1? syl+= text[e]: 3231; 

			Syl[i]= syl; 
			i++; 
			     
			text[e] == " "? syl= "": 1; 
		} 
	} 
      
	names= function(){ 
		for(u in name){ 
			if(name[u] != " "){ 
				for(r in Alphabets[language]){ 
					for(eForensics in Alphabets[language][r]){ 
						parseInt(eForensics) != 0? name[u].toLowerCase() == Alphabets[language][r][eForensics][0]? (name[parseInt(u) - 1] == "'" || name[parseInt(u) + 1] == "'")? Name[s]+= Alphabets[language][r][0] + Alphabets[language][r][0] + Alphabets[language][r][0] * Alphabets[language][r][eForensics][1]: Name[s]+= Alphabets[language][r][0] + Alphabets[language][r][0] * Alphabets[language][r][eForensics][1]:17288: 1981; 
					} 
				} 
			}else{ 
				s++; 
				Name[s]= 0; 
			} 
		} 
	} 
      
	dedications= function(){ 
		names(); 
		dedication= ""; 
		naM= 0; 
                
		for(q in Syl){ 
			sT= parseInt(q); 
			nuMber= 0; 
                       
			dedication+= Syl[sT] + " "; 
                               
			for(er_R in Name){ 
				nuMber+= Name[er_R]; 
				final_nuMber= nuMber + sT; 
                                           
				while(final_nuMber >= Syl.length){ 
					final_nuMber-= Syl.length; 
				} 
                  
				dedication+= Syl[final_nuMber] + " "; 
			} 
              
			print.value= print.value + dedication + "\n"; 
                            
			dedication= ""; 
		} 
          
        print.value= print.value + "//////////////////////////////////////////////////////////" + "\n\n"; 
	} 
      
	dedications(); 
} 
$(document).on("ready", function(){ 
	$(".form-group").on("submit", function (ev) {
	  ev.preventDefault();
	});
	$(".getSp").click(function() { 
	    getDedications("español", document.getElementsByTagName("textarea")[1]); }); 
	$(".getEn").click(function() { 
	    getDedications("english", document.getElementsByTagName("textarea")[2]); }); 
	$(".tidyName").click(function() { 
	    $(".results")[0].value= ""; 
	    $(".resultsEn")[0].value= ""; 
	    $(".name")[0].value= ""; 
	     $(".name")[0].focus(); 
	  }); 
	 $(".tidyText").click(function() { 
	    $(".results")[0].value= ""; 
	    $(".resultsEn")[0].value= ""; 
	    $(".dedications")[0].value= ""; 
	    $(".dedications")[0].focus(); 
	  }); 
	 document.getElementsByTagName("input")[0].value= "Daniela Andrea Arias Castañeda"; 
	 document.getElementsByTagName("textarea")[0].value= "El pla-ne-ta es más ver-de.\nY La Lu-na es a-zul.\nSo-la-men-te con ver-te.\nCa-e al sue-lo mi cruz.\nEn el fon-do de un rí-o,\nma-nio-bra en-tre ro-cas mi co-ra-zón ti-bio.\nEs un rí-o de la-va.\nDel vol-cán de tu piel.\nEs que lle-gas-te tú.\nY lle-nas-te mi vi-da de luz.\nNe-na tie-nes la fuer-za del punk.\nY la cal-ma de un blues.\n¡Hey, qué pe-na!, te a-do-ro.\nEl a-ro-ma que e-ma-nan tus po-ros.\nTus te-tas, tu ca-ra, tu bo-ca, tu pe-lo.\nY tus o-jos de miel.\nHaz ma-le-tas, mu-jer.\nQue nos va-mos al cie-lo y a pie.\nEl tiem-po que pa-re; Los vien-tos los ma-res.\nTre-pa-re-mos por ra-yos de e-lec-tri-ci-dad.\nY si a-ca-so en nues-tro ca-so cau-sa el o-ca-so.\nQue Sa-tur-no nos a-trai-ga ha-cia el es-pa-cio.\n¡Flo-ta-re-mos co-mo nu-bes ba-jo el cue-ro\nEn-tre mi-les de mi-llo-nes de ta-ches que son fue-go!\nIn-ha-la de mi bo-ca con la tu-ya,\nque yo pro-duz-co o-xí-ge-no al to-car-te, mi a-mor.\nPues mi-ra, nos to-pa-mos con La Lu-na.\nQué bien que no da-re-mos con Sa-tur-no que es gas.\nY ya que el tiem-po no es-tá co-rrien-do.\nTo-ma-re-mos pres-ta-dos de los ex-tra-te-rres-tres pa-ra vol-ver.\nUn par de mo-chi-las jet que fun-cio-nen con he-lio–-3.\nDe e-se que El Sol de-po-si-ta so-bre la su-per-fi-cie lu-nar."; 
	getDedications("español", document.getElementsByTagName("textarea")[1]); 
	getDedications("english", document.getElementsByTagName("textarea")[2]); 
})
