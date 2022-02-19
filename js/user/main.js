function openProfilePicModal(a) {
    Antheater= a; 

    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 4 !important; }; "; 
    $("body")[0].style.overflow= "hidden"; 

    responsive(); 
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this = a.parent(); 
    var source = un_tn($(a.closest("#profilePic").children()[0]).attr('src'));
    $('.theater #bigPic').attr('src', source);

    history.pushState({page: 1}, "", "/" + username + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 

    var info = a.closest('.story').find(".info").html(); 
    $('.theater .comments .info').html(info); 

    var title = a.find(".hidden").find(".title").html();
    $('.theater .comments .title').html(title);
    if (a.find(".hidden").find(".options .bookmark").hasClass("true")) {
        $('.theater .comments .options .bookmark').addClass("true");
    } else {
        $('.theater .comments .options .bookmark').removeClass("true");
    }
    if (a.find(".hidden").find(".options .star").hasClass("true")) {
        $('.theater .comments .options .star').addClass("true");
    } else {
        $('.theater .comments .options .star').removeClass("true");
    }

    var more= !!a.find(".moreI").html()? a.find(".moreI").html(): "";
    $('.theater .comments .more').html(more);

    var pic = a.find(".hidden").find(".info img").attr('src');
    $('.theater .comments .info #pic').attr('src', pic);

    var ref = a.find(".hidden").find(".options ul a").attr('href');
    $('.theater .comments .options ul a').attr('href', ref);

    var comments = a.find(".Comentarios").html();
    $('.theater .comments .comentarios .Comentarios').html(comments);

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

    responsive(); 
} 
function openFotosModal(a) {
    Antheater= a.closest(".foto"); 

    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 4 !important; }; "; 
    $("body")[0].style.overflow= "hidden"; 
    responsive(); 
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this = a

    var info = a.closest('.story').find(".info").html(); 
    $('.theater .comments .info').html(info); 

    var title = a.closest(".foto").find(".title").html();
    $('.theater .comments .title').html(title);
    if (a.closest(".foto").find(".options .bookmark").hasClass("true")) {
        $('.theater .comments .options .bookmark').addClass("true");
    } else {
        $('.theater .comments .options .bookmark').removeClass("true");
    }
    if (a.closest(".foto").find(".options .star").hasClass("true")) {
        $('.theater .comments .options .star').addClass("true");
    } else {
        $('.theater .comments .options .star').removeClass("true");
    }
    var pic = a.closest(".foto").find(".info img").attr('src');
    $('.theater .comments .info #pic').attr('src', pic);

    var ref = a.closest(".foto").find(".options ul a").attr('href');
    $('.theater .comments .options ul a').attr('href', ref);

    var more= !!a.closest('.foto').find(".moreI").html()? a.closest('.foto').find(".moreI").html(): "";
    $('.theater .comments .more').html(more);

    var comments = a.closest('.foto').find(".Comentarios").html();
    $('.theater .comments .comentarios .Comentarios').html(comments);

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
    if(a.closest('.foto').is(".mult_img")){ 
        ar= $(a.closest('.foto')); 
        source= un_tn(ar.find(".carr .pic")[Math.round(ar.find(".carr")[0].scrollLeft / ar.find(".carr").width())].src); 
        $("#theater").find("#bigPic")[0].src= un_tn(ar.find(".carr .pic")[Math.round(ar.find(".carr")[0].scrollLeft / ar.find(".carr").width())].src); 
        $("#theater").append('<div class="nav_arrow left' + (ar.find(".nav_arrow.left").is(".disabled")? ' disabled': '') + '"><div class= "arrow"></div></div><div class="nav_arrow right' + (ar.find(".nav_arrow.right").is(".disabled")? ' disabled': '') + '"><div class= "arrow"></div></div>'); 
        $("#theater .nav_arrow.left .arrow").on("click", function(){
            !ar.find(".carr").is(":animated")? ar.find(".carr")[0].scrollLeft= ar.find(".carr")[0].scrollLeft - ar.find(".carr").width(): 672; 
            $("#theater").find("#bigPic")[0].src= un_tn(ar.find(".carr .pic")[Math.round(ar.find(".carr")[0].scrollLeft / ar.find(".carr").width())].src); 
            source= un_tn($("#theater").find("#bigPic")[0].src); 
            history.pushState({page: 1}, "", "/" + username + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
        }); 
        $("#theater .nav_arrow.right .arrow").on("click", function(){
            !ar.find(".carr").is(":animated")? ar.find(".carr")[0].scrollLeft= ar.find(".carr")[0].scrollLeft + ar.find(".carr").width(): 672; 
            $("#theater").find("#bigPic")[0].src= un_tn(ar.find(".carr .pic")[Math.round(ar.find(".carr")[0].scrollLeft / ar.find(".carr").width())].src); 
            source= un_tn($("#theater").find("#bigPic")[0].src); 
            history.pushState({page: 1}, "", "/" + username + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
        }); 
        $(".nav_arrow").on("click", function(i){$(i.target).is(".nav_arrow")? closeModal(): 1; }); 
        history.pushState({page: 1}, "", "/" + username + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
    }else{ 
        var source = un_tn($(a.closest(".foto").children()[0]).attr('src')); 
        $('.theater #bigPic').attr('src', source); 
        history.pushState({page: 1}, "", "/" + username + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
    } 
    responsive(); 
} 
function openModal(a) {
    Antheater= a.closest(".story"); 

    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 4 !important; }; "; 
    $("body")[0].style.overflow= "hidden"; 
    responsive(); 
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this = a.closest('.story')
    var source = a.attr('src');
    $('.theater #bigPic').attr('src', source);

    source= un_tn(source); 
                           
    history.pushState({page: 1}, "", "/" + (a.closest('.story').is(".repost")? $(a.closest('.story').find(".target")[1])[0].href.slice($(a.closest('.story').find(".target")[1])[0].href.lastIndexOf("/") + 1): username) + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 

    var info = a.closest('.story').find(".info").html(); 
    $('.theater .comments .info').html(info); 

    var title = a.closest('.story').find(".title").html();
    $('.theater .comments .title').html(title);

    var more= !!a.closest('.story').find(".moreI").html()? a.closest('.story').find(".moreI").html(): "";
    $('.theater .comments .more').html(more);

    var comments = a.closest('.story').find(".Comentarios").html();
    $('.theater .comments .comentarios .Comentarios').html(comments);

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

    $("#theater").find(".info").height() < $("#theater").find(".info").find("img").width()? $("#theater").find(".description").css({"padding-top": "58px"}): $("#theater").find(".description").css({"padding-top": "76px"}); 

    $("#theater").find(".info").height() < $("#theater").find(".info").find("img").width()? (function(){$("#theater").find(".comentarios").removeClass("noventaYDos"); $("#theater").find(".comentarios").addClass("setenta_y_cuatro")})(): (function(){$("#theater").find(".comentarios").removeClass("setenta_y_cuatro"); $("#theater").find(".comentarios").addClass("noventaYDos")})(); 

      $(".more").mCustomScrollbar({theme: 
        "minimal-dark", 
        autoExpandScrollbar: true,
        scrollInertia: 100});
      

    responsive()
    if(a.closest('.story').is(".mult_img")){ 
        ar= a.closest('.story'); 
        $("#theater").append('<div class="nav_arrow left' + (a.closest('.story').find(".nav_arrow.left").is(".disabled")? ' disabled': '') + '"><div class= "arrow"></div></div><div class="nav_arrow right' + (a.closest('.story').find(".nav_arrow.right").is(".disabled")? ' disabled': '') + '"><div class= "arrow"></div></div>'); 
        $("#theater .nav_arrow.left .arrow").on("click", function(){
            !a.closest('.story').find(".carr").is(":animated")? a.closest('.story').find(".carr")[0].scrollLeft= a.closest('.story').find(".carr")[0].scrollLeft - a.closest('.story').find(".carr").width(): 672; 
            $("#theater").find("#bigPic")[0].src= $(".current .carr .pic")[$(".current .carr")[0].scrollLeft / $(".current .carr").width()].src; 
            source= un_tn($("#theater").find("#bigPic")[0].src)
            history.pushState({page: 1}, "", "/" + (a.closest('.story').is(".repost")? $(a.closest('.story').find(".target")[1])[0].href.slice($(a.closest('.story').find(".target")[1])[0].href.lastIndexOf("/") + 1): username) + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
        }); 
        $("#theater .nav_arrow.right .arrow").on("click", function(){
            !a.closest('.story').find(".carr").is(":animated")? a.closest('.story').find(".carr")[0].scrollLeft= a.closest('.story').find(".carr")[0].scrollLeft + a.closest('.story').find(".carr").width(): 672; 
            $("#theater").find("#bigPic")[0].src= $(".current .carr .pic")[$(".current .carr")[0].scrollLeft / $(".current .carr").width()].src; 
            source= un_tn($("#theater").find("#bigPic")[0].src)
            history.pushState({page: 1}, "", "/" + (a.closest('.story').is(".repost")? $(a.closest('.story').find(".target")[1])[0].href.slice($(a.closest('.story').find(".target")[1])[0].href.lastIndexOf("/") + 1): username) + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
        }); 
        $(".nav_arrow").on("click", function(i){$(i.target).is(".nav_arrow")? closeModal(): 1; }); 
    }else if(a.closest('.story').is(".repost")){ 
        source= un_tn($("#theater").find("#bigPic")[0].src); 
        history.pushState({page: 1}, "", "/" + $(a.closest('.story').find(".target")[1])[0].href.slice($(a.closest('.story').find(".target")[1])[0].href.lastIndexOf("/") + 1) + "/img/" + un_tn(source).slice(un_tn(source).lastIndexOf("/") + 1, -4)); 
    } 

}
function openVideoModal(a){ 
    Antheater= a.closest(".story"); 

    th= a.closest(".story"); 

    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 4 !important; }; "; 
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
                           
    history.pushState({page: 1}, "", "/" + username + "/vid/" + source.slice(source.lastIndexOf("/") + 1, -4)); 

    var info = a.closest('.story').find(".info").html(); 
    $('.theater .comments .info').html(info); 

    var title = a.closest('.story').find(".title").html();
    $('.theater .comments .title').html(title);

    var more= !!a.closest('.story').find(".moreI").html()? a.closest('.story').find(".moreI").html(): "";
    $('.theater .comments .more').html(more);

    var comments = a.closest('.story').find(".Comentarios").html();
    $('.theater .comments .comentarios .Comentarios').html(comments);

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

    $("#theater").find(".info").height() < $("#theater").find(".info").find("img").width()? $("#theater").find(".description").css({"padding-top": "58px"}): $("#theater").find(".description").css({"padding-top": "76px"}); 

    $("#theater").find(".info").height() < $("#theater").find(".info").find("img").width()? (function(){$("#theater").find(".comentarios").removeClass("noventaYDos"); $("#theater").find(".comentarios").addClass("setenta_y_cuatro")})(): (function(){$("#theater").find(".comentarios").removeClass("setenta_y_cuatro"); $("#theater").find(".comentarios").addClass("noventaYDos")})(); 

      $(".more").mCustomScrollbar({theme: 
        "minimal-dark", 
        autoExpandScrollbar: true,
        scrollInertia: 100});
      

    responsive()
} 
function openOtherModal(a){ 
    Antheater= a.closest(".story"); 

    th= a.closest(".story"); 

    $(".zer")[0].innerHTML= ".ui-tooltip{z-index: 4 !important; }; "; 
    $("body")[0].style.overflow= "hidden"; 
    responsive(); 
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this = a.closest('.story')
    var source = a.closest('.story').find("video").attr('src');

    history.pushState({page: 1}, "", "/" + (a.closest('.story').is(".repost")? $(a.closest('.story').find(".target")[1])[0].href.slice($(a.closest('.story').find(".target")[1])[0].href.lastIndexOf("/") + 1): username) + "/pos" + a.parent().find("a.read").attr("href").slice(a.parent().find("a.read").attr("href").lastIndexOf("/"))); 

    var info = a.closest('.story').find(".info").html(); 
    $('.theater .comments .info').html(info); 

    var title = a.closest('.story').find(".title").html();
    $('.theater .comments .title').html(title);

    var more= !!a.closest('.story').find(".moreI").html()? a.closest('.story').find(".moreI").html(): "";
    $('.theater .comments .more').html(more);

    var comments = a.closest('.story').find(".Comentarios").html();
    $('.theater .comments .comentarios .Comentarios').html(comments);

    var containment = a.closest('.story').find(".title").next().prop("outerHTML");
    $('.theater #otherContainments > div').html(containment);

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
} 
ok= true; 
var Antheater; //Did We Literally Like Have To Create AntiMatter For The Theater..? /*Yes*/ 
can493ax= "<div class='comentario'><input class='knob button' data-width='28' data-height='28' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.18' readonly value='100'><img title=" + '"' + "<div class='tool'><input class='knob button' data-width='102' data-height='102' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.08' readonly value='100'><img src='/resources/images/L/OGnpwD3jys_tn.jpg'><div class='datos'><ul class='actions'><li class='chatear' title='Chatear'>C</li><li class='agregar' title='Agregar'>A</li><li class='juzgar' title='Juzgar'>J</li></ul><p class='username' title= 'Laura Escobar Bonnett'>Laura Escobar Bonnett</p><p class='rol'>Princesa <b style='color:#fff;'>+100</b></p></div></div>" + '"' + " src='/resources/images/L/OGnpwD3jys_tn.jpg'>&nbsp<a target= '_blank'  href='/L' >Laura Escobar Bonnett</a><span class='is'>: </span><span class='Comentario'>¡Yo más, Luis! 💜</span><span class='Respxxder'></span></div>"; 
asdknki4= "<div class='comentario'><input class='knob button' data-width='28' data-height='28' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.18' readonly value='100'><img title=" + '"' + "<div class='tool'><input class='knob button' data-width='102' data-height='102' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.08' readonly value='100'><img src='/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif'><div class='datos'><ul class='actions'><li class='chatear' title='Chatear'>C</li><li class='agregar' title='Agregar'>A</li><li class='juzgar' title='Juzgar'>J</li></ul><p class='username' title= 'Luis Eduardo Gallego García'>Luis Eduardo Gallego García</p><p class='rol'>CEO <b style='color:#fff;'>+100</b></p></div><div class='insignia' style='top: 9px;' title='Proyecto completado (aNGEL();)'></div><div class='insignia' style='top: 22px;'title='Proyecto completado (por_siLaBas();)'></div><div class='insignia' style='top: 14px;' title='Proyecto completado (dinosaurios)'> </div><div class='insignia' style='top: 39px;' title='EP (Planifique)'> </div> <div class='insignia' style='top: 43px;' title='Proyecto completado (Robot De Dedicatorias)'> </div></div>" + '"' + " src='/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif'>&nbsp<a target= '_blank'  href='/A.K.A._Dizzy' >Luis Eduardo Gallego García</a><span class='is'>: </span><span class='Comentario'>Yo más, bebé</span><span class='Respxxder'></span></div>"; 
H= asdknki4; 
function closeModal() { 
    $(".Comentario .media > div").prop('outerHTML', function(){return $(this).find("audio").prop("outerHTML")}); 
    
    $("#theater .Comentarios").find(".Respuestas .Responder").each(function(){wwd($(this)[0], true)}); 

    $("#theater .RespueNtas").parent().find(".comentario").remove(); 

    H= asdknki4; 

    $("#theater .RespueNtas").html('<span class="Responder"></span>Respuestas (∞)'); 

    Antheater.find(".Comentarios").html($("#theater .Comentarios").html()); 

    $("#theater #bigPic")[0].src= ""; 

    $("#theater video")[0].src= ""; 

    $("#theater #theater_video").removeClass("visible")

    $("#theater .Playuse").removeClass("visible")

    $("#theater #otherContainments").removeClass("visible")

    $("#theater #bigPic").removeClass("invisible")

    $("#theater #otherContainments > div").html("")

    ar= null; 
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
    
    Antheater= false; 

    history.pushState({page: 1}, "", "/" + username); 
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
                            
                $("#theater .Comentarios").scrollTop($($("textarea")[0]).parent()[0].offsetTop + $($("textarea")[0]).parent().outerHeight() - $("#theater .Comentarios").height() - 66); 
            }); 
                
            $(thi.parent().next(".newComment").find("textarea")).on('keydown', function(i){ 
                abc= $(this); 

                (!i.shiftKey && i.keyCode == 13)? (function(){!abc.parent().next().is(".respuestas")? (function(){ll= $($("textarea")[0]).parent().prev(); abc.parent()[0].outerHTML= "<div class='respuestas'><div class='comentario'><input class='knob button' data-width='28' data-height='28' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.18' readonly value='100'><img title=" + '"' +  "<div class='tool'><input class='knob button' data-width='102' data-height='102' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.08' readonly value='100'><img src='/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif'><div class='datos'><ul class='actions'><li class='chatear' title='Chatear'>C</li><li class='agregar' title='Agregar'>A</li><li class='juzgar' title='Juzgar'>J</li></ul><p class='username' title= 'Luis Eduardo Gallego García'>Luis Eduardo Gallego García</p><p class='rol'>CEO <b style='color:#fff;'>+100</b></p></div><div class='insignia' style='top: 9px;' title='Proyecto completado (aNGEL();)'></div><div class='insignia' style='top: 22px;'title='Proyecto completado (por_siLaBas();)'></div><div class='insignia' style='top: 14px;' title='Proyecto completado (dinosaurios)'> </div><div class='insignia' style='top: 39px;' title='EP (Planifique)'> </div> <div class='insignia' style='top: 43px;' title='Proyecto completado (Robot De Dedicatorias)'> </div></div>" + '"' + " src='/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif' alt=''>&nbsp<a target= '_blank'  href='/A.K.A._Dizzy' >Luis Eduardo Gallego García</a><span class='is'>: </span><span class='Comentario'>" + abc.val().replaceAll("\n", "<br>") + "</span><span class='Responder'></span></div><span class='Respuestas'><span class='Responder'></span></span></div>"; ll.next().find(".Respuestas .Responder")[0].addEventListener("contextmenu", function(e){e.preventDefault(); wwd(this); }); $(ll.next().find(".Respuestas .Responder")).on("click", function(){wD($(this), 1)}); $(ll.next().find(".comentario .Responder")).on("click", function(){wD($(this))})})(): (function(){abc.parent().next().children().filter(".Respuestas").find(".Responder").remove(); abc.parent().next().append('<span class="Respuestas"><span class="Responder"></span></span>'); $($(abc.parent().next().children()[abc.parent().next().children().length - 1]).find(".Responder"))[0].addEventListener("contextmenu", function(e){e.preventDefault(); wwd(this); }); $($(abc.parent().next().children()[abc.parent().next().children().length - 1]).find(".Responder")).on("click", function(){wD($(this), 1)}); $(".Respuestas").each(function(){!$(this).html()? $(this).remove(): 1;}); $(abc.parent().next().children()[abc.parent().next().children().length - 1]).before("<div class='comentario'><input class='knob button' data-width='28' data-height='28' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.18' readonly value='100'><img title=" + '"' +  "<div class='tool'><input class='knob button' data-width='102' data-height='102' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.08' readonly value='100'><img src='/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif'><div class='datos'><ul class='actions'><li class='chatear' title='Chatear'>C</li><li class='agregar' title='Agregar'>A</li><li class='juzgar' title='Juzgar'>J</li></ul><p class='username' title= 'Luis Eduardo Gallego García'>Luis Eduardo Gallego García</p><p class='rol'>CEO <b style='color:#fff;'>+100</b></p></div><div class='insignia' style='top: 9px;' title='Proyecto completado (aNGEL();)'></div><div class='insignia' style='top: 22px;'title='Proyecto completado (por_siLaBas();)'></div><div class='insignia' style='top: 14px;' title='Proyecto completado (dinosaurios)'> </div><div class='insignia' style='top: 39px;' title='EP (Planifique)'> </div> <div class='insignia' style='top: 43px;' title='Proyecto completado (Robot De Dedicatorias)'> </div></div>" + '"' + " src='/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif' alt=''>&nbsp<a target= '_blank'  href='/A.K.A._Dizzy' >Luis Eduardo Gallego García</a><span class='is'>: </span><span class='Comentario'>" + abc.val().replaceAll("\n", "<br>") + "</span><span class='Responder'></span></div>"); $($(abc.parent().next().children()[abc.parent().next().children().length - 2]).find(".Responder")).on("click", function(){wD($(this))}); abc.parent().remove()})()})(): 1; 

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
            }); 

            aa= thi; 
                         
            $("#theater .Comentarios").scrollTop($($("textarea")[0]).parent()[0].offsetTop + $($("textarea")[0]).parent().outerHeight() - $("#theater .Comentarios").height() - 66); 
                                                                                          
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
                            
                $("#theater .Comentarios").scrollTop($($("textarea")[0]).parent()[0].offsetTop + $($("textarea")[0]).parent().outerHeight() - $("#theater .Comentarios").height() - 66); 
            }); 
                
            $(thi.parent().next(".newComment").find("textarea")).on('keydown', function(i){ 
                abc= $(this); 

                (!i.shiftKey && i.keyCode == 13)? (function(){abc.parent().parent().children().filter(".Respuestas").find(".Responder").remove(); abc.parent().parent().append('<span class="Respuestas"><span class="Responder"></span></span>'); $(abc.parent().parent().children()[abc.parent().parent().children().length - 1]).children().filter(".Respuestas .Responder")[0].addEventListener("contextmenu", function(e){e.preventDefault(); wwd(this); }); $($(abc.parent().parent().children()[abc.parent().parent().children().length - 1]).find(".Responder")).on("click", function(){wD($(this), 1)}); $(".Respuestas").each(function(){!$(this).html()? $(this).remove(): 1;}); ll= $($("textarea")[0]).parent().prev(); abc.parent()[0].outerHTML= "<div class='comentario'><input class='knob button' data-width='28' data-height='28' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.18' readonly value='100'><img title=" + '"' +  "<div class='tool'><input class='knob button' data-width='102' data-height='102' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.08' readonly value='100'><img src='/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif'><div class='datos'><ul class='actions'><li class='chatear' title='Chatear'>C</li><li class='agregar' title='Agregar'>A</li><li class='juzgar' title='Juzgar'>J</li></ul><p class='username' title= 'Luis Eduardo Gallego García'>Luis Eduardo Gallego García</p><p class='rol'>CEO <b style='color:#fff;'>+100</b></p></div><div class='insignia' style='top: 9px;' title='Proyecto completado (aNGEL();)'></div><div class='insignia' style='top: 22px;'title='Proyecto completado (por_siLaBas();)'></div><div class='insignia' style='top: 14px;' title='Proyecto completado (dinosaurios)'> </div><div class='insignia' style='top: 39px;' title='EP (Planifique)'> </div> <div class='insignia' style='top: 43px;' title='Proyecto completado (Robot De Dedicatorias)'> </div></div>" + '"' + " src='/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif' alt=''>&nbsp<a target= '_blank'  href='/A.K.A._Dizzy' >Luis Eduardo Gallego García</a><span class='is'>: </span><span class='Comentario'>" + abc.val().replaceAll("\n", "<br>") + "</span><span class='Responder'></span></div>"; $(ll.next().find(".Responder")).on("click", function(){wD($(this))})})(): 1; 

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
            }); 

            aa= thi; 
                         
            $("#theater .Comentarios").scrollTop($($("textarea")[0]).parent()[0].offsetTop + $($("textarea")[0]).parent().outerHeight() - $("#theater .Comentarios").height() - 66); 
                                                                                          
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

document.addEventListener("keydown", function(i){(i.keyCode == 13 && $(window.getSelection().focusNode.parentElement).is(".revelar"))? $(window.getSelection().focusNode.parentElement).click(): 1; }); 
                                                                        
$(document).on("ready",function(e){ 
    //$(".Respuestas").text($(this).text("respuestas (" + $(this).parent().find(".comentario.hidden").length + ")")); 
                                    
    $("#theater .Respuestas").html(function(){return '<span class="Responder"></span>' + "Respuestas (" + $(this).parent().children().filter(".comentario.hidden").length + ")"}); 
                                       
    $("#theater .Respuestas").click(function(l){wd($(this), l)}); 

    for(let collapse of document.querySelectorAll("#theater .Respuestas .Responder")){ 
        collapse.addEventListener("contextmenu", function(e){ 
            e.preventDefault(); 
            wwd(this); 
        })
    };
    $(".nav_arrow.left .arrow").not("#picContainer .arrow").on("click", function(){th= $(this).parent(); !th.parent().find(".carr").is(":animated")? th.parent().find(".carr").animate({scrollLeft: th.parent().find(".carr")[0].scrollLeft - th.parent().find(".carr").width()}, 400, function(){th= $(".current"); lk= th.find(".carr .pic")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].src;th.find(".options a").attr("href", th.find(".options a").attr("href").slice(0, th.find(".options a").attr("href").lastIndexOf("/")) + lk.slice(lk.lastIndexOf("/"), lk.lastIndexOf("."))); }): 672;}); 

    $(".nav_arrow.right .arrow").not("#picContainer .arrow").on("click", function(){th= $(this).parent(); !th.parent().find(".carr").is(":animated")? th.parent().find(".carr").animate({scrollLeft: th.parent().find(".carr")[0].scrollLeft + th.parent().find(".carr").width()}, 400, function(){th= $(".current"); lk= th.find(".carr .pic")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].src;th.find(".options a").attr("href", th.find(".options a").attr("href").slice(0, th.find(".options a").attr("href").lastIndexOf("/")) + lk.slice(lk.lastIndexOf("/"), lk.lastIndexOf("."))); }): 672;}); 

    $(".nav_arrow.left .arrow").filter("#picContainer .arrow").on("click", function(){ar= $(a.closest('.foto')); aaa= $("#theater"); !aaa.find(".carr").is(":animated")? aaa.find(".carr").animate({scrollLeft: aaa.find(".carr")[0].scrollLeft - aaa.find(".carr").width()}, 400, function(){
        a$= $(aaa.find(".carr")).find(".pic")[Math.round(aaa.find(".carr")[0].scrollLeft / $(aaa.find(".carr")).width())].src; 
        a$= a$.slice(a$.lastIndexOf("/") + 1, a$.lastIndexOf(".")); 
        history.pushState({page: 1}, "", "/" + (ar.closest('.story').is(".repost")? $(ar.closest('.story').find(".target")[1])[0].href.slice($(ar.closest('.story').find(".target")[1])[0].href.lastIndexOf("/") + 1): username) + "/img/" + a$); 
    }): 672;}); 

    $(".nav_arrow.right .arrow").filter("#picContainer .arrow").on("click", function(){ar= $(a.closest('.foto')); aaa= $("#theater"); !aaa.find(".carr").is(":animated")? aaa.find(".carr").animate({scrollLeft: aaa.find(".carr")[0].scrollLeft + aaa.find(".carr").width()}, 400, function(){
        a$= $(aaa.find(".carr")).find(".pic")[Math.round(aaa.find(".carr")[0].scrollLeft / $(aaa.find(".carr")).width())].src; 
        a$= a$.slice(a$.lastIndexOf("/") + 1, a$.lastIndexOf(".")); 
        history.pushState({page: 1}, "", "/" + (ar.closest('.story').is(".repost")? $(ar.closest('.story').find(".target")[1])[0].href.slice($(ar.closest('.story').find(".target")[1])[0].href.lastIndexOf("/") + 1): username) + "/img/" + a$); 
    }): 672;}); 
    


    $("#search input").on("keydown keyup", function(){for(a= 0; a < $("#resizeBottom")[0].children[0].children[0].children[0].children[0].children.length; a++){ 
        $("#resizeBottom")[0].children[0].children[0].children[0].children[0].children[a].style.display= ""; 
        $("#resizeBottom")[0].children[0].children[0].children[0].children[0].children[a].innerText.toLowerCase().indexOf($("#search input")[0].value.toLowerCase()) == -1? $("#resizeBottom")[0].children[0].children[0].children[0].children[0].children[a].style.display= "none": 1; 
    }})

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
ar= false; 
waiting= false; 
var next; 

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
var VIds= []; 
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
        $(this).addClass("current"); 
        $($(".current")[0]).attr("tabindex", 0); 
        $(".current")[0].focus(); 
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
    
    $("#profilePic").on("click", function () {
        openProfilePicModal($(this))
    }); 
    
    $(".story .pic").on("click", function () {
        openModal($(this));

    });
    $("#pics img").on("click", function () {
        openFotosModal($(this));

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
   

$(".carr").on("scroll", function(){ 
    rf= $(this)
    Math.round($(this)[0].scrollLeft / $(this).width()) == $(this).find(".pic").length - 1? (function(){rf.parent().find(".nav_arrow.right").addClass("disabled"); $("#theater").find(".nav_arrow.right").addClass("disabled")})(): (function(){rf.parent().find(".nav_arrow.right").removeClass("disabled"); $("#theater").find(".nav_arrow.right").removeClass("disabled")})(); 
    $(this)[0].scrollLeft == 0? (function(){rf.parent().find(".nav_arrow.left").addClass("disabled"); $("#theater").find(".nav_arrow.left").addClass("disabled");})(): (function(){rf.parent().find(".nav_arrow.left").removeClass("disabled"); $("#theater").find(".nav_arrow.left").removeClass("disabled")})(); 
}) 
document.onkeydown = function (evt) {
    //console.log(evt.keyCode); 

    (!!ar || ($("#theater").css("display") == "none" && $(".current").is(".mult_img")))? (function(){ 
        switch(evt.keyCode){
            case 37: 
                $("#theater").css("display") == "none"? th= $(".current"): th= ar; 
                if($("#theater").css("display") == "none"){ 
                    !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft - $(th.find(".carr")).width()}, 400, function(){th= $(".current"); lk= th.find(".carr .pic")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].src;th.find(".options a").attr("href", th.find(".options a").attr("href").slice(0, th.find(".options a").attr("href").lastIndexOf("/")) + lk.slice(lk.lastIndexOf("/"), lk.lastIndexOf("."))); }): 672; 
                }else{ 
                    th.find(".carr")[0].scrollLeft= th.find(".carr")[0].scrollLeft - $(th.find(".carr")).width(); 
                    $("#theater").find("#bigPic")[0].src= (th.is(".story")? $(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src: un_tn($(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src)); 
                    source= un_tn($("#theater").find("#bigPic")[0].src)
                    history.pushState({page: 1}, "", "/" + (ar.closest('.story').is(".repost")? $(ar.closest('.story').find(".target")[1])[0].href.slice($(ar.closest('.story').find(".target")[1])[0].href.lastIndexOf("/") + 1): username) + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
                } 
                break; 
            case 39: 
                $("#theater").css("display") == "none"? th= $(".current"): th= ar; 
                if($("#theater").css("display") == "none"){ 
                    !$(th.find(".carr")).is(":animated")? $(th.find(".carr")).animate({scrollLeft: th.find(".carr")[0].scrollLeft + $(th.find(".carr")).width()}, 400, function(){th= $(".current"); lk= th.find(".carr .pic")[Math.round(th.find(".carr")[0].scrollLeft / th.find(".carr").width())].src;th.find(".options a").attr("href", th.find(".options a").attr("href").slice(0, th.find(".options a").attr("href").lastIndexOf("/")) + lk.slice(lk.lastIndexOf("/"), lk.lastIndexOf("."))); }): 672; 
                }else{ 
                    th.find(".carr")[0].scrollLeft= th.find(".carr")[0].scrollLeft + $(th.find(".carr")).width(); 
                    $("#theater").find("#bigPic")[0].src= (th.is(".story")? $(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src: un_tn($(th.find(".carr")).find(".pic")[Math.round(th.find(".carr")[0].scrollLeft / $(th.find(".carr")).width())].src)); 
                    source= un_tn($("#theater").find("#bigPic")[0].src)
                    history.pushState({page: 1}, "", "/" + (ar.closest('.story').is(".repost")? $(ar.closest('.story').find(".target")[1])[0].href.slice($(ar.closest('.story').find(".target")[1])[0].href.lastIndexOf("/") + 1): username) + "/img/" + source.slice(source.lastIndexOf("/") + 1, -4)); 
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
    1; 
}
function scrollBottom(d){
    d.scrollTop(d.prop("scrollHeight"));
}

var current; 

$(document).on("ready", function(){
    var distance; 
    el= $($("#profilePic > img")[0]); 
                        
        
    $(".comentario").on("mousemove", function(event){ 
        elx= $($(this).children()[0])
        circleWidth = elx.outerWidth( true ),
        circleHeight  = elx.outerHeight( true ),
        circleLeft    = elx.offset().left,
        circleTop     = elx.offset().top,
        circlePos     = {
            x     : circleLeft + circleWidth / 2,
            y     : circleTop + circleHeight / 2,
            radius: circleWidth / 2
        }; 
    
        distance    = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) ); 
    
        if(distance <= circlePos.radius){ 
            $($(this).children()[0]).css({"pointer-events": "all"}); 
            $($(this).children()[0]).css({"pointer-events": "all"}); 
        }else{ 
            $($(this).children()[0]).css({"pointer-events": "none"}); 
            $($(this).children()[0]).css({"pointer-events": "none"}); 
        }   
    }); 
    $("#theater textarea").on('input', function() { 
        $(this).height(""); 
        !!$(this).val()? $(this).height($(this).prop('scrollHeight') - (parseInt($(this).css("padding-top").slice(0, -2)) + parseInt($(this).css("padding-bottom").slice(0, -2) + parseInt($(this).css("border-top").slice(0, -2)) + parseInt($(this).css("border-bottom").slice(0, -2))))): 1; 
    }); 
    $(".comentarios > .newComment").on('keydown', function(i){ 
                abc= $("#theater .Comentarios"); 

                (!i.shiftKey && i.keyCode == 13)? (function(){abc.append("<div class='comentario'><input class='knob button' data-width='28' data-height='28' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.18' readonly value='100'><img title=" + '"' +  "<div class='tool'><input class='knob button' data-width='102' data-height='102' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.08' readonly value='100'><img src='/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif'><div class='datos'><ul class='actions'><li class='chatear' title='Chatear'>C</li><li class='agregar' title='Agregar'>A</li><li class='juzgar' title='Juzgar'>J</li></ul><p class='username' title= 'Luis Eduardo Gallego García'>Luis Eduardo Gallego García</p><p class='rol'>CEO <b style='color:#fff;'>+100</b></p></div><div class='insignia' style='top: 9px;' title='Proyecto completado (aNGEL();)'></div><div class='insignia' style='top: 22px;'title='Proyecto completado (por_siLaBas();)'></div><div class='insignia' style='top: 14px;' title='Proyecto completado (dinosaurios)'> </div><div class='insignia' style='top: 39px;' title='EP (Planifique)'> </div> <div class='insignia' style='top: 43px;' title='Proyecto completado (Robot De Dedicatorias)'> </div></div>" + '"' + " src='/resources/images/A.K.A._Dizzy/1AzV0qwVwn_tn.gif' alt=''>&nbsp<a target= '_blank'  href='/A.K.A._Dizzy' >Luis Eduardo Gallego García</a><span class='is'>: </span><span class='Comentario'>" + $(".comentarios > .newComment textarea").val().replaceAll("\n", "<br>") + "</span><span class='Responder'></span></div>"); $(".comentarios > .newComment textarea").val(""); $($($("#theater .Comentarios").children()[$("#theater .Comentarios").children().length - 1]).find(".Responder")).on("click", function(){wD($(this))}); $("#theater .Comentarios").scrollTop($("#theater .Comentarios")[0].scrollHeight); document.activeElement.blur(); })(): 1; 

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
            }); 
    $("#theater .read").on("click", function(){ 
        !$("#theater .description").hasClass("closed")? $("#theater .description").addClass("closed"): $("#theater .description").removeClass("closed"); 
        !$("#theater .comentarios").hasClass("open")? $("#theater .comentarios").addClass("open"): $("#theater .comentarios").removeClass("open"); 
    })
    current= $(".story.current");
    $(document).keypress(function (e) {
    if(!$("textarea").is(":focus") && !$("input").is(":focus") && !waiting){
        //console.log(e.keyCide) 
        if (e.keyCode == 108 || e.keyCode == 76) {
            $(".current").find('.options .star').toggleClass("true");
            $("#theater").find('.options .star').toggleClass("true");        
        }
        if (e.keyCode == 98 || e.keyCode == 66) {
            $(".current").find('.options .bookmark').toggleClass("true");
            $("#theater").find('.options .bookmark').toggleClass("true");
        }
        if (e.keyCode == 102 || e.keyCode == 70) {
            if($(".current").is(".mult_img")){
                openModal($($(".current").find(".pic")[($(".current").find(".carr")[0].scrollLeft != 0? $(".current").find(".carr")[0].scrollLeft / $(".current").find(".carr").width(): 0)]))
            }else if($(".current").is(".img")){ 
                openModal($(".current .pic"))
            }else if($(".current").is(".video")){ 
                openVideoModal($(".current").find(".Enlarge"))
            }
        }
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
                            setTimeout(function(){ok= true;}, 100) 
                        })})(): waiting= false; 
        }
    });


    $(".comentario .Responder").on("click", function(){wD($(this))}); 

    $(".Respuestas .Responder").on("click", function(){wD($(this), 1)}); 


    Used= []; 
    Urls= ["Abigail O'Neill.jpg", "Alana Campos.png", "Alexandra Tyler.jpeg", "Ali Chanel.jpg", "Ali Michael.jpg", "Alicia Loraina Olivas.jpg", "Allie Leggett.jpg", "Allie Silva.jpg", "Alyssa Arcè.jpg", "Amanda Booth.jpg", "Amanda Cerny.webp", "Amanda Streich.jpg", "Amberleigh West.jpg", "Amelia Talon.jpg", "Amy Leigh Andrews.jpg", "Ana Cheri.webp", "Anita Pathammavong.jpg", "Anna Sophia Berglund.jpg", "Ashley Doris.jpg", "Ashley Hobbs.jpg", "Ashley Smith.webp", "Audrey Aleen Allen.jpg", "Beth Williams.jpg", "Bridget Malcolm.jpg", "Britany Nola.jpg", "Britt Linn.jpeg", "Brittany Brousseau.jpg", "Brittny Ward.jpg", "Brook Power.jpg", "Bryiana Noelle.jpg", "Camille Rowe.jpg", "Carly Lauren.jpg", "Carolina Ballesteros.jpg", "Cassandra Dawn.webp", "Chasity Samone.jpg", "Chelsie Aryn.jpg", "Ciara Price.jpg", "Claire Sinclair.jpg", "Dana Taylor.jpg", "Dani Mathers.jpg", "Danielle Alcaraz.jpg", "Dominique Jane.jpg", "Dree Hemingway.jpg", "Elizabeth Elam.webp", "Elizabeth Ostrander.webp", "Elsie Hewitt.jpg", "Emily Agnes.jpg", "Enikő Mihalik.jpg", "Eugena Washington.jpg", "Fo Porter.jpg", "Francesca Frigo.jpg", "Geena Rocero.jpg", "Gemma Lee Farrell.jpg", "Gia Marie.jpg", "Gillian Chan.jpg", "Heather Knox.jpg", "Heather Rae Young.webp", "Hilda Dias Pimentel.jpg", "Ines Rau.jpg", "Iryna Ivanova.jpg", "Jaclyn Swedberg.jpg", "Jaime Faith Edmonson.jpg", "Jaslyn Ome.jpg", "Jenny Watwood.jpg", "Jessa Lynn Hinton.jpg", "Jessica Ashley.jpg", "Jessica Wall.jpg", "Jordan Emanuel.webp", "Jordy Murray.jpg", "Josie Canseco.jpg", "Joy Corrigan.jpg", "Karina Marie.jpg", "Kassie Lyn Logsdon.jpg", "Katie Vernola.jpg", "Kayla Garvin.jpg", "Kayla Rae Reid.webp", "Kaylia Cassandra.webp", "Kayslee Collins.webp", "Kelly Gale.png", "Kennedy Summers.jpg", "Khrystyana.jpg", "Kirby Griffin.jpg", "Kristen Nicole.jpeg", "Kristy Garett.jpg", "Kylie Johnson.jpg", "Kyra Milan.jpg", "Lada Kravchenko.jpg", "Leola Bell.jpg", "Lisa Seiffert.jpg", "Liza Kei.png", "Lorena Medina.jpg", "Maggie May.jpg", "Marsha Elle.jpg", "Megan Moore.jpg", "Megan Samperi.jpg", "Mei-Ling Lam.jpg", "Miki Hamano.jpg", "Milan Dixon.jpg", "Monica Sims.jpg", "Nereyda Bird.jpg", "Nikki Leigh.jpg", "Nina Daniele.jpg", "Olga de Mar.jpg", "Olivia Paige.jpg", "Pamela Horton.jpg", "Priscilla Huggins.jpg", "Rachel Harris.jpg", "Rainy Day Jordan.jpg", "Raquel Pomplun.jpg", "Riley Ticotin.jpg", "Roos van Montfort.jpg", "Roxanna June.jpg", "Sasha Bonilova.jpg", "Savannah Smith.jpeg", "Shanice Jordyn.jpg", "Shanna McLaughlin.jpg", "Shauna Sexton.jpg", "Shawn Dillon.jpeg", "Shelby Chesnes.jpg", "Shelby Rose.jpg", "Shelby Rose.webp", "Shera Bechard.jpg", "Sophie O’Neil.jpg", "Stephanie Branton.jpg", "Tanerélle.jpg", "Teela LaRoux.jpg", "Tiffany Toth.jpg", "Val Keil.jpeg", "Valeria Lakhina.jpg", "Vendela Lindblom.jpg", "Yoli Lara.jpg", "Megan Denise Fox.jpg", "Laura Escobar Bonnett.jpg", "Luis Eduardo Gallego García.gif", "Dios Jesucristo.jpg", "Aura Cardona Demasiado.jpg", "Juan José Martínez Vidal.jpg", "Walter White.jpg"]; 

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
    var distance; 
    el= $($("#profilePic > img")[0]); 
                    
    
    !!el.length? document.addEventListener("mousemove", function(event){ 
        circleWidth = el.outerWidth( true ),
    circleHeight  = el.outerHeight( true ),
    circleLeft    = el.offset().left,
    circleTop     = el.offset().top,
    circlePos     = {
        x     : circleLeft + circleWidth / 2,
        y     : circleTop + circleHeight / 2,
        radius: circleWidth / 2
    }; 

       distance    = Math.sqrt( Math.pow( event.pageX - circlePos.x, 2 ) + Math.pow( event.pageY - circlePos.y, 2 ) ); 

       if(distance <= circlePos.radius){ 
           $($("#profilePic > div")[0]).css({"pointer-events": "all"}); 
           $($("#profilePic > img")[0]).css({"pointer-events": "all"}); 
       }else{ 
           $($("#profilePic > div")[0]).css({"pointer-events": "none"}); 
           $($("#profilePic > img")[0]).css({"pointer-events": "none"}); 
       }   
    }): 1; 
    
    $(".Playuse").click(function(i){ 
        $(i.target).parent().find("video")[0].play(); 
        $(i.target).addClass("playing"); 
    }); 
    
a= 0; 
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
   

    $("#theater").on("click", function(i){$(i.target).is("#theater")? closeModal(): 1; }); 
})
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

                !!Antheater? (function(){closeModal(); ý.remove(); })(): 1;
            })
            var $id = $(ui.tooltip).attr('id');

            // close any lingering tooltips
            $('div.ui-tooltip').not('#' + $id).remove();

            // ajax function to pull in data and add it to the tooltip goes here
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

                !!Antheater? (function(){closeModal(); ý.remove(); })(): 1; 
            })
            var $id = $(ui.tooltip).attr('id');

            // close any lingering tooltips
            $('div.ui-tooltip').not('#' + $id).remove();

            // ajax function to pull in data and add it to the tooltip goes here
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
/*10101111*/ //Guión Alto 
/*11010111*/ //× 