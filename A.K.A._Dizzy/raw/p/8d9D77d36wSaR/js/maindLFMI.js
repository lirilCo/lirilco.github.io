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
	 document.getElementsByTagName("input")[0].value= "Esperanza Gómez Silva"; 
	 document.getElementsByTagName("textarea")[0].value= "Las flo-res mal-di-tas flo-re-cen en pri-ma-ve-ra y en trí-os, blan-cas u-nas, a-ma-ret-to el res-to, pe-ro to-das mal-di-tas, son po-cos los a-for-tu-na-dos que tie-nen la des-gra-cia de to-par-se con e-llas en al-gu-na huer-ta des-cui-da-da o flo-re-ro in-cau-to, mien-tras de-am-bu-lan des-pre-ve-ni-dos por el mun-do, e-ri-gién-do-se de-mo-ní-a-ca-men-te so-bre la so-me-ti-da tie-rra, sus sa-tá-ni-cos a-ro-mas sub-yu-gan el ai-re de los pa-si-llos, las ho-jas de los sau-ces y las al-mas de sus pro-te-gi-dos, su-mien-do to-do en un hon-do a-bis-mo de ho-rror e his-te-ria."; 
	getDedications("español", document.getElementsByTagName("textarea")[1]); 
	getDedications("english", document.getElementsByTagName("textarea")[2]); 
})
