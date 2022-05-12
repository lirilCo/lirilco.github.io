document.addEventListener("DOMContentLoaded", function(){ 
    sprtdUrl= separateUrl(getToBusiness(window.location.pathname.replaceAll("%20", " ").replaceAll("%C3%A1", "á").replaceAll("%C3%81", "Á").replaceAll("%C3%A9", "é").replaceAll("%C3%89", "É").replaceAll("%C3%AD", "í").replaceAll("%C3%8D", "Í").replaceAll("%C3%B3", "ó").replaceAll("%C3%93", "Ó").replaceAll("%C3%BA", "ú").replaceAll("%C3%9A", "Ú"))); 

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

    window.location.hash == "#infor"? $(LEB).dispatchEvent(new CustomEvent('contextmenu')): $(LEB).trigger("click", true); 

    localStorage.getItem("filesWidth") != null? $("#files").width(parseInt(localStorage.getItem("filesWidth")) + "px"): 1216564; 

    responsive(); 

    localStorage.getItem("selected") != null? $("#"+ localStorage.getItem("selected")).click(): 3413221227; 
}); 