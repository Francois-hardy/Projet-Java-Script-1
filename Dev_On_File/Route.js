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
var route = [];
var chemin = [];
var sol = [];

///////////////////  ROUTE /////////////////
function drawRoute() {
  ctx.save();
  drawTableauRoute();
  scrolleRoute();
  ctx.restore();
  
}

////////////////////////////// ROUTE ////////////////////////////

function creerTableauRoute() {
  let nbLignes = h / tailleRectangles;
  console.log("Route Ok avec NBLigne :" + nbLignes);
  
  for(let i = 0; i < nbLignes; i++) {
    route[i] = {xg:250, xd:350}
  }
}

function  drawTableauRoute() {

  var Cheminpng = document.getElementById('Cheminpng');
  var Chemin2png = document.getElementById('Chemin2png');

   for(let i = 0; i < route.length; i++) {
     
  //ctx.fillStyle = zozor.src;

 
    ctx.drawImage(Cheminpng, route[i].xg, i*B, 10, 10) ;
    ctx.drawImage(Chemin2png, route[i].xd, i*B, 10, 10) ;
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
  console.log("Sol Ok avec NBLigne :" + nbLignes);
  
  for(let i = 0; i < nbLignes; i++) {
    sol[i] = {xg:248}
  }
}

function  drawTableauSol() {
  var Solpng = document.getElementById('Solpng');
   for(let i = 0; i < sol.length; i++) {
    ctx.drawImage(Solpng,sol[i].xg + 12, B*i, 85, tailleRectangles) ;
  }
}

function scrolleSol() {
  // Ici on va supprimer le dernier élément de la route
  sol.pop();
  
  let First3 = sol [0];
  let newFirst3 = First3; 
    
  
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
  console.log("Chemin Ok avec NBLigne :" + nbLignes);
  
  for(let i = 0; i < nbLignes; i++) {
    chemin[i] = {xG:255, xD:345}
  }
} 


function  drawTableauChemin() {
   ctx.fillStyle = 'white';
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
  
  //newFirst = {xg: xg , xd: xd};// ici de -2 à +2
  newFirst2 = {xG: xG , xD: xD}; 

  //route.unshift(newFirst)
  chemin.unshift(newFirst2)
    
}

console.log("LVL1 chargé");