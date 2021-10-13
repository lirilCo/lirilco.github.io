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
	 document.getElementsByTagName("textarea")[0].value= "Fue el fin del pe-re-cer\nEl som-brí-o\nMa-ña-rí-a\nE-ra de no-che, e-ra de dí-a\nYa no es tan-to lo que es\nSi-nó que es por e-lla\nLa A-0 me rom-pió el co-ra-zón\nYo de Ke-li de-cí-a que me rom-pí-a yo en pe-da-ci-tos\nLo de Ke-li nun-ca de-jó de ser cier-to, en-ton-ces con e-lla na-da cam-bia-rí-a\nLa in-fa-me con-so-nan-cia de tus que-jas\nCon-tra mi pe-re-ce-ré\nAn-te ti; e-so no lo sa-bí-as\nPe-ro la A-0 me hi-zo tri-ci-tas\nCo-mo la ma-rihua-na en los ba-re-tos\nEl co-ra-zón La ve-í-a a-pe-nas, a ve-ces\nSe la fu-mó la no-che\nLa bri-sa se des-li-za en su ca-mi-sa\nPin-té un cua-dro en tu cie-lo\nCon mi in-di-fe-ren-cia\nLo sé\nPor in-fa-me que fue-ra\nLa con-so-nan-cia\nDe mi per-cep-ción Los o-í-dos; los soy dos."; 
	getDedications("español", document.getElementsByTagName("textarea")[1]); 
	getDedications("english", document.getElementsByTagName("textarea")[2]); 
})
