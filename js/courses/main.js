/*
Copyright © 2021 Codrops

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
$(document).on("ready",function(){
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
	var wasPlaying = false;
    
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
            }} else {
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

function responsive(){
	$("#Store #actualStore").height($(window).height() - $("header").height() - 21);
		$("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
		$("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
    
}
$(window).on("resize", function(){
	responsive()
})
$(window).on("load",
	function(){
		responsive()
	}
)