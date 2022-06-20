selfDestructableSetIntervalWhichWaitsForSomething= setInterval(function(){
    if(typeof THREE != "undefined"){
    console.log(`
           *                     +     *                                                                      
              **       *                 *  *                                                             *   
       *   * *          *                  Puedes actualizar las propiedades de Vv11 desde la consola,        
                   *                                               *  usa ese código para refrescar la escena 
                      +       *    *       *                           *                                      
         *       +                  +      *                                                                  
            renderer.render( scene, camera ); 
    `); 

    const loader = new SVGLoader(); 

    getSizes= function( oBjE ){ 
        boundingBox = new THREE.Box3().setFromObject( oBjE ); 
        return { x: boundingBox.max.x - boundingBox.min.x, y: boundingBox.max.y - boundingBox.min.y, z: boundingBox.max.z - boundingBox.min.z }; 
    } 
    
    THREE.Group.prototype.translate= function( x, y, z ){ 
        this.translateX( x ); 
        this.translateY( y ); 
        this.translateX( z ); 
    } 

    group = new THREE.Group(); 

    loadSVG= function( svgLink, eXDepth, mAterial ){     
        loader.load(
            // resource URL
            svgLink,
            // called when the resource is loaded
            function ( data ) {
        
                const paths = data.paths;
        
                for ( let i = 0; i < paths.length; i ++ ) {
        
                    path = paths[ i ];
        
        
                    shapes = SVGLoader.createShapes( path );
        
                    for ( let j = 0; j < shapes.length; j ++ ) {
        
                        shape = shapes[ j ];
                        eXtrudagetious = new THREE.ExtrudeGeometry( shape, {depth: eXDepth, bevelEnabled: false} );
                        mesh = new THREE.Mesh( eXtrudagetious, mAterial ); 
                        console.log( getSizes( mesh ) ); 
                        group.add( mesh );
        
                    }
        
                }
        
                scene.add( group ); 

                group.translate( -getSizes( group ).x / 2, getSizes( group ).y / 2, 0 ); 
                
                group.scale.y= -1; 
            },
            // called when loading is in progresses
            function ( xhr ) {
        
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        
            },
            // called when loading has errors
            function ( error ) {
        
                console.log( 'An error happened' );
        
            }
        );
    }; 

    loadSVG( 'resources/Calles/StreetIII.svg', 0.1294318, new THREE.MeshStandardMaterial({ color: 0xfef0fe, roughness: 1, reflectivity: 0.47 }) ); 
    
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.001, 89 );
    camera.position.z= 0.888; 
    camera.position.x = -0.01; 
    camera.position.y = -0.7;
    camera.rotation.x= Math.PI / 180 * 90; 
    scene = new THREE.Scene();
    
    geometry = new THREE.BoxGeometry( 0.17, 0.3, 0.06 );
    material = new THREE.MeshPhongMaterial({ color: 0xffdccd });
    
    Vv11 = new THREE.Object3D();
    Vv11c = new THREE.Mesh( geometry, material );
    
    
    Vv11w = new THREE.Shape();
    Vv11w.absarc(0, 0, 0.02);
    
    // Create a new geometry by extruding the triangleShape
    // The option: 'amount' is how far to extrude, 'bevelEnabled: false' prevents beveling
    Vv11w1 = new THREE.ExtrudeGeometry(Vv11w, {depth: 0.009, bevelEnabled: false});
    Vv11w2 = new THREE.ExtrudeGeometry(Vv11w, {depth: 0.009, bevelEnabled: false});
    Vv11w3 = new THREE.ExtrudeGeometry(Vv11w, {depth: 0.009, bevelEnabled: false});
    Vv11w4 = new THREE.ExtrudeGeometry(Vv11w, {depth: 0.009, bevelEnabled: false});
    
    
    
    
    right_head_light = new THREE.Mesh( new THREE.BoxGeometry( 0.01975, 0.005, 0.0087 ), new THREE.MeshBasicMaterial({ color: 0xffffff }) ); 
    
    right_head_light.position.x= 0.066; 
    right_head_light.position.y= 0.15; 
    right_head_light.position.z= -0.003; 
    
    Vv11.add( right_head_light ); 
    
    
    head_light = new THREE.Mesh( new THREE.BoxGeometry( 0.01975, 0.005, 0.0087 ), new THREE.MeshBasicMaterial({ color: 0xffffff }) ); 
    
    head_light.position.x= -0.066; 
    head_light.position.y= 0.15; 
    head_light.position.z= -0.003; 
    
    
    Vv11.add( head_light ); 
    
    
    const targetHL1P = new THREE.Object3D();
    const targetHL2P = new THREE.Object3D();
    
    
    head_light1 = new THREE.SpotLight( 0xcddde7, 5,  2.8 ); 
    head_light1.color= {r: 1, g: 1, b: 1}; 
    head_light1.intensity= 4.98; 
    head_light1.penumbra= 0.73;
    head_light1.power= 8;
    head_light1.position.x= -0.066; 
    head_light1.position.y= 0.15; 
    head_light1.position.z= -0.003; 
    head_light1.rotation.x= -Math.PI / 4; 
    head_light1.rotation.y= 0; 
    head_light1.rotation.z= 0; 
    head_light1.target = targetHL1P;
    head_light1.target.position.x= -0.07; 
    head_light1.target.position.y= 1.28; 
    head_light1.target.position.z= -0.003; 
    
    head_light2 = new THREE.SpotLight( 0xcddde7, 5,  2.8 ); 
    head_light2.color= {r: 1, g: 1, b: 1}; 
    head_light2.intensity= 4.98; 
    head_light2.penumbra= 0.73;
    head_light2.power= 8;
    head_light2.position.x= 0.066; 
    head_light2.position.y= 0.15; 
    head_light2.position.z= -0.003; 
    head_light2.rotation.x= -Math.PI / 4; 
    head_light2.rotation.y= 0; 
    head_light2.rotation.z= 0; 
    head_light2.target = targetHL2P;
    head_light2.target.position.x= 0.07; 
    head_light2.target.position.y= 1.28; 
    head_light2.target.position.z= -0.003; 
    
    
    Vv11.add( head_light1.target ); 
    Vv11.add( head_light1 ); 
    
    
    Vv11.add( head_light2.target ); 
    Vv11.add( head_light2 ); 


    // Geometry doesn't do much on its own, we need to create a Mesh from it
    Vv11w1 = new THREE.Mesh(Vv11w1, material);
    Vv11w2 = new THREE.Mesh(Vv11w2, material);
    Vv11w3 = new THREE.Mesh(Vv11w3, material);
    Vv11w4 = new THREE.Mesh(Vv11w4, material);
    
    Vv11w1.rotation.x= Math.PI / 2
    Vv11w2.rotation.x= Math.PI / 2
    Vv11w3.rotation.x= Math.PI / 2
    Vv11w4.rotation.x= Math.PI / 2
    Vv11w1.rotation.y= Math.PI / 2
    Vv11w2.rotation.y= Math.PI / 2
    Vv11w3.rotation.y= Math.PI / 2
    Vv11w4.rotation.y= Math.PI / 2
    Vv11w1.rotation.z= 0
    Vv11w2.rotation.z= 0
    Vv11w3.rotation.z= 0
    Vv11w4.rotation.z= 0
    
    Vv11w1.position.x= -0.095
    Vv11w2.position.x= 0.085
    Vv11w3.position.x= -0.095
    Vv11w4.position.x= 0.085
    
    Vv11w1.position.y= -0.11
    Vv11w2.position.y= -0.11
    Vv11w3.position.y= 0.11
    Vv11w4.position.y= 0.11
    
    
    Vv11w1.position.z= -0.033; 
    Vv11w2.position.z= -0.033; 
    Vv11w3.position.z= -0.033; 
    Vv11w4.position.z= -0.033; 
    
    Vv11.add( Vv11c )
    Vv11.add( Vv11w1 );
    Vv11.add( Vv11w2 );
    Vv11.add( Vv11w3 );
    Vv11.add( Vv11w4 );
    
    ambiance = new THREE.PointLight( 0xcddde7, 5,  2.8 ); 
    ambiance.color= {r: 0.37, g: 1, b: 0.863}; 
    ambiance.intensity= 1.58; 
    ambiance.position.x= 0; 
    ambiance.position.y= -1; 
    ambiance.position.z= 0.3; 
    ambiance.rotation.x= -Math.PI / 4; 
    ambiance.rotation.y= 0; 
    ambiance.rotation.z= 0; 
    
    scene.add( ambiance ); 
    
    
    scene.add( Vv11 );
    

    un_grado_en_radianes= Math.PI / 180; 
    

    Vv11.rotation.z= 218 * un_grado_en_radianes; 
    Vv11.position.x= -15.856107644517733; 
    Vv11.position.y= 14.452729334533183; 

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    
    getInQuadrant= function(ángulo){ 
        ángulo= ángulo; 
        while(ángulo < -360)ángulo+=360; 
        while(ángulo > 360)ángulo-=360; 
        if(ángulo < 0)ángulo=(360+ángulo); 
        return ángulo; 
    } 
      
    xEYConElÁngulo= function( d, á ){ 
        á= á * Math.PI / 180; //Convertir de grados a radianes 
        
        if(á < Math.PI / 2)return {x: d * parseFloat(Math.cos(á)), y: parseFloat(-(d * Math.sin(á)))}; 
        if(á == Math.PI / 2)return {x: 0, y: -d}; 
        if(á <= Math.PI)return {x: parseFloat(-(d * Math.cos(Math.PI - á))), y: parseFloat(-(d * Math.sin(Math.PI - á)))}; 
        if(á <= Math.PI / 2 * 3)return {x: parseFloat(-(d * Math.sin((Math.PI / 2 * 3) - á))), y: parseFloat(d * Math.cos((Math.PI / 2 * 3) - á))}; 
        if(á <= Math.PI * 2)return {x: parseFloat(d * Math.cos((Math.PI * 2) - á)), y: parseFloat((d * Math.sin((Math.PI * 2) - á)))}; 
    } 
    
    ángDeLaPendiente= function(x1, y1, x2, y2){ 
        c1= { x: x1, y: y1 }; 
        c2= { x: x2, y: y2 }; 
                          
        if(c2.x <= c1.x){ 
            cS= c1; 
            c1= c2; 
            c2= cS; 
            return getInQuadrant(-getInQuadrant((Math.atan2(-( c2.y - c1.y ) , -( c2.x - c1.x ))*(180/Math.PI)))); 
        }else{ 
            return getInQuadrant(getInQuadrant((Math.atan2(-( c2.y - c1.y ) , ( c2.x - c1.x ))*(180/Math.PI)))); 
        }; 
    } 
    

    v3 = new THREE.Vector3( 0, 0, 0 ); 
    
    curve = new THREE.QuadraticBezierCurve(
        new THREE.Vector3( Vv11w2.getWorldPosition(v3).x, Vv11w2.getWorldPosition(v3).y, -1.1 ),
        new THREE.Vector3( 0.20, 0.15, -1.1 ),
        new THREE.Vector3( 0.10, 0, -1.1 )
    );
    
    
    points = curve.getPoints( 50 );
    x = new THREE.BufferGeometry().setFromPoints( points );
    
    console.log(x); 
    
    zz = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
    
    // Create the final object to add to the scene
    curveObject = new THREE.Line( x, zz );
    curveObject.name = 'qB';
    
    scene.add( curveObject ); 
    
    
    bEZ= new Bezier( [ { x: curve.v0.x , y: curve.v0.y } , { x: curve.v1.x , y: curve.v1.y } , { x: curve.v2.x , y: curve.v2.y } ] ) 
    
    points = curve.getPoints( 50 );
    x = new THREE.BufferGeometry().setFromPoints( points );
    zz = new THREE.LineBasicMaterial( { color: 0xff0000 } );
    oldCurve = new THREE.Line( x, zz );
    oldCurve.name = 'oQB';
    
    scene.add( oldCurve ); 
    
    

    curve2 = new THREE.QuadraticBezierCurve3( 
        new THREE.Vector3( Vv11w3.getWorldPosition(v3).x + xEYConElÁngulo( 0.22, getInQuadrant( -getInQuadrant( Vv11.rotation.z / un_grado_en_radianes + 90 ) ) ).x , Vv11w3.getWorldPosition(v3).y + xEYConElÁngulo( 0.22, getInQuadrant( -getInQuadrant( Vv11.rotation.z / un_grado_en_radianes + 90 ) ) ).y , (-0.033 - 0.012) ),
        new THREE.Vector3( Vv11w3.getWorldPosition(v3).x , Vv11w3.getWorldPosition(v3).y , (-0.033 - 0.012) ),
        new THREE.Vector3( (Vv11w3.getWorldPosition(v3).x - xEYConElÁngulo( 0.22, parseFloat($(".bugger").text()) ).x) , (Vv11w3.getWorldPosition(v3).y - xEYConElÁngulo( 0.22, parseFloat($(".bugger").text())).y), (-0.033 - 0.012) )
    ); 
        
    points2 = curve2.getPoints( 50 );
        
    x = new THREE.BufferGeometry().setFromPoints( points2 );
        
    zz = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
        
    curveObject2 = new THREE.Line( x, zz );
    
    scene.add( curveObject2 ); 
    

    bEZ2= new Bezier( [ { x: curve2.v0.x , y: curve2.v0.y } , { x: curve2.v1.x , y: curve2.v1.y } , { x: curve2.v2.x , y: curve2.v2.y } ] );
                

    points2 = curve2.getPoints( 50 );
    x = new THREE.BufferGeometry().setFromPoints( points2 );
    zz = new THREE.LineBasicMaterial( { color: 0xff0000 } );
    oldCurve2 = new THREE.Line( x, zz );
    
    scene.add( oldCurve2 ); 


    elipse = new THREE.EllipseCurve(
        0,  0,            
        0.22, 0.22,           
        0,  2 * Math.PI,  
        false,            
        0                 
    );
    
    pts = elipse.getPoints( 360 );
    geometry = new THREE.BufferGeometry().setFromPoints( pts );
    
    
    elps = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xff0000 } ) ); 
    
    elps.position.z= (-0.033 - 0.012); 
    
    scene.add( elps ); 



    elipse2 = new THREE.EllipseCurve(
        0,  0,            
        0.22, 0.22,           
        0,  2 * Math.PI,  
        false,            
        0                 
    );
    
    pts2 = elipse2.getPoints( 360 );
    geometry2 = new THREE.BufferGeometry().setFromPoints( pts );
    
    material2 = new THREE.LineBasicMaterial( { color: 0xff0000 } );
    
    
    elps2 = new THREE.Line( geometry2, material2 ); 
    
    elps2.position.z= (-0.033 - 0.012); 
    
    scene.add( elps2 ); 



    
    closestP= {}; 
    
    closestP2= {}; 



    intersección = new THREE.Mesh( new THREE.BoxGeometry( 0.013, 0.013, 0.013 ), new THREE.MeshPhongMaterial({ color: 0x1fa2b2 }) );
    
    intersección2 = new THREE.Mesh( new THREE.BoxGeometry( 0.013, 0.013, 0.013 ), new THREE.MeshPhongMaterial({ color: 0x1fa2b2 }) );

    
    
    Terreno = new THREE.Mesh( new THREE.BoxGeometry( 72, 72, 1.89 ), new THREE.MeshStandardMaterial({ color: 0xfef0fe, roughness: 1, reflectivity: 0.47 }) );
    
    Terreno.position.z= ( -0.033 - 0.02 - 0.5 - 0.445 )
    
    scene.add( intersección ); 


    scene.add( intersección2 ); 


    scene.add( Terreno ); 
    
    gM1 = new THREE.Mesh( new THREE.BoxGeometry( 1, 2, 0.787 ), new THREE.MeshPhongMaterial({ color: 0xfef0fe , reflectivity: 0.47 }) );
    gM1.position.x= -2.124; 
    gM1.position.y= 3.1; 
    gM1.position.z= -0.033 - 0.02 - 0.5 + 0.787 / 2; 
    
    scene.add( gM1 ); 
    
    gM2 = new THREE.Mesh( new THREE.BoxGeometry( 1, 2.1, 26.22 ), new THREE.MeshPhongMaterial({ color: 0xfef0fe , reflectivity: 0.47 }) );
    gM2.position.x=  1.5; 
    gM2.position.y= 8.7; 
    gM2.position.z= -0.033 - 0.02 - 0.5 + 26.22 / 2; 
    
    scene.add( gM2 ); 
    
    gM3 = new THREE.Mesh( new THREE.BoxGeometry( 1, 2.1, 2.8 ), new THREE.MeshPhongMaterial({ color: 0x010f01 , reflectivity: 0.47 }) );
    gM3.position.x=  9.5; 
    gM3.position.y= -0.008; 
    gM3.position.z= -0.033 - 0.02 - 0.5 + 2.8 / 2; 
    
    scene.add( gM3 ); 
    
    gM4 = new THREE.Mesh( new THREE.BoxGeometry( 1.88889, 1.899, 1.99 ), new THREE.MeshPhongMaterial({ color: 0xfef0fe , reflectivity: 0.47 }) );
    gM4.position.x=  9.5; 
    gM4.position.y= -0.008; 
    gM4.position.z= -0.033 - 0.02 - 0.5 + 1.99 / 2; 
    
    scene.add( gM4 ); 
    
    gM5 = new THREE.Mesh( new THREE.BoxGeometry( 3.12516, 0.899, 2.99 ), new THREE.MeshPhongMaterial({ color: 0xd892fe , reflectivity: 0.47 }) );
    gM5.position.x=  9.5; 
    gM5.position.y= -0.008; 
    gM5.position.z= -0.033 - 0.02 - 0.5 + 2.99 / 2; 
    
    scene.add( gM5 ); 
    
    gM6 = new THREE.Mesh( new THREE.BoxGeometry( 0.12516, 1.2299, 12.99 ), new THREE.MeshPhongMaterial({ color: 0xd235ee , reflectivity: 0.47 }) );
    gM6.position.x=  9.5; 
    gM6.position.y= -0.008; 
    gM6.position.z= -0.033 - 0.02 - 0.5 + 12.99 / 2; 
    
    scene.add( gM6 ); 
    
    gM7 = new THREE.Mesh( new THREE.BoxGeometry( 0.42516, 2.3299, 8.1 ), new THREE.MeshPhongMaterial({ color: 0xdd2112 , reflectivity: 0.47 }) );
    gM7.position.x=  9.5; 
    gM7.position.y= -0.008; 
    gM7.position.z= -0.033 - 0.02 - 0.5 + 8.1 / 2; 
    
    scene.add( gM7 ); 
    
    gM8 = new THREE.Mesh( new THREE.BoxGeometry( 1.42516, 0.3499, 18.1 ), new THREE.MeshPhongMaterial({ color: 0xd555f2 , reflectivity: 0.47 }) );
    gM8.position.x=  9.5; 
    gM8.position.y= -0.008; 
    gM8.position.z= -0.033 - 0.02 - 0.5 + 18.1 / 2; 
    
    scene.add( gM8 ); 
    
    gM9 = new THREE.Mesh( new THREE.BoxGeometry( 2.72516, 0.007499, 10.1 ), new THREE.MeshPhongMaterial({ color: 0x32342d , reflectivity: 0.47 }) );
    gM9.position.x=  9.5; 
    gM9.position.y= -0.008; 
    gM9.position.z= -0.033 - 0.02 - 0.5 + 10.1 / 2; 
    
    scene.add( gM9 ); 
    
    gM10 = new THREE.Mesh( new THREE.BoxGeometry( 1.2, 1.98, 2.8 ), new THREE.MeshPhongMaterial({ color: 0x52972d , reflectivity: 0.47 }) );
    gM10.position.x=  9.5; 
    gM10.position.y= -0.008; 
    gM10.position.z= -0.033 - 0.02 - 0.5 + 2.8 / 2; 
    
    scene.add( gM10 ); 
    
    
    luz_direccional = new THREE.DirectionalLight( 0xfdfdde ); 
    luz_direccional.intensity= 1.5; 
    luz_direccional.castShadow= true; 
    luz_direccional.position.set( 5, 2.04, 2.991 ); 
    
    scene.add( luz_direccional ); 
    
    dirLight = new THREE.DirectionalLight( 0xfdfdde ); 
    dirLight.intensity= 0.5; 
    dirLight.position.set( -5, -2.04, -2.991 ); 
    
    scene.add( dirLight ); 
        
    
    ad= {}; 
    ad.d= 10000; 
    for( ww= 0; ww < 360; ww++ ){ 
        if( bEZ.project( { x: pts[ww].x + elps.position.x , y: pts[ww].y + elps.position.y } ).d < ad.d ) 
        { 
            ad= bEZ.project( { x: pts[ww].x + elps.position.x , y: pts[ww].y + elps.position.y } ); 
            ad.x= pts[ww].x + elps.position.x; 
            ad.y= pts[ww].y + elps.position.y; 
            ad.eX= parseInt(ww); 
        } 
    
        if( parseInt( ww ) == pts.length - 2 ){
            closestP= ad; 
        }
    }
        
    intersección.position.x= closestP.x
    intersección.position.y= closestP.y
    intersección.position.z= (-0.033 - 0.012)




    ad= {}; 
    ad.d= 10000; 
    for( ww= 0; ww < 360; ww++ ){ 
        if( bEZ2.project( { x: pts2[ww].x + elps2.position.x , y: pts2[ww].y + elps2.position.y } ).d < ad.d ) 
        { 
            ad= bEZ2.project( { x: pts2[ww].x + elps2.position.x , y: pts2[ww].y + elps2.position.y } ); 
            ad.x= pts2[ww].x + elps2.position.x; 
            ad.y= pts2[ww].y + elps2.position.y; 
            ad.eX= parseInt(ww); 
        } 
    
        if( parseInt( ww ) == pts2.length - 2 ){
            closestP2= ad; 
        }
    }
        
    intersección2.position.x= closestP2.x
    intersección2.position.y= closestP2.y
    intersección2.position.z= (-0.033 - 0.012)


    
    
    renderer.render( scene, camera ); 
    
    
    izquierda= 37; 
    derecha= 39; 
    arriba= 38; 
    abajo= 40; 
    
    a= 65; 
    d= 68; 
    w= 87; 
    s= 83; 
    q= 81; 
    e= 69; 
    
    keysDown= { a: false , d: false , w: false , s: false , q: false , e: false , izquierda: false , derecha: false , arriba: false , abajo: false }
    
    
    speed= 0.051; 
    
    dCamera= 2.36758210000191832 * 10 ** -1; 
    

    camera.position.x= Vv11.position.x + xEYConElÁngulo( ( 1.5 + dCamera ), getInQuadrant( -getInQuadrant( Vv11.rotation.z / un_grado_en_radianes + 270 ) ) ).x; 
    camera.position.y= Vv11.position.y + xEYConElÁngulo( ( 1.5 + dCamera ), getInQuadrant( -getInQuadrant( Vv11.rotation.z / un_grado_en_radianes + 270 ) ) ).y; 
        
    camera.rotation.y= Vv11.rotation.z; 
    
    
    //c = new THREE.Quaternion();  
    
    //a2 = new THREE.Vector3( 0, 1, 0 );  
    
    document.addEventListener("keydown", function(i){ 
        //console.log(i.keyCode);  
    
        //1.position.z11.rotation.x= -Math.PI / 2; 
        /*console.log(Vv11.rotation.x + " " + Vv11.rotation.y + " " + Vv11.rotation.z); */ 
        switch(i.keyCode){ 
            case a: 
                keysDown.a= true; 
                break; 
            case d: 
                keysDown.d= true; 
                break; 
            case w: 
                keysDown.w= true; 
                break; 
            case s: 
                keysDown.s= true; 
                break; 
            case q: 
                keysDown.q= true; 
                break; 
            case e: 
                keysDown.e= true; 
                break; 
        }; 
        
        renderer.render( scene, camera ); 
        
        // console.log(getInQuadrant(-Vv11w4.rotation.y / un_grado_en_radianes));  
        
    
    }); 
    
    document.addEventListener("keyup", function(zZ){ 
        switch(zZ.keyCode){ 
            case a: 
                keysDown.a= false; 
                break; 
            case d: 
                keysDown.d= false; 
                break; 
            case w: 
                keysDown.w= false; 
                break; 
            case s: 
                keysDown.s= false; 
                break; 
            case q: 
                keysDown.q= false; 
                break; 
            case e: 
                keysDown.e= false; 
                break; 
        }; 
    }); 
    
    
    
    
    
    
    
    
    
    
    
    /*skip=  63; */ 
    
    skip= 0; 
    
    
    lentitud= 3; 
    
    lentitudMáx= 2; 
    aceleración= 1; 
    
    setInterval(function(){ 
        if(skip > 0){
            skip--; 
            return; 
        }
        if(keysDown.a){
                //Vv11.position.x-= speed; 
                //console.log(Vv11w3.rotation.y);  
    
                if(Vv11w3.rotation.y < Math.PI / 4 * 3)
                {
                    Vv11w3.rotation.y+= 0.023; 
                    Vv11w4.rotation.y+= 0.023;  
                }
    
                renderer.render( scene, camera ); 
        }
        if(keysDown.d){
                //Vv11.position.x+= speed; 
                //console.log(Vv11w3.rotation.y);   
                if(Vv11w3.rotation.y > Math.PI / 4)
                {
                    Vv11w3.rotation.y-= 0.023; 
                    Vv11w4.rotation.y-= 0.023; 
                }
        }
        if(keysDown.w){
                Vv11.position.x+= xEYConElÁngulo(speed, parseFloat($(".bugger").text())).x; 
                Vv11.position.y+= xEYConElÁngulo(speed, parseFloat($(".bugger").text())).y; 
                skip= skip == 0? lentitud: skip; 
                lentitud -= aceleración; 
                lentitud= lentitud < 0? 0: lentitud; 
        }
        if(keysDown.s){
                Vv11.position.y-= xEYConElÁngulo(speed, parseFloat($(".bugger").text())).y; 
                Vv11.position.x-= xEYConElÁngulo(speed, parseFloat($(".bugger").text())).x; 
        }
        if(keysDown.q){
                Vv11.rotation.z-= 0.023; 
                //console.log( closestP );  
        }
        if(keysDown.e){
            Vv11.rotation.z+= 0.023; 
        }
    
        $("debuggers .bugger span").text(getInQuadrant(getInQuadrant(-Vv11.rotation.z / un_grado_en_radianes + 270) + (getInQuadrant(-Vv11w4.rotation.y / un_grado_en_radianes) - 270))); 
        $("debuggers .bugger span").attr("title", getInQuadrant(getInQuadrant(-Vv11.rotation.z / un_grado_en_radianes + 270) + (getInQuadrant(-Vv11w4.rotation.y / un_grado_en_radianes) - 270))); 
        $("debuggers .wheel .rotate").css({"rotate": -(Vv11w4.rotation.y / un_grado_en_radianes - 90) + "deg"}); 
        $("debuggers .Vv11 .rotate").css({"rotate": -(Vv11.rotation.z / un_grado_en_radianes + 180) + "deg"}); 
        $("debuggers .wheelRelativoAlMundo .rotate").css({"rotate": (-(Vv11.rotation.z / un_grado_en_radianes + 180) - (Vv11w4.rotation.y / un_grado_en_radianes - 90)) + "deg"}); 
        while(parseFloat($("debuggers .bugger span").text()) < -360){ 
            $("debuggers .bugger span").text(parseFloat($("debuggers .bugger span").text()) + 360); 
        }; 
        while(parseFloat($("debuggers .bugger span").text()) > 360){ 
            $("debuggers .bugger span").text(parseFloat($("debuggers .bugger span").text()) - 360); 
        }; 
        $("debuggers .tan span").text("x: " + xEYConElÁngulo(1, parseFloat($("debuggers .bugger span").text())).x.toFixed(2) + ", y: " + xEYConElÁngulo(1, parseFloat($("debuggers .bugger span").text())).y.toFixed(2)); 
        $("debuggers .tan span").attr("title", "x: " + xEYConElÁngulo(1, parseFloat($("debuggers .bugger span").text())).x.toFixed(2) + ", y: " + xEYConElÁngulo(1, parseFloat($("debuggers .bugger span").text())).y.toFixed(2)); 
        !1? $("debuggers .tan span").css({"background": "#d67274"}): $("debuggers .tan span").css({"background": "#25cc54"}); 
    
        scene.remove( curveObject ); 
    
        scene.remove( curveObject2 ); 
        
        scene.remove( oldCurve ); 
        
        scene.remove( oldCurve2 ); 
    
        scene.remove( intersección ); 
    
        scene.remove( intersección2 ); 
    
        renderer.render( scene, camera ); 
    
        //yProjection= parseFloat($("debuggers .tan span").text()) <= 1? parseFloat($("debuggers .tan span").text()) * 0.22: (1 - -(1 - parseFloat($("debuggers .tan span").text()))) * 0.22;  
        //xProjection= parseFloat($("debuggers .tan span").text()) <= 1? (1 - parseFloat($("debuggers .tan span").text())) * 0.22: -(1 - parseFloat($("debuggers .tan span").text())) * -0.22;  
        elps.position.x= Vv11w4.getWorldPosition(v3).x; 
        elps.position.y= Vv11w4.getWorldPosition(v3).y; 

        elps2.position.x= Vv11w3.getWorldPosition(v3).x; 
        elps2.position.y= Vv11w3.getWorldPosition(v3).y; 
        
    
    
        points = curve.getPoints( 50 );
        x = new THREE.BufferGeometry().setFromPoints( points );
        zz = new THREE.LineBasicMaterial( { color: 0xff0000 } );
        oldCurve = new THREE.Line( x, zz );
    
        scene.add( oldCurve ); 
    


        points2 = curve2.getPoints( 50 );
        x = new THREE.BufferGeometry().setFromPoints( points2 );
        zz = new THREE.LineBasicMaterial( { color: 0xff0000 } );
        oldCurve2 = new THREE.Line( x, zz );
        
        scene.add( oldCurve2 ); 



        intersección = new THREE.Mesh( new THREE.BoxGeometry( 0.013, 0.013, 0.013 ), new THREE.MeshPhongMaterial({ color: 0x1fa2b2 }) );
    
        intersección2 = new THREE.Mesh( new THREE.BoxGeometry( 0.013, 0.013, 0.013 ), new THREE.MeshPhongMaterial({ color: 0x1fa2b2 }) );
    
        scene.add( intersección ); 
        
        scene.add( intersección2 ); 
    
        
        ad= {}; 
        ad.d= 10000; 
        for( ww= 0; ww < 360; ww++ ){ 
    
            if( bEZ.project( { x: pts[ww].x + elps.position.x , y: pts[ww].y + elps.position.y } ).d < ad.d ) 
            { 
                ad= bEZ.project( { x: pts[ww].x + elps.position.x , y: pts[ww].y + elps.position.y } ); 
                ad.x= pts[ww].x + elps.position.x; 
                ad.y= pts[ww].y + elps.position.y; 
                ad.eX= parseInt(ww); 
            } 
        
            if( parseInt( ww ) == pts.length - 2 ){
                closestP= ad; 
            }
        }
            
        intersección.position.x= closestP.x
        intersección.position.y= closestP.y
        intersección.position.z= (-0.033 - 0.012)




        ad= {}; 
        ad.d= 10000; 
        for( ww= 0; ww < 360; ww++ ){ 
            if( bEZ2.project( { x: pts2[ww].x + elps2.position.x , y: pts2[ww].y + elps2.position.y } ).d < ad.d ) 
            { 
                ad= bEZ2.project( { x: pts2[ww].x + elps2.position.x , y: pts2[ww].y + elps2.position.y } ); 
                ad.x= pts2[ww].x + elps2.position.x; 
                ad.y= pts2[ww].y + elps2.position.y; 
                ad.eX= parseInt(ww); 
            } 
        
            if( parseInt( ww ) == pts2.length - 2 ){
                closestP2= ad; 
            }
        }
            
        intersección2.position.x= closestP2.x
        intersección2.position.y= closestP2.y
        intersección2.position.z= (-0.033 - 0.012)
    


        
        ángulo=  0; 
            //console.log( "<190W " + ángDeLaPendiente( Vv11w4.getWorldPosition(v3).x , Vv11w4.getWorldPosition(v3).y, closestP.x , closestP.y ) );  
            if(keysDown.w){ 
                //When this, which was before a condition, but then we left the value to be compared by its3lf (without <= sMt... or smt) b3cause any number by itself technically is true. /*But 0 by itself returns false. that's why it got stuck */

                /*if( ángDeLaPendiente( Vv11w4.getWorldPosition(v3).x , Vv11w4.getWorldPosition(v3).y, Vv11w2.getWorldPosition(v3).x , Vv11w2.getWorldPosition(v3).y ) ){
                    if( ángDeLaPendiente( Vv11w4.getWorldPosition(v3).x , Vv11w4.getWorldPosition(v3).y, closestP.x , closestP.y ) ){
                        ángulo= ángDeLaPendiente( Vv11w4.getWorldPosition(v3).x , Vv11w4.getWorldPosition(v3).y, Vv11w2.getWorldPosition(v3).x , Vv11w2.getWorldPosition(v3).y ) * -1 + ( ángDeLaPendiente( Vv11w4.getWorldPosition(v3).x , Vv11w4.getWorldPosition(v3).y, closestP.x , closestP.y )); 
                        //console.log( "-" + ángDeLaPendiente( Vv11w4.getWorldPosition(v3).x , Vv11w4.getWorldPosition(v3).y, Vv11w2.getWorldPosition(v3).x , Vv11w2.getWorldPosition(v3).y) + ", " + ( ángDeLaPendiente( Vv11w4.getWorldPosition(v3).x , Vv11w4.getWorldPosition(v3).y, closestP.x , closestP.y )) + ": " + Vv11w4.getWorldPosition(v3).x + ", " + Vv11w4.getWorldPosition(v3).y + ", " + closestP.x + ", " + closestP.y ); 
                        //console.log( ángulo ); 
                    }else{
                        //console.log( "else" + ángulo ); 
                    }
                } */
                ángulo= ángDeLaPendiente( Vv11w4.getWorldPosition(v3).x , Vv11w4.getWorldPosition(v3).y, Vv11w2.getWorldPosition(v3).x , Vv11w2.getWorldPosition(v3).y ) * -1 + ángDeLaPendiente( Vv11w4.getWorldPosition(v3).x , Vv11w4.getWorldPosition(v3).y, closestP.x , closestP.y ); 
                /*console.log(ángDeLaPendiente( Vv11w4.getWorldPosition(v3).x , Vv11w4.getWorldPosition(v3).y, Vv11w2.getWorldPosition(v3).x , Vv11w2.getWorldPosition(v3).y ) + ", " + ángDeLaPendiente( Vv11w4.getWorldPosition(v3).x , Vv11w4.getWorldPosition(v3).y, closestP.x , closestP.y ) + ", " + ángulo ); */ 
                //console.log( ángulo )
    
                viejaPosición= { x: Vv11w4.getWorldPosition(v3).x , y: Vv11w4.getWorldPosition(v3).y }
                recorded_position= Vv11w4.rotation.y <= Math.PI / 2? { x: Vv11w4.getWorldPosition(v3).x , y: Vv11w4.getWorldPosition(v3).y  }: { x: Vv11w3.getWorldPosition(v3).x , y: Vv11w3.getWorldPosition(v3).y  };
    
    
                Vv11.rotation.z -= ángulo * un_grado_en_radianes; 
                renderer.render( scene, camera ); 
                
    
                Vv11w4.rotation.y <= Math.PI / 2? (function(){Vv11.position.x-= Vv11w4.getWorldPosition(v3).x - recorded_position.x; 
                                        Vv11.position.y+= recorded_position.y - Vv11w4.getWorldPosition(v3).y; })(): (function(){Vv11.position.x-= Vv11w3.getWorldPosition(v3).x - recorded_position.x; 
                                        Vv11.position.y+= recorded_position.y - Vv11w3.getWorldPosition(v3).y; })(); 
                renderer.render( scene, camera ); 
            } 
            //$(".burger span").html("");  
            //$(".burger").attr( "title" , "" );  
    
            if(keysDown.s){ 
                ángulo= ángDeLaPendiente( Vv11w3.getWorldPosition(v3).x , Vv11w3.getWorldPosition(v3).y, Vv11w3.getWorldPosition(v3).x + xEYConElÁngulo( 0.22, getInQuadrant( -getInQuadrant( Vv11.rotation.z / un_grado_en_radianes + 90 ) ) ).x , Vv11w3.getWorldPosition(v3).y + xEYConElÁngulo( 0.22, getInQuadrant( -getInQuadrant( Vv11.rotation.z / un_grado_en_radianes + 90 ) ) ).y ) * -1 + ángDeLaPendiente( Vv11w3.getWorldPosition(v3).x , Vv11w3.getWorldPosition(v3).y, closestP2.x , closestP2.y ); 
    
                recorded_position= Vv11w3.rotation.y <= Math.PI / 2? { x: Vv11w4.getWorldPosition(v3).x , y: Vv11w4.getWorldPosition(v3).y  }: { x: Vv11w3.getWorldPosition(v3).x , y: Vv11w3.getWorldPosition(v3).y  };
    
    
                Vv11.rotation.z += ángulo * un_grado_en_radianes; 
                renderer.render( scene, camera ); 
                
    
                Vv11w3.rotation.y <= Math.PI / 2? (function(){Vv11.position.x-= Vv11w4.getWorldPosition(v3).x - recorded_position.x; 
                                        Vv11.position.y+= recorded_position.y - Vv11w4.getWorldPosition(v3).y; })(): (function(){Vv11.position.x-= Vv11w3.getWorldPosition(v3).x - recorded_position.x; 
                                        Vv11.position.y+= recorded_position.y - Vv11w3.getWorldPosition(v3).y; })(); 
                renderer.render( scene, camera ); 
            } 
    
    
    
        curve = new THREE.QuadraticBezierCurve3(
                new THREE.Vector3( Vv11w2.getWorldPosition(v3).x , Vv11w2.getWorldPosition(v3).y , (-0.033 - 0.012) ),
                new THREE.Vector3( Vv11w4.getWorldPosition(v3).x , Vv11w4.getWorldPosition(v3).y , (-0.033 - 0.012) ),
                new THREE.Vector3( (Vv11w4.getWorldPosition(v3).x + xEYConElÁngulo(0.22, parseFloat($(".bugger").text())).x) , (Vv11w4.getWorldPosition(v3).y + xEYConElÁngulo(0.22, parseFloat($(".bugger").text())).y), (-0.033 - 0.012) )
            ); 
    
        
        points = curve.getPoints( 50 );
        x = new THREE.BufferGeometry().setFromPoints( points );
        
        zz = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
        
        curveObject = new THREE.Line( x, zz );
    
        bEZ= new Bezier( [ { x: curve.v0.x , y: curve.v0.y } , { x: curve.v1.x , y: curve.v1.y } , { x: curve.v2.x , y: curve.v2.y } ] );
    
    
    
    
        //console.log(curveObject);  
        
        scene.add( curveObject ); 
    

        curve2 = new THREE.QuadraticBezierCurve3( 
            new THREE.Vector3( Vv11w3.getWorldPosition(v3).x + xEYConElÁngulo( 0.22, getInQuadrant( -getInQuadrant( Vv11.rotation.z / un_grado_en_radianes + 90 ) ) ).x , Vv11w3.getWorldPosition(v3).y + xEYConElÁngulo( 0.22, getInQuadrant( -getInQuadrant( Vv11.rotation.z / un_grado_en_radianes + 90 ) ) ).y , (-0.033 - 0.012) ),
            new THREE.Vector3( Vv11w3.getWorldPosition(v3).x , Vv11w3.getWorldPosition(v3).y , (-0.033 - 0.012) ),
            new THREE.Vector3( (Vv11w3.getWorldPosition(v3).x - xEYConElÁngulo( 0.22, parseFloat($(".bugger").text()) ).x) , (Vv11w3.getWorldPosition(v3).y - xEYConElÁngulo( 0.22, parseFloat($(".bugger").text())).y), (-0.033 - 0.012) )
        ); 
            
        points2 = curve2.getPoints( 50 );
            
        x = new THREE.BufferGeometry().setFromPoints( points2 );
            
        zz = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
            
        curveObject2 = new THREE.Line( x, zz );
        bEZ2= new Bezier( [ { x: curve2.v0.x , y: curve2.v0.y } , { x: curve2.v1.x , y: curve2.v1.y } , { x: curve2.v2.x , y: curve2.v2.y } ] );
        
        scene.add( curveObject2 ); 
        
        
                    
    


        camera.position.x= Vv11.position.x + xEYConElÁngulo( ( 1.5 + dCamera ), getInQuadrant( -getInQuadrant( Vv11.rotation.z / un_grado_en_radianes + 270 ) ) ).x; 
        camera.position.y= Vv11.position.y + xEYConElÁngulo( ( 1.5 + dCamera ), getInQuadrant( -getInQuadrant( Vv11.rotation.z / un_grado_en_radianes + 270 ) ) ).y; 
        
        camera.rotation.y= Vv11.rotation.z; 
    
        renderer.render( scene, camera ); 
    
        /*console.log( curveObject == oldCurve ); */ 
    }, 1); 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    console.log("selfDestructableSetIntervalWhichWaitsForSomething" + "     ₛₐᵢₓᵆ: " + "I Self Destructed ", selfDestructableSetIntervalWhichWaitsForSomething)
    clearInterval(selfDestructableSetIntervalWhichWaitsForSomething); }else{console.log("../THREE is undefined")}}, 100); 