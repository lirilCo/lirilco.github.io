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
	 document.getElementsByTagName("textarea")[0].value= "I live my day as if it was the last.\nLive my day as if there was no past.\nDo-in' it all night, all sum-mer.\nDo-in' it the way I wan-na.\nYeah, I'm-a dance my heart out 'til the dawn.\nBut I won't be done when morn-ing comes.\nDo-in' it all night, all sum-mer.\nGon-na spend it like no oth-er.\nIt was a crush.\nBut I could-n't, could-n't get e-nough.\nIt was a rush.\nBut I gave it up.\nIt was a crush.\nNow I might have went and said too much.\nBut that's all it was.\nSo I gave it up.\nI live my day as if it was the last.\nLive my day as if there was no past.\nDo-in' it all night, all sum-mer.\nDo-in' it the way I wan-na.\nYeah, I'm-a dance my heart out 'til the dawn.\nBut I won't be done when morn-ing comes.\nDo-in' it all night, all sum-mer.\nGon-na spend it like no oth-er.\nIt was a crush.\nI kept say-ing I'm-a stay in touch.\nBut that thing went bust.\nSo I gave it up.\nNo tricks, no bluff.\nI'm just bet-ter off with-out them cuffs.\nYeah, the sun won't set on us.\nYeah, yeah.\nWent low, went high.\nStill wa-ters run dry.\nGot-ta get back in the groove.\nI ain't ev-er wor-ried.\nWent low, went high.\nWhat mat-ters is now.\nGet-ting right back in the mood.\nI live my day as if it was the last.\nLive my day as if there was no past.\nDo-in' it all night, all sum-mer.\nDo-in' it the way I wan-na.\nYeah, I'm-a dance my heart out 'til the dawn.\nBut I won't be done when morn-ing comes.\nDo-in' it all night, all sum-mer.\nGon-na spend it like no oth-er.\nNow I've found an-oth-er crush.\nThe lush life giv-ing me a rush.\nHad one chance to make me blush.\nSec-ond time is one too late.\nNow I've found an-oth-er crush.\nThe lush life giv-ing me a rush.\nHad one chance to make me blush.\nSec-ond time is one too late.\nI live my day as if it was the last.\nLive my day as if there was no past.\nDo-in' it all night, all sum-mer.\nDo-in' it the way I wan-na.\nYeah, I'm-a dance my heart out 'til the dawn.\nBut I won't be done when morn-ing comes.\nDo-in' it all night, all sum-mer.\nGon-na spend it like no oth-er.\nNow I've found an-oth-er crush.\nThe lush life giv-ing me a rush.\nHad one chance to make me blush.\nSec-ond time is one too late.\nNow I've found an-oth-er crush.\nThe lush life giv-ing me a rush.\nHad one chance to make me blush.\nSec-ond time is one too late.\nNow I've found an-oth-er crush.\nThe lush life giv-ing me a rush.\nHad one chance to make me blush.\nSec-ond time is one too late.\nI live my day as if it was the last.\nLive my day as if there was no past.\nDo-in' it all night, all sum-mer.\nDo-in' it the way I wan-na.\nYeah, I'ma dance my heart out 'til the dawn.\nBut I won't be done when morn-ing comes.\nDo-in' it all night, all sum-mer.\nGon-na spend it like no oth-er.\nNow I've found an-oth-er crush.\nThe lush life giv-ing me a rush.\nHad one chance to make me blush.\nSec-ond time is one too late.\nNow I've found an-oth-er crush.\nThe lush life giv-ing me a rush.\nHad one chance to make me blush.\nSec-ond time is one too late."
	getDedications("español", document.getElementsByTagName("textarea")[1]); 
	getDedications("english", document.getElementsByTagName("textarea")[2]); 
})
