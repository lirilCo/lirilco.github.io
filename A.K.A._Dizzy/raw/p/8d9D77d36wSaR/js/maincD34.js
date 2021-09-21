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
	 document.getElementsByTagName("input")[0].value= "Luis Eduardo Gallego García"; 
	 document.getElementsByTagName("textarea")[0].value= "Tres de la ma-ña-na. Per-ci-bo es-te se-gun-do, des-pués es-te o-tro; ha-go el ba-lan-ce de ca-da mi-nu-to. ¿A qué vie-ne to-do es-to? A que he na-ci-do. De cier-to ti-po de vi-gi-lias vie-ne la in-cul-pa-ción del na-ci-mien-to.  «Des-de que es-toy en el mun-do,» e-se des-de me pa-re-ce car-ga-do de un sig-ni-fi-ca-do tan es-pan-to-so, que se tor-na in-so-por-ta-ble.  Hay un co-no-ci-mien-to que qui-ta pe-so y al-can-ce a lo que u-no ha-ce; has-ta el ex-tre-mo él to-do ca-re-ce de fun-da-men-to, sal-vo él mis-mo. Pu-ro, has-ta el ex-tre-mo, de a-bo-mi-nar in-clu-so de la i-de-a de ob-je-to, ex-pre-sa e-sa su-ma sa-bi-du-rí-a se-gún la cual es la mis-ma co-sa co-me-ter o no co-me-ter un ac-to, im-pli-can-do, al mis-mo tiem-po, u-na sa-tis-fac-ción tam-bién ex-tre-ma: la de po-der re-pe-tir-se en ca-da mo-men-to que na-da de cuan-to se ha-ga me-re-ce la pe-na, que na-da es-tá re-al-za-do por nin-gún sig-no sus-tan-cial, que la «re-a-li-dad» se ins-cri-be en el do-mi-nio de la in-sen-sa-tez. Un co-no-ci-mien-to de e-sa cla-se me-re-ce-rí-a ser lla-ma-do pós-tu-mo, ya que se pre-sen-ta co-mo si el co-no-ce-dor es-tu-vie-ra vi-va y no vi-vo, y no co-mo si fue-ra ser y re-mi-nis-cen-cia de ser. «Es co-sa pa-sa-da,» di-ce de to-do lo que e-je-cu-ta en el ins-tan-te mis-mo de la ac-ción que, de e-sa ma-ne-ra, que-da pa-ra siem-pre des-pro-vis-ta de pre-sen-te."; 
	getDedications("español", document.getElementsByTagName("textarea")[1]); 
	getDedications("english", document.getElementsByTagName("textarea")[2]); 
})
