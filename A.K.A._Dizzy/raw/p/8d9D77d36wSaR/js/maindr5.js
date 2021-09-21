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
	 document.getElementsByTagName("textarea")[0].value= "My mouth tastes like an ash-tray.\nSmith-ers, wait your turn. There's plen-ty of hot wa-ter for all.\nSir, you were-n't shot.\nIt was all a dream.\nThat's right. The year is 1-9-6-5.\nAnd you and I are un-der-cov-er de-tec-tives on the hot-rod cir-cuit.\nNow let's burn rub-ber, ba-by!\nSpeed-way Squad! In col-or.\nWait. That was all a dream.\nAw! Hey, then may-be I have-n't be-come a hid-e-ous, drunk-en wreck.\nAnd Oh.\nDoz-ens of peo-ple are gunned down each day in Spring-field... but un-til now none of them was im-por-tant.\nI'm Kent Brockman. At 3 p. m. Fri-day, lo-cal au-to-crat C. Mont-gom-er-y Burns... was shot, fol-low-ing a tense con-fron-ta-tion at town hall.\nBurns was rushed to a near-by hos-pi-tal, where he was pro-nounced dead.\nHe was then trans-ferred to a bet-ter hos-pi-tal, where doc-tors up-grad-ed his con-di-tion to a-live.\nNow let's talk to Po-lice Chief Wig-gum.\nOh. Oh, hiya, Ken.\nUh, right now we are ques-tion-ing two wit-ness-es... who were in the vi-cin-i-ty at the time.\nDid you see this guy? Was he an-y-where near the park-ing lot when Burns got shot?\nOh, it's no use. They ain't talk-in'.\nEve-ry-one in Spring-field had a rea-son to shoot Mr. Burns.\nE-ven us.\nBart, he broke your dog's legs.\nGram-pa, he de-stroyed your home.\nAnd, Dad, well, you kind-a went ber-serk when he could-n't re-mem-ber your name.\nBer-serk is right!\nMay I have some iced tea, please?\nAren't we for-get-ting some-one, sis-ter sus-pect?\nYeah, I was just get-ting to me.\nBe-cause of Mr. Burns, they can-celed my jazz pro-gram... and my friend Ti-to Puen-te got fired.\nBut I could nev-er shoot some-one.\nCould so.\nCould not. Could not.\nCould so. Could so.\nKids, kids, kids. As far as Dad-dy's con-cerned, you're both po-ten-tial mur-der-ers.\nThe po-lice al-read-y have a sus-pect. It's Mr. Smith-ers.\nOh, I bet he's the one. Yeah, Sming-ers did it."; 
	getDedications("español", document.getElementsByTagName("textarea")[1]); 
	getDedications("english", document.getElementsByTagName("textarea")[2]); 
})
