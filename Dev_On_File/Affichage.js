start = 0;


function Affichage(){
  var Car = document.getElementById('CarF1');
  var Text1 = document.getElementById('lvl');
  var Text2 = document.getElementById('commencer');
  var Text3 = document.getElementById('entrer');

  ctx.drawImage(Car,0,0,600,600);
  ctx.drawImage(Text1,50,75, 500, 50);
  ctx.drawImage(Text3,50,250, 500, 50);
  ctx.drawImage(Text2,50,325, 500, 50);
  tailleRectangles = 5;
  tailleChemin = 5;
}

function Affichagelvl1(){
  var Car = document.getElementById('CarF12');
  var Text1 = document.getElementById('lvl3');
  var Text2 = document.getElementById('commencer');
  var Text3 = document.getElementById('entrer');

  ctx.drawImage(Car,0,0,600,600);
  ctx.drawImage(Text1,50,75, 500, 50);
  ctx.drawImage(Text3,50,250, 500, 50);
  ctx.drawImage(Text2,50,325, 500, 50);
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
  var Car = document.getElementById('CarF13');
  var Text1 = document.getElementById('lvl1');
  var Text2 = document.getElementById('commencer');
  var Text3 = document.getElementById('entrer');

  ctx.drawImage(Car,0,0,600,600);
  ctx.drawImage(Text1,50,75, 500, 50);
  ctx.drawImage(Text3,50,250, 500, 50);
  ctx.drawImage(Text2,50,325, 500, 50);
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
  var Car = document.getElementById('CarF14');
  var Text1 = document.getElementById('lvl2');
  var Text2 = document.getElementById('commencer');
  var Text3 = document.getElementById('entrer');

  ctx.drawImage(Car,0,0,600,600);
  ctx.drawImage(Text1,50,75, 500, 50);
  ctx.drawImage(Text3,50,250, 500, 50);
  ctx.drawImage(Text2,50,325, 500, 50);
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
  var Car = document.getElementById('CarF15');
  var Text1 = document.getElementById('lvl4');
  var Text2 = document.getElementById('commencer');
  var Text3 = document.getElementById('entrer');

  ctx.drawImage(Car,0,0,600,600);
  ctx.drawImage(Text1,50,75, 500, 50);
  ctx.drawImage(Text3,50,250, 500, 50);
  ctx.drawImage(Text2,50,325, 500, 50);
  tailleRectangles = 5;
  tailleChemin = 5;
  creerTableauRoute4();
  creerTableauChemin4();
  creerTableauSol4();
  xg = 270;
  xd = xg + 60;
  start = 1;
  LVL = 4;

  console.log("Vous avez lancé le lvl 4");
}