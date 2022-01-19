closeModal= ""; 

document.addEventListener("keydown",function(evt){ 
    aaa= $("#theater"); 

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
})

document.addEventListener("DOMContentLoaded", function(){
    $(".carr").on("scroll", function(){ 
        rf= $(this)
        Math.round($(this)[0].scrollLeft / $(this).width()) == $(this).find(".pic").length - 1? (function(){rf.parent().find(".nav_arrow.right").addClass("disabled"); $("#theater").find(".nav_arrow.right").addClass("disabled")})(): (function(){rf.parent().find(".nav_arrow.right").removeClass("disabled"); $("#theater").find(".nav_arrow.right").removeClass("disabled")})(); 
        $(this)[0].scrollLeft == 0? (function(){rf.parent().find(".nav_arrow.left").addClass("disabled"); $("#theater").find(".nav_arrow.left").addClass("disabled");})(): (function(){rf.parent().find(".nav_arrow.left").removeClass("disabled"); $("#theater").find(".nav_arrow.left").removeClass("disabled")})(); 
    }) 
	$(".carr img").each(function(){ 
		$(this)[0].src.indexOf(window.location.pathname.slice(window.location.pathname.lastIndexOf("/") + 1)) != -1? $(".carr").scrollLeft($(".carr").width() * $(this).parent().index()) : 123
	})
})