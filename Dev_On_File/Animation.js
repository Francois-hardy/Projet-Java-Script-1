const rects = [];
const tab = [];
var pause = 0;
let pv;
let score;

function anime60fps() {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  drawRoute();
  drawChemin();
  drawSol();
  rects.map(r => {
    ctx.fillStyle = "red";
    ctx.fillRect(10,10,100,5);
    ctx.fillStyle = "green";
    ctx.fillRect(10,10,rects[0].pv*10,5);
    
    ctx.font = "15pt Arial Black";
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "black";
    ctx.fillText("Score: "+rects[0].score,10, 590);
    
    /* //////////////// Changement de la route //////////////////////////
    // Changer la direction du chemin par rapport au score
    */
    if (rects[0].score == 230){
      speed = speed - 3;
      //creerTableauChemin();
    }
    
    if (rects[0].score == 500){
      speed = speed - 2;
    }
    
    if (rects[0].score == 1000){
      speed = speed - 2;
    }
    if (rects[0].score == 1500){
      speed = speed - 3;
    }
    if (rects[0].score == 2000){
      speed = speed + 4;
    }
    if (rects[0].score == 2100){
      speed = speed - 1;
    }
    if (rects[0].score == 2200){
      speed = speed - 2;
    }
    
    //////////////////////////////////////////////////////////////
    
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
    //K = rects[0].score - 1;
    ctx.fillStyle = "red";
    ctx.fillRect(0,0,600,600);
    ctx.font = "45pt Arial Black";
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "black";
    ctx.fillText("Perdu", canvas.width/3, canvas.height/2);
    ctx.strokeText("Perdu", canvas.width/3, canvas.height/2);
    ctx.font = "20pt Arial Black";
    ctx.fillText("Pressez ENTRER", 10, 500);
    ctx.fillText("pour recommencer", 10, 550);
    ctx.fillText("Votre Score: "+rects[0].score,canvas.width/3.6,  canvas.height/1.7);
    classement();
    tailleRectangles = 5;
    tailleChemin = 5;
    creerTableauRoute();
    creerTableauChemin();
    creerTableauSol();
    xg = 250;
    xd = xg + 100;
    start = 1;
    
    
    }else if (pause === 0){
      
    requestAnimationFrame(anime60fps);
    
  }
  else{
    ctx.font = "45pt Arial Black";
    ctx.fillStyle = "green";
    ctx.strokeStyle = "black";
    ctx.fillText("Pause", canvas.width/3.2, canvas.height/2);
  }
  });
}


