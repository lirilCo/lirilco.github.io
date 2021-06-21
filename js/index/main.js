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
    "ı" 
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

por_siLaBas = function(í){ 
         
Text= "-" + í.toLowerCase() + "   "; 
word= ""; 
syl= ""; 
Widgets= true; 
Cinnamon= ""; 
Chocolate= ["!", "?", "'"]; 
Anti_joint= ["¡", "¿", "'"]; 
              
for(e in Text){ 
                
    constructor= function(u){ 
            u ? word= word + "<b>" + syl + "</b>" : word= word + syl; 
            syl= ""; 
            raged= false; 
    } 
    
    Widgets= true; 
    raged= false; 
                  
    if(Text[e] == " " || e == Text.length - 1){ 
        for(Text[e] == " " ? i= e : i= e; i--; Widgets === false){ 
            (Text[i] == " " || i == 0) ? Widgets= false : 1; 
            for(eForensics in Accents){ 
                Accents[eForensics].indexOf(Text[i]) >= 1 ? raged= true : 1; 
                Accents[eForensics].indexOf(Text[i]) >= 1 ? Text= Text.slice(0, i) + Accents[eForensics][0] + Text.slice(i + 1, Text.length - 1) : 1; 
            } 
            (Widgets && Anti_joint.indexOf(Text[i]) != -1)  ? raged= true : 1; 
            (Widgets && Anti_joint.indexOf(Text[i]) != -1 && Anti_joint.indexOf(Text[i]) != Anti_joint.length - 1)  ? constructor(raged) : 1; 
            (Widgets && Anti_joint.indexOf(Text[i]) != -1 && Anti_joint.indexOf(Text[i]) != Anti_joint.length - 1)  ? Widgets= false : 1; 
            (Widgets && Chocolate.indexOf(Text[i]) != -1)  ? raged= true : ((Widgets && Text[i] == "-") || i == 0) ? constructor(raged) : Widgets ? syl= Text[i] + syl : 1; 
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
      Anti_joint= ["¡", "¿", "'"]; /*Está hecho de arrugami y es un porro que soplas, thereof, anti_joint*/ 
      Chocolate= ["!", "?", "'"]; /*ElDelprincipio's decision*/ 
                                                                
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
                                    
        for(eForensics in Accents){ 
	      Accents[eForensics].indexOf(Mistery[e]) >= 1? Winter= "<b>" + Accents[eForensics][0] + "</b>": 1; 
	    } 
          
        if(Anti_joint.indexOf(Mistery[e-1]) != -1 || Chocolate.indexOf(Mistery[e+1]) != -1 && !Winter){ 
	      Winter= "<b>" + Mistery[e] + "</b>"; 
	    } 
		      
	    if(Anti_joint.indexOf(Mistery[e]) != -1 || Chocolate.indexOf(Mistery[e]) != -1){ 
	      Winter= ""; 
	    }else if(!Winter){ 
          Winter= Mistery[e]; 
        } 
          
	    (e == Tsunami - 1 && Summer)? Winter= Winter + Summer: 1; 
				                                              
        walkiwalki? (Cinnamon= Cinnamon + Winter): 1; 
                       
        Winter= false; 
      } 
    } 
  } 
    
  return Cinnamon; 
}; 

$(document).on("ready", function(){ 
    document.getElementsByClassName("buscar")[0].addEventListener("keydown", function(i){i.keyCode == 13? aNGEL(document.getElementsByClassName("buscar")[0].value): 1; }); 
    document.getElementsByTagName("input")[2].addEventListener("keydown", function(i){i.keyCode == 13? por_siLaBas(document.getElementsByTagName("input")[2].value): 1; }); 
    document.getElementsByTagName("input")[2].addEventListener("keydown", function(i){i.keyCode == 53? parse("header", 0): 1; }); 
    console.log('parse("header", 0);   '); 
    $('.chats').click(function(e){ 
        if(!((!!e.target.parentElement.getAttribute("class") && e.target.parentElement.getAttribute("class").indexOf("chat ") != -1) || (!!e.target.parentElement.parentElement.getAttribute("class") && e.target.parentElement.parentElement.getAttribute("class").indexOf("chat ") != -1) || (!!e.target.parentElement.parentElement.parentElement.getAttribute("class") && e.target.parentElement.parentElement.parentElement.getAttribute("class").indexOf("chat ") != -1))){ 
            $(this).hide(); 
    	    $(document.elementFromPoint(e.clientX, e.clientY)).trigger("click"); 
    	    $(this).show(); 
        } 
    }); 
}); 
                        
function openModal(a) {
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this = a.closest('.story')
    var source = a.attr('src');
    $('.theater #bigPic').attr('src', source);

    var user = a.closest('.story').find(".username").html();
    $('.theater .comments .info .username').html(user);

    var time = a.closest('.story').find(".time").html();
    $('.theater .comments .info .time').html(time);

    var title = a.closest('.story').find(".title").html();
    $('.theater .comments .title').html(title);

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
      $(".more").mCustomScrollbar({theme: 
        "minimal-dark", 
        autoExpandScrollbar: true,
        scrollInertia: 100});
      
        $("#theater").height($(window).height() - 40);

    $("#picContainer").width($("#bigPic").width());
    $("#theater .comments").height($("#theater").height() - 40);
    $("#theater .comments .more").height($("#theater .comments").height() - $("#theater .info").outerHeight(true) - $("#theater .comments .title").outerHeight(true) - $("#theater .comments .options").outerHeight(true));
    $("#theater").width("90%");
    responsive()
}

function closeModal() {
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
$(document).on("ready",function(e){

    $("html").click(function() {
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
});
$(document).keypress(function (e) {
if(!$("textarea").is(":focus") && !$("input").is(":focus")){
    if (e.keyCode == 108) {
        $(".current").find('.options .star').toggleClass("true");
    }
    if (e.keyCode == 98) {
        $(".current").find('.options .bookmark').toggleClass("true");
    }
    if (e.keyCode == 102) {
        openModal($(".current .pic"))
    }
    var forward;
    if (e.keyCode == 106) {
        forward = true;
    } else if (e.keyCode == 107) {
        forward = false;
    } else {
        return true;
    }


    if (!$(".story.current").length) {
        $(".story:first").addClass("current");
    }

    if ($(".story.current").length) {
        var current = $(".story.current");
        var next;
        if (forward) {
            next = current.next(".story")
        } else {
            next = current.prev(".story");
        }
        if (next.length) {
            current.removeClass("current");
            next.addClass("current");
        } else {
            loadMore();
        }
    }

    $("html, body").animate({
        scrollTop: $(".current").offset().top - 56
    }, 400);
    }
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
        $(this).toggleClass("true")
    });
    $(".bookmark").on("click", function () {
        $(this).toggleClass("true")
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
                $('#target').tooltip()

    });

    $("#close").on("click", function () {

        closeModal()
    });

    $("#wrapper").on("click", function () {
        closeModal()
    });
   
document.onkeydown = function (evt) {
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
      $("#picContainer").width($("#theater").width()- $(".comments").outerWidth())
    $("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
        $("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
     $("#picContainer").width($("#bigPic").width());

$("#theater .comments").height($("#theater").height() - 40);
    $("#theater .comments .more").height($("#theater .comments").height() - $("#theater .info").outerHeight(true) - $("#theater .comments .title").outerHeight(true) - $("#theater .comments .options").outerHeight(true));
    $("#theater").height($(window).height() - 40);
    
        $("#sidebar").height($(window).height() - 46);
        $("#sidebar #container").height(($(window).height() - $("#sidebar #search").outerHeight() - 46));
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
        $("#biography").width($(window).width() - $("#sidebar").outerWidth());
        $("#sidebar #container #resizeTop").height($("#sidebar").height() - $("#sidebar #container #resizeBottom").height() - 36);

 }

 function newChat(a, b){
   
        $(".chats").prepend("<div class='chat open "+b.toString()+"'><div class='chatTitle button'><p class='user'>"+ a.find("p").text() +"</p><span class='close'></span></div><div class='chatBox'><div class='messages'></div><div class='newMessage'><textarea rows='1'/><div class='emoticon'></div></div></div>");
        $(".chats .chat:first-child .newMessage textarea").focus();
        $('textarea').textareaAutoSize();

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
