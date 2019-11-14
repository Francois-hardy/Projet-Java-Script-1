window.onload = init;
let canvas;
let tableau;
const rects = [];
const tab = [];
let start = 1;
var pause = 0;
let pv;
let score;
var classementTab = [];
let ctx;
let ctx1;

let lvl1;
var w, h;

window.addEventListener('keydown', handleKeydown, false);
window.addEventListener('keyup', handleKeyup, false);
window.addEventListener('keypress', handleKeypress, false);



function handleKeydown(evt) {
    switch(evt.keyCode){
        case 37:
        rects.forEach(item => item.dx = -3);
        //Voiture.rotate(45 * Math.PI / 180);
        break;
        case 39:
        rects.forEach(item => item.dx = 3);
        break;
        case 80:
        pausefunc();
        break;

    }
 }

function handleKeyup(evt) {
    switch(evt.keyCode){
        case 37:
        rects.forEach(item => item.dx = 0);
        break;
        case 39:
        rects.forEach(item => item.dx = 0);
        break;

    }
 }

 function lancerLeJeu(){
 	if (start == 1) {
        rects[0] = new Voiture(280,500,ctx,0.3);
      	requestAnimationFrame(anime60fps);
      	start = 0;
    }
 }

function interfaceDesNiveaux(){
	if (start === 2) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "white";
		ctx.fillRect(0,0,400,400);
		ctx.font = "30pt Arial Black";
		ctx.fillStyle = "blue";
		ctx.strokeStyle = "black";
		ctx.fillText("Choisir le niveau", 15, 50);
		ctx.strokeText("Choisir le niveau", 15, 50);
		ctx.fillStyle = "red";
		ctx.fillRect(25, 75, 150, 75);

		ctx.fillStyle = "green";
		ctx.fillRect(220, 75, 150, 75);
		ctx.fillStyle = "blue";
		ctx.fillRect(25, 175, 150, 75);
		ctx.fillStyle = "grey";
		ctx.fillRect(220, 175, 150, 75);
		ctx.fillStyle = "black";
		ctx.fillRect(25, 275, 150, 75);
		ctx.fillStyle = "purple";
		ctx.fillRect(220, 275, 150, 75);
		start = 1;
	}
}




function handleKeypress(evt) {
    switch(evt.keyCode){
        case 13:
        	//////////////////////////////// Lancer le jeu ////////////////////////// Start = 1
        	if(start == 1){
            lancerLeJeu();
          }
            //////////////////////////////// Lance interface des niveaux ////////////////////////// Start = 2
          	//interfaceDesNiveaux();
          	break;

		case 65:
			//lancerLeJeu();
			break;	

    }
}
 
 



function pausefunc(){
  if(pause === 1){
    pause = 0;
    requestAnimationFrame(anime60fps);
  }
  else{
    pause = 1;

  }
}

class Voiture {
  constructor(x, y, ctx, taille) {
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.ctx = ctx;
    this.taille = taille;
    this.ctx.fillStyle = this.color;  
    this.ctx.lineWith = 10;
    this.pv = 10;
    this.score = 0;

  }
  
  draw() {
	ctx.save();

    ctx.fillStyle = "black";
    //Roue haut gauche
    ctx.fillRect(this.x, this.y, 30*this.taille, 40*this.taille);
    //Roue haut droite
    ctx.fillRect(this.x+70*this.taille, this.y, 30*this.taille, 40*this.taille);
    //Entre roue haut
    ctx.fillRect(this.x+25*this.taille, this.y+15*this.taille, 50*this.taille, 10*this.taille);
    
    //Roue bas gauche
    ctx.fillRect(this.x, this.y+100*this.taille, 30*this.taille, 40*this.taille);
    //Roue bas droite
    ctx.fillRect(this.x+70*this.taille, this.y+100*this.taille, 30*this.taille, 40*this.taille);
    //Entre roue bas
    ctx.fillRect(this.x+25*this.taille, this.y+115*this.taille, 50*this.taille, 10*this.taille);
    
    //Centre
    ctx.fillStyle = "red";
    ctx.fillRect(this.x+35*this.taille, this.y, 30*this.taille, 140*this.taille);
    
    //triangle droit
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(this.x+65*this.taille,this.y+50*this.taille);
    ctx.lineTo(this.x+65*this.taille,this.y+100*this.taille);
    ctx.lineTo(this.x+90*this.taille,this.y+75*this.taille);
    ctx.fill();
    
    //triangle gauche
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(this.x+35*this.taille,this.y+50*this.taille);
    ctx.lineTo(this.x+35*this.taille,this.y+100*this.taille);
    ctx.lineTo(this.x+10*this.taille,this.y+75*this.taille);
    ctx.fill();
    
    //protege roue bas gauche
    ctx.fillStyle = "grey";
    ctx.fillRect(this.x+5*this.taille, this.y+105*this.taille, 15*this.taille, 30*this.taille);
    
    //protege roue bas droit
    ctx.fillStyle = "grey";
    ctx.fillRect(this.x+80*this.taille, this.y+105*this.taille, 15*this.taille, 30*this.taille);
    
    //protege roue bas droit
    ctx.fillStyle = "darkgrey";
    ctx.fillRect(this.x+20*this.taille, this.y+110*this.taille, 60*this.taille, 20*this.taille);
    ctx.restore();
    
    

  }
  move() {
    
  this.x += this.dx;
  this.score += 1;
  // j'ai pris un peu plus large que la route  
  if(this.x + 10/this.taille >= route[108].xd ) {
      this.pv -= 0.1;
      ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
      ctx.fillRect(0,0,canvas.width, canvas.height);
      
  }
  //document.getElementById("Canvas").style.background = "url('images/terrain.jpg') ";
  if(this.x - 3/this.taille <= route[108].xg ){
      this.pv -= 0.1;
      ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
      ctx.fillRect(0,0,canvas.width, canvas.height);
  }
  
  
  }

}


function init() {
  
 
  canvas = document.querySelector("#Canvas");
  w = canvas.width;
  h = canvas.height;
  //context graphique
  ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,600,600);
  ctx.font = "30pt Arial Black";
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "black";
  ctx.fillText("Pressez ENTRER", 120, 290);
  ctx.strokeText("Pressez ENTRER", 120, 290);
  ctx.fillText("pour commencer", 120, 340);
  ctx.strokeText("pour commencer", 120, 340);
  creerTableauRoute();
  creerTableauChemin();
  creerTableauSol();
  
   
  tableau = document.querySelector("#Tableau");
  w1 = tableau.width;
  h1 = tableau.height;
  
  ctx1 = tableau.getContext("2d");
  ctx1.font = "10pt Arial Black";
  ctx1.fillStyle = "blue";
  ctx1.strokeStyle = "black";
  ctx1.fillText("Classement", 32, 20);
  classementTab = [0, 0, 0];
  ctx1.fillText("1er : " + classementTab[0] ,10,50);
  ctx1.fillText("2ème : " + classementTab[1],10,80);
  ctx1.fillText("3ème : " + classementTab[2],10,110);
  
  classement();
  
 
  //rects[0] = new Voiture(150,200,ctx);

  //requestAnimationFrame(anime60fps);
}

//let K;


/////////////////////////////////////////////// Niveau 1 ///////////////////////////////////////
function anime60fps() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRoute();
  drawChemin();
  drawSol();
  rects.map(r => {
    ctx.fillStyle = "red";
    ctx.fillRect(10,10,100,5);
    ctx.fillStyle = "green";
    ctx.fillRect(10,10,rects[0].pv*10,5);
    
    ctx.font = "15pt Arial Black";
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "black";
    ctx.fillText("Score: "+rects[0].score,10, 590);
    
    /* //////////////// Changement de la route //////////////////////////
    // Changer la direction du chemin par rapport au score
    */
    if (rects[0].score == 230){
      speed = speed - 3;
      //creerTableauChemin();
    }
    
    if (rects[0].score == 500){
      speed = speed - 2;
    }
    
    if (rects[0].score == 1000){
      speed = speed - 2;
    }
    if (rects[0].score == 1500){
      speed = speed - 3;
    }
    if (rects[0].score == 2000){
      speed = speed + 4;
    }
    if (rects[0].score == 2100){
      speed = speed - 1;
    }
    if (rects[0].score == 2200){
      speed = speed - 2;
    }
    
    //////////////////////////////////////////////////////////////
    
    ctx.font = "15pt Arial Black";
    ctx.fillStyle = "blue";
    pv = rects[0].pv;
    if (pv < 0){
      pv = 0;
    }
    ctx.fillText(pv.toFixed(2)*10+"%", 120, 20);

    
    r.move();
    r.draw();
    
 
  if(rects[0].pv <= 0){
    //K = rects[0].score - 1;
    ctx.fillStyle = "red";
    ctx.fillRect(0,0,600,600);
    ctx.font = "45pt Arial Black";
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "black";
    ctx.fillText("Perdu", canvas.width/3, canvas.height/2);
    ctx.strokeText("Perdu", canvas.width/3, canvas.height/2);
    ctx.font = "20pt Arial Black";
    ctx.fillText("Pressez ENTRER", 10, 500);
    ctx.fillText("pour recommencer", 10, 550);
    ctx.fillText("Votre Score: "+rects[0].score,canvas.width/3.6,  canvas.height/1.7);
    classement();
    tailleRectangles = 5;
    tailleChemin = 5;
    creerTableauRoute();
    creerTableauChemin();
    creerTableauSol();
    xg = 250;
    xd = xg + 100;
    start = 1;
    
    
    }else if (pause === 0){
      
    requestAnimationFrame(anime60fps);
    
  }
  else{
    ctx.font = "45pt Arial Black";
    ctx.fillStyle = "green";
    ctx.strokeStyle = "black";
    ctx.fillText("Pause", canvas.width/3.2, canvas.height/2);
  }
  });
}



function classement(){
  ctx1.font = "10pt Arial Black";
  ctx1.fillStyle = 'blue';
  ctx1.strokeStyle = "black";
  ctx1.fillText("Classement", 32, 20);
    try {
       if (classementTab[2] < rects[0].score-1){
        ctx1.clearRect(0, 0, canvas.width, canvas.height);
        classementTab.pop();
        classementTab.push(rects[0].score-1);
        //classementTab[2] = rects[0].score-1;
        classementTab = classementTab.sort();
        classementTab.reverse();
        ctx1.fillText("Classement", 32, 20);
        ctx1.fillText("1er : " + classementTab[0] ,10,50);
        ctx1.fillText("2ème : " + classementTab[1],10,80);
        ctx1.fillText("3ème : " + classementTab[2],10,110);
  
      }
    }
    catch(error){
      console.log("1er tour");
    }
  
}



var xg = 250;
var xd = xg + 100;
var xG = 255;
var xD = xg + 90;
var yg = 0;
var yd = 0;
//var largeurRoute = 200;
var tailleRectangles = 5;
var tailleChemin = 5;
let B = 5;


///////////////////  ROUTE /////////////////
function drawRoute() {
  ctx.save();
  drawTableauRoute();
  scrolleRoute();
  ctx.restore();
  
}







var route = [];
var chemin = [];
var sol = [];

////////////////////////////// ROUTE ////////////////////////////

function creerTableauRoute() {
  let nbLignes = h / tailleRectangles;
  console.log("nb lignes : " + nbLignes)
  
  for(let i = 0; i < nbLignes; i++) {
    route[i] = {xg:250, xd:350}
  }
}

function  drawTableauRoute() {
   
   for(let i = 0; i < route.length; i++) {
	ctx.fillStyle = 'red';
    ctx.fillRect(route[i].xg, i*B, 10, 10) ;
    ctx.fillRect(route[i].xd, i*B, 10, 10) ;
  }
}

var speed = 3;

function scrolleRoute() {
  // Ici on va supprimer le dernier élément de la route
  route.pop();
  //chemin.pop();
  

  // On va en ajouter un au début
  // on prend le premier élément et on le déplace un peu
  // on va ajouter un déplacement random à gauche ou à droite de + ou - 
  // un certain incrément
  let First = route [0];
  let newFirst = First; 
  
  //let First2 = chemin [0];
  //let newFirst2 = First2; 
  
  if (xd > 595){
    speed = 3;
  }
  if  (xg <= 5){
    speed = 5;
  }
  xg += speed - Math.random()*8;
  xd = xg + 100;
  
  
  //console.log(speed);
  newFirst = {xg: xg , xd: xd};// ici de -2 à +2
  //newFirst2 = {xg: xg , xd: xd}; 

  
  route.unshift(newFirst)
  //chemin.unshift(newFirst2)
    
}

//////////////////////////////////// SOL /////////////////////////

function drawSol() {
  ctx.save();
  drawTableauSol();
  scrolleSol();
  ctx.restore();
  
} 

function creerTableauSol() {
  let nbLignes = h / tailleRectangles;
  console.log("nb lignes : " + nbLignes)
  
  for(let i = 0; i < nbLignes; i++) {
    sol[i] = {xg:248}
  }
}

function  drawTableauSol() {
   ctx.fillStyle = 'lightgrey';
   for(let i = 0; i < sol.length; i++) {
    ctx.fillRect(sol[i].xg + 12, B*i, 85, tailleRectangles) ;
  }
}

function scrolleSol() {
  // Ici on va supprimer le dernier élément de la route
  sol.pop();
  
  let First3 = sol [0];
  let newFirst3 = First3; 
  
  //let First2 = chemin [0];
  //let newFirst2 = First2; 



  
  
  //console.log(speed);
  //newFirst = {xg: xg , xd: xd};// ici de -2 à +2
  newFirst3 = {xg: xg}; 

  
  //route.unshift(newFirst)
  sol.unshift(newFirst3)
    
}

///////////////////////////////// CHEMIN BLANC ////////////////////////////////

function drawChemin() {
  ctx.save();
  drawTableauChemin();
  scrolleChemin();
  ctx.restore();
  
} 

function creerTableauChemin() {
  let nbLignes = h / tailleChemin;
  console.log("nb lignes : " + nbLignes)
  
  for(let i = 0; i < nbLignes; i++) {
    chemin[i] = {xG:255, xD:345}
  }
} 


function  drawTableauChemin() {
   ctx.fillStyle = 'black';
   for(let i = 0; i < chemin.length; i++) {
    ctx.fillRect(chemin[i].xG, i*B, tailleChemin, tailleChemin) ;
    ctx.fillRect(chemin[i].xD, i*B, tailleChemin, tailleChemin) ;
  }
} 

function scrolleChemin() {
  // Ici on va supprimer le dernier élément de la route
  chemin.pop();
  //chemin.pop();
  

  // On va en ajouter un au début
  // on prend le premier élément et on le déplace un peu
  // on va ajouter un déplacement random à gauche ou à droite de + ou - 
  // un certain incrément
  let First2 = chemin [0];
  let newFirst2 = First2; 
  
  //let First2 = chemin [0];
  //let newFirst2 = First2; 
  
  if (xD > 595){
    speed = 2;
  }
  if  (xG <= 5){
    speed = 5;
  }
  xG = xg + 7;
  xD = xG + 90;
  
  
  //console.log(speed);
  //newFirst = {xg: xg , xd: xd};// ici de -2 à +2
  newFirst2 = {xG: xG , xD: xD}; 

  
  //route.unshift(newFirst)
  chemin.unshift(newFirst2)
    
}
