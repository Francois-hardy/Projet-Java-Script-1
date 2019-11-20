var xg = 200;
var xd = xg + 200;
var xG = 205;
var xD = xg + 190;
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
function drawRoute2() {
  ctx.save();
  drawTableauRoute2();
  scrolleRoute2();
  ctx.restore();
  
}

////////////////////////////// ROUTE ////////////////////////////

function creerTableauRoute2() {
  let nbLignes = h / tailleRectangles;
  console.log("Route2 Ok avec NBLigne :" + nbLignes);
  
  for(let i = 0; i < nbLignes; i++) {
    route[i] = {xg:200, xd:400}
  }
}

function  drawTableauRoute2() {
   
   for(let i = 0; i < route.length; i++) {
	ctx.fillStyle = 'red';
    ctx.fillRect(route[i].xg, i*10, 10, 10) ;
    ctx.fillRect(route[i].xd, i*B, 10, 10) ;
  }
}

var speed = 3;

function scrolleRoute2() {
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
  xd = xg + 200;
  
  
  //console.log(speed);
  newFirst = {xg: xg , xd: xd};// ici de -2 à +2
  //newFirst2 = {xg: xg , xd: xd}; 

  
  route.unshift(newFirst)
  //chemin.unshift(newFirst2)
    
}

//////////////////////////////////// SOL /////////////////////////

function drawSol2() {
  ctx.save();
  drawTableauSol2();
  scrolleSol2();
  ctx.restore();
  
} 

function creerTableauSol2() {
  let nbLignes = h / tailleRectangles;
  console.log("Sol2 Ok avec NBLigne :" + nbLignes);
  
  for(let i = 0; i < nbLignes; i++) {
    sol[i] = {xg:198}
  }
}

function  drawTableauSol2() {
   ctx.fillStyle = 'lightgrey';
   for(let i = 0; i < sol.length; i++) {
    ctx.fillRect(sol[i].xg + 12, B*i, 185, tailleRectangles) ;
  }
}

function scrolleSol2() {
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

function drawChemin2() {
  ctx.save();
  drawTableauChemin2();
  scrolleChemin2();
  ctx.restore();
  
} 

function creerTableauChemin2() {
  let nbLignes = h / tailleChemin;
  console.log("Chemin2 Ok avec NBLigne :" + nbLignes);
  
  for(let i = 0; i < nbLignes; i++) {
    chemin[i] = {xG:205, xD:395}
  }
} 


function  drawTableauChemin2() {
   ctx.fillStyle = 'black';
   for(let i = 0; i < chemin.length; i++) {
    ctx.fillRect(chemin[i].xG, i*B, tailleChemin, tailleChemin) ;
    ctx.fillRect(chemin[i].xD, i*B, tailleChemin, tailleChemin) ;
  }
} 

function scrolleChemin2() {
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
  xD = xG + 190;
  
  //newFirst = {xg: xg , xd: xd};// ici de -2 à +2
  newFirst2 = {xG: xG , xD: xD}; 

  //route.unshift(newFirst)
  chemin.unshift(newFirst2)
    
}

console.log("LVL2 chargé");