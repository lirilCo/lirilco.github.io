parse= function(a, b){ 
    switch(a[0]){ 
  case "#": 
     a= document.getElementById(a.slice(1, a.length)); 
     break; 
  case ".": 
    a= document.getElementsByClassName(a.slice(1, a.length)); 
    break; 
  default: 
    a= document.getElementsByTagName(a); 
    break; 
    }; 
     
    b != -1 ? a[b].innerHTML = Cinnamon : a.innerHTML = Cinnamon; 
}; 

Accents= /*Were I able to access it*/{ 
  "a": [ 
    "a", 
    "á", 
    "à", 
    "ă", 
    "ắ", 
    "ằ", 
    "ẵ", 
    "ẳ", 
    "â", 
    "ấ", 
    "ầ", 
    "ẫ", 
    "ẩ", 
    "ǎ", 
    "å", 
    "ǻ", 
    "ä", 
    "ǟ", 
    "ã", 
    "ȧ", 
    "ǡ", 
    "ą", 
    "́ą́", 
    "̃ą̃", 
    "ā", 
    "̀ā̀", 
    "ả", 
    "̋ȁ", 
    "̋a̋", 
    "ȃ", 
    "ạ", 
    "ặ", 
    "ậ", 
    "ḁ", 
    "ⱥ", 
    "ᶏ", 
    "ẚ" 
  ], 
  "b": [ 
    "b", 
    "ḃ", 
    "ḅ", 
    "ḇ", 
    "ƀ", 
    "ɓ", 
    "ꞗ", 
    "ᵬ", 
    "ᶀ" 
  ],
  "c": [ 
    "c", 
    "ć", 
    "ĉ", 
    "č", 
    "ċ", 
    "ç", 
    "ḉ", 
    "ȼ", 
    "ꞓ", 
    "ꞔ", 
    "ƈ", 
    "ɕ" 
  ], 
  "d": [ 
    "d", 
    "ď", 
    "ḋ", 
    "ḑ", 
    "̦d̦", 
    "ḍ", 
    "ḓ", 
    "ḏ", 
    "đ", 
    "ð", 
    "ɖ", 
    "ɗ", 
    "ᵭ", 
    "ᶁ", 
    "ᶑ", 
    "ȡ" 
  ],
  "e": [ 
    "e", 
    "é", 
    "è", 
    "ĕ", 
    "ê", 
    "ế", 
    "ề", 
    "ễ", 
    "ể", 
    "̄ê̄", 
    "̌ê̌", 
    "ě", 
    "ë", 
    "ẽ", 
    "ė", 
    "́ė́", 
    "̃ė̃", 
    "ȩ", 
    "ḝ", 
    "ę", 
    "́ę́", 
    "̃ę̃", 
    "ē", 
    "ḗ", 
    "ḕ", 
    "ẻ", 
    "ȅ", 
    "e̋", 
    "ȇ", 
    "ẹ", 
    "ệ", 
    "ḙ", 
    "ḛ", 
    "ɇ", 
    "̩e̩", 
    "̩è̩", 
    "̩é̩", 
    "ᶒ", 
    "ⱸ", 
    "ꬴ", 
    "ꬳ" 
  ], 
  "f": [ 
    "f", 
    "ḟ", 
    "ƒ", 
    "ꞙ", 
    "ᵮ", 
    "ᶂ" 
  ], 
  "g": [ 
    "g", 
    "ǵ", 
    "ğ", 
    "ĝ", 
    "ǧ", 
    "ġ", 
    "̃g̃", 
    "ģ", 
    "ḡ", 
    "ǥ", 
    "ꞡ", 
    "ɠ", 
    "ᶃ", 
    "ꬶ" 
  ], 
  "h": [ 
    "h", 
    "ĥ", 
    "ȟ", 
    "ḧ", 
    "ḣ", 
    "ḩ", 
    "ḥ", 
    "ḫ", 
    "̱ẖ", 
    "ħ", 
    "ⱨ", 
    "ɦ", 
    "ꞕ" 
  ], 
  "i": [ 
    "i", 
    "í", 
    "i̇́", 
    "ì", 
    "i̇̀", 
    "ĭ", 
    "î", 
    "ǐ", 
    "ï", 
    "ḯ", 
    "ĩ", 
    "i̇̃", 
    "į", 
    "į́", 
    "į̇́", 
    "į̃", 
    "į̇̃", 
    "ī", 
    "ī̀", 
    "ỉ", 
    "ȉ", 
    "i̋", 
    "ȋ", 
    "ị", 
    "ḭ", 
    "ɨ", 
    "ᶖ", 
    "i̇", 
    "ı", 
    "í" 
  ], 
  "j": [ 
    "j", 
    "ĵ", 
    "ɉ", 
    "ǰ", 
    "ʝ", 
    "j̃", 
    "j̇̃", 
    "ɟ", 
    "ʄ" 
  ], 
  "k": [ 
    "k", 
    "ḱ", 
    "ǩ", 
    "ķ", 
    "ḳ", 
    "ḵ", 
    "ƙ", 
    "ⱪ", 
    "ᶄ", 
    "ꝁ", 
    "ꝃ", 
    "ꝅ", 
    "ꞣ" 
  ], 
  "l": [ 
    "l", 
    "ĺ", 
    "ľ", 
    "ļ", 
    "ḷ", 
    "ḹ", 
    "̃l̃", 
    "ḽ", 
    "ḻ", 
    "ł", 
    "ŀ", 
    "ƚ", 
    "ꝉ", 
    "ⱡ", 
    "ɫ", 
    "ɬ", 
    "ꞎ", 
    "ꬷ", 
    "ꬸ", 
    "ꬹ", 
    "ᶅ", 
    "ɭ", 
    "ȴ" 
  ], 
  "m": [ 
    "m", 
    "ḿ", 
    "̋m̋", 
    "ṁ", 
    "ṃ", 
    "̃m̃", 
    "ᵯ", 
    "ᶆ", 
    "ɱ", 
    "ꬺ" 
  ],
  "n": [
    "n", 
    "ń", 
    "ǹ", 
    "ň", 
    "ṅ", 
    "ņ", 
    "ṇ", 
    "ṋ", 
    "ṉ", 
    "̈n̈", 
    "ɲ", 
    "ŋ", 
    "ƞ", 
    "ꞑ", 
    "ꞥ", 
    "ᵰ", 
    "ᶇ", 
    "ɳ", 
    "ȵ", 
    "ꬻ", 
    "ꬼ" 
  ], 
  "ñ": [ 
    "ñ"
  ], 
  "o": [ 
    "o", 
    "ó", 
    "ò", 
    "ŏ", 
    "ô", 
    "ố", 
    "ồ", 
    "ỗ", 
    "ổ", 
    "ǒ", 
    "ö", 
    "ȫ", 
    "ő", 
    "õ", 
    "ṍ", 
    "ṏ", 
    "ȭ", 
    "ȯ", 
    "͘o͘", 
    "ȱ", 
    "ø", 
    "ǿ", 
    "ǫ", 
    "ǭ", 
    "ō", 
    "ṓ", 
    "ṑ", 
    "ỏ", 
    "ȍ", 
    "ȏ", 
    "ơ", 
    "ớ", 
    "ờ", 
    "ỡ", 
    "ở", 
    "ợ", 
    "ọ", 
    "ộ", 
    "̩o̩", 
    "̩ò̩", 
    "̩ó̩", 
    "ɵ", 
    "ꝋ", 
    "ꝍ", 
    "ⱺ" 
  ], 
  "p": [ 
    "p", 
    "ṕ", 
    "ṗ", 
    "ᵽ", 
    "ꝑ", 
    "ƥ", 
    "ꝓ", 
    "ꝕ", 
    "̃p̃", 
    "ᵱ", 
    "ᶈ" 
  ],
  "q": [ 
    "q", 
    "ꝗ", 
    "ꝙ", 
    "ɋ", 
    "ʠ" 
  ], 
  "r": [ 
    "r", 
    "ŕ", 
    "ř", 
    "ṙ", 
    "ŗ", 
    "ȑ", 
    "ȓ", 
    "ṛ", 
    "ṝ", 
    "ṟ", 
    "̃r̃", 
    "ɍ", 
    "ꞧ", 
    "ɽ", 
    "ᵲ", 
    "ᶉ", 
    "ꭉ" 
  ], 
  "s": [ 
    "s", 
    "ś", 
    "ṥ", 
    "ŝ", 
    "š", 
    "ṧ", 
    "̈s̈", 
    "ṡ", 
    "ş", 
    "ṣ", 
    "ṩ", 
    "ș", 
    "̩s̩", 
    "ꞩ", 
    "ȿ", 
    "ʂ", 
    "ᶊ", 
    "ᵴ" 
  ], 
  "t": [ 
    "t", 
    "ť", 
    "ṫ", 
    "ţ", 
    "ṭ", 
    "ț", 
    "ṱ", 
    "ṯ", 
    "ŧ", 
    "ⱦ", 
    "ƭ", 
    "ʈ", 
    "̈ẗ", 
    "ᵵ", 
    "ƫ", 
    "ȶ" 
  ], 
  "u": [ 
    "u", 
    "ú", 
    "ù", 
    "ŭ", 
    "û", 
    "ǔ", 
    "ů", 
    "ü", 
    "ǘ", 
    "ǜ", 
    "ǚ", 
    "ǖ", 
    "ű", 
    "ũ", 
    "ṹ", 
    "ų", 
    "́ų́", 
    "̃ų̃", 
    "ū", 
    "ṻ", 
    "̀ū̀", 
    "́ū́", 
    "̃ū̃", 
    "ủ", 
    "ȕ", 
    "ȗ", 
    "ư", 
    "ứ", 
    "ừ", 
    "ữ", 
    "ử", 
    "ự", 
    "ụ", 
    "ṳ", 
    "ṷ", 
    "ṵ", 
    "ʉ", 
    "ᶙ", 
    "ꭒ" 
  ], 
  "v": [ 
    "v", 
    "ṽ", 
    "ṿ", 
    "ꝟ", 
    "ʋ", 
    "ỽ", 
    "ᶌ", 
    "ⱱ", 
    "ⱴ" 
  ], 
  "w": [ 
    "w", 
    "ẃ", 
    "ẁ", 
    "ŵ", 
    "ẅ", 
    "ẇ", 
    "ẉ", 
    "̊ẘ", 
    "ⱳ" 
  ], 
  "x": [ 
    "x", 
    "́x́", 
    "̂x̂", 
    "ẍ", 
    "̌x̌", 
    "ẋ", 
    "̧x̧", 
    "̱x̱", 
    "̣x̣", 
    "ᶍ" 
  ], 
  "y": [ 
    "y", 
    "ý", 
    "ỳ", 
    "ŷ", 
    "̊ẙ", 
    "ÿ", 
    "ỹ", 
    "ẏ", 
    "ȳ", 
    "ỷ", 
    "ỵ", 
    "ɏ", 
    "ƴ", 
    "ỿ" 
  ], 
  "z": [ 
    "z", 
    "ź", 
    "ẑ", 
    "ž", 
    "ż", 
    "ẓ", 
    "ẕ", 
    "ƶ", 
    "ȥ", 
    "ⱬ", 
    "ɀ", 
    "ᶎ", 
    "ᵶ", 
    "ʐ", 
    "ʑ" 
  ] 
} 

por_siLaBas= function(í){ 
  Text= "-" + í.toLowerCase() + "     "; 
  word= ""; 
  syl= ""; 
  Widgets= true; 
  Cinnamon= ""; 
  Chocolate= ["!", "?", "'", "’", "ʻ"]; 
  Anti_joint= ["¡", "¿", "'", "’", "ʻ"]; 
                  
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

aNGEL= function(r){ 
  Mistery= r.toLowerCase(); 
  Cinnamon= ""; 
  Dizzy= ""; 
  Winter= false; 
                 
  for(i= 0; (i+= 1); i < Mistery.length){ 
    if(Mistery[i] == " " || i == Mistery.length){ 
      walkiwalki= true; 
                        
      i == " "? (Tsunami= i - 1): (Tsunami= i); 
                                   
      rageComics= [",", ".", ";"]; 
        Anti_joint= ["¡", "¿", "'", "’", "ʻ"]; /*Está hecho de arrugami y es un porro que soplas, thereof, anti_joint*/ 
        Chocolate= ["!", "?", "'", "’", "ʻ"]; /*ElDelprincipio's decision*/ 
                                                                
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

ok= true; 
waiting= false; 
var next; 
var Antheater= false; 
var token; 
var hashes= {}; 
var nonBuilt; 
$(window).load(function(){ 
    setTimeout(
        function(){ 
            ttl= $("title").text(); 
    
            $("title").html(" &nbsp &nbsp&nbsp&nbsp" + ttl); 
    
            setTimeout(function(){$("title").html("⬤&nbsp&nbsp" + ttl); }, 100); 
    
            setTimeout(function(){$("title").html(" &nbsp     " + ttl); }, 400); 
    
            setTimeout(function(){$("title").html("⬤&nbsp&nbsp" + ttl); }, 700); 
    
            setTimeout(function(){$("title").html(" &nbsp     " + ttl); }, 1100); 
    
            setTimeout(function(){$("title").html("⬤&nbsp&nbsp" + ttl); }, 1400); 

            setTimeout(function(){$("title").html(ttl); }, 1700); 
        } 
        , 593); 
}); 
function getNewComments(m, h){ 
    var arr= []; 
                 
    for(f= (m.children().filter(".comentario").length - (m.children().filter(".comentario").length - h.children().filter(".comentario").length)); f <= (m.children().filter(".comentario").length - 1); f++){ 
        arr[arr.length]= ["C", $(m.children().filter(".comentario")[f])[0].outerHTML]; 
        $(m.children().filter(".comentario")[f]).next().is(".respuestas")? arr[arr.length]= ["R", $(m.children().filter(".comentario")[f]).next()[0].outerHTML]: 1; 
    } 
      
    arr= !h.is(".Comentarios")? [arr, pathfinder(h)]: [arr]; 
                
    return arr; 
} 
pathfinder= function(w){ 
    tt= w; 
    c= []; 
    
    while(!tt.is(".Comentarios")){ 
        c[c.length]= tt.parent().children().filter(".comentario").index(tt.prev()); 
        tt= tt.parent();    
    }
    return c; 
}
function finder(i, n){ 
    y= n.find(".Comentarios"); 
    
    typeof i.is == "undefined"? (function(){c= []; for(ie in i){c[c.length]= i[ie]}})(): pathfinder(i); 

    while(c.length > 1){ 
        y= $(y.children().filter(".comentario")[c[c.length - 1]]).next(); 
        c= c.splice(0, c.length - 1); 
    } 
    
    return $(y.children().filter(".comentario")[c[c.length - 1]]).next(); 
}
function getCommentsAndAnswers(u, l){ 
    $(u).filter(".Comentarios").children().filter(".comentario").each(function(){ 
        if(!$(this).next().is(".respuestas") && $(l.find(".Comentarios").children().filter(".comentario")[$(this).parent().children().filter(".comentario").index($(this))]).next().is(".respuestas")){ 
            $(l.find(".Comentarios").children().filter(".comentario")[$(this).parent().children().filter(".comentario").index($(this))]).next().find(".Respuestas").remove(); 
            newAnswers[newAnswers.length]= [$(this).parent().children().filter(".comentario").index($(this)), $(l.find(".Comentarios").children().filter(".comentario")[$(this).parent().children().filter(".comentario").index($(this))]).next().html()]; 
        }; 
    }); 
    u.children().filter(".respuestas").each(function(){ 
        $(this).children().filter(".comentario").each(function(){ 
            if(!$(this).next().is(".respuestas") && $($(finder($(this).parent(), l)[0]).children().filter(".comentario")[$(this).parent().children().filter(".comentario").index($(this))]).next().is(".respuestas")){
                $($(finder($(this).parent(), l)[0]).children().filter(".comentario")[$(this).parent().children().filter(".comentario").index($(this))]).next().find(".Respuestas").remove(); 
                newAnswers[newAnswers.length]= [pathfinder($(this).parent()), $(this).parent().children().filter(".comentario").index($(this)), $($(finder($(this).parent(), l)[0]).children().filter(".comentario")[$(this).parent().children().filter(".comentario").index($(this))]).next().html()]; 
            }; 
        }); 
        getNewComments($(finder($(this), l)[0]), $(this))[0].length? newComments[newComments.length]= getNewComments($(finder($(this), l)[0]), $(this)): 1; 
        getCommentsAndAnswers($(this), l); 
    }); 
} 

k200= function(f, ww1, a, u, ty){ 
switch(ty){
    case "story": 
        $(".story").each(function(){ 
            if(($(this).is(".mult_img")? $(this).find(".options a").attr("href").slice(0, $(this).find(".options a").attr("href").lastIndexOf("/")) + $(this).find(".carr").find("img")[0].src.slice($(this).find(".carr").find("img")[0].src.lastIndexOf("/"), $(this).find(".carr").find("img")[0].src.lastIndexOf(".")): $(this).find(".options a").attr("href")) == f.target.responseURL.slice(100, -5)){
                a= $(this);
            }
        }); 
    break; 
}; 

www= {f: f, ww1: ww1, a: a, u: u, ty: ty}; 
console.log(www)
console.log(a)
    aS= a; 
    $("badguy").remove();
    $("body").prepend("<badguy></badguy>");
    $("badguy").html(f.target.response.slice(f.target.response.lastIndexOf("biography") + 12, f.target.response.indexOf("sidebar") - 11).slice(0, f.target.response.slice(f.target.response.lastIndexOf("biography") + 12, f.target.response.indexOf("sidebar") - 11).lastIndexOf("</aside>")));
    newComments= []; 
    newAnswers= []; 
    $("badguy .Comentarios").children().filter(".comentario").each(function(){ 
    if(!$(this).next().is(".respuestas") && $($(finder($(this).parent(), aS)[0]).children().filter(".comentario")[$(this).parent().children().filter(".comentario").index($(this))]).next().is(".respuestas")){ 
        newAnswers[newAnswers.length]= [pathfinder($(this).parent()), $(this).parent().children().filter(".comentario").index($(this))]; 
    }; 
}); 
newComments[newComments.length]= getNewComments(aS.find(".Comentarios"), $("badguy .Comentarios")); 
getCommentsAndAnswers($("badguy .Comentarios"), aS);

JSON.parse(localStorage.getItem(f.target.responseURL.slice(100, -5))).B? aS.find(".options .bookmark").addClass("true"): aS.find(".options .bookmark").removeClass("true");
JSON.parse(localStorage.getItem(f.target.responseURL.slice(100, -5))).S? aS.find(".options .star").addClass("true"): aS.find(".options .star").removeClass("true");
!!JSON.parse(localStorage.getItem(f.target.responseURL.slice(100, -5))).C? (function(){aS.find(".Comentarios")[0].innerHTML= JSON.parse(localStorage.getItem(f.target.responseURL.slice(100, -5))).C})(): 1;
$("badguy").remove(); 
for(w in newComments){ 
    if(newComments[w].length == 1){
        for(e in newComments[w][0]){
            aS.find(".Comentarios").append(newComments[w][0][e][1]); 
        }
    }else{
        for(e in newComments[w][0]){
            finder(newComments[w][1], aS).children().filter(".Respuestas").before(newComments[w][0][e][1]); 
        }
    }
} 
for(w in newAnswers){ 
    if(newAnswers[w].length == 2){
        if($(aS.find(".Comentarios").children().filter(".comentario")[newAnswers[w][0]]).next().is(".respuestas")){ 
            $(aS.find(".Comentarios").children().filter(".comentario")[newAnswers[w][0]]).next().children().filter(".Respuestas").before(newAnswers[w][1]); 
        }else{ 
            $(aS.find(".Comentarios").children().filter(".comentario")[newAnswers[w][0]]).after('<div class="respuestas">' + newAnswers[w][1] + '<span class="Respuestas"></span></div>')
        } 
    }else{ 
        if($(finder(newAnswers[w][0], aS).children().filter(".comentario")[newAnswers[w][1]]).next().is(".respuestas")){ 
            $(finder(newAnswers[w][0], aS).children().filter(".comentario")[newAnswers[w][1]]).next().children().filter(".Respuestas").before(newAnswers[w][2]); 
        }else{ 
            $(finder(newAnswers[w][0], aS).children().filter(".comentario")[newAnswers[w][1]]).after('<div class="respuestas hidden">' + newAnswers[w][2] + '<span class="Respuestas"></span></div>');
        } 
    } 
} 
console.log(u[0])

localStorage.setItem(f.target.responseURL.slice(100, -5), JSON.stringify({B: JSON.parse(localStorage.getItem(f.target.responseURL.slice(100, -5))).B, S: JSON.parse(localStorage.getItem(f.target.responseURL.slice(100, -5))).S, C: bGComments(aS), hash: u[0].sha})); 
}
k300= function(C, p, y, ty){ 

    //console.log( C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")), C.target );  
    hashes[C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))]= (function(){built= true; for(eForensics in JSON.parse(C.target.response)){ 
            if(nonBuilt.indexOf(JSON.parse(C.target.response)[eForensics].sha) != -1){ 
                built= parseInt(eForensics) + 1; 
            } 
        }; return built !== true? JSON.parse(C.target.response)[built].sha: JSON.parse(C.target.response)[0].sha; })(); 
    if(!!JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))) && JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).hash != JSON.parse(C.target.response)[0].sha){
        var oReq= new XMLHttpRequest(); 
        oReq.addEventListener("load", function(e){k200(e, p, y, JSON.parse(C.target.response), ty)}); 
        console.log( JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).hash + C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")), C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))), "XX" + C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".") )
        oReq.open("GET", "https://raw.githubusercontent.com/LirilCo/Lirilco.github.io/" + JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).hash + C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")) + ".html"); 
        oReq.send(); 
    }else if(!!JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))))){
        switch(ty){
            case "story": 
                $(".story").each(function(){ 
                    if(($(this).is(".mult_img")? $(this).find(".options a").attr("href").slice(0, $(this).find(".options a").attr("href").lastIndexOf("/")) + $(this).find(".carr").find("img")[0].src.slice($(this).find(".carr").find("img")[0].src.lastIndexOf("/"), $(this).find(".carr").find("img")[0].src.lastIndexOf(".")): $(this).find(".options a").attr("href")) == C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf("."))){
                        a= $(this);
                    }
                }); 
            break; 
        }; 
        JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).B? a.find(".options .bookmark").addClass("true"): a.find(".options .bookmark").removeClass("true"); 
        JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).S? a.find(".options .star").addClass("true"): a.find(".options .star").removeClass("true"); 
        !!JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).C? (function(){a.find(".Comentarios")[0].innerHTML= JSON.parse(localStorage.getItem(C.target.responseURL.slice(C.target.responseURL.lastIndexOf("=") + 1, C.target.responseURL.lastIndexOf(".")))).C})(): 1; 

    }
} 
K100= function(builds){ 
    nonBuilt= (function(){ 
        non_built= []; 

        for(eForensics in JSON.parse(builds.target.response)){ 
                if(JSON.parse(builds.target.response)[eForensics].status == "built"){ 
                    return non_built; 
                }else{ 
                    non_built[non_built.length]= JSON.parse(builds.target.response)[eForensics].commit; 
                } 
            } 
        })(); 
    $(".story").each(function(){ 
        w1=  $(this).is(".mult_img")? $(this).find(".options a").attr("href").slice(0, $(this).find(".options a").attr("href").lastIndexOf("/")) + $(this).find(".carr").find("img")[0].src.slice($(this).find(".carr").find("img")[0].src.lastIndexOf("/"), $(this).find(".carr").find("img")[0].src.lastIndexOf(".")): $(this).find(".options a").attr("href"); 
        cold= JSON.parse(localStorage.getItem(w1)); 
        console.log( w1, cold )
        t= $(this); 
        (!hashes[w1] || (!!cold && (cold.hash)))? (function(){ 
            var oReq= new XMLHttpRequest(); 
            oReq.addEventListener("load", function(e){k300(e, w1, t, "story")}); 
            oReq.open("GET", "https://api.github.com/repos/LirilCo/lirilco.github.io/commits?path=" +  w1 + ".html"); 
            oReq.setRequestHeader('Authorization', "token " + token); 
            oReq.send(); 
            !(!!cold && (cold.hash))? (function(){ 
                t.find(".pic").on("click", function(){openModal($(this));}); 
                t.find(".video .Enlarge").on("click", function(){openVideoModal($(this));}); 
                t.find(".options .Enlarge").on("click", function(){openOtherModal($(this));}); 
            })(): 1; 
        })(): (function(){ 
        })(); 
    }); 
} 
K0= function(){
    token= this.responseText; 

    var oReq= new XMLHttpRequest(); 
    oReq.addEventListener("load", function(e){K100(e)}); 
    oReq.open("GET", "https://api.github.com/repos/LirilCo/lirilco.github.io/pages/builds"); 
    oReq.setRequestHeader('Authorization', "token " + token); 
    oReq.send();
}
$(document).on("ready", function(){ 
    purger.purge(); 

    $("#theater textarea").on('input', function() { 
        $(this).height(""); 
        !!$(this).val()? $(this).height($(this).prop('scrollHeight') - (parseInt($(this).css("padding-top").slice(0, -2)) + parseInt($(this).css("padding-bottom").slice(0, -2) + parseInt($(this).css("border-top").slice(0, -2)) + parseInt($(this).css("border-bottom").slice(0, -2))))): 1; 
    }); 
    $(".comentarios > .newComment").on('keydown', function(i){ 
                abc= $("#theater .Comentarios"); 

                (!i.shiftKey && i.keyCode == 13)? (function(){abc.append("<div class='comentario'>" + localStorage.getItem("knob") + '"' +  localStorage.getItem("tooltip") + '"' + localStorage.getItem("user") + $(".comentarios > .newComment textarea").val().replaceAll("\n", "<br>") + "</span><span class='Responder'></span></div>"); $(".comentarios > .newComment textarea").val(""); $($($("#theater .Comentarios").children()[$("#theater .Comentarios").children().length - 1]).find(".Responder")).on("click", function(){wD($(this))}); $("#theater .Comentarios").scrollTop($("#theater .Comentarios")[0].scrollHeight); $($($("#theater .Comentarios").children()[$("#theater .Comentarios").children().length - 1])).on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth = elx.outerWidth( true ),circleHeight  = elx.outerHeight( true ),circleLeft    = elx.offset().left,circleTop     = elx.offset().top,circlePos     = {x     : circleLeft + circleWidth / 2,y     : circleTop + circleHeight / 2,radius: circleWidth / 2};distance    = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); document.activeElement.blur(); $(".comentarios > .newComment textarea").css({"height": ""}); badGuy(); })(): 1; 

                $(".knob").knob(); 

                tooltipComentarios(); 
            }); 
    $("#theater .read").on("click", function(){ 
        !$("#theater .description").hasClass("closed")? $("#theater .description").addClass("closed"): $("#theater .description").removeClass("closed"); 
        !$("#theater .comentarios").hasClass("open")? $("#theater .comentarios").addClass("open"): $("#theater .comentarios").removeClass("open"); 
    }); 

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", K0);
    oReq.open("get", "https://cdn.filestackcontent.com/4cpMUkITTAGimI5om7YA");
    oReq.send();
    
    /*$(".story").each(function(){ 
        cold= JSON.parse(localStorage.getItem($(this).is(".mult_img")? $(this).find(".options a").attr("href").slice(0, $(this).find(".options a").attr("href").lastIndexOf("/")) + $(this).find(".carr").find("img")[0].src.slice($(this).find(".carr").find("img")[0].src.lastIndexOf("/"), $(this).find(".carr").find("img")[0].src.lastIndexOf(".")): $(this).find(".options a").attr("href"))); 
                           
        var t= $(this)[0]; 
                           
        !!cold? (function(){ 
            cold.B? $(t).find(".options .bookmark").addClass("true"): $(t).find(".options .bookmark").removeClass("true"); 
            cold.S? $(t).find(".options .star").addClass("true"): $(t).find(".options .star").removeClass("true"); 
            $(t).find(".Comentarios")[0].innerHTML= cold.C; 
        })(): 1; 
    }); */

    current= $(".story.current");
    $(document).keypress(function (e) {
        if(!$("textarea").is(":focus") && !$("input").is(":focus") && !waiting){ 
            switch(e.keyCode){ 
                case 108: case 76: 
                    $(".current").find('.options .star').toggleClass("true"); 
                    $("#theater").find('.options .star').toggleClass("true"); 
                    badGuy(); 
                break; 
                case 98: case 66: 
                    $(".current").find('.options .bookmark').toggleClass("true"); 
                    $("#theater").find('.options .bookmark').toggleClass("true"); 
                    badGuy(); 
                break; 
                case 102: case 70: 
                    if($(".current").is(".mult_img") && $("#theater").css("display") != "block"){ 
                        openModal($($(".current").find(".pic")[Math.round($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0)])); 
                        if(Math.round($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) == Math.floor($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0)){
                            $(".current .carr").stop(true, false); 
                            $(".current .carr").animate({scrollLeft: (Math.round($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) * $(".current").find(".carr .pic").width())}, (400 - (400 * (Math.ceil($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) - ($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0))))); 
                            /*$(".current .nav_arrow.left .arrow").click(); */ 
                        }else{
                            $(".current .carr").stop(true, false); 
                            $(".current .carr").animate({scrollLeft: (Math.round($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) * $(".current").find(".carr .pic").width())}, (400 * (Math.ceil($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) - ($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0)))); 
                            /*$(".current .nav_arrow.right .arrow").click(); */ 
                        }
                    }else if($(".current").is(".img") && $("#theater").css("display") != "block"){ 
                        openModal($(".current .pic")); 
                    }else if($(".current").is(".video") && $("#theater").css("display") != "block"){ 
                        openVideoModal($(".current").find(".Enlarge")); 
                    }; 
                break; 
            } 
        } 
    if(!$("textarea").is(":focus") && !$("input").is(":focus") && !waiting  && $("#theater").css("display") != "block"){
        //console.log(e.keyCide) 
        var forward;
                     
        (e.keyCode == 74 || e.keyCode == 106 || e.keyCode == 75 || e.keyCode == 107)? waiting= true: 143; 
                                                   
        if (e.keyCode == 74 || e.keyCode == 106) {
            forward = true;
        } else if (e.keyCode == 75 || e.keyCode == 107) {
            forward = false;
        } else {
            return true;
        }
    
    
        if (!$(".story.current").length) {
            $(".story:first").addClass("current"); 
        }
    
        if ($(".story.current").length) {
            next= ""; 
            if (forward) {
                !!current.next(".story").length? next = current.next(".story"): 1415; 
            } else {
                !!current.prev(".story").length? next = current.prev(".story"): 27721; 
            }
            if (!!next.length) {
                $(".current").removeClass("current");
                next.addClass("current"); 
            } 
        }
    
        (!!next.length)? (function(){
                            ok= false; 
                            $("html").animate({ 
                            scrollTop: $(".current").offset().top - 56
                        }, 400, function(){  
                            waiting= false; 
                            current= $(".story.current"); 
                            $(".current").attr("tabindex", 0); 
                            $(".current")[0].focus();
                            setTimeout(function(){!$("html").is(":animated")? ok= true: 1;}, 100) 
                        })})(): waiting= false; 
        }
    });
    $("#search input").on("keyup", function(){for(a= 0; a < $("#resizeBottom")[0].children[0].children[0].children[0].children[0].children.length; a++){ 
        $("#resizeBottom")[0].children[0].children[0].children[0].children[0].children[a].style.display= ""; 
        $("#resizeBottom")[0].children[0].children[0].children[0].children[0].children[a].innerText.toLowerCase().indexOf($("#search input")[0].value.toLowerCase()) == -1? $("#resizeBottom")[0].children[0].children[0].children[0].children[0].children[a].style.display= "none": 1; 
    }})
    document.getElementsByClassName("buscar")[0].addEventListener("keydown", function(i){
        i.keyCode == 13? document.getElementsByTagName("body")[0].style.cursor= "text": 1; 

            i.keyCode == 13? setTimeout(function(){aNGEL(document.getElementsByClassName("buscar")[0].value)}, 152): 1; 
    }); 
    document.getElementsByTagName("input")[2].addEventListener("keydown", function(i){i.keyCode == 13? por_siLaBas(document.getElementsByTagName("input")[2].value): 1; }); 
    document.getElementsByTagName("input")[2].addEventListener("keydown", function(i){i.keyCode == 53? parse("header", 0): 1; }); 
    console.log('parse("header", 0);   '); 
    $('.chats').click(function(e){ 
    aa= e.target; 
    ii= false; 
    while(!!aa.parentElement && !ii){ 
        (!!aa.parentElement.getAttribute("class") && aa.parentElement.getAttribute("class").indexOf("chat ") != -1)? ii = true: 1; 
        aa= aa.parentElement; 
    }
        if(!ii){ 
            $(this).hide(); 
            $(document.elementFromPoint(e.clientX, e.clientY)).trigger("click"); 
            $(this).show(); 
        } 
    }); 
    $(".story .overflowing").on("scroll", function(k){ 
   var current = $(".story.current"); 
    current.removeClass("current"); 
    $(this).closest(".story").addClass("current"); 
}) 
}); 
                        
function openModal(a) {
    Antheater= a.closest(".story"); 

    $("body")[0].style.overflow= "hidden"; 
    responsive(); 
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this = a.closest('.story')
    var source = a.attr('src');
    $('.theater #bigPic').attr('src', source);

    source= source; 
                           
    history.pushState({page: 1}, "", "/" + a.closest('.story').find(".username").children()[0].href.slice(a.closest('.story').find(".username").children()[0].href.lastIndexOf("/") + 1) + "/img/" + un_tn(source).slice(un_tn(source).lastIndexOf("/") + 1, -4)); 

    var info = a.closest('.story').find(".info").html(); 
    $('.theater .comments .info').html(info); 

    var title = a.closest('.story').find(".title").html();
    $('.theater .comments .title').html(title);

    var more= !!a.closest('.story').find(".moreI").html()? a.closest('.story').find(".moreI").html(): "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet varius lectus, congue rutrum urna. Suspendisse in ultrices enim. In hac habitasse platea dictumst. Praesent aliquet, nisi nec euismod vulputate, odio velit porta erat, ut semper lacus erat ac nulla. Aenean ex libero, volutpat vel sem et, blandit dictum dui. Duis suscipit sed nisi finibus vestibulum. Quisque finibus porttitor nisl, nec consequat metus. Quisque commodo, libero nec volutpat suscipit, quam urna volutpat turpis, quis rhoncus magna dui sit amet lacus. Donec pellentesque aliquam turpis nec commodo. Aliquam lobortis facilisis auctor. Sed libero nisi, scelerisque et porttitor vel, accumsan sed lacus. Pellentesque at tortor pellentesque, vestibulum turpis at, iaculiuisque finibus porttitor nisl, nec consequat metus. Quisque commodo, libero nec volutpat suscipit, quam urna volutpat turpis, quis rhoncus magna dui sit amet lacus. Donec pellentesque aliquam turpis nec commodo. Aliquam lobortis facilisis auctor. Sed libero nisi, scelerisque et porttitor vel, accumsan sed lacus. Pellentesque at tortor pellentesque, vestibulum turpis at, iaculis nibh.";
    $('.theater .comments .more').html(more);

    var comments = a.closest('.story').find(".Comentarios").html();
    $('.theater .comments .comentarios .Comentarios').html(comments);

    $('.theater .comments .comentarios .Comentarios .comentario').on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth = elx.outerWidth( true ),circleHeight  = elx.outerHeight( true ),circleLeft    = elx.offset().left,circleTop     = elx.offset().top,circlePos     = {x     : circleLeft + circleWidth / 2,y     : circleTop + circleHeight / 2,radius: circleWidth / 2};distance    = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); 

    $("#theater .Respuestas").html(function(){return '<span class="Responder"></span>' + "Respuestas (" + $(this).parent().children().filter(".comentario.hidden").length + ")"}); 
                                       
    $("#theater .Respuestas").click(function(l){wd($(this), l)}); 

    for(let collapse of document.querySelectorAll("#theater .Respuestas .Responder")){ 
        collapse.addEventListener("contextmenu", function(e){ 
            e.preventDefault(); 
            wwd(this); 
        })
    }; 

    $("#theater .RespueNtas").click(function(i){ 
        if($(i.target).is(".RespueNtas")){ 
            for(j= 0; j <= 2; j++){ 
                $(this).before(H); 

                $(this).prev().on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth = elx.outerWidth( true ),circleHeight  = elx.outerHeight( true ),circleLeft    = elx.offset().left,circleTop     = elx.offset().top,circlePos     = {x     : circleLeft + circleWidth / 2,y     : circleTop + circleHeight / 2,radius: circleWidth / 2};distance    = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); 
                                   
                $(".knob").knob(); 
                                   
                tooltipComentarios(); 
                    
                H != can493ax? H= can493ax: H= asdknki4; 
            } 

            $(this).html('<span class="Responder"></span>Más respuestas (∞)'); 

            for(let collapse of document.querySelectorAll("#theater .RespueNtas .Responder")){ 
                collapse.addEventListener("contextmenu", function(e){ 
                    e.preventDefault(); 

                    $(this.parentElement.parentElement).find(".comentario").remove(); 
                                
                    H= asdknki4; 

                    $("#theater .RespueNtas").html('<span class="Responder"></span>Respuestas (∞)'); 
                }) 
            }; 
        } 
    }); 

    tooltip(); 

    $(".comentario .Responder").on("click", function(){wD($(this))}); 

    $(".Respuestas .Responder").on("click", function(){wD($(this), 1)}); 

    $(".knob").knob(); 

    tooltipComentarios(); 

    if (a.closest('.story').find(".options .bookmark").hasClass("true")) {
        $('.theater .comments .options .bookmark').addClass("true");
    } else {
        $('.theater .comments .options .bookmark').removeClass("true");
    }
    if (a.closest('.story').find(".options .star").hasClass("true")) {
        $('.theater .comments .options .star').addClass("true");
    } else {
        $('.theater .comments .options .star').removeClass("true");
    }

    var pic = a.closest('.story').find(".info img").attr('src');
    $('.theater .comments .info #pic').attr('src', pic);

    var ref = a.closest('.story').find(".options ul a").attr('href');
    $('.theater .comments .options ul a').attr('href', ref);

    if($("#bigPic").width()<=$("#bigPic").height()){
        $("#bigPic").css({ "width":"100%"})
    }else{

    }
    $("#theater").find(".info").height() < $("#theater").find(".info").find("img").width()? $("#theater").find(".description").css({"padding-top": "58px"}): $("#theater").find(".description").css({"padding-top": "76px"})

      $(".more").mCustomScrollbar({theme: 
        "minimal-dark", 
        autoExpandScrollbar: true,
        scrollInertia: 100});
      

    responsive()
    if(a.closest('.story').is(".mult_img")){ 
        if(($(a).parent().index() * $(a.closest(".story")).width()) < a.closest(".carr")[0].scrollLeft){ 
            $(".current .carr").stop(true, false); 
            $(".current .carr").animate({scrollLeft: ($(a).parent().index() * $(a.closest(".story")).width())}, (400 - (400 * (Math.ceil($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) - ($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0))))); 
            /*$(".current .nav_arrow.left .arrow").click(); */ 
        }else{ 
            $(".current .carr").stop(true, false); 
            console.log((400 * (Math.ceil($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) - ($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0))))
            $(".current .carr").animate({scrollLeft: ($(a).parent().index() * $(a.closest(".story")).width())}, (400 * (Math.ceil($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0) - ($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0)))); 
            /*$(".current .nav_arrow.right .arrow").click(); */ 
        } 
        ar= a.closest('.story'); 
        $("#theater").append('<div class="nav_arrow left' + (a.closest('.story').find(".nav_arrow.left").is(".disabled")? ' disabled': '') + '"><div class= "arrow"></div></div><div class="nav_arrow right' + (a.closest('.story').find(".nav_arrow.right").is(".disabled")? ' disabled': '') + '"><div class= "arrow"></div></div>'); 
        $("#theater .nav_arrow.left .arrow").on("click", function(){
            !a.closest('.story').find(".carr").is(":animated")? a.closest('.story').find(".carr")[0].scrollLeft= a.closest('.story').find(".carr")[0].scrollLeft - a.closest('.story').find(".carr").width(): 672; 
            $("#theater").find("#bigPic")[0].src= $(".current .carr .pic")[$(".current .carr")[0].scrollLeft / $(".current .carr").width()].src; 
            source= $(".current .carr .pic")[$(".current .carr")[0].scrollLeft / $(".current .carr").width()].src; 
            history.pushState({page: 1}, "", "/" + a.closest('.story').find(".username").children()[0].href.slice(a.closest('.story').find(".username").children()[0].href.lastIndexOf("/") + 1) + "/img/" + un_tn(source).slice(un_tn(source).lastIndexOf("/") + 1, -4)); 
            th= a.closest('.story'); lk= th.find(".carr .pic")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].src;th.find(".options a").attr("href", th.find(".options a").attr("href").slice(0, th.find(".options a").attr("href").lastIndexOf("/")) + lk.slice(lk.lastIndexOf("/"), lk.lastIndexOf("."))); 
        }); 
        $("#theater .nav_arrow.right .arrow").on("click", function(){
            !a.closest('.story').find(".carr").is(":animated")? a.closest('.story').find(".carr")[0].scrollLeft= a.closest('.story').find(".carr")[0].scrollLeft + a.closest('.story').find(".carr").width(): 672; 
            $("#theater").find("#bigPic")[0].src= $(".current .carr .pic")[$(".current .carr")[0].scrollLeft / $(".current .carr").width()].src; 
            source= $(".current .carr .pic")[$(".current .carr")[0].scrollLeft / $(".current .carr").width()].src; 
            history.pushState({page: 1}, "", "/" + a.closest('.story').find(".username").children()[0].href.slice(a.closest('.story').find(".username").children()[0].href.lastIndexOf("/") + 1) + "/img/" + un_tn(source).slice(un_tn(source).lastIndexOf("/") + 1, -4)); 
            th= a.closest('.story'); lk= th.find(".carr .pic")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].src;th.find(".options a").attr("href", th.find(".options a").attr("href").slice(0, th.find(".options a").attr("href").lastIndexOf("/")) + lk.slice(lk.lastIndexOf("/"), lk.lastIndexOf("."))); 
        }); 
        $(".nav_arrow").on("click", function(i){$(i.target).is(".nav_arrow")? closeModal(): 1; }); 
    }
    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 4 !important; }; "; 
    !!$(".XWW").length? $(".XWW")[0].innerHTML= "#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; ": $("head").append("<style class='XWW'>#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; </style>"); 

}
function openVideoModal(a){ 
    Antheater= a.closest(".story"); 

    th= a.closest(".story"); 

    $("body")[0].style.overflow= "hidden"; 
    responsive(); 
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this = a.closest('.story')
    var source = a.closest('.story').find("video").attr('src');
    $('.theater video').attr('src', source);

    $('.theater video').attr('autoplay', "true");

    source= un_tn(source); 
                           
    history.pushState({page: 1}, "", th.find(".username").children()[0].href.slice(th.find(".username").children()[0].href.lastIndexOf("/")) + "/vid/" + source.slice(source.lastIndexOf("/") + 1, -4)); 

    var info = a.closest('.story').find(".info").html(); 
    $('.theater .comments .info').html(info); 

    var title = a.closest('.story').find(".title").html();
    $('.theater .comments .title').html(title);

    var more= !!a.closest('.story').find(".moreI").html()? a.closest('.story').find(".moreI").html(): "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet varius lectus, congue rutrum urna. Suspendisse in ultrices enim. In hac habitasse platea dictumst. Praesent aliquet, nisi nec euismod vulputate, odio velit porta erat, ut semper lacus erat ac nulla. Aenean ex libero, volutpat vel sem et, blandit dictum dui. Duis suscipit sed nisi finibus vestibulum. Quisque finibus porttitor nisl, nec consequat metus. Quisque commodo, libero nec volutpat suscipit, quam urna volutpat turpis, quis rhoncus magna dui sit amet lacus. Donec pellentesque aliquam turpis nec commodo. Aliquam lobortis facilisis auctor. Sed libero nisi, scelerisque et porttitor vel, accumsan sed lacus. Pellentesque at tortor pellentesque, vestibulum turpis at, iaculiuisque finibus porttitor nisl, nec consequat metus. Quisque commodo, libero nec volutpat suscipit, quam urna volutpat turpis, quis rhoncus magna dui sit amet lacus. Donec pellentesque aliquam turpis nec commodo. Aliquam lobortis facilisis auctor. Sed libero nisi, scelerisque et porttitor vel, accumsan sed lacus. Pellentesque at tortor pellentesque, vestibulum turpis at, iaculis nibh.";
    $('.theater .comments .more').html(more);

    var comments= a.closest('.story').find(".Comentarios").html();
    $('.theater .comments .comentarios .Comentarios').html(comments);

    $('.theater .comments .comentarios .Comentarios .comentario').on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth= elx.outerWidth( true ),circleHeight = elx.outerHeight( true ),circleLeft   = elx.offset().left,circleTop    = elx.offset().top,circlePos    ={x    : circleLeft + circleWidth / 2,y    : circleTop + circleHeight / 2,radius: circleWidth / 2};distance   = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); 

    $("#theater .Respuestas").html(function(){return '<span class="Responder"></span>' + "Respuestas (" + $(this).parent().children().filter(".comentario.hidden").length + ")"}); 
                                       
    $("#theater .Respuestas").click(function(l){wd($(this), l)}); 

    for(let collapse of document.querySelectorAll("#theater .Respuestas .Responder")){ 
        collapse.addEventListener("contextmenu", function(e){ 
            e.preventDefault(); 
            wwd(this); 
        })
    }; 

    $(".comentario .Responder").on("click", function(){wD($(this))}); 

    $(".Respuestas .Responder").on("click", function(){wD($(this), 1)}); 

    $(".knob").knob(); 

    tooltipComentarios(); 

    tooltip(); 

    $("#theater .Comentario audio").each(function(){audiojs.create($(this)[0])}); 

    if (a.closest('.story').find(".options .bookmark").hasClass("true")) {
        $('.theater .comments .options .bookmark').addClass("true");
    } else {
        $('.theater .comments .options .bookmark').removeClass("true");
    }
    if (a.closest('.story').find(".options .star").hasClass("true")) {
        $('.theater .comments .options .star').addClass("true");
    } else {
        $('.theater .comments .options .star').removeClass("true");
    }

    $("#theater #theater_video").addClass("visible")

    $("#theater .Playuse").addClass("visible")

    $("#theater #bigPic").addClass("invisible")


    th.find("video")[0].pause(); 

    var pic = a.closest('.story').find(".info img").attr('src');
    $('.theater .comments .info #pic').attr('src', pic);

    var ref = a.closest('.story').find(".options ul a").attr('href');
    $('.theater .comments .options ul a').attr('href', ref);

    if($("#bigPic").width()<=$("#bigPic").height()){
        $("#bigPic").css({ "width":"100%"})
    }else{

    }
    $("#theater").find(".info").height() < $("#theater").find(".info").find("img").width()? $("#theater").find(".description").css({"padding-top": "58px"}): $("#theater").find(".description").css({"padding-top": "76px"})

      $(".more").mCustomScrollbar({theme: 
        "minimal-dark", 
        autoExpandScrollbar: true,
        scrollInertia: 100});
      

    responsive()
    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 4 !important; }; "; 
    !!$(".XWW").length? $(".XWW")[0].innerHTML= "#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; ": $("head").append("<style class='XWW'>#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; </style>"); 
} 
function openOtherModal(a){ 
    Antheater= a.closest(".story"); 

    th= a.closest(".story"); 

    $("body")[0].style.overflow= "hidden"; 
    responsive(); 
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this = a.closest('.story')
    var source = a.closest('.story').find("video").attr('src');

    history.pushState({page: 1}, "", th.find(".username").children()[0].href.slice(th.find(".username").children()[0].href.lastIndexOf("/")) + "/pos" + a.parent().find("a.read").attr("href").slice(a.parent().find("a.read").attr("href").lastIndexOf("/"))); 

    var info = a.closest('.story').find(".info").html(); 
    $('.theater .comments .info').html(info); 

    var title = a.closest('.story').find(".title").html();
    $('.theater .comments .title').html(title);

    var more= !!a.closest('.story').find(".moreI").html()? a.closest('.story').find(".moreI").html(): "";
    $('.theater .comments .more').html(more);

    var comments = a.closest('.story').find(".Comentarios").html();
    $('.theater .comments .comentarios .Comentarios').html(comments);

    th.find(".revelar.activado").click(); 

    var containment = a.closest('.story').find(".title").next().prop("outerHTML");
    $('.theater #otherContainments > div').html(containment);

    !!$('.theater #otherContainments > div').find(".overflowing").length? $('.theater #otherContainments > div').find(".overflowing").parent()[0].outerHTML= $('.theater #otherContainments > div').find(".overflowing").html(): 1; 

    $("#theater .media > div").each(function(){$(this)[0].outerHTML= $(this).find("audio")[0].outerHTML}); 

    $("#theater #picContainer audio").each(function(){audiojs.create($(this)[0])}); 

    $("#otherContainments").is(".visible")? $("#otherContainments > div").height() < $("#otherContainments > div")[0].scrollHeight? $("#otherContainments").addClass("overflowing"): $("#otherContainments").removeClass("overflowing"): 1; 

    $("#theater .Respuestas").html(function(){return '<span class="Responder"></span>' + "Respuestas (" + $(this).parent().children().filter(".comentario.hidden").length + ")"}); 
                                       
    $("#theater .Respuestas").click(function(l){wd($(this), l)}); 

    for(let collapse of document.querySelectorAll("#theater .Respuestas .Responder")){ 
        collapse.addEventListener("contextmenu", function(e){ 
            e.preventDefault(); 
            wwd(this); 
        })
    }; 

    $(".comentario .Responder").on("click", function(){wD($(this))}); 

    $(".Respuestas .Responder").on("click", function(){wD($(this), 1)}); 

    $(".knob").knob(); 

    $('.comentario').tooltip({ 
        items: 'img', 
        open: function(event, ui) 
        { 
            if (typeof(event.originalEvent) === 'undefined') 
            { 
                return false; 
            } 
            $(".knob").knob(); 
            var $id = $(ui.tooltip).attr('id'); 
                
            // close any lingering tooltips 
            $('div.ui-tooltip').not('#' + $id).remove(); 
                
            // ajax function to pull in data and add it to the tooltip goes here 
        }, 
        close: function(event, ui) 
        { 
            ui.tooltip.hover(function() 
            { 
                $(this).stop(true).fadeTo(400, 1);  
            }, 
            function() 
            { 
                $(this).fadeOut('400', function() 
                { 
                    $(this).remove(); 
                }); 
            }); 
        } 
    }); 

    tooltip(); 

    $("#theater .Comentarios audio").each(function(){audiojs.create($(this)[0])}); 

    if (a.closest('.story').find(".options .bookmark").hasClass("true")) {
        $('.theater .comments .options .bookmark').addClass("true");
    } else {
        $('.theater .comments .options .bookmark').removeClass("true");
    }
    if (a.closest('.story').find(".options .star").hasClass("true")) {
        $('.theater .comments .options .star').addClass("true");
    } else {
        $('.theater .comments .options .star').removeClass("true");
    }

    $("#theater #bigPic").addClass("invisible")

    $("#theater #otherContainments").addClass("visible")

    var pic = a.closest('.story').find(".info img").attr('src');
    $('.theater .comments .info #pic').attr('src', pic);

    var ref = a.closest('.story').find(".options ul a").attr('href');
    $('.theater .comments .options ul a').attr('href', ref);

    if($("#bigPic").width()<=$("#bigPic").height()){
        $("#bigPic").css({ "width":"100%"})
    }else{

    }

    $("#theater").find(".info").height() < $("#theater").find(".info").find("img").width()? $("#theater").find(".description").css({"padding-top": "58px"}): $("#theater").find(".description").css({"padding-top": "76px"}); 

    $("#theater").find(".info").height() < $("#theater").find(".info").find("img").width()? (function(){$("#theater").find(".comentarios").removeClass("noventaYDos"); $("#theater").find(".comentarios").addClass("setenta_y_cuatro")})(): (function(){$("#theater").find(".comentarios").removeClass("setenta_y_cuatro"); $("#theater").find(".comentarios").addClass("noventaYDos")})(); 

      $(".more").mCustomScrollbar({theme: 
        "minimal-dark", 
        autoExpandScrollbar: true,
        scrollInertia: 100});
      

    responsive()

    $("#theater .revelar").on("click", function(){ 
        if($(this).text()[0] != "O"){ 
            $(this).parent().css({"height": "auto"}); 
            $(this)[0].tx= $(this).text(); 
            $(this).text("Ocultar de nuevo."); 
            $(this).addClass("activado"); 
        }else{ 
            $(this).parent().css({"height": "0"}); 
            $(this).text($(this)[0].tx); 
            $(this).removeClass("activado"); 
        } 
    })
    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 4 !important; }; "; 
    !!$(".XWW").length? $(".XWW")[0].innerHTML= "#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; ": $("head").append("<style class='XWW'>#theater .comentarios::before{top: " + parseInt($("#theater .comentarios").css("padding-top").slice(0, -2)) + "px !important; }; </style>"); 
} 
function closeModal() {
    $("#theater .Comentarios").find(".Respuestas .Responder").each(function(){wwd($(this)[0], true)}); 

    $("#theater .RespueNtas").parent().find(".comentario").remove(); 

    $("#theater .RespueNtas").html('<span class="Responder"></span>Respuestas (∞)'); 

    Antheater.find(".Comentarios").html($("#theater .Comentarios").html()); 

    $("#theater #bigPic")[0].src= ""; 

    $("#theater video")[0].src= ""; 

    $("#theater #theater_video").removeClass("visible")

    $("#theater .Playuse").removeClass("visible")

    $("#theater #otherContainments").removeClass("visible")

    $("#theater #bigPic").removeClass("invisible")

    $("#theater #otherContainments > div").html("")


    history.pushState({page: 1}, "", "/"); 

    Antheater= false; 

    ar= false; 
    $("#theater").find(".more")[0].outerHTML= "<p class= 'more'></p>"; 
    $("#theater .nav_arrow").remove(); 
    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 1 !important; }; "; 
    $("body")[0].style.overflow= ""; 
    responsive(); 
    if ($('.theater .comments .options .bookmark').hasClass("true")) {
        $this.find('.options .bookmark').addClass("true");
    } else {
        $this.find('.options .bookmark').removeClass("true");
    }
    if ($('.theater .comments .options .star').hasClass("true")) {
        $this.find('.options .star').addClass("true");
    } else {
        $this.find('.options .star').removeClass("true");
    }
    $(".theater").css({
        "display": "none"
    })
}
  
ar= false; 

document.addEventListener("keydown", function(i){(i.keyCode == 13 && !!window.getSelection().focusNode && $(window.getSelection().focusNode.parentElement).is(".revelar"))? $(window.getSelection().focusNode.parentElement).click(): 1; }); 
                                    
$(document).on("ready",function(e){ 
    $(".carr").on("scroll", function(){ 
        $$$th= $(this); 
        $(this)[0].scrollLeft / $(this).width() == $(this).find(".pic").length - 1? (function(){
            $$$th.closest(".story").find(".nav_arrow.right").addClass("disabled");
            $("#theater .nav_arrow.right").addClass("disabled"); 
        })(): (function(){
            $$$th.closest(".story").find(".nav_arrow.right").removeClass("disabled");
            $("#theater .nav_arrow.right").removeClass("disabled"); 
        })(); 
        $(this)[0].scrollLeft == 0? (function(){
            $$$th.closest(".story").find(".nav_arrow.left").addClass("disabled");
            $("#theater .nav_arrow.left").addClass("disabled"); 
        })(): (function(){
            $$$th.closest(".story").find(".nav_arrow.left").removeClass("disabled");
            $("#theater .nav_arrow.left").removeClass("disabled"); 
        })(); 
    }) 
    $(".nav_arrow.left .arrow").on("click", function(){th= $(this).parent(); !th.parent().find(".carr").is(":animated")? th.parent().find(".carr").animate({scrollLeft: th.parent().find(".carr")[0].scrollLeft - th.parent().find(".carr").width()}, 400, function(){th= $(this).closest(".story"); lk= th.find(".carr .pic")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].src;th.find(".options a").attr("href", th.find(".options a").attr("href").slice(0, th.find(".options a").attr("href").lastIndexOf("/")) + lk.slice(lk.lastIndexOf("/"), lk.lastIndexOf("."))); }): 672;}); 

    $(".nav_arrow.right .arrow").on("click", function(){th= $(this).parent(); !th.parent().find(".carr").is(":animated")? th.parent().find(".carr").animate({scrollLeft: th.parent().find(".carr")[0].scrollLeft + th.parent().find(".carr").width()}, 400, function(){th= $(this).closest(".story"); lk= th.find(".carr .pic")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].src;th.find(".options a").attr("href", th.find(".options a").attr("href").slice(0, th.find(".options a").attr("href").lastIndexOf("/")) + lk.slice(lk.lastIndexOf("/"), lk.lastIndexOf("."))); }): 672;}); 

    


    Used= []; 
    Urls= ["Abigail O'Neill.jpg", "Alana Campos.png", "Alexandra Tyler.jpeg", "Ali Chanel.jpg", "Ali Michael.jpg", "Alicia Loraina Olivas.jpg", "Allie Leggett.jpg", "Allie Silva.jpg", "Alyssa Arcè.jpg", "Amanda Booth.jpg", "Amanda Cerny.webp", "Amanda Streich.jpg", "Amberleigh West.jpg", "Amelia Talon.jpg", "Amy Leigh Andrews.jpg", "Ana Cheri.webp", "Anita Pathammavong.jpg", "Anna Sophia Berglund.jpg", "Ashley Doris.jpg", "Ashley Hobbs.jpg", "Ashley Smith.webp", "Audrey Aleen Allen.jpg", "Beth Williams.jpg", "Bridget Malcolm.jpg", "Britany Nola.jpg", "Britt Linn.jpeg", "Brittany Brousseau.jpg", "Brittny Ward.jpg", "Brook Power.jpg", "Bryiana Noelle.jpg", "Camille Rowe.jpg", "Carly Lauren.jpg", "Carolina Ballesteros.jpg", "Cassandra Dawn.webp", "Chasity Samone.jpg", "Chelsie Aryn.jpg", "Ciara Price.jpg", "Claire Sinclair.jpg", "Dana Taylor.jpg", "Dani Mathers.jpg", "Danielle Alcaraz.jpg", "Dominique Jane.jpg", "Dree Hemingway.jpg", "Elizabeth Elam.webp", "Elizabeth Ostrander.webp", "Elsie Hewitt.jpg", "Emily Agnes.jpg", "Enikő Mihalik.jpg", "Eugena Washington.jpg", "Fo Porter.jpg", "Francesca Frigo.jpg", "Geena Rocero.jpg", "Gemma Lee Farrell.jpg", "Gia Marie.jpg", "Gillian Chan.jpg", "Heather Knox.jpg", "Heather Rae Young.webp", "Hilda Dias Pimentel.jpg", "Ines Rau.jpg", "Iryna Ivanova.jpg", "Jaclyn Swedberg.jpg", "Jaime Faith Edmonson.jpg", "Jaslyn Ome.jpg", "Jenny Watwood.jpg", "Jessa Lynn Hinton.jpg", "Jessica Ashley.jpg", "Jessica Wall.jpg", "Jordan Emanuel.webp", "Jordy Murray.jpg", "Josie Canseco.jpg", "Joy Corrigan.jpg", "Karina Marie.jpg", "Kassie Lyn Logsdon.jpg", "Katie Vernola.jpg", "Kayla Garvin.jpg", "Kayla Rae Reid.webp", "Kaylia Cassandra.webp", "Kayslee Collins.webp", "Kelly Gale.png", "Kennedy Summers.jpg", "Khrystyana.jpg", "Kirby Griffin.jpg", "Kristen Nicole.jpeg", "Kristy Garett.jpg", "Kylie Johnson.jpg", "Kyra Milan.jpg", "Lada Kravchenko.jpg", "Leola Bell.jpg", "Lisa Seiffert.jpg", "Liza Kei.png", "Lorena Medina.jpg", "Maggie May.jpg", "Marsha Elle.jpg", "Megan Moore.jpg", "Megan Samperi.jpg", "Mei-Ling Lam.jpg", "Miki Hamano.jpg", "Milan Dixon.jpg", "Monica Sims.jpg", "Nereyda Bird.jpg", "Nikki Leigh.jpg", "Nina Daniele.jpg", "Olga de Mar.jpg", "Olivia Paige.jpg", "Pamela Horton.jpg", "Priscilla Huggins.jpg", "Rachel Harris.jpg", "Rainy Day Jordan.jpg", "Raquel Pomplun.jpg", "Riley Ticotin.jpg", "Roos van Montfort.jpg", "Roxanna June.jpg", "Sasha Bonilova.jpg", "Savannah Smith.jpeg", "Shanice Jordyn.jpg", "Shanna McLaughlin.jpg", "Shauna Sexton.jpg", "Shawn Dillon.jpeg", "Shelby Chesnes.jpg", "Shelby Rose.jpg", "Shelby Rose.webp", "Shera Bechard.jpg", "Sophie O’Neil.jpg", "Stephanie Branton.jpg", "Tanerélle.jpg", "Teela LaRoux.jpg", "Tiffany Toth.jpg", "Val Keil.jpeg", "Valeria Lakhina.jpg", "Vendela Lindblom.jpg", "Yoli Lara.jpg", "Megan Denise Fox.jpg", "Laura Escobar Bonnett.jpg", "Luis Eduardo Gallego García.gif", "Dios Jesucristo.jpg", "Aura María Cardona Demasiado.jpg", "Juan José Martínez Vidal.jpg", "Walter White.jpg"]; 

    while(Used.length != Urls.length){ 
        randmIntgr= parseInt(Math.random() * Urls.length );

        while(Used.indexOf(randmIntgr) != -1){ 
            randmIntgr= parseInt(Math.random() * Urls.length ); 
        }

        $("#resizeBottom ul")[0].innerHTML= $("#resizeBottom ul")[0].innerHTML + '<li class="button offline"><img src="/resources/images/chat/' + Urls[randmIntgr] + '" alt=""><p>' + Urls[randmIntgr].slice(0, Urls[randmIntgr].indexOf(".")) + '</p><span ></span></li>'
        Used[Used.length]= randmIntgr
    }

    Number= 7 + parseInt(Math.random() * 78);  
                                          
    for(eForensics in document.querySelector("#resizeBottom ul").children){ 
        if(Number > 0){ 
            $($("#resizeBottom ul").children()[eForensics]).removeClass("offline"); 
            $($("#resizeBottom ul").children()[eForensics]).addClass("connected"); 
            Number--; 
        } 
    } 
    $(".revelar").on("click", function(){ 
        if($(this).text()[0] != "O"){ 
            $(this).parent().css({"height": "auto"}); 
            $(this)[0].tx= $(this).text(); 
            $(this).text("Ocultar de nuevo."); 
            $(this).addClass("activado"); 
        }else{ 
            $(this).parent().css({"height": "0"}); 
            $(this).text($(this)[0].tx); 
            $(this).removeClass("activado"); 
        } 
    })
    VIds= []; 
    for(e= 0; e < $("video").length; e++){
        VIds[VIds.length]= videojs($("video")[e].id); 

        videojs($("video")[e].id).on("pause", function(i){ 
            a= i
            let vId= VIds.length - 1
            $(videojs(i.target.parentElement.id).L.parentElement).siblings().filter(".Playuse").removeClass("playing"); 
        });
        
        videojs($("video")[e].id).on("play", function(i){ 
            //console.log(i)
            let vId= VIds.length - 1
            $(videojs(i.target.parentElement.id).L.parentElement).siblings().filter(".Playuse").addClass("playing"); 
        });}
    $(".Playuse").click(function(i){ 
        $(i.target).parent().find("video")[0].play(); 
        $(i.target).addClass("playing"); 
    }); 

    if(!!$("#example_video_1")[0]){
        videojs("example_video_1").on("pause", function(){ 
            $(videojs("example_video_1").L.parentElement).siblings().filter(".Playuse").removeClass("playing"); 
        });
        videojs("example_video_1").on("play", function(){ 
            $(videojs("example_video_1").L.parentElement).siblings().filter(".Playuse").addClass("playing"); 
        });
    }
    if(!!$("#theater_video")[0]){
        videojs("theater_video").on("pause", function(){ 
            $(videojs("theater_video").L.parentElement).siblings().filter(".Playuse").removeClass("playing"); 
        });
        videojs("theater_video").on("play", function(){ 
            $(videojs("theater_video").L.parentElement).siblings().filter(".Playuse").addClass("playing"); 
        });
    }
    $("#theater").on("click", function(i){$(i.target).is("#theater")? closeModal(): 1; }); 
    $("html").click(function( e ) {
        $(".wrapper").removeClass("visible")
        $("#right-menu .index-arrow").removeClass("open");
        $("#profileSettings").removeClass("open");


        if ($("#profileSettings").hasClass("open")) {
            if($("#profileSettings").hasClass("openedStore")){
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
    }
        else{
            if($("#profileSettings").hasClass("openedStore")){

            $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        }

      


e.stopPropagation() 


});

$('#profileSettings').click(function(i){
    i.stopPropagation()
   
}); 
$(document).scroll(function(iy){ 
(ok)?(function(){ 
for(i= 0; i <= $(".story").length - 1; i++){ 
($(window).height() / 2 > $(".story")[i].getBoundingClientRect().y && $(window).height() / 2 < $(".story")[i].getBoundingClientRect().y + parseInt($($(".story")[i]).css("height").slice(0, -2)))? (function(){ 
    current = $(".story.current"); 
    current.removeClass("current"); 
    $($(".story")[i]).addClass("current");
    current = $($(".story")[i]); 
    $($(".story")[i]).attr("tabindex", 0); 
    $(".story")[i].focus(); 
    })(): 132315
}
})(): 13124; 
}) 
});

var c = 0
var $this
$(window).on("load", function () {
    responsive();
    $("#chat ul li").on("click",function(){
        if($(this).attr('class').split(' ')[2] == null){
            $(this).addClass( c.toString() );
            newChat($(this), c);
            c++
        }else{
            $dat =$(".chats .chat."+$(this).attr('class').split(' ')[2])
            if(! $dat.hasClass("open")){
                prependClass($dat,"open");  
            }
            $(".chats .chat."+$(this).attr('class').split(' ')[2]+" .newMessage textarea").focus();
        }
    }


        )

  
    $("#chats .chats ").on("mouseover mouseout", ".chatTitle", function() {
        $( this ).find(".close").toggleClass( "visible" );
      });
    $( ".chatTitle .close" ).on("click",
      function() {
        destroyChat($(this));
      }
    );
    $("#chats .chats ").on("click", ".chatTitle", function() {
         $( this ).closest(".chat").toggleClass("open");
       $( this ).parent().find($(".newMessage textarea")).focus()

      });
    $("#chats .chats ").on("click", ".chatTitle .close", function() {
         destroyChat($( this ))
      });
    $(".story").on("click", function () {
        $(".current").removeClass("current");
        $(this).addClass("current")
    })
    $("li").prop("title", function () {
        return $(this).find("p").text();
    });

    $('.knob').trigger(
        'configure', {
            "fgColor": "#2ecc71"
        }
    );

    $(".star").on("click", function () {
        $(this).toggleClass("true"); 
        badGuy(); 
    });
    $(".bookmark").on("click", function () {
        $(this).toggleClass("true"); 
        badGuy(); 
    });

    $("#dots").on("click", function () {
        $("#Store").toggleClass("open");
        $("#index-trigger").children().toggleClass("openedStore");
        $("#right-menu #dots").children().toggleClass("openedStore");
        $("#right-menu").children().toggleClass("openedStore");
        $("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
        $("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
        
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
        
        if ($("#Store").hasClass("open")) {
            $("header").addClass("open");
           
                 $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                
            
            })
        } else {
           $("header").removeClass("open");
           $('.knob').trigger(
                   'configure', {
                       "fgColor": "#2ecc71"
                   }
               );
           }
          
               
            
        });

    $(".story .pic").on("click", function () {
        openModal($(this));
        responsive(); 
                $('#target').tooltip()

    });
    $(".story .video .Enlarge").on("click", function () {
        openVideoModal($(this));

    });
    $(".story .options .Enlarge").on("click", function () {
        openOtherModal($(this));
    });
    $("#close").on("click", function () {

        closeModal()
    });

    $("#wrapper").on("click", function () {
        closeModal()
    });
   
document.onkeydown = function (evt) {
        (!!ar || $(".current").is(".mult_img"))? (function(){ 
        switch(evt.keyCode){
            case 37: 
                ar? th= ar: th= $(".current"); 
                if($("#theater").css("display") == "none"){ 
                    !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft - $(th.find(".carr")).width()}, 400, function(){th= $(this).closest(".story"); lk= th.find(".carr .pic")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].src;th.find(".options a").attr("href", th.find(".options a").attr("href").slice(0, th.find(".options a").attr("href").lastIndexOf("/")) + lk.slice(lk.lastIndexOf("/"), lk.lastIndexOf("."))); }): 672; 
                }else{ 
                     th.find(".carr")[0].scrollLeft= th.find(".carr")[0].scrollLeft - $(th.find(".carr")).width(); 
                     $("#theater").find("#bigPic")[0].src= $(th.find(".carr")).find(".pic")[th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width()].src; 
                    source= $(th.find(".carr")).find(".pic")[th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width()].src; 
                    history.pushState({page: 1}, "", "/" + th.find(".username").children()[0].href.slice(th.find(".username").children()[0].href.lastIndexOf("/") + 1) + "/img/" + un_tn(source).slice(un_tn(source).lastIndexOf("/") + 1, -4)); 
                    th= $('.current'); lk= th.find(".carr .pic")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].src;th.find(".options a").attr("href", th.find(".options a").attr("href").slice(0, th.find(".options a").attr("href").lastIndexOf("/")) + lk.slice(lk.lastIndexOf("/"), lk.lastIndexOf("."))); 
                } 
                break; 
            case 39: 
                ar? th= ar: th= $(".current"); 
                if($("#theater").css("display") == "none"){ 
                    !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft + $(th.find(".carr")).width()}, 400, function(){th= $(this).closest(".story"); lk= th.find(".carr .pic")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].src;th.find(".options a").attr("href", th.find(".options a").attr("href").slice(0, th.find(".options a").attr("href").lastIndexOf("/")) + lk.slice(lk.lastIndexOf("/"), lk.lastIndexOf("."))); }): 672; 
                }else{ 
                    th.find(".carr")[0].scrollLeft= th.find(".carr")[0].scrollLeft + $(th.find(".carr")).width(); 
                    $("#theater").find("#bigPic")[0].src= $(th.find(".carr")).find(".pic")[th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width()].src; 
                    source= $(th.find(".carr")).find(".pic")[th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width()].src; 
                    history.pushState({page: 1}, "", "/" + th.find(".username").children()[0].href.slice(th.find(".username").children()[0].href.lastIndexOf("/") + 1) + "/img/" + un_tn(source).slice(un_tn(source).lastIndexOf("/") + 1, -4)); 
                    th= $('.current'); lk= th.find(".carr .pic")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].src;th.find(".options a").attr("href", th.find(".options a").attr("href").slice(0, th.find(".options a").attr("href").lastIndexOf("/")) + lk.slice(lk.lastIndexOf("/"), lk.lastIndexOf("."))); 

                } 
                break; 
            }
        })(): 672; 
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            if($("#theater").css("display")== "none"){
             destroyChat($(document.activeElement))
        }else{
                        closeModal();

        }
            }
    };
   
     $(".chat").on("click", function(){})

        if ($("#profileSettings").hasClass("open") && $("#Store").hasClass("open")) {
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
$("#chats .chats ").on("click", ".chat", function(ev) {
        if(getSelectionText()  == ""){
        $(this).find("textarea").focus();
}
});
    $("#profileTrigger").on("click", function (e) {
        $(".wrapper").toggleClass("visible")
        $("#right-menu .index-arrow").toggleClass("open");
        $("#profileSettings").toggleClass("open");


        if ($("#profileSettings").hasClass("open")) {
            if($("#profileSettings").hasClass("openedStore")){
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
    }
        else{
            if($("#profileSettings").hasClass("openedStore")){

            $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        }

      


e.stopPropagation() 




    });
$("#chats .chats").on("keypress", ".chat .chatBox .newMessage textarea", function (ev) {
    sizeMessages($(this));
    if(ev.keyCode == 13 &&  $(this).val() != 0 && !ev.shiftKey){
      ev.preventDefault();
      var content = this.value;                
       $(this).closest(".chat").find(".messages").append("<p class='sent'>" + content + "</p>")
       $(this).val("")
       scrollBottom($(this).closest(".chat").find(".chatBox .messages"))
  }
 })
$("#chats .chats").on("keyup", ".chat .chatBox .newMessage textarea", function (ev) {
    sizeMessages($(this));
 
 })
$("#chats .chats").on("keydown", ".chat .chatBox .newMessage textarea", function (ev) {
    sizeMessages($(this));
 
 })
});

$(window).on("resize", function(){
    responsive();
})
function responsive() {
    $("#otherContainments").is(".visible")? $("#otherContainments > div").height() < $("#otherContainments > div")[0].scrollHeight? $("#otherContainments").addClass("overflowing"): $("#otherContainments").removeClass("overflowing"): 1; 

    $("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
        $("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
        $("#sidebar #chat").height(($(window).height() - $("#sidebar #search").outerHeight() - 46));
        $("#resizeBottom").resizable("option", "maxHeight", ($(window).height() - $("#sidebar #search").outerHeight() - 51));
        if ($("#resizeBottom").height() > ($(window).height() - $("#sidebar #search").outerHeight() - 51)) {
            $("#resizeBottom").css({
                "height": "50%"
            })
        }

        if (parseInt($(window).width() - $("#sidebar").outerWidth()) <= 600) {
            $("#feed .story").css({
                "padding": "10px 0"
               
            })
            $("#feed .story .info").css({
                "text-align": "center"
            })

        } else {
            $("#feed .story").css({
                "padding": "10px"
            })
            $("#feed .story .info").css({
                "text-align": "left"
            })
        }
        $("#chats .chats").width($(window).width() - $("#sidebar").outerWidth() -10);
        $("#sidebar #container #resizeTop").height($("#sidebar").height() - $("#sidebar #container #resizeBottom").height() - 36);
    $("#options ul").width($("#content").width() - 243.5); 
 }

 function newChat(a, b){
   
        $(".chats").prepend("<div class='chat open "+b.toString()+"'><div class='chatTitle button'><p class='user'>"+ a.find("p").text() +"</p><span class='close'></span></div><div class='chatBox'><div class='messages'></div><div class='newMessage'><textarea rows='1'/><div class='emoticon'></div></div></div>");
        $(".chats .chat:first-child .newMessage textarea").focus();
        $(".chats .chat:first-child .newMessage textarea").on('input', function() { 
            $(this).height(""); 
            !!$(this).val()? $(this).height($(this).prop('scrollHeight') - (parseInt($(this).css("padding-top").slice(0, -2)) + parseInt($(this).css("padding-bottom").slice(0, -2) + parseInt($(this).css("border-top").slice(0, -2)) + parseInt($(this).css("border-bottom").slice(0, -2))))): 1; 
        }); 

}
function destroyChat(a){
    var i = a.closest(".chat").hasClass("open") ? a.closest(".chat").attr('class').split(' ')[2] : a.closest(".chat").attr('class').split(' ')[1]
    $("#chat ul li."+i).removeClass(i)
    a.closest(".chat").remove();
    $(".chats .chat:first-child .newMessage textarea").focus();

}
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
function prependClass(sel, strClass) {
    var $el = jQuery(sel);

    /* prepend class */
    var classes = $el.attr('class');
    classes = strClass +' ' +classes;
    $el.attr('class', classes);
}
function getCaret(el) {
  if (el.selectionStart) {
     return el.selectionStart;
  } else if (document.selection) {
     el.focus();

   var r = document.selection.createRange();
   if (r == null) {
    return 0;
   }

    var re = el.createTextRange(),
    rc = re.duplicate();
    re.moveToBookmark(r.getBookmark());
    rc.setEndPoint('EndToStart', re);

    return rc.text.length;
  }  
  return 0;
}
function sizeMessages(a){
    CBH= a.closest(".chat").find(".chatBox").height()
    NMH = a.closest(".chat").find(".chatBox .newMessage" ).outerHeight()
    a.closest(".chat").find(".chatBox .messages").height(CBH - NMH - 8);
    a.closest(".chat").find(".chatBox .messages").css({bottom: NMH})
}
function scrollBottom(d){
    d.scrollTop(d.prop("scrollHeight"));
}
function un_tn(u){ 
    return u.slice(0, u.indexOf("_tn")) + u.slice(u.indexOf("_tn") + 3); 
} 
wD= function(thi, b){ 
    if(typeof b == "undefined"){ 
        if(!thi.parent().next(".newComment").find("textarea").length){ 
            $(".newComment").not(".comentarios > .newComment").remove(); 
                                                                         
            thi.parent().after('<div class="newComment"><textarea rows="1"></textarea></div>'); 
                                                                                                           
            $(thi.parent().next(".newComment").find("textarea")).on('input', function(){ 
                $(this).height(""); 
                                    
                !!$(this).val()? $(this).height($(this).prop('scrollHeight') - (parseInt($(this).css("padding-top").slice(0, -2)) + parseInt($(this).css("padding-bottom").slice(0, -2) + parseInt($(this).css("border-top").slice(0, -2)) + parseInt($(this).css("border-bottom").slice(0, -2))))): 1; 
                            
                C= $(this); 
                            
                $("#theater .Comentarios").scrollTop($($("textarea")[0]).parent()[0].offsetTop + $($("textarea")[0]).parent().outerHeight() - $("#theater .Comentarios").height() - (66 + $("#theater .info").height() - 38)); 
            }); 
                
            $(thi.parent().next(".newComment").find("textarea")).on('keydown', function(i){ 
                abc= $(this); 

                (!i.shiftKey && i.keyCode == 13)? (function(){!abc.parent().next().is(".respuestas")? (function(){ll= $($("textarea")[0]).parent().prev(); abc.parent()[0].outerHTML= "<div class='respuestas'><div class='comentario'>" + localStorage.getItem("knob") + '"' +  localStorage.getItem("tooltip") + '"' + localStorage.getItem("user") + abc.val().replaceAll("\n", "<br>") + "</span><span class='Responder'></span></div><span class='Respuestas'><span class='Responder'></span></span></div>"; ll.next().find(".Respuestas .Responder")[0].addEventListener("contextmenu", function(e){e.preventDefault(); wwd(this); }); ll.next().find(".comentario").on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth = elx.outerWidth( true ),circleHeight  = elx.outerHeight( true ),circleLeft    = elx.offset().left,circleTop     = elx.offset().top,circlePos     = {x     : circleLeft + circleWidth / 2,y     : circleTop + circleHeight / 2,radius: circleWidth / 2};distance    = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); $(ll.next().find(".Respuestas .Responder")).on("click", function(){wD($(this), 1)}); $(ll.next().find(".comentario .Responder")).on("click", function(){wD($(this))}); badGuy(); })(): (function(){abc.parent().next().children().filter(".Respuestas").find(".Responder").remove(); abc.parent().next().append('<span class="Respuestas"><span class="Responder"></span></span>'); $($(abc.parent().next().children()[abc.parent().next().children().length - 1]).find(".Responder"))[0].addEventListener("contextmenu", function(e){e.preventDefault(); wwd(this); }); $($(abc.parent().next().children()[abc.parent().next().children().length - 1]).find(".Responder")).on("click", function(){wD($(this), 1)}); $(".Respuestas").each(function(){!$(this).html()? $(this).remove(): 1;}); $(abc.parent().next().children()[abc.parent().next().children().length - 1]).before("<div class='comentario'>" + localStorage.getItem("knob") + '"' +  localStorage.getItem("tooltip") + '"' + localStorage.getItem("user") + abc.val().replaceAll("\n", "<br>") + "</span><span class='Responder'></span></div>"); $($(abc.parent().next().children()[abc.parent().next().children().length - 2]).find(".Responder")).on("click", function(){wD($(this))}); $($(abc.parent().next().children()[abc.parent().next().children().length - 2])).on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth = elx.outerWidth( true ),circleHeight  = elx.outerHeight( true ),circleLeft    = elx.offset().left,circleTop     = elx.offset().top,circlePos     = {x     : circleLeft + circleWidth / 2,y     : circleTop + circleHeight / 2,radius: circleWidth / 2};distance    = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); abc.parent().remove(); badGuy(); })()})(): 1; 

                $(".knob").knob(); 

                tooltipComentarios(); 
            }); 

            aa= thi; 
                         
            $("#theater .Comentarios").scrollTop($($("textarea")[0]).parent()[0].offsetTop + $($("textarea")[0]).parent().outerHeight() - $("#theater .Comentarios").height() - (66 + $("#theater .info").height() - 38)); 
                                                                                          
            $($(aa).parent().next(".newComment").find("textarea")).focus(); 
        }else{ 
            $(".newComment").not(".comentarios > .newComment").remove(); 
        } 
    }else{ 
        if(!thi.parent().next(".newComment").find("textarea").length){ 
            $(".newComment").not(".comentarios > .newComment").remove(); 
                                                                         
            thi.parent().after('<div class="newComment"><textarea rows="1"></textarea></div>'); 
                                                                                                           
            $(thi.parent().next(".newComment").find("textarea")).on('input', function(){ 
                $(this).height(""); 
                                    
                !!$(this).val()? $(this).height($(this).prop('scrollHeight') - (parseInt($(this).css("padding-top").slice(0, -2)) + parseInt($(this).css("padding-bottom").slice(0, -2) + parseInt($(this).css("border-top").slice(0, -2)) + parseInt($(this).css("border-bottom").slice(0, -2))))): 1; 
                            
                C= $(this); 
                            
                $("#theater .Comentarios").scrollTop($($("textarea")[0]).parent()[0].offsetTop + $($("textarea")[0]).parent().outerHeight() - $("#theater .Comentarios").height() - (66 + $("#theater .info").height() - 38)); 
            }); 
                
            $(thi.parent().next(".newComment").find("textarea")).on('keydown', function(i){ 
                abc= $(this); 

                (!i.shiftKey && i.keyCode == 13)? (function(){abc.parent().parent().children().filter(".Respuestas").find(".Responder").remove(); abc.parent().parent().append('<span class="Respuestas"><span class="Responder"></span></span>'); $(abc.parent().parent().children()[abc.parent().parent().children().length - 1]).children().filter(".Respuestas .Responder")[0].addEventListener("contextmenu", function(e){e.preventDefault(); wwd(this); }); $($(abc.parent().parent().children()[abc.parent().parent().children().length - 1]).find(".Responder")).on("click", function(){wD($(this), 1)}); $(".Respuestas").each(function(){!$(this).html()? $(this).remove(): 1;}); ll= $($("textarea")[0]).parent().prev(); abc.parent()[0].outerHTML= "<div class='comentario'>" + localStorage.getItem("knob") + '"' +  localStorage.getItem("tooltip") + '"' + localStorage.getItem("user") + abc.val().replaceAll("\n", "<br>") + "</span><span class='Responder'></span></div>"; ll.next().on("mousemove", function(event){elx= $($(this).children()[0]); circleWidth = elx.outerWidth( true ),circleHeight  = elx.outerHeight( true ),circleLeft    = elx.offset().left,circleTop     = elx.offset().top,circlePos     = {x     : circleLeft + circleWidth / 2,y     : circleTop + circleHeight / 2,radius: circleWidth / 2};distance    = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) );if(distance <= circlePos.radius){$($(this).children()[0]).css({"pointer-events": "all"});$($(this).children()[0]).css({"pointer-events": "all"});}else{$($(this).children()[0]).css({"pointer-events": "none"});$($(this).children()[0]).css({"pointer-events": "none"});}}); $(ll.next().find(".Responder")).on("click", function(){wD($(this))}); badGuy(); })(): 1; 

                $(".knob").knob(); 

                tooltipComentarios(); 
            }); 

            aa= thi; 
                         
            $("#theater .Comentarios").scrollTop($($("textarea")[0]).parent()[0].offsetTop + $($("textarea")[0]).parent().outerHeight() - $("#theater .Comentarios").height() - (66 + $("#theater .info").height() - 38)); 
                                                                                          
            $($(aa).parent().next(".newComment").find("textarea")).focus(); 
        }else{ 
            $(".newComment").not(".comentarios > .newComment").remove(); 
        } 
    } 
} 
wd= function(Tt, l){ 
    $(l.target).is(".Respuestas")? (function(){ 
        ///*console.log(l.target); */ 

        for(a= 1; a<= 3; a++){ 
            $(Tt.parent().children().filter(".comentario.hidden")[0]).next().is(".respuestas.hidden")? $(Tt.parent().children().filter(".comentario.hidden")[0]).next().removeClass("hidden"): 1; 
            $(Tt.parent().children().filter(".comentario.hidden")[0]).removeClass("hidden"); 
        } 
    
        !!Tt.parent().children().filter(".comentario.hidden").length? Tt.html((!$(Tt).next().length? '<span class="Responder"></span>': '') + "Más respuestas (" + Tt.parent().children().filter(".comentario.hidden").length + ")"): !$(Tt).next().length? Tt.html('<span class="Responder"></span>'): Tt.remove(); 

        !!Tt.find(".Responder").length? Tt.find(".Responder")[0].addEventListener("contextmenu", function(e){e.preventDefault(); wwd(this); }): 1; 
        Tt.find(".Responder").on("click",function(){wD($(this), 1)}) 
    })(): 1; 
}
wwd= function(t, tr){ 
    $(".respuestas .newComment").remove(); 

    $(t.parentElement.parentElement).children().each(function(){ 
        $(this).index() != $(this).parent().children().length - 1? $(this).addClass("hidden"): 1; 
    }); 
        
    typeof tr === "undefined"? $(t).closest(".respuestas").find(".Respuestas .Responder").each(function(){wwd($(this)[0], true)}): 1; 
                                                                
    U= $(t).parent().parent().children().filter(".Respuestas"); 
                                                                
    (U.length == 2)? (function(){$(U[1]).html("<span class='Responder'></span>Respuestas (" + $(U[1]).parent().children().filter(".comentario").length + ")"); $(U[1]).click(function(l){wd($(this), l)}); $($(U[1]).find(".Responder")).on("click", function(){wD($(this), 1)}); U[0].remove()})(): (function(){U.html("<span class='Responder'></span>Respuestas (" + U.parent().children().filter(".comentario").length + ")"); U.click(function(l){wd($(this), l)}); $(U.find(".Responder")).on("click", function(){wD($(this), 1)}); })(); 
} 
bGComments= function(arg){ 
    ($("#theater").css("display") == "block" && (typeof arg == "undefined"))? (function(){ 
        $("body").prepend("<badguy></badguy>"); 
        $("badguy").html($("#theater .Comentarios").html()); 
        $("badguy .Comentario .media > div").prop('outerHTML', function(){return $(this).find("audio").prop("outerHTML")}); 
        $("badguy").find(".Respuestas .Responder").each(function(){wwd($(this)[0], 1)}); 
        bG= $("badguy")[0].innerHTML; 
        $("badguy").remove(); 
    })(): (function(){bG= (typeof arg == "undefined")? $(".current .Comentarios")[0].innerHTML: $(arg).find(".Comentarios")[0].innerHTML; })(); 
    return bG; 
}
/*k100= function(){ 
    bb= this.responseURL; 
    $(".story").each(function(){ 
        if((!!Antheater.length? !!Antheater.find(".carr").length? window.location.pathname.slice(0, window.location.pathname.lastIndexOf("/")) + $(Antheater).find(".carr").find("img")[0].src.slice($(Antheater).find(".carr").find("img")[0].src.lastIndexOf("/"), $(Antheater).find(".carr").find("img")[0].src.lastIndexOf(".")): window.location.pathname: $(this).is(".mult_img")? $(this).find(".options a").attr("href").slice(0, $(this).find(".options a").attr("href").lastIndexOf("/")) + $(this).find(".carr").find("img")[0].src.slice($(this).find(".carr").find("img")[0].src.lastIndexOf("/"), $(this).find(".carr").find("img")[0].src.lastIndexOf(".")): $(this).find(".options a").attr("href")) == bb.slice(bb.lastIndexOf("=") + 1, -5)){ 
            z= $(this); 
        }; 
    }); 
} */
badGuy= function(){ 
    iTS= (!!Antheater.length? !!Antheater.find(".carr").length? window.location.pathname.slice(0, window.location.pathname.lastIndexOf("/")) + $(Antheater).find(".carr").find("img")[0].src.slice($(Antheater).find(".carr").find("img")[0].src.lastIndexOf("/"), $(Antheater).find(".carr").find("img")[0].src.lastIndexOf(".")): window.location.pathname: $(".current").is(".mult_img")? $(".current").find(".options a").attr("href").slice(0, $(".current").find(".options a").attr("href").lastIndexOf("/")) + $(".current").find(".carr").find("img")[0].src.slice($(".current").find(".carr").find("img")[0].src.lastIndexOf("/"), $(".current").find(".carr").find("img")[0].src.lastIndexOf(".")): $(".current").find(".options a").attr("href")); 
    localStorage.setItem(iTS, JSON.stringify({B: ($("#theater").css("display") == "block"? $("#theater .options .bookmark").hasClass("true"): $(".current").find(".options .bookmark").hasClass("true"))? true: false, S: ($("#theater").css("display") == "block"? $("#theater .options .star").hasClass("true"): $(".current").find(".options .star").hasClass("true"))? true: false, C: bGComments(), hash: ((localStorage.getItem(iTS) != null && (typeof JSON.parse(localStorage.getItem(iTS)).hash != "undefined"))? JSON.parse(localStorage.getItem(iTS)).hash: hashes[iTS])})); 
}
  
purger= {}; 
            
purger.index= 8; 
                 
purger.purge= function( a ){ 
    if( ( localStorage.getItem( "safety_purge" ) === null || ( localStorage.getItem( "safety_purge" ) !== null && parseInt( localStorage.getItem( "safety_purge" ) ) != purger.index ) ) || ( typeof a != "undefined" && a == "bypass" ) ){ 
        for( ii in localStorage ){ 
            if( typeof localStorage[ii] != "function" && ii != "length" && ["safety_purge", "tooltip", "knob", "filesWidth", "user", "selected"].indexOf( ii ) == -1 ){ 
                ( function( a ){ var av= a; for( var v= 1; v <= 2; v++ )av= av.slice( av.indexOf("/") + 1 ); return av } )( ii ).indexOf( "raw" ) === 0? console.log( ii ): localStorage.removeItem( ii ); 
            } 
        } 
          
        localStorage.setItem("safety_purge", purger.index); 
                                
        console.log("Purged!"); 
    }; 
}; 
   
$(document).on('DOMMouseScroll mousewheel', '.Scrollable', function(ev) {
    var $this = $(this),
        scrollTop = this.scrollTop,
        scrollHeight = this.scrollHeight,
        height = $this.innerHeight(),
        delta = (ev.type == 'DOMMouseScroll' ?
            ev.originalEvent.detail * -40 :
            ev.originalEvent.wheelDelta),
        up = delta > 0;

    var prevent = function() {
        ev.stopPropagation();
        ev.preventDefault();
        ev.returnValue = false;
        return false;
    }

    if (!up && -delta > scrollHeight - height - scrollTop) {
        // Scrolling down, but this will take us past the bottom.
        $this.scrollTop(scrollHeight);
        return prevent();
    } else if (up && delta > scrollTop) {
        // Scrolling up, but this will take us past the top.
        $this.scrollTop(0);
        return prevent();
    }
});
function tooltip(){ 
    $('.title').tooltip({
        items: 'a.target',
        open: function(event, ui) {
            if (typeof(event.originalEvent) === 'undefined') {
                return false;
            }
            $(".knob").knob();

            ý= $(this); 

            $(".chatear").click(function() {
                u = $(this).parent().parent().find(".username").text();

                $("#chat").find("ul").find("li").each(function() {
                    $(this).find("p").text() === u ? $(this).click() : 1;
                });

                !!Antheater? (function(){closeModal(); $( ".ui-tooltip.ui-widget.ui-corner-all.ui-widget-content" ).remove(); })(): 1;
            })
            var $id = $(ui.tooltip).attr('id');

            $('div.ui-tooltip').not('#' + $id).remove();
        },
        close: function(event, ui) {
            ui.tooltip.hover(function() {
                    $(this).stop(true).fadeTo(400, 1);
                },
                function() {
                    $(this).fadeOut('400', function() {
                        $(this).remove();
                    });
                });
        }
    });
    $(".line").tooltip({
            track: true,
            position: {
                my: "center bottom-6",
                at: "center top"
            }
        });
    $('.username').tooltip({
        items: 'a.target',
        open: function(event, ui) {
            if (typeof(event.originalEvent) === 'undefined') {
                return false;
            }
            $(".knob").knob();

            ý= $(this); 

            $(".chatear").click(function() {
                u = $(this).parent().parent().find(".username").text();

                $("#chat").find("ul").find("li").each(function() {
                    $(this).find("p").text() === u ? $(this).click() : 1;
                });

                !!Antheater? (function(){closeModal(); $( ".ui-tooltip.ui-widget.ui-corner-all.ui-widget-content" ).remove(); })(): 1; 
            })
            var $id = $(ui.tooltip).attr('id');

            $('div.ui-tooltip').not('#' + $id).remove();
        },
        close: function(event, ui) {
            ui.tooltip.hover(function() {
                    $(this).stop(true).fadeTo(400, 1);
                },
                function() {
                    $(this).fadeOut('400', function() {
                        $(this).remove();
                    });
                });
        }
    });
}
$(function($) {
    $.widget("ui.tooltip", $.ui.tooltip, {
        options: {
            content: function() {
                return $(this).prop('title');
            }
        }
    });

    tooltip(); 

    $(".knob").knob();

    $(".Enlargetic").on("contextmenu", function(j){j.preventDefault(); ab= $(this).children().filter(".active"); $(this).children().not(".active").addClass("active"); ab.removeClass("active"); }); 
});
function tooltipComentarios(){ 
    $('.comentario').tooltip({ 
        items: 'img', 
        open: function(event, ui) 
        { 
            if (typeof(event.originalEvent) === 'undefined') {
                return false;
            }
            $(".knob").knob();

            ý= $(this); 

            $(".chatear").click(function() {
                u = $(this).parent().parent().find(".username").text();

                $("#chat").find("ul").find("li").each(function() {
                    $(this).find("p").text() === u ? $(this).click() : 1;
                });

                !!Antheater? (function(){closeModal(); $( ".ui-tooltip.ui-widget.ui-corner-all.ui-widget-content" ).remove(); })(): 1; 
            })
            var $id = $(ui.tooltip).attr('id');

            $('div.ui-tooltip').not('#' + $id).remove();
        }, 
        close: function(event, ui) 
        { 
            ui.tooltip.hover(function() 
            { 
                $(this).stop(true).fadeTo(400, 1);  
            }, 
            function() 
            { 
                $(this).fadeOut('400', function() 
                { 
                    $(this).remove(); 
                }); 
            }); 
        } 
    }); 
}