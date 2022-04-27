import * as THREE from 'three';


const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.3, 0.17, 0.06 );
const material = new THREE.MeshNormalMaterial();

const Vv11 = new THREE.Mesh( geometry, material );
scene.add( Vv11 );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


renderer.render( scene, camera ); 

var izquierda= 37; 
var derecha= 39; 
var arriba= 38; 
var abajo= 40; 

var speed= 0.002; 

document.addEventListener("keydown", function(i){ 
	console.log(i.keyCode); 
	switch(i.keyCode){ 
		case izquierda: 
			Vv11.position.x-= speed; 
			renderer.render( scene, camera ); 
			break; 
		case derecha: 
			Vv11.position.x+= speed; 
			renderer.render( scene, camera ); 
			break; 
		case arriba: 
			Vv11.position.y+= speed; 
			renderer.render( scene, camera ); 
			break; 
		case abajo:
			Vv11.position.y-= speed; 
			renderer.render( scene, camera );  
			break; 
	}; 
}); 