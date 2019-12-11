var xg = 270;
var xd = xg + 60;
var xG = 275;
var xD = xg + 50;
var yg = 0;
var yd = 0;
//var largeurRoute = 200;
var tailleRectangles = 5;
var tailleChemin = 5;
var route4 = [];
var chemin4 = [];
var sol4 = [];
//let B = 5;



///////////////////  ROUTE /////////////////
function drawRoute4() {
  ctx.save();
  drawTableauRoute4();
  scrolleRoute4();
  ctx.restore();
  
}

////////////////////////////// ROUTE ////////////////////////////

function creerTableauRoute4() {
  let nbLignes = h / tailleRectangles;
  console.log("Route Ok avec NBLigne :" + nbLignes);
  
  for(let i = 0; i < nbLignes; i++) {
    route4[i] = {xg:270, xd:330}
  }
}

function  drawTableauRoute4() {

  var Cheminpng = document.getElementById('Cheminpng');
  var Chemin2png = document.getElementById('Chemin2png');
   
   for(let i = 0; i < route4.length; i++) {
	ctx.fillStyle = 'red';
    ctx.drawImage(Cheminpng,route4[i].xg, i*B, 10, 10) ;
    ctx.drawImage(Chemin2png,route4[i].xd, i*B, 10, 10) ;
  }
}

var speed = 3;

function scrolleRoute4() {
  // Ici on va supprimer le dernier élément de la route
  route4.pop();
  //chemin.pop();
  

  // On va en ajouter un au début
  // on prend le premier élément et on le déplace un peu
  // on va ajouter un déplacement random à gauche ou à droite de + ou - 
  // un certain incrément
  let First = route4 [0];
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
  xd = xg + 60;
  
  
  //console.log(speed);
  newFirst = {xg: xg , xd: xd};// ici de -2 à +2
  //newFirst2 = {xg: xg , xd: xd}; 

  
  route4.unshift(newFirst)
  //chemin.unshift(newFirst2)
    
}

//////////////////////////////////// SOL /////////////////////////

function drawSol4() {
  ctx.save();
  drawTableauSol4();
  scrolleSol4();
  ctx.restore();
  
} 

function creerTableauSol4() {
  let nbLignes = h / tailleRectangles;
  console.log("Sol Ok avec NBLigne :" + nbLignes);
  
  for(let i = 0; i < nbLignes; i++) {
    sol4[i] = {xg:268}
  }
}

function  drawTableauSol4() {
  var Solpng = document.getElementById('Solpng');
   for(let i = 0; i < sol4.length; i++) {
    ctx.drawImage(Solpng,sol4[i].xg + 12, B*i, 55, tailleRectangles) ;
  }
}

function scrolleSol4() {
  // Ici on va supprimer le dernier élément de la route
  sol4.pop();
  
  let First3 = sol4 [0];
  let newFirst3 = First3; 
    
  //newFirst = {xg: xg , xd: xd};// ici de -2 à +2
  newFirst3 = {xg: xg}; 

  
  //route.unshift(newFirst)
  sol4.unshift(newFirst3)
    
}

///////////////////////////////// CHEMIN BLANC ////////////////////////////////

function drawChemin4() {
  ctx.save();
  drawTableauChemin4();
  scrolleChemin4();
  ctx.restore();
  
} 

function creerTableauChemin4() {
  let nbLignes = h / tailleChemin;
  console.log("Chemin Ok avec NBLigne :" + nbLignes);
  
  for(let i = 0; i < nbLignes; i++) {
    chemin4[i] = {xG:275, xD:325}
  }
} 


function  drawTableauChemin4() {
   ctx.fillStyle = 'black';
   for(let i = 0; i < chemin4.length; i++) {
    ctx.fillRect(chemin4[i].xG, i*B, tailleChemin, tailleChemin) ;
    ctx.fillRect(chemin4[i].xD, i*B, tailleChemin, tailleChemin) ;
  }
} 

function scrolleChemin4() {
  // Ici on va supprimer le dernier élément de la route
  chemin4.pop();
  //chemin.pop();
  
  // On va en ajouter un au début
  // on prend le premier élément et on le déplace un peu
  // on va ajouter un déplacement random à gauche ou à droite de + ou - 
  // un certain incrément
  let First2 = chemin4 [0];
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
  xD = xG + 50;
  
  //newFirst = {xg: xg , xd: xd};// ici de -2 à +2
  newFirst2 = {xG: xG , xD: xD}; 

  //route.unshift(newFirst)
  chemin4.unshift(newFirst2)
    
}

console.log("LVL4 chargé");