window.onload = init;
let canvas;
let tableau;
const rects = [];
const tab = [];
let start = 1;
var pause = 0;
let pv;
let score;
var classementTab = [0,0,0];
let ctx;
let ctx1;

var w, h;

function init() {
  
 // On recup l'élément video
 video = document.querySelector("#video");

 video.play();

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
  
}
