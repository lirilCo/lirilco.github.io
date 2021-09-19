fe= ["Siento cosas por ti desde que nos vimos por primera vez; desde que descendieron del cielo los ángeles a revolotear suavemente alrededor de nuestro amor. Pero nunca como las siento cuando no me haces falta por mucho tiempo y te he tenido todas las veces que te necesitaba; cuando ya no te espero porque estabas conmigo ayer, y sigues aquí hoy, jugando con tus pies en la borrachera y sonriendo con las cosas que vemos en televisión.", "I feel things for you since we saw each other for the first time; since descended from heaven the angels to flutter softly around our love. But never like I feel them when I do not miss you for a long time and have had you all the times that needed you; when I no longer wait for you because you were with me yesterday, and are still here today, playing with your feet in the drunkenness and smiling with the things we see on the television.", "He esperado toda mi vida para verte así. Ni siquiera te conocía, pero ya te había visto antes; en las noches negras en mi mente colorida; pintando el blanco de tus dientes con el pincel de mis pensamientos, cuyas decisiones las pinta dependiendo de la voluntad de la libertad, que son tus dientes blanquísimos, y no puede más que alabar a su diosa, tus dientes blanquísimos, y pintarlos y pintarlos. Y hoy estás justo como te veía.", "I have waited all my life to see you like this. I did not even know you, but had already seen you before; in the black nights in my colorful mind; painting the white of your teeth with the brush of my thoughts, whose decisions it paints depending on the will of the freedom, which are your very white teeth, and can only praise its goddess, your very white teeth, and paint them and paint them. And today you are just like I used to see you.", "En una deportiva en que nos quepan las carpas y las maletas para recorrer toda Colombia en camioneta, quiero emprender un viaje contigo por todo el país; parar cada vez que demos con el océano y adentrarnos en los bosques con carretera. Veinte meses o lo que nos tardemos; pero toda Colombia, mejor. Comeremos en los paraderos para camioneros y viajeros y en los pueblos que nos acepten, y nos bañaremos en las lagunas y los lagos.", "In an SUV in which we can fit the tents and the cases to travel all of Colombia in 4x4, I want to undertake a trip with you through all of the country; to stop every time we stumble upon the ocean and going inside the forests with road. Twenty months or whatever it takes us; but all of Colombia, preferably. We will eat at the stops for truckers and travelers and in the villages which accept us, and will bath in the lagoons and the lakes.", "Faro Cercano queda en las afueras de Isla Primavera, ilumina a los barcos por las noches y de día sirve como referencia para los pescadores que pescan lejísimos. Se ve muy hermoso con la neblina de las mañanas por ejemplo y me sirvió de inspiración para escribir esta canción: Faro Cercano, Faro Cercano Cómo alumbras la niebla Cómo giras, cómo giras Como un trompo perpetuo Y las algas Que te abrazan Y las gaviotas Que te rodean.", "Near Beacon is on the outskirts of Spring Island, it gives light to the ships at night and at day time serves as a reference to the fishers who fish very far away. It looks very beautiful with the fog of the mornings for example and served me as an inspiration for writing this song: Near Beacon, Near Beacon How you light up the fog How you spin, how you spin Like a perpetual top And the algae That hug you And the gulls That surround you.", "Nunca te romperé el corazón, nunca me saldré con la mía en eso de no adorarte. Sólo espero que te busques un buen asiento en la película de verme hablarte, porque tal vez esté un poco nervioso, y sé que te entretiene verme balbucear cosas sin sentido para ti que yo con esfuerzo intento mantener en el español. Pero en las otras cosas no tendremos problemas y puedes esperar una experiencia muy divertida, muy cómoda y emocionante.", "I will never break your heart, will never get away with mine at that of not adoring you. I only hope you search yourself a good seat in the movie of seeing me talking to you, because maybe I be a little nervous, and I know that it entertains you to watch me babble nonsenses for you that I try hard to keep in spanish. But in the other things we will not have problems and you can expect a very fun experience, very comfortable and exciting.", "Tienes unos ojos negros de gatita. Me haces sentir increíblemente halagado cuando me miras así, penetrando mi alma y doblegando mi voluntad con tus ojos negros de gatita. Espero que nunca dejes de darme unos minutos perdido en el infinito universo negro con estrellas y planetas que son tus ojos negros de gatita, que no me perdones y me castigues con tus ojos negros de gatita, que te los regaló Dios o Satanás, pero a mí también.", "You have some kitty like black eyes. You make me feel incredibly lauded when you look at me like that, penetrating my soul and bending my will with your kitty like black eyes. I hope you never stop giving me a few minutes lost in the infinite black universe with stars and planets that is your kitty like black eyes; that you do not forgive me and punish me with your kitty like black eyes, that gave you God or Satan, but so they did to me.", "Tu cabello lo incendian las llamas del infierno Eres un ángel demoníaco del amor Eres la musa que creó la poesía con todo lo que conoce Los olores que producen las flores cuando es primavera Yo soy buda viendo una mariposa Sintiendo como descansa entre los dedos de sus manos Dejando ver sus alas de colores Cuando estás al frente mío Cruzando tus piernas en tu taburete Y tomando apuntes tan ordenada Con tus rizos color caramelo.", "Your hair is set on fire by the flames of hell You are a demonic angel of love You are the muse which created the poetry with everything it knows The smells which produce the flowers when it is spring I am Buddha looking at a butterfly Feeling how it rests in between the fingers of his hands Letting be seen its color wings When you are in front of me Crossing your legs in your chair And taking notes so neat With your curls color caramel.", "Cómo me recorre la sangre el cuerpo Cómo te acomodas en mi conciencia para siempre Desde este mismo instante Eres el viento que mueve los árboles La brisa se desliza en tu camisa Simplemente humedece suavemente tu piel Las gotitas te recorren violentas el cuerpo Se desgarran dentro del tiempo mis recuerdos Ya sólo recuerdo una cosa Cuánto te debí haber amado toda mi vida Y sólo puedo pensar en una cosa En cómo pude olvidar eso.", "How it goes through my body the blood How you settle in my conscious forever From this very instant You are the wind which moves the trees The breeze slides on your shirt It simply moists softly your skin The little drops go violently through your body They tear apart inside the time my memories Now I only remember one thing That how much I should have loved you all of my life And I can only think of one thing In how could I forget that."]; 

paused= false; 

contr = function(i){ 
b= 0; 
for(www in i){ 
	(www == i.length - 1 || i[www] == " ") ? b++: 1; 
} 
return [[b, i.replaceAll(" ", "").length], i]; 
} 

document.addEventListener("DOMContentLoaded", function(){ 
    document.getElementById("ñ").checked? Accents= ÑAccents: Accents= NAccents; 
    document.addEventListener("keypress", function(){ 	(function(){document.querySelector("#Sara p").outerHTML= "<p style= 'font-size: 15px; display: inline-block; '>" + contr( document.getElementsByTagName("textarea")[0].value )[0][0] + " Palabras. " + "</br>" + contr( document.getElementsByTagName("textarea")[0].value )[0][1] + " Caracteres (Sin espacios)." + "</p>"; })() }); 

    document.addEventListener("keyup", function(){ 	(function(){document.querySelector("#Sara p").outerHTML= "<p style= 'font-size: 15px; display: inline-block; '>" + contr( document.getElementsByTagName("textarea")[0].value )[0][0] + " Palabras. " + "</br>" + contr( document.getElementsByTagName("textarea")[0].value )[0][1] + " Caracteres (Sin espacios)." + "</p>"; })() }); 

    document.addEventListener("keydown", function(i){ 
    	i.keyCode == 16? por_siLaBas(document.getElementById("dieded").value): 1; 
    	i.keyCode == 17? parse("#Sara", -1): 1; 
    }); 
})
 
himno= 0; 
setInterval( function(){
	!paused? document.getElementById("Sara").innerHTML= "<p style= 'font-size: 15px; display: inline-block; '>" + contr( fe[himno] )[0][0] + " Palabras. " + "    " + contr( fe[himno] )[0][1] + " Caracteres (Sin espacios)." + "</p>" +  "<textarea style='font-size: 10px; width: 1000px; '>" + contr( fe[himno] )[1] + "</textarea>": 28918; !paused? himno < 15? himno++: himno= 0: 1882; }, 5000); 

parse= function(a, b){ 
	switch(a[0]){ 
  case "#": 
     a= document.getElementById(a.slice(1, a.length)); 
     break; 
  case ".": 
    a= document.getElementsByClassName(a.slice(1, a.length)); 
    break; 
	default: 
  	a= document.getElementsByTagName(a); 
    break; 
	}; 
     
	b != -1? a[b].innerHTML= "<p id= 'parsed'>" + Cinnamon + "</p>": a.innerHTML= "<p id= 'parsed'>" + Cinnamon + "</p>"; 
}; 
