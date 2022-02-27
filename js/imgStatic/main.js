closeModal= function(){1}; 
                           
$(window).load(function(){ 
    setTimeout(
        function(){ 
            ttl= $("title").text(); 
    
            $("title").html(" &nbsp &nbsp&nbsp&nbsp" + ttl); 
    
            setTimeout(function(){$("title").html("⬤&nbsp&nbsp" + ttl); }, 100); 
    
            setTimeout(function(){$("title").html(" &nbsp &nbsp &nbsp " + ttl); }, 400); 
    
            setTimeout(function(){$("title").html("⬤&nbsp&nbsp" + ttl); }, 700); 
    
            setTimeout(function(){$("title").html(" &nbsp &nbsp &nbsp " + ttl); }, 1100); 
    
            setTimeout(function(){$("title").html("⬤&nbsp&nbsp" + ttl); }, 1400); 

            setTimeout(function(){$("title").html(ttl.slice(15, -5)); }, 1700); 
        } 
        , 593); 
}); 

document.addEventListener("keydown",function(evt){ 
    aaa= $("#theater"); 

    if(!!aaa.find(".carr").length){ 
	   switch(evt.keyCode){
            case 37: 
                !$(aaa.find(".carr")).is(":animated")? $(aaa.find(".carr")).animate({scrollLeft: aaa.find(".carr")[0].scrollLeft - $(aaa.find(".carr")).width()}, 400, function(){
            		  a$= $(aaa.find(".carr")).find(".pic")[Math.round(aaa.find(".carr")[0].scrollLeft / $(aaa.find(".carr")).width())].src; 
                	   a$= a$.slice(a$.lastIndexOf("/") + 1, a$.lastIndexOf("."));
                        history.pushState({page: 1}, "", "/" + username + "/img/" + a$); 
				  }): 672; 
                break; 
            case 39: 
                !$(aaa.find(".carr")).is(":animated")? $(aaa.find(".carr")).animate({scrollLeft: aaa.find(".carr")[0].scrollLeft + $(aaa.find(".carr")).width()}, 400, function(){
            		  a$= $(aaa.find(".carr")).find(".pic")[Math.round(aaa.find(".carr")[0].scrollLeft / $(aaa.find(".carr")).width())].src; 
                	   a$= a$.slice(a$.lastIndexOf("/") + 1, a$.lastIndexOf(".")); 
                        history.pushState({page: 1}, "", "/" + username + "/img/" + a$); 
				 }): 672; 
                break; 
        }
    } 
})

document.addEventListener("DOMContentLoaded", function(){
    aaa= $("#theater"); 
    
    (function(){ 
        var t= $("#theater")[0]; 

        cold= JSON.parse(localStorage.getItem(!!$(t).find(".carr").length? window.location.pathname.slice(0, window.location.pathname.lastIndexOf("/")) + $(t).find(".carr").find("img")[0].src.slice($(t).find(".carr").find("img")[0].src.lastIndexOf("/"), $(t).find(".carr").find("img")[0].src.lastIndexOf(".")): window.location.pathname)); 
                             
        !!cold? (function(){ 
            cold.B? $(t).find(".options .bookmark").addClass("true"): $(t).find(".options .bookmark").removeClass("true"); 
            cold.S? $(t).find(".options .star").addClass("true"): $(t).find(".options .star").removeClass("true"); 
            $(t).find(".Comentarios")[0].innerHTML= cold.C; 
        })(): 1; 
    })(); 

    tooltipComentarios(); 

    $(".knob").knob(); 

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

    $(".comentario .Responder").on("click", function(){wD($(this))}); 

    $(".Respuestas .Responder").on("click", function(){wD($(this), 1)}); 



    $(".nav_arrow.left .arrow").click(function(){ 
        (!$(aaa.find(".carr")).is(":animated") && !$(this).parent().is(".disabled"))? $(aaa.find(".carr")).animate({scrollLeft: aaa.find(".carr")[0].scrollLeft - $(aaa.find(".carr")).width()}, 400, function(){
                    a$= $(aaa.find(".carr")).find(".pic")[Math.round(aaa.find(".carr")[0].scrollLeft / $(aaa.find(".carr")).width())].src; 
                    a$= a$.slice(a$.lastIndexOf("/") + 1, a$.lastIndexOf("."));
                    history.pushState({page: 1}, "", "/" + username + "/img/" + a$); 
                  }): 672; 
    }); 
    $(".nav_arrow.right .arrow").click(function(){ 
        (!$(aaa.find(".carr")).is(":animated") && !$(this).parent().is(".disabled"))? $(aaa.find(".carr")).animate({scrollLeft: aaa.find(".carr")[0].scrollLeft + $(aaa.find(".carr")).width()}, 400, function(){
                    a$= $(aaa.find(".carr")).find(".pic")[Math.round(aaa.find(".carr")[0].scrollLeft / $(aaa.find(".carr")).width())].src; 
                    a$= a$.slice(a$.lastIndexOf("/") + 1, a$.lastIndexOf(".")); 
                    history.pushState({page: 1}, "", "/" + username + "/img/" + a$); 
                 }): 672; 
    })
    $(".carr").on("scroll", function(){ 
        rf= $(this)
        Math.round($(this)[0].scrollLeft / $(this).width()) == $(this).find(".pic").length - 1? (function(){rf.parent().find(".nav_arrow.right").addClass("disabled"); $("#theater").find(".nav_arrow.right").addClass("disabled")})(): (function(){rf.parent().find(".nav_arrow.right").removeClass("disabled"); $("#theater").find(".nav_arrow.right").removeClass("disabled")})(); 
        $(this)[0].scrollLeft == 0? (function(){rf.parent().find(".nav_arrow.left").addClass("disabled"); $("#theater").find(".nav_arrow.left").addClass("disabled");})(): (function(){rf.parent().find(".nav_arrow.left").removeClass("disabled"); $("#theater").find(".nav_arrow.left").removeClass("disabled")})(); 
    }) 
	$(".carr img").each(function(){ 
		$(this)[0].src.indexOf(window.location.pathname.slice(window.location.pathname.lastIndexOf("/") + 1)) != -1? $(".carr").scrollLeft($(".carr").width() * $(this).parent().index()) : 123
	}); 
    
    rf= $(".carr")
    if(!!rf.length){
        (Math.round($(rf)[0].scrollLeft / $(rf).width()) == $(rf).find(".pic").length - 1)? (function(){rf.parent().find(".nav_arrow.right").addClass("disabled"); $("#theater").find(".nav_arrow.right").addClass("disabled")})(): (function(){rf.parent().find(".nav_arrow.right").removeClass("disabled"); $("#theater").find(".nav_arrow.right").removeClass("disabled")})(); 
        ($(rf)[0].scrollLeft == 0)? (function(){rf.parent().find(".nav_arrow.left").addClass("disabled"); $("#theater").find(".nav_arrow.left").addClass("disabled");})(): (function(){rf.parent().find(".nav_arrow.left").removeClass("disabled"); $("#theater").find(".nav_arrow.left").removeClass("disabled")})(); 
    }
})

