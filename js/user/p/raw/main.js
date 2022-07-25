console.log( window.location.pathname + "p" + window.location.hash.slice( 1 ) ); 

bU= ( aU= window.location.toString().replace( window.location.origin, "" ) ).replace( "/raw/#", "/raw/p" ); 

blinking_I= 0; 

const FileToRequest= window.location.pathname + "p" + window.location.hash.slice( 1 ); 

function tagReplacer( HtML ){ 
    var response= []; 
                                      
    for( e in HtML ){ 
        /*console.log( HtML.slice( parseInt( e ), ( parseInt( e ) + 6 ) ) ); */ 

        //console.log( parseInt( e ) + 4 );  

        switch( HtML.slice( parseInt( e ), ( parseInt( e ) + 6 ) ) ){ 
            case "<scrip": case "< scri": case "<  scr": 
                response[response.length]= [HtML.slice( parseInt( e ), parseInt( e ) + HtML.slice( parseInt( e ), HtML.length - 1 ).indexOf( "</script>" ) + "</script>".length + 1 ), [parseInt( e ), parseInt( e ) + HtML.slice( parseInt( e ), HtML.length - 1 ).indexOf( "</script>" ) + "</script>".length + 1], "sc"]; 
                break; 
            case "<link ": case "< link": case "<  lin": 
                response[response.length]= [HtML.slice( parseInt( e ), parseInt( e ) + HtML.slice( parseInt( e ), HtML.length - 1 ).indexOf( ">" ) + ">".length + 1 ), [parseInt( e ), parseInt( e ) + HtML.slice( parseInt( e ), HtML.length - 1 ).indexOf( ">" ) + ">".length + 1], "st"]; 
                break; 
        }; 
    }; 

    return response; 
}; 
   
root_url= function( url ){ 
    if( url.indexOf( "http" ) === 0 ) 
    	return url; 
    switch( url[0] ){ 
        case "/": 
            return url; 
            break; 
        case ".": 
            switch( url[1] ){ 
                case "/": 
                    return FileToRequest.slice( 0, FileToRequest.lastIndexOf( "/" ) ) + url.slice( 1 ); 
                    break; 
                case ".": 
                    f_t_r= FileToRequest.slice( 0, FileToRequest.lastIndexOf("/") ); 
                    uhl= url; 

                    while( uhl.indexOf("../") == 0 ){ 
                        uhl= uhl.slice( 3 ); 
                        f_t_r= f_t_r.slice( 0, f_t_r.lastIndexOf("/") ); 
                    } 
                      
                    /*console.log(  ); */ 

                    return ( f_t_r + "/" + uhl ); 
                    break; 
            } 
            break; 
        default: 
            return FileToRequest.slice( 0, FileToRequest.lastIndexOf( "/" ) + 1 ) + url; 
            break; 
    } 
}; 
   
function get( tG, f ){ 
    var a= f.slice( f.indexOf( tG ) + tG.length, f.length - 1 ); 
    return (function(){return ( a.slice( a.indexOf('"') + 1 ).slice( 0, a.slice( a.indexOf( '"' ) + 1 ).indexOf( '"' ) ) )})(); 
}; 

relative_url= function( url ){ 
    for( var a= 0; a < 5; a++ ) 
        {url= url.slice( url.indexOf( "/" ) + 1 )}; 
    return "/" + url; 
} 
  
root_and_raw_urls_in_HTMLs= function( doc ){
	var nDoc= doc; 

    var eq= ["= ", "=", " = ", "  =", "  = ", " =", "=  "]; 
                                                            
    re= [new RegExp("'([^']*)'", "g"), new RegExp('"([^"]*)"', "g")]; 
                    
	while( ( match= re[1].exec( doc ) ) !== null ){ 
		   	u= parseInt( match && match.index ); 

		   	for( i in eq ){ 
		    	//console.log( doc.slice( parseInt( u - ( "href".length + eq[i].length ) ), u ) + "+ " + 'href' + eq[i]);  
		    	//console.log( parseInt( u - ( "href".length + eq[i].length ) ) + ", ", u );  
		    	
		    	["href", "src"].forEach( j => ( function( x ){//console.log( doc.slice( parseInt( u - ( x.length + eq[i].length ) ), u ) + "+ " + ( x + eq[i] ), doc.slice( parseInt( u - ( x.length + eq[i].length ) ), u ) === ( x + eq[i] ) );  

		    	if( doc.slice( parseInt( u - ( x.length + eq[i].length ) ), u ) === x + eq[i] ){ 
					nDoc= nDoc.replaceAll( match[0], '"' + root_url( match[1] ) + '"' ); 
				} } )( j ) ); 

		    	var x= "from "; 
				if( doc.slice( parseInt( u - ( x.length ) ), u ) === x ){ 
					nDoc= nDoc.replaceAll( match[0], '"' + root_url( match[1] ) + '"' ); 
				}
		   	} 

		   /*if( doc.slice( i - rg.length, i ) === rg ){ 
		    /*console.log( doc.slice( i - rg.length, i ) ); */ /* 
		    doc= doc.replaceAll( match[0], '"' + root_url( match[1] ) + '"' ); 
		   } */ 
		   //console.log( rg + "+ "  + rg.length );  
	} 

    //for( i in eq ){  
    //    rg= 'href' + eq[i];  
                              
    //    mT= undefined;  
        
    //    /*mT= [[...doc.matchAll( rg + re[0] )], [...doc.matchAll( rg + re[1] )]]; */  
        
    //    //a= [...doc.matchAll( rg + re[1] )];   



    //    /*rg= 'src' + eq[i];  

    //    mT= undefined;  
        
    //    //mT= [[...doc.matchAll( rg + re[0] )], [...doc.matchAll( rg + re[1] )]];   
        
    //    while( ( match= re[1].exec( doc ) ) !== null ){  
	//	    i= parseInt( match && match.index );  
	//	    if( doc.slice( i - rg.length, i ) === rg ){  
	//	    	/*console.log( doc.slice( i - rg.length, i ) ); */ /*  
	//	    	doc= doc.replaceAll( match[0], '"' + root_url( match[1] ) + '"' );  
	//	    }  
	//	   	//console.log( rg + "+ "  + rg.length );   
	//	} */  

    //    /*for( u in mT ){  
    //    	for(k in mT[u])  
    //        	doc= ( mT[u][k][1].indexOf( "http" ) == -1 && mT[u][k][1][0] != "/" )? doc.replaceAll( mT[u][k][1], root_url( mT[u][k][1] ) ): doc;  
    //    } */  
    //} 
      
    /*rg= 'from '; 
                      
    mT= undefined; 

    mT= [[...doc.matchAll( rg + re[0] )], [...doc.matchAll( rg + re[1] )]]; 

    console.log(rg + re[0] + "    " + rg + re[1]); 
    for( u in mT ){ 
        for(k in mT[u]) 
        	doc= ( mT[u][k][1].indexOf( "http" ) == -1 && mT[u][k][1][0] != "/" )? doc.replaceAll( mT[u][k][1], root_url( mT[u][k][1] ) ): doc; 
    } */ 

    return nDoc; 
}
  
$( document ).on( "ready", function(){
    purger.purge(); 
                    
 	function reqListener () { 
        respuesta= localStorage.getItem(FileToRequest) != null? JSON.parse( localStorage.getItem( FileToRequest ) ).value: this.responseText; 

        //console.log( respuesta ); 
        for( t in tagReplacer( respuesta ) ){ 
            if(tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )] != undefined) 
                if( !!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) ) ){ 
            		isModule= ( "type", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ).indexOf( "module" ) != -1; 
                    respuesta= respuesta.slice( 0, tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][1][0] ) + "<script class= 'scriptModificado' " + ( isModule? "type= 'module'": "" ) + " id= '" + get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + "'>\n\n /*" + get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) ) ).value + "\n\n</script>" + respuesta.slice( tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][1][1] - 1, respuesta.length ); 
                } 
                if( !!localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] )  ) ) ){ 
                    respuesta= respuesta.slice( 0, tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][1][0] ) + "<style class= 'styleModificado' id= '" + get( "href", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + "'>\n\n /*" + get( "href", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + "*/\n\n" + JSON.parse( localStorage.getItem( root_url( get( "href", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) ) ).value + "\n\n</style>" + respuesta.slice( tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][1][1] - 1, respuesta.length ); 
                }; 
            /*console.log( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) + (!!localStorage.getItem( root_url( get( "src", tagReplacer( respuesta )[tagReplacer( respuesta ).length - 1 - parseInt( t )][0] ) ) )? " ∘  modified": "    not modified") ); */ 
        }; 

        respuesta= respuesta.indexOf( "<!" ) !== 0? "<pre>" + respuesta + "</pre>": respuesta; 

        document.open(); 
        console.log( respuesta ); 
        document.write( root_and_raw_urls_in_HTMLs( respuesta ) ); 
        document.close(); 
		var blinking= setInterval( function(){ blinking_I++; window.location.toString().replace( window.location.origin, "" ) === aU? history.pushState( {page: 1}, "", bU ): window.location.toString().replace( window.location.origin, "" ) === bU? history.pushState( {page: 1}, "", aU ): 1; blinking_I >= 18? ( function(){if( [bU, aU].indexOf( window.location.toString().replace( window.location.origin, "" ) ) != -1 )history.pushState( {page: 1}, "", aU ); clearInterval( blinking )} )(): 1}, 239 ); 
    }; 
       
    var xxa = new XMLHttpRequest(); 
    xxa.addEventListener("load", reqListener); 
    xxa.open("GET", FileToRequest); 
    xxa.send(); 
} )
    
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