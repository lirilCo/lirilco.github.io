var $this

$(document).on("ready",function(){


    if($('.poema.autoScrollTo').length > 0){
      

    /*Haha*/
    let isPaused = false; /* Flag for auto-paused video */
    let observer = new IntersectionObserver((entries, observer) => { 
      entries.forEach(entry => {
        if(entry.intersectionRatio!=1){
          entry.target.firstTime= true; //Ha...
        }
      });
    }, {threshold: 1});
     for(aST= 0; aST < document.querySelectorAll('.poema.autoScrollTo').length; aST++){ 
            document.querySelectorAll('.poema.autoScrollTo')[aST].firstTime= true; 
            observer.observe(document.querySelectorAll('.poema.autoScrollTo')[aST]); 
        }
} 

    $($(".poema.autoScrollTo")).on("scroll", function(Zz){
        pageXOffset= $(this).scrollTop() || 0; 
        if($(this)[0].firstTime){
                    $(this).css({"overflowY": "hidden"}); 

            a=$(this)
                               

                    $(this)[0].firstTime= false; 
                    $("body, html").animate({
                        scrollTop: $(this).offset().top - 50
                    }, 400, function() {
    a.css({"overflowY": "scroll"}); 
  });
                }});
$(".revelar").on("click", function(){ 
        if($(this).text()[0] != "O"){ 
            $(this).parent().css({"height": "auto"}); 
            $(this).parent().find(".poema").css({"height": "auto"}); 
	    $(this).parent().find("pre").css({"height": "auto"}); 
	    $(this).parent().find("pre").css({"padding": "1em"}); 
	    $($(this).parent().children()).each(function(){$(this).is(".code")? $(this).find(".code-scroll").css({"visibility": "visible"}): 1}); 
            $(this)[0].tx= $(this).text(); 
            $(this).text("Ocultar de nuevo."); 
            $(this).addClass("activado"); 
        }else{ 
            $(this).parent().css({"height": "0"}); 
            $(this).parent().find(".poema").css({"height": "0"}); 
	    $(this).parent().find("pre").css({"height": "0"}); 
	    $(this).parent().find("pre").css({"padding": "0"}); 
	    $($(this).parent().children()).each(function(){$(this).is(".code")? $(this).find(".code-scroll").css({"visibility": "hidden"}): 1}); 
            $(this).text($(this)[0].tx); 
            $(this).removeClass("activado"); 
        } 
    })
    $("html").click(function(e) {
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

    responsive()
    function openBlImage(a) {
    $("body")[0].style.overflowY= "hidden"; 
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this = a.closest('figure')
    var source = a.attr('src');
    $('.theater #bigPic').attr('src', source);
    $(".more").text(a.closest("figure").find("figcaption")[0].innerText)
    var user = "";
    $('.theater .comments .info .username').html(user);

    var time = "";
    $('.theater .comments .info .time').html(time);
    
    var title = "";
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
    
    var pic = "";
    $('.theater .comments .info #pic').attr('src', pic);

    var ref = "";
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
    function openModal(a) {
    $("body")[0].style.overflowY= "hidden"; 
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
    $("body")[0].style.overflowY= "scroll"; 
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
    responsive(); 
}
		$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#fff"
        		}
    		);
    
    $(".star").on("click",function(){
		 $(this).toggleClass("true")
	});
    $(".bookmark").on("click",function(){
		 $(this).toggleClass("true")
	});
    
     $(".options.first .bookmark").on("click",function(){
        $('.options.ending .bookmark').toggleClass("true")
          
	});
    $(".options.ending .bookmark").on("click",function(){
        $('.options.first .bookmark').toggleClass("true")
          
	});
    
     $(".options.first .star").on("click",function(){
        $('.options.ending .star').toggleClass("true")
          
	});
    $(".options.ending .star").on("click",function(){
        $('.options.first .star').toggleClass("true")
          
	});
    
	$("#dots").on("click", function () {
        $("#Store").toggleClass("open");
        $("#index-trigger").children().toggleClass("openedStore");
        $("#right-menu #dots").children().toggleClass("openedStore");
        $("#right-menu").children().toggleClass("openedStore");
        $("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
        $("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
        if ($("#profileSettings").hasClass("open")) {
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        if ($("#Store").hasClass("open")) {
            $("header").addClass("open");
             if ($("#profileSettings").hasClass("open")) {
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );}
            else{
                 $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
            }
        } else {
           $("header").removeClass("open");
           }
           if (!$("#profileSettings").hasClass("open") && !$("#Store").hasClass("open")) {
               $('.knob').trigger(
                   'configure', {
                       "fgColor": "#2ecc71"
                   }
               );
            }
        });
 $(".story .pic").on("click", function () {
        openModal($(this))
    });
    $("#article figure img").on("click", function () {
        openBlImage($(this))
    });
    $("#close").on("click",function(){
        closeModal() 
	});
    
    $("#wrapper").on("click",function(){
         closeModal() 
	});
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            closeModal()        
        }
    };


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
	
	
});

$( window ).on("resize", function(){
    responsive()
})
$( window ).on("load", function(){
    responsive()
})
function responsive(){
        $(".poema.autoScrollTo").css({"max-height": $(window).height() - 56 - 6.84})
         $("#picContainer").width($("#theater").width()- $(".comments").outerWidth())
        $("#article").width($(window).width()- $("#sidebar").outerWidth(true) );
        $("#theater .comments").height($("#theater").height()- 40 );
        $("#theater .comments .more").height($("#theater .comments").height()- $("#theater .info").outerHeight(true)  - $("#theater .comments .title").outerHeight(true) -  $("#theater .comments .options").outerHeight(true));
        $("#theater").height($(window).height()-40);
        $("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#sidebar").height($(window).height() - 46);
        $("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
        $("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
        if($("#profileSettings").hasClass("open")){
            $('.knob').trigger(
                'configure',
                {   
                    "fgColor":"#2ecc71"
                }
            );
        }if($("#Store").hasClass("open")){

            $("header").addClass("open");
            $('.knob').trigger(
                'configure',
                {   
                    "fgColor":"#fff"
                }
            );
        }else{
            $("header").removeClass("open");
        }   
        if(!$("#profileSettings").hasClass("open") && !$("#Store").hasClass("open")){
            $('.knob').trigger(
                'configure',
                {   
                    "fgColor":"#2ecc71"
                }
            );
        }

        if($("#profileSettings").hasClass("open") && $("#Store").hasClass("open")){
            $('.knob').trigger(
                'configure',
                {   
                    "fgColor":"#2ecc71"
                }
            );
        }
        for(eForensics= 0; eForensics < document.getElementsByTagName('pre').length; eForensics++){ 


    const mainNode = document.getElementsByTagName('pre')[eForensics]

                function callback(mutationsList, observer) {
                    mutationsList.forEach(mutation => {
                        if (mutation.attributeName === 'data-src-status') {
                            //$("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? console.log("loaded"): 1; 
                               if(mutation.target.getAttribute("data-src-status") == "loaded"){ 
                                                               //alert(mutation.target) 

                                    $(mutation.target).prev().find(".code-filler").width(function () {
                                        return $(this).parent().next("pre").find("code").width() + ($(this).parent().next("pre").outerWidth() - $(this).parent().next("pre").width()) / 2 
                                    });
                               }
                               
                        }
                    })
                }
                
                const mutationObserver = new MutationObserver(callback)
                
                 mutationObserver.observe(mainNode, { attributes: true }); 
                
                function create(t) {
                  // create an observer instance
                  var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                      var foo = t.getAttribute("data-src-status")
                
                      if (foo == "loaded")
                        responsive(); 
                    });
                  });
                  // configuration of the observer
                  var config = {
                    attributes: true
                  };
                
                  // pass in the target node, as well as the observer options
                  observer.observe(t, config);
                }
     
     }
}
