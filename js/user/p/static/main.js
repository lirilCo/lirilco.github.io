document.addEventListener("DOMContentLoaded", function(){ 
    sprtdUrl= separateUrl(getToBusiness(decodeURIComponent(window.location.pathname))); 

    LEB= $("#files .file_tree"); 
                             
    for(eForensics in sprtdUrl){ 
        for(fi= 0; fi <= $(LEB).children().length - 1; fi++){ 
            if(($($(LEB).children()[fi]).hasClass("folder_cont") || $($(LEB).children()[fi]).hasClass("file"))){ 
                (!$($(LEB).children()[fi]).hasClass("file") && $($(LEB).children()[fi]).children()[0].innerText == sprtdUrl[eForensics])? LEB= $($(LEB).children()[fi])[0]: $($(LEB).children()[fi])[0].innerText == sprtdUrl[eForensics]? LEB= $($(LEB).children()[fi])[0]: 1; 
            } 
        } 
    } 
  
    $(LEB).is(".folder_cont")? LEB= $(LEB).children()[0]: 1; 

    $(".inScope").removeClass("inScope"); 

    window.location.hash == "#infor"? $(LEB)[0].dispatchEvent(new CustomEvent('contextmenu')): $(LEB).trigger("click", true); 

    localStorage.getItem("filesWidth") != null? $("#files").width(parseInt(localStorage.getItem("filesWidth")) + "px"): 1216564; 

    responsive(); 

    localStorage.getItem("selected") != null? $("#"+ localStorage.getItem("selected")).click(): 3413221227; 
                              
    $(LEB).addClass("inScope")
                              
    LEB.removeAttribute( "style" )
}); 