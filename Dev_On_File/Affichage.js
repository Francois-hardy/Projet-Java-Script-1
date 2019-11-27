start = 0;

function Affichage(){
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,600,600);
  ctx.font = "30pt Arial Black";
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "black";
  ctx.fillText("Choisir votre LVL", 120, 290);
  ctx.strokeText("Choisir votre LVL", 120, 290);
  ctx.fillText("pour commencer", 120, 340);
  ctx.strokeText("pour commencer", 120, 340);
  tailleRectangles = 5;
  tailleChemin = 5;
}

function Affichagelvl1(){
  
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,600,600);
  ctx.font = "25pt Arial Black";
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "black";
  ctx.fillText("Vous avez choisi le LVL 3", 80, 240);
  ctx.strokeText("Vous avez choisi le LVL 3", 80, 240);
  ctx.font = "30pt Arial Black";
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "black";
  ctx.fillText("Pressez ENTRER", 120, 290);
  ctx.strokeText("Pressez ENTRER", 120, 290);
  ctx.fillText("pour commencer", 120, 340);
  ctx.strokeText("pour commencer", 120, 340);
  tailleRectangles = 5;
  tailleChemin = 5;
  creerTableauRoute();
  creerTableauChemin();
  creerTableauSol();
  xg = 250;
  xd = xg + 100;
  start = 1;
  LVL = 1;

  console.log("Vous avez lancé le lvl 3");
  
}
function Affichagelvl2(){
  
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,600,600);
  ctx.font = "25pt Arial Black";
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "black";
  ctx.fillText("Vous avez choisi le LVL 1", 80, 240);
  ctx.strokeText("Vous avez choisi le LVL 1", 80, 240);
  ctx.font = "30pt Arial Black";
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "black";
  ctx.fillText("Pressez ENTRER", 120, 290);
  ctx.strokeText("Pressez ENTRER", 120, 290);
  ctx.fillText("pour commencer", 120, 340);
  ctx.strokeText("pour commencer", 120, 340);
  tailleRectangles = 5;
  tailleChemin = 5;
  creerTableauRoute2();
  creerTableauChemin2();
  creerTableauSol2();
  xg = 200;
  xd = xg + 200;
  start = 1;
  LVL = 2;
  console.log("Vous avez lancé le lvl 1");
}
function Affichagelvl3(){
  
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,600,600);
  ctx.font = "25pt Arial Black";
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "black";
  ctx.fillText("Vous avez choisi le LVL 2", 80, 240);
  ctx.strokeText("Vous avez choisi le LVL 2", 80, 240);
  ctx.font = "30pt Arial Black";
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "black";
  ctx.fillText("Pressez ENTRER", 120, 290);
  ctx.strokeText("Pressez ENTRER", 120, 290);
  ctx.fillText("pour commencer", 120, 340);
  ctx.strokeText("pour commencer", 120, 340);
  tailleRectangles = 5;
  tailleChemin = 5;
  creerTableauRoute3();
  creerTableauChemin3();
  creerTableauSol3();
  xg = 225;
  xd = xg + 125;
  start = 1;
  LVL = 3;
  console.log("Vous avez lancé le lvl 2");
  
}
function Affichagelvl4(){
  
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,600,600);
  ctx.font = "25pt Arial Black";
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "black";
  ctx.fillText("Vous avez choisi le LVL 4", 80, 240);
  ctx.strokeText("Vous avez choisi le LVL 4", 80, 240);
  ctx.font = "30pt Arial Black";
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "black";
  ctx.fillText("Pressez ENTRER", 120, 290);
  ctx.strokeText("Pressez ENTRER", 120, 290);
  ctx.fillText("pour commencer", 120, 340);
  ctx.strokeText("pour commencer", 120, 340);
  tailleRectangles = 5;
  tailleChemin = 5;
  creerTableauRoute();
  creerTableauChemin();
  creerTableauSol();
  xg = 250;
  xd = xg + 100;
  start = 1;
  LVL = 4; 
  
}