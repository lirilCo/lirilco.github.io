import * as THREE from 'three';


const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.17, 0.3, 0.06 );
const material = new THREE.MeshPhongMaterial({ color: 0xffdccd });

var Vv11 = new THREE.Object3D();
const Vv11c = new THREE.Mesh( geometry, material );


const Vv11w = new THREE.Shape();
Vv11w.absarc(0, 0, 0.02);

// Create a new geometry by extruding the triangleShape
// The option: 'amount' is how far to extrude, 'bevelEnabled: false' prevents beveling
var Vv11w1 = new THREE.ExtrudeGeometry(Vv11w, {depth: 0.009, bevelEnabled: false});
var Vv11w2 = new THREE.ExtrudeGeometry(Vv11w, {depth: 0.009, bevelEnabled: false});
var Vv11w3 = new THREE.ExtrudeGeometry(Vv11w, {depth: 0.009, bevelEnabled: false});
var Vv11w4 = new THREE.ExtrudeGeometry(Vv11w, {depth: 0.009, bevelEnabled: false});

// Geometry doesn't do much on its own, we need to create a Mesh from it
var Vv11w1 = new THREE.Mesh(Vv11w1, material);
var Vv11w2 = new THREE.Mesh(Vv11w2, material);
var Vv11w3 = new THREE.Mesh(Vv11w3, material);
var Vv11w4 = new THREE.Mesh(Vv11w4, material);

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

const ambiance = new THREE.PointLight( 0xcddccd, 2 ); 
ambiance.position.x= 0; 
ambiance.position.y= -1; 
ambiance.position.z= 2; 
ambiance.rotation.x= -Math.PI / 4; 
ambiance.rotation.y= 0; 
ambiance.rotation.z= 0; 

scene.add( ambiance ); 


scene.add( Vv11 );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const v3 = new THREE.Vector3( 0, 0, 0 ); 

var curve = new THREE.QuadraticBezierCurve(
	new THREE.Vector3( Vv11w2.getWorldPosition(v3).x, Vv11w2.getWorldPosition(v3).y, -0.1 ),
	new THREE.Vector3( 0.20, 0.15, -0.1 ),
	new THREE.Vector3( 0.10, 0, -0.1 )
);

var points = curve.getPoints( 50 );
var x = new THREE.BufferGeometry().setFromPoints( points );

const zz = new THREE.LineBasicMaterial( { color: 0xff0000 } );

// Create the final object to add to the scene
var curveObject = new THREE.Line( x, zz );
curveObject.name = 'qB';

scene.add( curveObject ); 


renderer.render( scene, camera ); 


var izquierda= 37; 
var derecha= 39; 
var arriba= 38; 
var abajo= 40; 

var a= 65; 
var d= 68; 
var w= 87; 
var s= 83; 
var q= 81; 
var e= 69; 

var un_grado_en_radianes= Math.PI / 180; 

var speed= 0.011; 

var ángulo; 

var getInQuadrant= function(ángulo){ 
	ángulo= ángulo; 
    while(ángulo < -360)ángulo+=360; 
    while(ángulo > 360)ángulo-=360; 
    if(ángulo < 0)ángulo=(360+ángulo); 
    return ángulo; 
} 
  
var xEYConElÁngulo= function( d, á ){ 
	á= á * Math.PI / 180; //Convertir de grados a radianes 
	
	if(á < Math.PI / 2)return {x: d * parseFloat(Math.cos(á)), y: parseFloat(-(d * Math.sin(á)))}; 
	if(á == Math.PI / 2)return {x: 0, y: -d}; 
	if(á <= Math.PI)return {x: parseFloat(-(d * Math.cos(Math.PI - á))), y: parseFloat(-(d * Math.sin(Math.PI - á)))}; 
	if(á <= Math.PI / 2 * 3)return {x: parseFloat(-(d * Math.sin((Math.PI / 2 * 3) - á))), y: parseFloat(d * Math.cos((Math.PI / 2 * 3) - á))}; 
	if(á <= Math.PI * 2)return {x: parseFloat(d * Math.cos((Math.PI * 2) - á)), y: parseFloat((d * Math.sin((Math.PI * 2) - á)))}; 
} 

//var c = new THREE.Quaternion();  

//const a2 = new THREE.Vector3( 0, 1, 0 );  

document.addEventListener("keydown", function(i){ 
	//console.log(i.keyCode);  

	//Vv11.rotation.x= -Math.PI / 2; 
	/*console.log(Vv11.rotation.x + " " + Vv11.rotation.y + " " + Vv11.rotation.z); */ 
	switch(i.keyCode){ 
		case a: 
			//Vv11.position.x-= speed; 
			//console.log(Vv11w3.rotation.y);  

			if(Vv11w3.rotation.y < Math.PI / 4 * 3)
			{
				Vv11w3.rotation.y+= 0.023; 
				Vv11w4.rotation.y+= 0.023;  
			}

			renderer.render( scene, camera ); 
			break; 
		case d: 
			//Vv11.position.x+= speed; 
			//console.log(Vv11w3.rotation.y);   
			if(Vv11w3.rotation.y > Math.PI / 4)
			{
				Vv11w3.rotation.y-= 0.023; 
				Vv11w4.rotation.y-= 0.023; 
			}
			break; 
		case w: 
			Vv11.position.x+= xEYConElÁngulo(speed, parseFloat($(".bugger").text())).x; 
			Vv11.position.y+= xEYConElÁngulo(speed, parseFloat($(".bugger").text())).y; 
			break; 
		case s: 
			Vv11.position.y-= xEYConElÁngulo(speed, parseFloat($(".bugger").text())).y; 
			Vv11.position.x-= xEYConElÁngulo(speed, parseFloat($(".bugger").text())).x; 
			break; 
		case q: 
			Vv11.rotation.z-= 0.023; 
			break; 
		case e: 
			Vv11.rotation.z+= 0.023; 
			break; 
	}; 
	
	renderer.render( scene, camera ); 
    
    
    // console.log(getInQuadrant(-Vv11w4.rotation.y / un_grado_en_radianes));  
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

	renderer.render( scene, camera ); 

	//var yProjection= parseFloat($("debuggers .tan span").text()) <= 1? parseFloat($("debuggers .tan span").text()) * 0.22: (1 - -(1 - parseFloat($("debuggers .tan span").text()))) * 0.22;  
	//var xProjection= parseFloat($("debuggers .tan span").text()) <= 1? (1 - parseFloat($("debuggers .tan span").text())) * 0.22: -(1 - parseFloat($("debuggers .tan span").text())) * -0.22;  

	var curve = Vv11w4.rotation.y <= Math.PI / 2? (function(){
		console.log(xEYConElÁngulo(0.0045, getInQuadrant(Vv11.rotation.z * (Math.PI / 180))))
		return(new THREE.QuadraticBezierCurve3(
			new THREE.Vector3( Vv11w2.getWorldPosition(v3).x + xEYConElÁngulo(0.0045, getInQuadrant(Vv11.rotation.z * (Math.PI / 180))).x, Vv11w2.getWorldPosition(v3).y - xEYConElÁngulo(0.0045, getInQuadrant(Vv11.rotation.z * (Math.PI / 180))).y, -0.039 ),
			new THREE.Vector3( Vv11w4.getWorldPosition(v3).x + xEYConElÁngulo(0.0045, getInQuadrant(Vv11.rotation.z * (Math.PI / 180))).x, Vv11w4.getWorldPosition(v3).y - xEYConElÁngulo(0.0045, getInQuadrant(Vv11.rotation.z * (Math.PI / 180))).y, -0.039 ),
			new THREE.Vector3((Vv11w4.getWorldPosition(v3).x + xEYConElÁngulo(0.0045, getInQuadrant(Vv11.rotation.z * (Math.PI / 180))).x + xEYConElÁngulo(0.22, parseFloat($(".bugger").text())).x), (Vv11w4.getWorldPosition(v3).y - xEYConElÁngulo(0.0045, getInQuadrant(Vv11.rotation.z * (Math.PI / 180))).y + xEYConElÁngulo(0.22, parseFloat($(".bugger").text())).y), -0.039 )
		)); })(): (function(){/*console.log(Vv11w4.rotation.y)*/ 
			console.log(xEYConElÁngulo(0.0045, getInQuadrant(Vv11.rotation.z * (Math.PI / 180))))
			return(new THREE.QuadraticBezierCurve3(
				new THREE.Vector3( Vv11w1.getWorldPosition(v3).x + xEYConElÁngulo(0.0045, getInQuadrant(Vv11.rotation.z * (Math.PI / 180))).x, Vv11w1.getWorldPosition(v3).y + xEYConElÁngulo(0.0045, getInQuadrant(Vv11.rotation.z * (Math.PI / 180))).y, -0.039 ),
				new THREE.Vector3( Vv11w3.getWorldPosition(v3).x + xEYConElÁngulo(0.0045, getInQuadrant(Vv11.rotation.z * (Math.PI / 180))).x, Vv11w3.getWorldPosition(v3).y + xEYConElÁngulo(0.0045, getInQuadrant(Vv11.rotation.z * (Math.PI / 180))).y, -0.039 ),
				new THREE.Vector3((Vv11w3.getWorldPosition(v3).x + xEYConElÁngulo(0.0045, getInQuadrant(Vv11.rotation.z * (Math.PI / 180))).x + xEYConElÁngulo(0.22, parseFloat($(".bugger").text())).x), (Vv11w3.getWorldPosition(v3).y + xEYConElÁngulo(0.0045, getInQuadrant(Vv11.rotation.z * (Math.PI / 180))).y + xEYConElÁngulo(0.22, parseFloat($(".bugger").text())).y), -0.039 )
			)); })(); 
	
	var points = curve.getPoints( 50 );
	var x = new THREE.BufferGeometry().setFromPoints( points );
	
	const zz = new THREE.LineBasicMaterial( { color: 0xff0000 } );
	
	curveObject = new THREE.Line( x, zz );
	curveObject.name = 'qB';

	//console.log(curveObject);  
	
	scene.add( curveObject ); 
	
	renderer.render( scene, camera ); 
}); 