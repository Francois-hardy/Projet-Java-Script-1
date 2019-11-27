var xg = 225;
var xd = xg + 150;
var xG = 230;
var xD = xg + 140;
var yg = 0;
var yd = 0;
//var largeurRoute = 200;
var tailleRectangles = 5;
var tailleChemin = 5;
var route = [];
var chemin = [];
var sol = [];
//let B = 5;




///////////////////  ROUTE /////////////////
function drawRoute3() {
  ctx.save();
  drawTableauRoute3();
  scrolleRoute3();
  ctx.restore();
  
}

////////////////////////////// ROUTE ////////////////////////////

function creerTableauRoute3() {
  let nbLignes = h / tailleRectangles;
  console.log("Route3 Ok avec NBLigne :" + nbLignes);
  
  for(let i = 0; i < nbLignes; i++) {
    route[i] = {xg:225, xd:375}
  }
}

function  drawTableauRoute3() {
   
   for(let i = 0; i < route.length; i++) {
	ctx.fillStyle = 'red';
    ctx.fillRect(route[i].xg, i*B, 10, 10) ;
    ctx.fillRect(route[i].xd, i*B, 10, 10) ;
  }
}

var speed = 3;

function scrolleRoute3() {
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
  xd = xg + 150;
  
  
  //console.log(speed);
  newFirst = {xg: xg , xd: xd};// ici de -2 à +2

  
  route.unshift(newFirst)
}

//////////////////////////////////// SOL /////////////////////////

function drawSol3() {
  ctx.save();
  drawTableauSol3();
  scrolleSol3();
  ctx.restore();
  
} 

function creerTableauSol3() {
  let nbLignes = h / tailleRectangles;
  console.log("Sol3 Ok avec NBLigne :" + nbLignes);
  
  for(let i = 0; i < nbLignes; i++) {
    sol[i] = {xg:223}
  }
}

function  drawTableauSol3() {
   ctx.fillStyle = 'lightgrey';
   for(let i = 0; i < sol.length; i++) {
    ctx.fillRect(sol[i].xg + 12, B*i, 135, tailleRectangles) ;
  }
}

function scrolleSol3() {
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

function drawChemin3() {
  ctx.save();
  drawTableauChemin3();
  scrolleChemin3();
  ctx.restore();
  
} 

function creerTableauChemin3() {
  let nbLignes = h / tailleChemin;
  console.log("Chemin3 Ok avec NBLigne :" + nbLignes);
  
  for(let i = 0; i < nbLignes; i++) {
    chemin[i] = {xG:230, xD:370}
  }
} 


function  drawTableauChemin3() {
   ctx.fillStyle = 'black';
   for(let i = 0; i < chemin.length; i++) {
    ctx.fillRect(chemin[i].xG, i*B, tailleChemin, tailleChemin) ;
    ctx.fillRect(chemin[i].xD, i*B, tailleChemin, tailleChemin) ;
  }
} 

function scrolleChemin3() {
  // Ici on va supprimer le dernier élément de la route
  chemin.pop();
  //chemin.pop();
  
  // On va en ajouter un au début
  // on prend le premier élément et on le déplace un peu
  // on va ajouter un déplacement random à gauche ou à droite de + ou - 
  // un certain incrément
  let First2 = chemin [0];
  let newFirst2 = First2; 
  
  if (xD > 595){
    speed = 2;
  }
  if  (xG <= 5){
    speed = 5;
  }
  xG = xg + 7;
  xD = xG + 140;
  
  // ici de -2 à +2
  newFirst2 = {xG: xG , xD: xD}; 

  chemin.unshift(newFirst2)
    
}

console.log("LVL3 chargé");
