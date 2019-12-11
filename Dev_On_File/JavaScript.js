window.onload = init;
let canvas;
let tableau;
var classementTab = [];
let ctx;
let ctx1;
video = document.querySelector("#video");
var w, h;

function init() {
  
  

 
 
  canvas = document.querySelector("#Canvas");
  video.play();
  w = canvas.width;
  h = canvas.height;
  //context graphique
  ctx = canvas.getContext("2d");
  Affichage();   
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