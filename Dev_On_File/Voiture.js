class Voiture {
  constructor(x, y, ctx, taille) {
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.ctx = ctx;
    this.taille = taille;
    this.ctx.fillStyle = this.color;  
    this.ctx.lineWith = 10;
    this.pv = 10;
    this.score = 0;

  }
  
  draw() {
	ctx.save();

    ctx.fillStyle = "black";
    //Roue haut gauche
    ctx.fillRect(this.x, this.y, 30*this.taille, 40*this.taille);
    //Roue haut droite
    ctx.fillRect(this.x+70*this.taille, this.y, 30*this.taille, 40*this.taille);
    //Entre roue haut
    ctx.fillRect(this.x+25*this.taille, this.y+15*this.taille, 50*this.taille, 10*this.taille);
    
    //Roue bas gauche
    ctx.fillRect(this.x, this.y+100*this.taille, 30*this.taille, 40*this.taille);
    //Roue bas droite
    ctx.fillRect(this.x+70*this.taille, this.y+100*this.taille, 30*this.taille, 40*this.taille);
    //Entre roue bas
    ctx.fillRect(this.x+25*this.taille, this.y+115*this.taille, 50*this.taille, 10*this.taille);
    
    //Centre
    ctx.fillStyle = "red";
    ctx.fillRect(this.x+35*this.taille, this.y, 30*this.taille, 140*this.taille);
    
    //triangle droit
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(this.x+65*this.taille,this.y+50*this.taille);
    ctx.lineTo(this.x+65*this.taille,this.y+100*this.taille);
    ctx.lineTo(this.x+90*this.taille,this.y+75*this.taille);
    ctx.fill();
    
    //triangle gauche
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(this.x+35*this.taille,this.y+50*this.taille);
    ctx.lineTo(this.x+35*this.taille,this.y+100*this.taille);
    ctx.lineTo(this.x+10*this.taille,this.y+75*this.taille);
    ctx.fill();
    
    //protege roue bas gauche
    ctx.fillStyle = "grey";
    ctx.fillRect(this.x+5*this.taille, this.y+105*this.taille, 15*this.taille, 30*this.taille);
    
    //protege roue bas droit
    ctx.fillStyle = "grey";
    ctx.fillRect(this.x+80*this.taille, this.y+105*this.taille, 15*this.taille, 30*this.taille);
    
    //protege roue bas droit
    ctx.fillStyle = "darkgrey";
    ctx.fillRect(this.x+20*this.taille, this.y+110*this.taille, 60*this.taille, 20*this.taille);
    ctx.restore();
    
    

  }
  move() {
    
  this.x += this.dx;
  this.score += 1;
  // j'ai pris un peu plus large que la route  
  if(this.x + 10/this.taille >= route[108].xd ) {
      this.pv -= 0.1;
      ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
      ctx.fillRect(0,0,canvas.width, canvas.height);
      
  }
  //document.getElementById("Canvas").style.background = "url('images/terrain.jpg') ";
  if(this.x - 3/this.taille <= route[108].xg ){
      this.pv -= 0.1;
      ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
      ctx.fillRect(0,0,canvas.width, canvas.height);
  }
  
  
  }

}