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
	 document.getElementsByTagName("input")[0].value= "Roberta López Gutiérrez"; 
	 document.getElementsByTagName("textarea")[0].value= "Nos u-nió un gol-pe de suer-te; u-no de e-sos gol-pes que no due-len\n¡Pe-ro qué di-go!, no nos u-ní-mos si-quie-ra; só-lo nos en-con-tra-mos en el pla-ne-ta\nMe vio, con mi al-ma de po-e-ta, y yo a e-lla, sin na-da que no per-te-ne-cie-ra a su be-lle-za\nSu ro-pa e-ran las o-las, del mar que e-ra su cuer-po\nSus la-bios, sus o-jos, sus ri-zos co-lor ca-ra-me-lo\nA-yer y hoy en-ca-jan en cuan-to no los ba-ña ma-ña-na\nY ma-ña-na nun-ca lle-ga, es-tá muy o-cu-pa-do sien-do pla-ne-a-do\nPor el pe-da-ci-to de cie-lo que le re-ga-ló a es-te e-xi-lia-do\nPor los dio-ses, por el hom-bre, por las co-sas que se rom-pen\nDe a-yer y hoy me que-da e-lla más que to-do\nNo es que só-lo ten-ga o-jos pa-ra e-lla; es que pa-ra mí no e-xis-te o-tra con sus o-jos\nCien-tos o mi-les, las lí-ne-as de la Sa-gra-da Bi-blia\nPe-ro ni u-na so-la des-cri-be lo que nos di-vi-de\nNo sé si por e-lla sien-ta a-mor; só-lo sé que la a-do-ro co-mo has-ta El Sol\nPor co-mo me mi-ra, co-mo si no nos fue-ra-mos a vol-ver a ver en la vi-da\nPe-ro le a-se-gu-ro que en el mun-do só-lo ca-brá nues-tro i-di-lio\nTic. Toc; tic, toc; la a-ce-le-ra-ción\nSien-to que se me va a sa-lir del pe-cho el co-ra-zón\nCre-o que le son-re-í y me que-dé vien-do su ca-be-llo, es-ta-ba dis-tra-í-do con el pa-ro car-dí-a-co\nQuie-ro des-ves-tir-la, ver su piel co-lor vai-ni-lla\n¿Có-mo se-rán sus cur-vas, sus pe-zo-nes, su va-gi-na? Le a-gra-dez-co al cie-lo por ha-cer-la; a-rri-ba, en lo os-cu-ro, en las ti-nie-blas\nCon a-gu-je-ros ne-gros y so-les que se lle-va-ron a u-na ga-la-xia va-cí-a\nHa-cien-do que los o-pues-tos co-li-sio-na-ran, pro-du-je-ron a mi dio-sa co-ro-na-da\nY le hi-cie-ron un co-ra-zón con a-re-na del mar y con plan-tas\nCo-gie-ron to-dos los a-ni-ma-les co-mo en el ar-ca, y se los pu-sie-ron en su mi-ra-da\nY le in-cen-dia-ron sus ri-zos co-lor ca-ra-me-lo en un vol-cán con la-va."; 
	getDedications("español", document.getElementsByTagName("textarea")[1]); 
	getDedications("english", document.getElementsByTagName("textarea")[2]); 
})
