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
	 document.getElementsByTagName("textarea")[0].value= "I got an-oth-er 1-5.\nNot to-day, you don’t. You’re up.\nYou know the deal. Suc-cess-ful-ly com-plete the mis-sion, you get ten years off your sen-tence. You fail to fol-low my or-ders in an-y way and I det-o-nate the ex-plo-sive de-vice in the base of your skull.\nGood dog. We are a black ops unit. Mean-ing, noth-ing you see here ev-er hap-pened. Sa-vant. Your com-mand-ing of-fic-er will be Colo-nel Rick Flag.\nOr would you ra-ther be called Durlin?\nI’d ra-ther not be called at all. But I’ll do an-y-thing to get out of this hell-hole. Well, wel-come to “an-y-thing”. So this is the fa-mous Su-i-cide Squad. Well, we con-sid-er that term de-grad-ing. The of-fi-cial term is “Task Force X”. And love ’em or hate ’em, these are your broth-ers and sis-ters for the next few days. Oh!\nWhoa. Cap-tain Boom-er-ang.\nBlack-guard.\nMongal.\nJave-lin.\nT. D. K.\nWea-sel.\nAnd, of course\nHey, guys, sor-ry I’m late. Had to go num-ber two.\nHmm, good to know.\nFlag. Oh, sor-ry. Com-in' through. Hey, Boom-er.\nWhat are you do-ing back in pris-on, Harls?\nI got road rage. In a bank. Oh. So sor-ry. Com-in' through.\nTurn it a-round. There. No.\nThere? Here?\nPut it in there. Now you’re safe.\nAll right. Thanks, man. Pre-pare for lift-off. And a-way we go. Har-ley and T. D. KDigg-er.have they worked to-geth-er be-fore? Not yet. I’m ex-cit-ed. What does Sa-vant do a-gain? It’s Bri-an Durlin. He’s an ex-pert in weap-ons and hand-to-hand com-bat.\nYeah, well, I’m put-ting 20 on him that he’s gon-na bite it.\nMe too. And Wea-sel, Boom-er and Mongal. Yeah, I thinkIs Mongal an al-ien or some type of god?\nWhat are you do-ing?\nOh. Hey.\nJust mak-ing sure eve-ry-thing was read-y to go. Good meet-ing, eve-ry-bod-y. Just our nor-mal, cas-u-al morn-ing meet-ing.\nYeah, I just got-ta, uh, do this thing. Noth-ing weird a-bout it. O-kay. Oh, yeah. Flag. Yeah, we’re T-mi-nus five from the drop. Get the whole team safe-ly to that beach, Colo-nel. You will re-ceive fur-ther or-ders once there. We’re in a butch-er’s freez-er, Harls, sur-round-ed by dead hogs hang-in' on hooks. On-ly they don’t know it yet.\nLeave him a-lone, Boom-er.\nWhat does T. D. K. stand for?\nWhat?\nYour name is T. D. K., cor-rect?\nYeah.\nAnd it stands for what?\nIt stands for me.\nIt’s what a name is.\nYour name is let-ters?\nAll names are let-ters, dickhead.\nI love your ac-cent.\nA-mer-i-can wom-en all love ac-cents.\nWe do. ‘Cause we don’t got none. Yo, is this a dog?\nWhat?\nIs this thing a dog?\nA A dog?\nYes.\nWhat kind of dog do you think it is, mate?\nI don’t know, I’m not fa-mil-i-ar with all the breeds.\nI’m gon-na go with Af-ghan Hound.\nSince when does an Af-ghan Hound have blood-y thumbs?\nOh, my God, is it a were-wolf? I’ve want-ed to meet a were-wolf for-ev-er.\nYo, they sat me next to a were-wolf? That’s not right.\nYo, let me out. I do not fuck with werewolves.\nHey, hey, he’s not a were-wolf, o-kay! He’s a wea-sel. He’s harm-less. I mean, he’s not harm-less, he’s killed 27 chil-dren, but, you know, we got him to I think he’s a-greed to do this. What-ev-er the case, just eve-ry-one get in-to po-si-tion to drop. Did an-y-one check on wheth-er Wea-sel could swim? The Wea-sel is dead! I re-peat, the Wea-sel is dead. North-east, all clear. Ap-proach the shore. O-ver.\nSa-vant, hold your po-si-tion.\nRog-er that. Am-a-teurs.\nWal-ler, we’re on the beach and dry. Black-guard. Get down, you\nHey, guys! Hey.\nthere’s fucking sol-diers eve-ry-where!\nYou can come out now, it’s just me.\nWhat the fuck is Black-guard do-in'?\nI’m the one who con-tact-ed you.\nIs this what’s sup-posed to hap-pen? What the fuck?\nBlack-guard, get back in-to your po-si-tion.\nLook, look. I brought eve-ry-bod-y, look. They’re right be-hind me. Whoa. Hey. Hey, guys. Whoa. We got a deal, right? Uh Uh\nWal-ler, we’re made.\nI’m the one who called you. Black-guard sold us out. He con-tact-ed the fucking Corto Mal-tese Ar-my! Wal-ler, we need to re-treat.\nNeg-a-tive, Flag. The mis-sion is too im-por-tant. This is a tough group. You can make it.\nOkey-doke.\nWal-ler, with all due re-spect, we’re in the mid-dle of a god-damn Har-ley, wait!\nWhoo-hoo! Ze-ro-two-two-sev-en is wide o-pen.\nColo-nel, dis-patch The De-tach-a-ble Kid.\nT. D. K., two o’clock!\nT. D. K. is “The De-tach-a-ble Kid”? What the fuck?\nI didn’t pick the damn team!\nDon’t wor-ry, Flag, I got the bird.\nMongal! Don’t. Huh? Strewth!\nBoom-er! Sa-vant is off the rails.\nSa-vant, turn back. Sa-vant. Sa-vant, I’m warn-ing you, this is de-ser-tion. Sa-vant! This is your last chance. Turn back a-round. You are in violation of your a-gree-ment! Oh, please! No. Damn it. How’s Team Two hold-ing up? Team Two, check. Set point bra-vo. All troops on the south beach are en-gaged. Team Two is clear to go on the north beach.\nCon-grat-u-la-tions, Bloodsport. How’d you do it, Wal-ler? There’s no sol-diers out here on pa-trol at all. Let’s just say they were dis-tract-ed. Oh, jeez.\nOh.\nHere you go, champ.\nEx-cuse me.\nWho the fuck is Bloodsport?\nRo-bert Du-bois. A world-class marks-man. In his hands, an-y-thing is a dead-ly weap-on. His fa-ther was a mer-ce-nar-y who trained his son to kill from the mo-ment he was born. He’s in pris-on for put-ting Su-per-man in the ICU with a kryptonite bul-let.  Du-bois?\nSame an-swer as the last time. Piss off. I’m not join-ing your god-damn Su-i-cide Squad.\nWe’ll see. You have a vis-i-tor. They said you got in trou-ble.\nI stole.\nYou stole what?\nA style watch.\nA star latch?\nA style watch. You can watch TV on it.\nWhy would you want to watch TV on your watch?\nI don’t know.\nNext time you want to nick some-thing, you take a part-ner, and they can be your look-out.\nThat’s your ad-vice?\nYeah.\nYou’re a ter-ri-ble fa-ther.\nHey, I didn’t ask to be a fa-ther in the first place.\nYou make that per-fect-ly clear.\nYour moth-er sprung that one on me.\nWell, she’s not a-round an-y-more, so you can lay off of her, o-kay?\nOh, I tried to lay off her, but then she dragged out the pa-ter-ni-ty test.\nFuck you!\nNo, fuck you!\nFuck you!\nFuck you!\nFuck you!\nFuck you!\nFuck you!\nFuck you!"; 
	getDedications("español", document.getElementsByTagName("textarea")[1]); 
	getDedications("english", document.getElementsByTagName("textarea")[2]); 
})
