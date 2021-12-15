el= document.getElementsByClassName("file_tree")[0]; 

var editor; 

function openModal(a) {
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this = a.closest('.story')
    var source = a.attr('src');
    $('.theater #bigPic').attr('src', source);

    var user = '<a href="user.html">Walter White</a><br><span class="time">24 de Octubre a las 0:30 am</span>'; 
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

    var pic = "../resources/images/white.jpg"; 
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
    sprtdUrl= []; 
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

$('#profileSettings').click(function(){
    i.stopPropagation()
   
}); 
$("#files .file").click(function(i, tr){ 
    $("#preview .file_tree").removeClass("visible"); 
    $("#preview #file_preview #file")[0].innerHTML=""; 
    arr= []; 

    eleo= $(this)[0]; 
    
    for(eForensics in eleo.parentElement.children){ 
        if(parseInt(eForensics) < $(eleo).index() && eleo.parentElement.children[eForensics].getBoundingClientRect().y >= 110 && ((!!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics].children[0]).hasClass("inScope")) || (!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics]).hasClass("inScope")))){ 
            arr[arr.length]= eleo.parentElement.children[eForensics]
        }
    } 

    topS= (arr[0] && !!$(arr[0].parentElement.children[$(arr[0]).index() - 1]).hasClass("inScope"))? (arr.length * 26) + (26 - (110 - arr[0].parentElement.children[$(arr[0]).index() - 1].getBoundingClientRect().y)): (!arr[0] && $(eleo.parentElement.children[$(eleo).index() - 1]).hasClass("inScope") && ((26 - (110 - eleo.parentElement.children[$(eleo).index() - 1].getBoundingClientRect().y)) <= 26))?topS=  26 - (110 - eleo.parentElement.children[$(eleo).index() - 1].getBoundingClientRect().y): arr.length * 26; 

    $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
    $(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 


    !tr? topS= topS: topS= 0; 

    $(this).css({"position": "absolute", "top": topS + "px"}); 

    $(this).css({"opacity": "1"}); 
    $(this).css({"height": "auto"}); 
    $(this).css({"padding": ""}); 
    $(this).css({"border-bottom": ""}); 

    
    setTimeout(function(){i.target.style.top= 0; 
    }, 1); 
    setTimeout(function(){!$("#file_expl #information_cont").hasClass("visible")? $("#file_expl #information_cont").toggleClass("visible"): 666 
    }, 101); 

    uRL= ""; 
                     
    t= $(this); 
              
    while(!t.is(".file_tree")){ 
        if(!t.hasClass("folder_cont")){ 
            uRL= t[0].innerText + uRL; 
        }else{ 
            uRL= t[0].children[0].textContent + "/" + uRL; 
        } 
      
        t= t.parent(); 
    } 
      
    history.pushState({page: 1}, "", "/" + username + "/p/" + pId + "/" + uRL); 
                                                              
    (!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].outerHTML= '<div><a url=\"/' + username + '/p/' + pId + '\">' + $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].innerText + '</a></div>': 1; 
                                  
    updateRoot(separateUrl(uRL)); 

    FileToRequest= window.location.pathname
    slashCt= 0; 
    strtgIx= 0; 
    
    for(eForensics in FileToRequest){ 
        FileToRequest[eForensics] == "/"? slashCt++: 1; 
    
        if(slashCt < 2){ 
            strtgIx= parseInt(eForensics); 
        }   
    } 
    FileToRequest= FileToRequest.slice(0, strtgIx + 1) + "/raw/" + FileToRequest.slice(strtgIx + 2, FileToRequest.length); 

    if($("#preview #file_preview #options #Archivo").hasClass("selected")){
        $("#preview #file_preview #file").css({"visibility": "visible", "opacity": "1"}); 
        $("#preview #file_preview #filePr")[0].innerHTML= ""; 
        $("#preview #file_preview #edit")[0].innerHTML= ""; 
        switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
            case "png": 
            case "jpg": 
                $("#preview #file_preview #file")[0].innerHTML= "<img src='" +  FileToRequest + "'></img>"; 
                break; 
            case "webm": 
            case "mp4": 
                $("#preview #file_preview #file")[0].innerHTML= "<video src='" +  FileToRequest + "' controls= 'true' autoplay= 'true'></video>"; 
                break; 
            default: 
                $("#preview #file_preview #file")[0].innerHTML= "<pre data-src='" +  FileToRequest + "'></pre>"; 

                const mainNode = document.getElementsByTagName('pre')[0]

                function callback(mutationsList, observer) {
                    mutationsList.forEach(mutation => {
                        if (mutation.attributeName === 'data-src-status') {
                            //$("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? console.log("loaded"): 1; 
                            $("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? responsive(): 1; 
                        }
                    })
                }
                
                const mutationObserver = new MutationObserver(callback)
                
                mutationObserver.observe(mainNode, { attributes: true }) 
                
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

                Prism.highlightAll(); 
                break; 
        } 
    }else if($("#Live").hasClass("selected")){ 
        $(".code-filler").width(0); 

        $("#preview #file_preview #file")[0].innerHTML= ""; 
        $("#preview #file_preview #edit")[0].innerHTML= ""; 
        $("#preview #file_preview #filePr")[0].innerHTML= "<div><iframe src='" +  FileToRequest + "'></iframe></div>"; 
    }else{ 
        $(".code-filler").width(0); 

        $("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
    $("#preview #file_preview #filePr").css({"visibility": "hidden", "opacity": "0"}); 
    $("#preview #file_preview #edit").css({"visibility": "visible", "opacity": "1"}); 
    a= ""; 

        function reqListener () {
            $("#preview #file_preview #edit")[0].innerHTML= "<div id= 'editor'></div>"; 
            ace.require("ace/ext/language_tools");
            editor = ace.edit("editor");
            editor.setTheme("ace/theme/monokai"); 
            editor.setValue(this.responseText); 
            editor.setOption("enableEmmet", true);
            editor.setOption("enableBasicAutocompletion", true); 
            editor.setOption("enableLiveAutocompletion", true); 
            editor.setOption("enableSnippets", true); 
            switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
                case "js": 
                    var JavaScriptMode = ace.require("ace/mode/javascript").Mode; 
                    editor.session.setMode(new JavaScriptMode()); 
                    break; 
                case "css": 
                    var JavaScriptMode = ace.require("ace/mode/css").Mode; 
                    editor.session.setMode(new JavaScriptMode()); 
                    break; 
                case "html": 
                    var JavaScriptMode = ace.require("ace/mode/html").Mode; 
                    editor.session.setMode(new JavaScriptMode()); 
                    break; 
            } 
            
        }

    
    
        var xxa = new XMLHttpRequest();
        xxa.addEventListener("load", reqListener);
        xxa.open("GET", FileToRequest);
        xxa.send(); 


    
    
    } 
    /*function reqListener () {
        
    }

    
    
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", FileToRequest);
    oReq.send(); */ 
                    
    typeof LEB != "undefined"? $(LEB).css({"padding": "", "height": "", "opacity": "1"}): 15637; 

    title(); 
}); 

$("#preview .file").click(function(i){ 


    uRL= ""; 
                     
    t= $(this); 
              
    while(!t.is(".file_tree")){ 
        if(!t.hasClass("folder_cont")){ 
            uRL= t[0].innerText + uRL; 
        }else{ 
            uRL= t[0].children[0].textContent + "/" + uRL; 
        } 
      
        t= t.parent(); 
    } 
      
    //uRL= uRL.slice(0, uRL.length - 1); 
                                       
    history.pushState({page: 1}, "", "/" + username + "/p/" + pId + "/" + uRL); 

                                                              
    (!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].outerHTML= '<div><a url=\"/' + username + '/p/' + pId + '\">' + $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].innerText + '</a></div>': 1; 
    /*window.location.hash= "infor"; */
                              
    updateRoot(separateUrl(uRL)); 

     aar= getToBusiness(window.location.pathname); 
                 
        spr= ""; 
                 
        if(aar == ""){ 
             el= document.getElementsByClassName("file_tree")[0]; 

            for(Colombia in el.children){ 
                $(el.children[Colombia]).hasClass("folder_cont")? $($(el.children[Colombia]).children()[0]).addClass("inScope"): $(el.children[Colombia]).addClass("inScope"); 
            } 
            LEB= $("#files .file_tree"); 

                                    
    for(eForensics in sprtdUrl){ 
        for(fi in $(LEB).children()){ 
            if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
            }else if(/*!*/$($(LEB).children()[fi]).hasClass("file")){ 
                $($(LEB).children()[fi]).text() == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
            }
        } 
    } 

    $(LEB).trigger("click", true); 

        }else{ 
                                   
            setTimeout(function(){ 
                spr= separateUrl(aar); 

                el= document.getElementsByClassName("file_tree")[0]; 
                                  
                for(Ty99 in spr){ 
                    for(eForensics in el.children){ 
                        if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                            if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                                el= el.children[eForensics]; 
                            } 
                        } 
                    } 
                 } 
                
                for(Colombia in getSiblings(el.children[0])){ 
                    getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
                } 
LEB= $("#files .file_tree"); 

                                    
for(eForensics in sprtdUrl){ 
    for(fi in $(LEB).children()){ 
        if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
            $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
        }else if(/*!*/$($(LEB).children()[fi]).hasClass("file")){ 
            $($(LEB).children()[fi]).text() == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
        }
    } 
} 

    $(LEB).trigger("click", true); ; 
            }, 10); 

            spr= separateUrl(aar); 

            el= document.getElementsByClassName("file_tree")[0]; 
                              
            for(Ty99 in spr){ 
                for(eForensics in el.children){ 
                    if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                        if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                            el= el.children[eForensics]; 
                        } 
                    } 
                } 
             } 
            
            for(Colombia in getSiblings(el.children[0])){ 
                getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
            } LEB= $("#files .file_tree"); 

                                    
for(eForensics in sprtdUrl){ 
    for(fi in $(LEB).children()){ 
        if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
            $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
        }else if(/*!*/$($(LEB).children()[fi]).hasClass("file")){ 
            $($(LEB).children()[fi]).text() == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
        }
    } 
} 

    $(LEB).trigger("click", true); ; 

        }

    typeof LEB != "undefined"? $(LEB).css({"padding": "", "height": "", "opacity": "1"}): 15637; 
}); 

for(let folder of document.querySelectorAll("#files .folder")) { 
  folder.addEventListener("contextmenu", function(e){ 
    e.preventDefault(); 
                        
    $("#preview .file_tree").addClass("visible"); 

    arr= []; 

    eleo= $(this).parent()[0]; 
    
    for(eForensics in eleo.parentElement.children){ 
        if(parseInt(eForensics) < $(eleo).index() && eleo.parentElement.children[eForensics].getBoundingClientRect().y >= 110 && ((!!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics].children[0]).hasClass("inScope")) || (!eleo.parentElement.children[eForensics].children[0] && $(eleo.parentElement.children[eForensics]).hasClass("inScope")))){ 
            arr[arr.length]= eleo.parentElement.children[eForensics]
        }
    } 

    topS= (arr[0] && !!$(arr[0].parentElement.children[$(arr[0]).index() - 1]).hasClass("inScope"))? (arr.length * 26) + (26 - (110 - arr[0].parentElement.children[$(arr[0]).index() - 1].getBoundingClientRect().y)): arr.length * 26; 

    $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 
    $(".file").css({"opacity": "0", "height": "0", "padding": "0", "border-bottom": "none"}); 


    $($(eleo).children()[0]).css({"opacity": "1"}); 
    $($(eleo).children()[0]).css({"height": "auto"}); 


    $(this).parent().css({"position": "absolute", "top": topS + "px"}); 

    (function () {
        $('.file.inScope').filter(function () {
            return $(this).css('height') != '0';
        }).css({"padding": "","border-bottom": ''});
    })(); 
    (function () {
        $('.folder.inScope').filter(function () {
            return $(this).css('height') != '0';
        }).css({"padding": "","border-bottom": ''});
    })(); 
    setTimeout(function(){eleo.style.top= 0; 
    }, 1); 
    setTimeout(function(){!$("#file_expl #information_cont").hasClass("visible")? $("#file_expl #information_cont").toggleClass("visible"): 666 
    }, 101); 

    uRL= ""; 
                     
    t= $(this).parent(); 
              
    while(!t.is(".file_tree")){ 
        if(!t.hasClass("folder_cont")){ 
            uRL= t[0].innerText + uRL; 
        }else{ 
            uRL= t[0].children[0].textContent + "/" + uRL; 
        } 
      
        t= t.parent(); 
    } 
      
    uRL= uRL.slice(0, uRL.length - 1); 
                                       
    history.pushState({page: 1}, "", "/" + username + "/p/" + pId + "/" + uRL); 

                                                              
    (!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].outerHTML= '<div><a url=\"/' + username + '/p/' + pId + '\">' + $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].innerText + '</a></div>': 1; 
       window.location.hash= "infor"; 
                              
    updateRoot(separateUrl(uRL)); 

     aar= getToBusiness(window.location.pathname); 
                 
        spr= ""; 
                 
        if(aar == ""){ 
             el= document.getElementsByClassName("file_tree")[0]; 

            for(Colombia in el.children){ 
                $(el.children[Colombia]).hasClass("folder_cont")? $($(el.children[Colombia]).children()[0]).addClass("inScope"): $(el.children[Colombia]).addClass("inScope"); 
            } 
            LEB= $("#preview .file_tree"); 

    for(eForensics in sprtdUrl){ 
        for(fi in $(LEB).children()){ 
            if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
            }
        } 
    } 

    $(LEB.children[0]).trigger("click", true); 

        }else{ 
                                   
            setTimeout(function(){ 
                spr= separateUrl(aar); 

                el= document.getElementsByClassName("file_tree")[0]; 
                                  
                for(Ty99 in spr){ 
                    for(eForensics in el.children){ 
                        if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                            if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                                el= el.children[eForensics]; 
                            } 
                        } 
                    } 
                 } 
                
                for(Colombia in getSiblings(el.children[0])){ 
                    getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
                } 
LEB= $("#preview .file_tree"); 

    for(eForensics in sprtdUrl){ 
        for(fi in $(LEB).children()){ 
            if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
            }
        } 
    } 

    $(LEB.children[0]).trigger("click", true); 
            }, 10); 

            spr= separateUrl(aar); 

            el= document.getElementsByClassName("file_tree")[0]; 
                              
            for(Ty99 in spr){ 
                for(eForensics in el.children){ 
                    if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                        if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                            el= el.children[eForensics]; 
                        } 
                    } 
                } 
             } 
            
            for(Colombia in getSiblings(el.children[0])){ 
                getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
            } LEB= $("#preview .file_tree"); 

    for(eForensics in sprtdUrl){ 
        for(fi in $(LEB).children()){ 
            if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
            }
        } 
    } 

    $(LEB.children[0]).trigger("click", true); 

        }
    
    //alert(sprtdUrl); 

    

    }) 

    typeof LEB != "undefined"? $(LEB).css({"padding": "", "height": "", "opacity": "1"}): 15637; 
             
    title(); 
} 

for(let folder of document.querySelectorAll("#preview .folder")) { 
  folder.addEventListener("contextmenu", function(e){ 
        e.preventDefault(); 
    
        LEB= $("#files .file_tree"); 
    
        sprtdUrl[sprtdUrl.length]= $(this).text(); 
        for(eForensics in sprtdUrl){ 
            for(fi in $(LEB).children()){ 
                if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                    $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
                } 
            } 
        } 
          
        rightClick(LEB.children[0]); 
    }) 


} 

$("#files .folder").click(function(i){ 
    $("#preview .file_tree").removeClass("visible"); 
    $("#preview #file_preview #file")[0].innerHTML=""; 
    $("#file_expl #information_cont").hasClass("visible")? $("#file_expl #information_cont").toggleClass("visible"): 666 
    $(".file").css({"top": "initial"}); 
    $(".folder_cont").css({"top": "initial"}); 
    index= Array.from(i.target.parentElement.parentElement.children).indexOf(i.target.parentElement); 
    $(".inScope").removeClass("inScope"); 
    $(this).siblings().addClass("inScope"); 
             
    uRL= ""; 
             
    t= $(this).parent(); 
                
    while(!t.is(".file_tree")){ 
        if(!t.hasClass("folder_cont")){ 
            uRL= t[0].innerText + uRL; 
        }else{ 
            uRL= t[0].children[0].textContent + "/" + uRL; 
        } 
          
        t= t.parent();  
    } 
      
    uRL= uRL.slice(0, uRL.length - 1); 
                                  
    history.pushState({page: 1}, "", "/" + username + "/p/" + pId + "/" + uRL); 
                                                                      
    (!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children.length - 1].outerHTML= '<div><a href=\"/' + username + '/p/' + pId + '\">' + $("#root")[0].children[0].children[$("#root")[0].children.length - 1].innerText + '</a></div>': 1; 
                                  
    updateRoot(separateUrl(uRL)); 

    

    aar= getToBusiness(window.location.pathname); 

        spr= ""; 
                 
        if(aar == ""){ 
            $(".inScope").removeClass("inScope"); 

            for(Colombia in el.children){ 
                el.children[Colombia].getAttribute("class").indexOf("folder_cont") == -1? el.children[Colombia].classList.add("inScope"): el.children[Colombia].children[0].classList.add("inScope"); 
            } 
            $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
        }else{ 
            $(".inScope").removeClass("inScope"); 
                                   
            setTimeout(function(){ 
                spr= separateUrl(aar); 

                el= document.getElementsByClassName("file_tree")[0]; 
                                  
                for(Ty99 in spr){ 
                    for(eForensics in el.children){ 
                        if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                            if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                                el= el.children[eForensics]; 
                            } 
                        } 
                    } 
                 } 
                
                for(Colombia in getSiblings(el.children[0])){ 
                    getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
                } $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            }, 10); 

            spr= separateUrl(aar); 

            el= document.getElementsByClassName("file_tree")[0]; 
                              
            for(Ty99 in spr){ 
                for(eForensics in el.children){ 
                    if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                        if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                            el= el.children[eForensics]; 
                        } 
                    } 
                } 
             } 
            
            for(Colombia in getSiblings(el.children[0])){ 
                getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
            } $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
        } 
          
        typeof LEB != "undefined"? $(LEB).css({"padding": "", "height": "", "opacity": "1"}): 15637; 
}); 
    
$("#preview .folder").click(function(i, triggered){ 
    if(triggered){ 
        $("#preview #file_expl #information_cont").hasClass("visible")? $("#file_expl #information_cont").toggleClass("visible"): 666 
        $("#preview .file").css({"top": "initial"}); 
        $("#preview .folder_cont").css({"top": "initial"}); 
        index= Array.from(i.target.parentElement.parentElement.children).indexOf(i.target.parentElement); 
        $("#preview .inScope").removeClass("inScope"); 
        $(this).siblings().addClass("inScope"); 
             
    

    

        aar= getToBusiness(window.location.pathname); 

        spr= ""; 
                 
        if(aar == ""){ 

            el= document.getElementsByClassName("file_tree")[1]; 
            $("#preview .inScope").removeClass("inScope"); 

            for(Colombia in el.children){ 
                el.children[Colombia].getAttribute("class").indexOf("folder_cont") == -1? el.children[Colombia].classList.add("inScope"): el.children[Colombia].children[0].classList.add("inScope"); 
            } 
            $("#preview .folder_cont .folder").css({"opacity": "0", "height": "0"}); 
            $("#preview .file").css({"opacity": "0", "height": "0"}); 
            $("#preview .folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $("#preview .file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
        }else{ 
            $("#preview .inScope").removeClass("inScope"); 
                                   
            setTimeout(function(){ 
                spr= separateUrl(aar); 

                el= document.getElementsByClassName("file_tree")[1]; 
                                  
                for(Ty99 in spr){ 
                    for(eForensics in el.children){ 
                        if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[1] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[1])){ 
                            if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                                el= el.children[eForensics]; 
                            } 
                        } 
                    } 
                 } 
                
                for(Colombia in getSiblings(el.children[0])){ 
                    getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
                } $("#preview .folder_cont .folder").css({"opacity": "0", "height": "0"}); 
            $("#preview .file").css({"opacity": "0", "height": "0"}); 
            $("#preview .folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $("#preview .file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            }, 10); 

            spr= separateUrl(aar); 

            el= document.getElementsByClassName("file_tree")[1]; 
                              
            for(Ty99 in spr){ 
                for(eForensics in el.children){ 
                    if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[1] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[1])){ 
                        if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                            el= el.children[eForensics]; 
                        } 
                    } 
                } 
             } 
            
            for(Colombia in getSiblings(el.children[0])){ 
                getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
            } $("#preview .folder_cont .folder").css({"opacity": "0", "height": "0"}); 
            $("#preview .file").css({"opacity": "0", "height": "0"}); 
            $("#preview .folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $("#preview .file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
        } 

    }else{ 
        LEB= $("#files .file_tree"); 

        sprtdUrl[sprtdUrl.length]= $(this).text(); 
        for(eForensics in sprtdUrl){ 
            for(fi in $(LEB).children()){ 
                if($($(LEB).children()[fi]).hasClass("folder_cont") && !$($(LEB).children()[fi]).hasClass("folder")){ 
                    $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
                } 
            } 
        } 
          
        LEB.children[0].click(); 
    } 

    typeof LEB != "undefined"? $(LEB).css({"padding": "", "height": "", "opacity": "1"}): 15637; 
}); 
    
$('#root div').click( function(e){ 
    history.pushState({page: 1}, "", e.target.url); 

    updateRoot(separateUrl(getToBusiness(e.target.url))); 
}); 
    
$("#Archivo, #Live, #Editar").click(function(){ 
    $("#preview .file_tree").removeClass("visible"); 
    $(".selected").removeClass("selected"); 
        $(this).addClass("selected"); 

        localStorage.setItem("selected", $(this)[0].innerText); 
                                            
    FileToRequest= window.location.pathname 
    slashCt= 0; 
    strtgIx= 0; 
                
    for(eForensics in FileToRequest){ 
        FileToRequest[eForensics] == "/"? slashCt++: 1; 

        if(slashCt < 2){ 
            strtgIx= parseInt(eForensics); 
        } 
    } 
      
    FileToRequest= FileToRequest.slice(0, strtgIx + 1) + "/raw/" + FileToRequest.slice(strtgIx + 2, FileToRequest.length); 
                                            
    if($("#Archivo").hasClass("selected")){ 
        $("#preview #file_preview #edit").css({"visibility": "hidden", "opacity": "0"}); 
        $("#preview #file_preview #filePr").css({"visibility": "hidden", "opacity": "0"}); 
        $("#preview #file_preview #file").css({"visibility": "visible", "opacity": "1"}); 
        $("#preview #file_preview #filePr")[0].innerHTML= ""; 
        $("#preview #file_preview #edit")[0].innerHTML= ""; 
            switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
                case "png": 
                case "jpg": 
                    $("#preview #file_preview #file")[0].innerHTML= "<img src='" +  FileToRequest + "'></img>"; 
                    break; 
                case "webm": 
                case "mp4": 
                    $("#preview #file_preview #file")[0].innerHTML= "<video src='" +  FileToRequest + "' controls= 'true' autoplay= 'true'></video>"; 
                    break; 
                default: 
                    $("#preview #file_preview #file")[0].innerHTML= "<pre onchange= 'alert(" +"'Yayy'" + ");' data-src='" +  FileToRequest + "'></pre>"; 
                    const mainNode = document.getElementsByTagName('pre')[0]

                    function callback(mutationsList, observer) {
                        mutationsList.forEach(mutation => {
                            if (mutation.attributeName === 'data-src-status') {
                                //$("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? console.log("loaded"): 1; 
                                $("#preview #file_preview #file pre")[0].getAttribute("data-src-status") == "loaded"? responsive(): 1; 
                            }
                        })
                    }
                    
                    const mutationObserver = new MutationObserver(callback)
                    
                    mutationObserver.observe(mainNode, { attributes: true }) 
                    
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

                                          
                    Prism.highlightAll(); 
                    break; 
            } 
    }else if($("#Live").hasClass("selected")){ 
        $(".code-filler").width(0); 
        $("#preview #file_preview #edit").css({"visibility": "hidden", "opacity": "0"}); 
        $("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
        $("#preview #file_preview #filePr").css({"visibility": "visible", "opacity": "1"}); 
        $("#preview #file_preview #file")[0].innerHTML= ""; 
        $("#preview #file_preview #edit")[0].innerHTML= ""; 
        $("#preview #file_preview #filePr")[0].innerHTML= "<div><iframe src='" +  FileToRequest + "'></iframe></div>"; 
    }else{ 
        $(".code-filler").width(0); 

        $("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
    $("#preview #file_preview #filePr").css({"visibility": "hidden", "opacity": "0"}); 
    $("#preview #file_preview #edit").css({"visibility": "visible", "opacity": "1"}); 
    a= ""; 

    function reqListener () {
            $("#preview #file_preview #edit")[0].innerHTML= "<div id= 'editor'></div>"; 
            ace.require("ace/ext/language_tools");
            editor = ace.edit("editor");
            editor.setTheme("ace/theme/monokai"); 
            editor.setValue(this.responseText); 
            editor.setOption("enableEmmet", true);
            editor.setOption("enableBasicAutocompletion", true); 
            editor.setOption("enableLiveAutocompletion", true); 
            editor.setOption("enableSnippets", true); 
            switch(sprtdUrl[sprtdUrl.length - 1].slice(sprtdUrl[sprtdUrl.length - 1].lastIndexOf(".") + 1)){ 
                case "js": 
                    var JavaScriptMode = ace.require("ace/mode/javascript").Mode; 
                    editor.session.setMode(new JavaScriptMode()); 
                    break; 
                case "css": 
                    var JavaScriptMode = ace.require("ace/mode/css").Mode; 
                    editor.session.setMode(new JavaScriptMode()); 
                    break; 
                case "html": 
                    var JavaScriptMode = ace.require("ace/mode/html").Mode; 
                    editor.session.setMode(new JavaScriptMode()); 
                    break; 
            } 
            
        }


    
    
        var xxa = new XMLHttpRequest();
        xxa.addEventListener("load", reqListener);
        xxa.open("GET", FileToRequest);
        xxa.send(); 




    
    }
}); 
    
$("#Raw").click(function(){ 
    window.open(FileToRequest, '_blank').focus(); 
}); 
$("#Editar").click(function(){ 
    

    
}); 
$('.code-scroll').on('scroll', function () { 
    $("#preview #file_preview #file pre").scrollLeft($(this).scrollLeft()); 
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
    
    $("#profilePic").on("click", function () {
        openProfilePicModal($(this))
    }); 
    
    $("#gallery img").on("click", function () {
        openModal($(this));
        responsive(); 
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

$(document).on("resize", function(){ 
    title(); 
}) 
   
title= function(){ 
    $("li").each(function(){ 
        var height= 0; 
        if(document.createRange){ 
            var range= document.createRange(); 
            range.selectNodeContents($(this)[0].childNodes[0]); 
            if(range.getBoundingClientRect){ 
                var rect= range.getBoundingClientRect(); 
                if(rect){ 
                    height= rect.bottom - rect.top; 
                } 
            } 
        } 
          
        if(height > 22){ 
            $(this).attr("title", $(this)[0].innerText); 
        }else{ 
            $(this).attr("title", ""); 
        } 
    }); 
}; 
   
function responsive() {

    $("#file_expl").height($(window).height() - $("header").outerHeight() - $("#root").outerHeight());
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
        $("#file_expl #preview").width($(window).width() - $("#file_expl #files").width()); 
        $("#file_expl #information_cont").height($("#file_expl").height() - 26);
        $("#preview #file").height($("#preview").height() - $("#preview #options").height()); 
        $("#preview #filePr").height($("#preview").height() - $("#preview #options").height()); 
        $("#preview #edit").height($("#preview").height() - $("#preview #options").height()); 
        $("#preview .file_tree").height($("#preview").height() - $("#options").height()); 
        $("#files .file_tree").height($("#files").height()); 
        if(!!$("#preview pre")[0]){ 
            if($("#preview pre")[0].scrollWidth > $("#preview pre").innerWidth() + 1){$("#preview pre").css({"padding-top": "32px"})}else{$("#preview pre").css({"padding-top": "16px"})}; 
        }
        if($("#Archivo").hasClass("selected")){
            $(".code-filler").width(function () {
                return parseFloat($("#file pre code").width()) + parseFloat($("#file pre").css("padding-left").slice(0, $("#file pre").css("padding-left").length - 2)) + parseFloat($("#file pre").css("padding-right").slice(0, $("#file pre").css("padding-right").length - 2)); 
            });
        }
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
  
separateUrl= function (r3){ 
    sprtdUrl= []; 
    fragment= ""; 
    for(eForensics in r3){ 
        if(parseInt(eForensics) == r3.length - 1 || r3[eForensics] == "/"){ 
            parseInt(eForensics) == r3.length - 1? fragment+= r3[eForensics]: 1; 
            sprtdUrl[sprtdUrl.length]= fragment.replaceAll("%20", " "); 
            fragment= ""; 
        }else{ 
            fragment+= r3[eForensics]; 
        } 
    } 
      
    return sprtdUrl; 
} 
  
updateRoot= function(a7){ 
    $("#root")[0].children[0].innerHTML= '<div><a url="/' + username + '.html">' + users_name + '</a></div><div><a url="/' + username + '/p.html">Proyectos</a></div><span><span>' + pNa + '</span></span>'; 
    
    (!!uRL.length && uRL.length > 0)? $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].outerHTML= '<div><a url=\"/' + username + '/p/' + pId + '\">' + $("#root")[0].children[0].children[$("#root")[0].children[0].children.length - 1].innerText + '</a></div>': 1; 

    for(eForensics in a7){ 
        if(window.location.hash== "#infor" && parseInt(eForensics) == a7.length - 1){ 
            genurl= "/" + username + "/p/" + pId + ""; 
                              
            for(idr= 0; idr <= parseInt(eForensics); idr++){ 
                genurl+= "/" + a7[idr]; 
            } 
      
            $("#root")[0].children[0].innerHTML= $("#root")[0].children[0].innerHTML + "<div class= 'noArrow'><a url=" + "'" + genurl +"'"+ ">" + a7[eForensics] + "</a></div>" + "<span><span>" + "#infor" + "</span></span>"
        }else if(parseInt(eForensics) != a7.length - 1){ 
            genurl= "/" + username + "/p/" + pId + ""; 
                              
            for(idr= 0; idr <= parseInt(eForensics); idr++){ 
                genurl+= "/" + a7[idr]; 
            } 
      
            $("#root")[0].children[0].innerHTML= $("#root")[0].children[0].innerHTML + "<div><a url=" + "'" + genurl +"'"+ ">" + a7[eForensics] + "</a></div>"
        }else{ 
            $("#root")[0].children[0].innerHTML= $("#root")[0].children[0].innerHTML + "<span><span>" + a7[eForensics] + "</span></span>"; 
        } 
    } 

    $('#root div div').click( function(e){ 
        debugger; 
        typeof LEB != "undefined"? $(LEB).removeClass("inScope"): 15637; 
                                       
        typeof LEB != "undefined"? $(LEB).css({"padding": "", "height": "", "opacity": "1"}): 15637; 
                                           
       if(!!e.target.getAttribute("url")){ 
        $("#preview .file_tree").removeClass("visible"); 
        $(".code-filler").width(0); 
        $("#preview #file_preview #file").css({"visibility": "hidden", "opacity": "0"}); 
        $("#preview #file_preview #filePr")[0].innerHTML= ""; 
        $("#preview #file_preview #file")[0].innerHTML=""; 
        $("#preview #file_preview #edit")[0].innerHTML=""; 
        $("#file_expl #information_cont").hasClass("visible")? $("#file_expl #information_cont").toggleClass("visible"): 666 
        $(".file").css({"top": "initial"}); 
        $(".folder_cont").css({"top": "initial"}); 
        history.pushState({page: 1}, "", e.target.getAttribute("url")); 
        updateRoot(separateUrl(getToBusiness(e.target.getAttribute("url")))); 
        $("#root")[0].children[0].lastChild.outerHTML= '<span><span>' + $("#root")[0].children[0].lastChild.textContent + '</span></span>'; 

        $(".file").css({"position": "initial"}); 
        $(".folder_cont").css({"position": "initial"})


    $(this).css({"display": "block"}); 
   
 
    $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            typeof LEB != "undefined"? $(LEB).css({"padding": "", "height": "auto", "opacity": "1"}): 15637; 

        aar= getToBusiness(window.location.pathname); 
                 
        spr= ""; 
                 
        if(aar == ""){ 
             el= document.getElementsByClassName("file_tree")[0]; 
            $(".inScope").removeClass("inScope"); 

            for(Colombia in el.children){ 
                $(el.children[Colombia]).hasClass("folder_cont")? $($(el.children[Colombia]).children()[0]).addClass("inScope"): $(el.children[Colombia]).addClass("inScope"); 
            } 
            $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            typeof LEB != "undefined"? $(LEB).css({"padding": "", "height": "auto", "opacity": "1"}): 15637; 
        }else{ 
            $(".inScope").removeClass("inScope"); 
                                   
            setTimeout(function(){ 
                spr= separateUrl(aar); 

                el= document.getElementsByClassName("file_tree")[0]; 
                                  
                for(Ty99 in spr){ 
                    for(eForensics in el.children){ 
                        if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                            if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                                el= el.children[eForensics]; 
                            } 
                        } 
                    } 
                 } 
                
                for(Colombia in getSiblings(el.children[0])){ 
                    getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
                } 

                $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
                $(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
                $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
                $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
                typeof LEB != "undefined"? $(LEB).css({"padding": "", "height": "auto", "opacity": "1"}): 15637; 
            }, 10); 

            spr= separateUrl(aar); 

            el= document.getElementsByClassName("file_tree")[0]; 
                              
            for(Ty99 in spr){ 
                for(eForensics in el.children){ 
                    if(($(el.children[eForensics]).hasClass("folder_cont")) && ((el != document.getElementsByClassName("file_tree")[0] && parseInt(eForensics) != 0) || el == document.getElementsByClassName("file_tree")[0])){ 
                        if(el.children[eForensics].children[0].textContent == spr[Ty99]){ 
                            el= el.children[eForensics]; 
                        } 
                    } 
                } 
             } 
            
            for(Colombia in getSiblings(el.children[0])){ 
                getSiblings(el.children[0])[Colombia].getAttribute("class").indexOf("folder_cont") == -1? getSiblings(el.children[0])[Colombia].classList.add("inScope"): getSiblings(el.children[0])[Colombia].children[0].classList.add("inScope"); 
            } $(".folder_cont .folder").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".file").css({"opacity": "0", "height": "0", "padding": "0"}); 
            $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 
            typeof LEB != "undefined"? $(LEB).css({"padding": "", "height": "auto", "opacity": "1"}): 15637; 
        }
       } 

        $(".folder_cont > .folder.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 

        $(".file.inScope").css({"opacity": "1", "height": "auto", "padding": "", "border-bottom": ""}); 

       title(); 
    }); 

    
    /*$("#root div").click(function(){ 
    
})*/
} 

getToBusiness= function(r6){ 
    slashCount= 0; 
    iX= 0123666123; 
           
    for(eForensics in r6){ 
        r6[eForensics] == "/"? slashCount++: "Whatever"; 

        (slashCount == 4 && iX == 0123666123)? iX= parseInt(eForensics) + 1: 1; 
    } 
      
    return r6.slice(iX, r6.length).replaceAll("%20", " "); // -1??
}

var getSiblings = function (elem) {

    // Setup siblings array and get the first sibling
    var siblings = [];
    var sibling = elem.parentNode.firstChild;

    // Loop through each sibling and push to the array
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling
    }

    return siblings;

}; 

rightClick= function(axx){ 
    if (window.CustomEvent) {
        axx.dispatchEvent(new CustomEvent('contextmenu'));
    } else if (document.createEvent) {
        var ev = document.createEvent('HTMLEvents');
        ev.initEvent('contextmenu', true, false);
        axx.dispatchEvent(ev);
    } else { // Internet Explorer
        axx.fireEvent('oncontextmenu');
    }
}