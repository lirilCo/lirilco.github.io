import * as THREE from 'three';


const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.17, 0.3, 0.06 );
const material = new THREE.MeshNormalMaterial();

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

Vv11.add( Vv11c )
Vv11.add( Vv11w1 );
Vv11.add( Vv11w2 );
Vv11.add( Vv11w3 );
Vv11.add( Vv11w4 );

scene.add( Vv11 );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const v3 = new THREE.Vector3( 0, 0, 0 ); 

var curve = new THREE.QuadraticBezierCurve(
	new THREE.Vector2( Vv11w2.getWorldPosition(v3).x, Vv11w2.getWorldPosition(v3).y ),
	new THREE.Vector2( 0.20, 0.15 ),
	new THREE.Vector2( 0.10, 0 )
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

var un_grado_en_radianes= Math.PI / 180; 

var speed= 0.002; 

//var c = new THREE.Quaternion();  

const a = new THREE.Vector3( 0, 1, 0 ); 

document.addEventListener("keydown", function(i){ 
	//console.log(i.keyCode);  

	switch(i.keyCode){ 
		case izquierda: 
			//Vv11.position.x-= speed; 
			//console.log(Vv11w3.rotation.y);  

			if(Vv11w3.rotation.y < Math.PI / 4 * 3)
			{
				Vv11w3.rotation.y+= 0.023; 
				Vv11w4.rotation.y+= 0.023;  
			}

			renderer.render( scene, camera ); 
			break; 
		case derecha: 
			//Vv11.position.x+= speed; 
			//console.log(Vv11w3.rotation.y);   
			if(Vv11w3.rotation.y > Math.PI / 4)
			{
				Vv11w3.rotation.y-= 0.023; 
				Vv11w4.rotation.y-= 0.023; 
			}
			break; 
		case arriba: 
			Vv11.position.y+= parseFloat($("debuggers .tan span").text()) <= 1? parseFloat($("debuggers .tan span").text()) * speed: (1 - -(1 - parseFloat($("debuggers .tan span").text()))) * speed; 
			Vv11.position.x+= parseFloat($("debuggers .tan span").text()) <= 1? (1 - parseFloat($("debuggers .tan span").text())) * speed: -(1 - parseFloat($("debuggers .tan span").text())) * -speed;
			break; 
		case abajo: 
			Vv11.position.y-= parseFloat($("debuggers .tan span").text()) <= 1? parseFloat($("debuggers .tan span").text()) * speed: (1 - -(1 - parseFloat($("debuggers .tan span").text()))) * speed; 
			Vv11.position.x-= parseFloat($("debuggers .tan span").text()) <= 1? (1 - parseFloat($("debuggers .tan span").text())) * speed: -(1 - parseFloat($("debuggers .tan span").text())) * -speed; 
			break; 
		case 16: 
			Vv11.rotation.z-= 0.023; 
			break; 
		case 17: 
			Vv11.rotation.z+= 0.023; 
			break; 
	}; 
	
	renderer.render( scene, camera ); 
       
	$("debuggers .wheel .rotate").css({"rotate": -(Vv11w4.rotation.y / un_grado_en_radianes - 90) + "deg"}); 
	$("debuggers .Vv11 .rotate").css({"rotate": -(Vv11.rotation.z / un_grado_en_radianes + 180) + "deg"}); 
	$("debuggers .wheelRelativoAlMundo .rotate").css({"rotate": (-(Vv11.rotation.z / un_grado_en_radianes + 180) - (Vv11w4.rotation.y / un_grado_en_radianes - 90)) + "deg"}); 
	$("debuggers .bugger span").text((-(Vv11.rotation.z / un_grado_en_radianes + 180) - (Vv11w4.rotation.y / un_grado_en_radianes - 90) + 90)); 
	$("debuggers .bugger span").attr("title", (-(Vv11.rotation.z / un_grado_en_radianes + 180) - (Vv11w4.rotation.y / un_grado_en_radianes - 90) + 90)); 
	while(parseFloat($("debuggers .bugger span").text()) < -360){ 
		$("debuggers .bugger span").text(parseFloat($("debuggers .bugger span").text()) + 360); 
	}; 
	while(parseFloat($("debuggers .bugger span").text()) > 360){ 
		$("debuggers .bugger span").text(parseFloat($("debuggers .bugger span").text()) - 360); 
	}; 
	$("debuggers .tan span").text(parseFloat($("debuggers .bugger span").text()) * -(0.5 / 45)); 
	$("debuggers .tan span").attr("title", parseFloat($("debuggers .bugger span").text()) * -(0.5 / 45)); 
	(parseFloat($("debuggers .tan span").text()) >= 2 || parseFloat($("debuggers .tan span").text()) < 0)? $("debuggers .tan span").css({"background": "#d67274"}): $("debuggers .tan span").css({"background": "#25cc54"}); 

	scene.remove( curveObject ); 

	renderer.render( scene, camera ); 

	var yProjection= parseFloat($("debuggers .tan span").text()) <= 1? parseFloat($("debuggers .tan span").text()) * 0.22: (1 - -(1 - parseFloat($("debuggers .tan span").text()))) * 0.22; 
	var xProjection= parseFloat($("debuggers .tan span").text()) <= 1? (1 - parseFloat($("debuggers .tan span").text())) * 0.22: -(1 - parseFloat($("debuggers .tan span").text())) * -0.22; 

	var curve = new THREE.QuadraticBezierCurve(
		new THREE.Vector2( Vv11w2.getWorldPosition(v3).x, Vv11w2.getWorldPosition(v3).y ),
		new THREE.Vector2( Vv11w4.getWorldPosition(v3).x, Vv11w4.getWorldPosition(v3).y ),
		new THREE.Vector2((Vv11w4.getWorldPosition(v3).x + xProjection), (Vv11w4.getWorldPosition(v3).y + yProjection) )
	);
	
	var points = curve.getPoints( 50 );
	var x = new THREE.BufferGeometry().setFromPoints( points );
	
	const zz = new THREE.LineBasicMaterial( { color: 0xff0000 } );
	
	curveObject = new THREE.Line( x, zz );
	curveObject.name = 'qB';

	//console.log(curveObject);  
	
	scene.add( curveObject ); 
	
	renderer.render( scene, camera ); 
}); 