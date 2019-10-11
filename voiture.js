window.onload = init;
let canvas;
const rects = [];
let start = 1;
let pv;

window.addEventListener('keydown', handleKeydown, false);
window.addEventListener('keyup', handleKeyup, false);
window.addEventListener('keypress', handleKeypress, false);

function handleKeydown(evt) {
    switch(evt.keyCode){
        case 37:
        rects.forEach(item => item.dx = -10);
        break;
        case 39:
        rects.forEach(item => item.dx = 10);
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

function handleKeypress(evt) {
    switch(evt.keyCode){
        case 13:
          if (start == 1) {
            rects[0] = new Voiture(150,200,ctx);
            requestAnimationFrame(anime60fps);
            start = 0;
          }
        break;


    }
 }

class Voiture {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.ctx = ctx;
    this.ctx.fillStyle = this.color;  
    this.ctx.lineWith = 10;
    this.pv = 10;

  }
  
  draw() {
    ctx.fillStyle = "black";
    //Roue haut gauche
    ctx.fillRect(this.x, this.y, 30, 40);
    //Roue haut droite
    ctx.fillRect(this.x+70, this.y, 30, 40);
    //Entre roue haut
    ctx.fillRect(this.x+25, this.y+15, 50, 10);
    
    //Roue bas gauche
    ctx.fillRect(this.x, this.y+100, 30, 40);
    //Roue bas droite
    ctx.fillRect(this.x+70, this.y+100, 30, 40);
    //Entre roue bas
    ctx.fillRect(this.x+25, this.y+115, 50, 10);
    
    //Centre
    ctx.fillStyle = "red";
    ctx.fillRect(this.x+35, this.y, 30, 140);
    
    //triangle droit
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(this.x+65,this.y+50);
    ctx.lineTo(this.x+65,this.y+100);
    ctx.lineTo(this.x+90,this.y+75);
    ctx.fill();
    
    //triangle gauche
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(this.x+35,this.y+50);
    ctx.lineTo(this.x+35,this.y+100);
    ctx.lineTo(this.x+10,this.y+75);
    ctx.fill();
    
    //protege roue bas gauche
    ctx.fillStyle = "grey";
    ctx.fillRect(this.x+5, this.y+105, 15, 30);
    
    //protege roue bas droit
    ctx.fillStyle = "grey";
    ctx.fillRect(this.x+80, this.y+105, 15, 30);
    
    //protege roue bas droit
    ctx.fillStyle = "darkgrey";
    ctx.fillRect(this.x+20, this.y+110, 60, 20);
    
    
    

  }
  move() {
    
  this.x += this.dx;

  
  if(this.x + 100 >= canvas.width) {
      this.pv -= 0.1;
  }
  if(this.x <= 0){
      this.pv -= 0.1;
  }
  
  
  }

}


function init() {
  
 
  canvas = document.querySelector("#Canvas");
  
  //context graphique
  ctx = canvas.getContext("2d");
  
  ctx.font = "30pt Arial Black";
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "black";
  ctx.fillText("Pressez ENTRER", 10, 200);
  ctx.strokeText("Pressez ENTRER", 10, 200);
  ctx.fillText("pour commencer", 10, 230);
  ctx.strokeText("pour commencer", 10, 230);
 
  //rects[0] = new Voiture(150,200,ctx);

  //requestAnimationFrame(anime60fps);
}

function anime60fps() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  rects.map(r => {
    ctx.fillStyle = "red";
    ctx.fillRect(10,10,100,5);
    ctx.fillStyle = "green";
    ctx.fillRect(10,10,rects[0].pv*10,5);
    
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
    ctx.font = "45pt Arial Black";
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "black";
    ctx.fillText("Perdu", canvas.width/3.2, canvas.height/2);
    ctx.strokeText("Perdu", canvas.width/3.2, canvas.height/2);
    ctx.font = "20pt Arial Black";
    ctx.fillText("Pressez ENTRER", 10, 300);
    ctx.fillText("pour recommencer", 10, 350);
    start = 1;
  }else{
      
      requestAnimationFrame(anime60fps);

  }
  });
}

