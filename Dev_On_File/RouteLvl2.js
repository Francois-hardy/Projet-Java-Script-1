var xg = 200;
var xd = xg + 200;
var xG = 205;
var xD = xg + 190;
var yg = 0;
var yd = 0;
//var largeurRoute = 200;
var tailleRectangles = 5;
var tailleChemin = 5;
var route2 = [];
var chemin2 = [];
var sol2 = [];
//let B = 5;




///////////////////  ROUTE /////////////////
function drawRoute2() {
  ctx.save();
  drawTableauRoute2();
  scrolleRoute2();
  ctx.restore();
  ctx1.fillText("Classement", 32, 20);
  classementTab = [0, 0, 0];
  ctx1.fillText("1er : " + classementTab[0] ,10,50);
  ctx1.fillText("2ème : " + classementTab[1],10,80);
  ctx1.fillText("3ème : " + classementTab[2],10,110);
  
  classement();
  
}

////////////////////////////// ROUTE ////////////////////////////

function creerTableauRoute2() {
  let nbLignes = h / tailleRectangles;
  console.log("Route2 Ok avec NBLigne :" + nbLignes);
  
  for(let i = 0; i < nbLignes; i++) {
    route2[i] = {xg:200, xd:400}
  }
}

function  drawTableauRoute2() {
  var Cheminpng = document.getElementById('Cheminpng');
  var Chemin2png = document.getElementById('Chemin2png');
   
   for(let i = 0; i < route2.length; i++) {
	ctx.fillStyle = 'red';
    ctx.drawImage(Cheminpng,route2[i].xg, i*B, 10, 10) ;
    ctx.drawImage(Chemin2png,route2[i].xd, i*B, 10, 10) ;
  }
}

var speed = 3;

function scrolleRoute2() {
  // Ici on va supprimer le dernier élément de la route
  route2.pop();
  //chemin.pop();
  

  // On va en ajouter un au début
  // on prend le premier élément et on le déplace un peu
  // on va ajouter un déplacement random à gauche ou à droite de + ou - 
  // un certain incrément
  let First = route2 [0];
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

  
  route2.unshift(newFirst)
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
    sol2[i] = {xg:198}
  }
}

function  drawTableauSol2() {
  var Solpng = document.getElementById('Solpng');
   for(let i = 0; i < sol2.length; i++) {
    ctx.drawImage(Solpng,sol2[i].xg + 12, B*i, 185, tailleRectangles) ;
  }
}

function scrolleSol2() {
  // Ici on va supprimer le dernier élément de la route
  sol2.pop();
  
  let First3 = sol2 [0];
  let newFirst3 = First3; 
    
  //newFirst = {xg: xg , xd: xd};// ici de -2 à +2
  newFirst3 = {xg: xg}; 

  
  //route.unshift(newFirst)
  sol2.unshift(newFirst3)
    
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
    chemin2[i] = {xG:205, xD:395}
  }
} 


function  drawTableauChemin2() {
   ctx.fillStyle = 'black';
   for(let i = 0; i < chemin2.length; i++) {
    ctx.fillRect(chemin2[i].xG, i*B, tailleChemin, tailleChemin) ;
    ctx.fillRect(chemin2[i].xD, i*B, tailleChemin, tailleChemin) ;
  }
} 

function scrolleChemin2() {
  // Ici on va supprimer le dernier élément de la route
  chemin2.pop();
  //chemin.pop();
  
  // On va en ajouter un au début
  // on prend le premier élément et on le déplace un peu
  // on va ajouter un déplacement random à gauche ou à droite de + ou - 
  // un certain incrément
  let First2 = chemin2 [0];
  let newFirst2 = First2; 
  
  if (xD > 595){
    speed = 2;
  }
  if  (xG <= 5){
    speed = 5;
  }
  xG = xg + 7;
  xD = xG + 190;
  
  // ici de -2 à +2
  newFirst2 = {xG: xG , xD: xD}; 

  chemin2.unshift(newFirst2)
    
}

console.log("LVL2 chargé");
