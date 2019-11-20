
window.addEventListener('keydown', handleKeydown, false);
window.addEventListener('keyup', handleKeyup, false);
window.addEventListener('keypress', handleKeypress, false);

function handleKeydown(evt) {
    switch(evt.keyCode){
        case 37:
        rects.forEach(item => item.dx = -3);
        //Voiture.rotate(45 * Math.PI / 180);
        break;
        case 39:
        rects.forEach(item => item.dx = 3);
        break;
        case 80:
        pausefunc();
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
        	//////////////////////////////// Lancer le jeu ////////////////////////// Start = 1
        	if(start == 1){
            lancerLeJeu();
          }
            //////////////////////////////// Lance interface des niveaux ////////////////////////// Start = 2
          	//interfaceDesNiveaux();
          	break;

		case 65:
			//lancerLeJeu();
			break;	

    }
}
 


function lancerLeJeu(){
    if (start == 1) {
       rects[0] = new Voiture(280,500,ctx,0.3);
         requestAnimationFrame(anime60fps);
         start = 0;
   }
}

function interfaceDesNiveaux(){
   if (start === 2) {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       ctx.fillStyle = "white";
       ctx.fillRect(0,0,400,400);
       ctx.font = "30pt Arial Black";
       ctx.fillStyle = "blue";
       ctx.strokeStyle = "black";
       ctx.fillText("Choisir le niveau", 15, 50);
       ctx.strokeText("Choisir le niveau", 15, 50);
       ctx.fillStyle = "red";
       ctx.fillRect(25, 75, 150, 75);

       ctx.fillStyle = "green";
       ctx.fillRect(220, 75, 150, 75);
       ctx.fillStyle = "blue";
       ctx.fillRect(25, 175, 150, 75);
       ctx.fillStyle = "grey";
       ctx.fillRect(220, 175, 150, 75);
       ctx.fillStyle = "black";
       ctx.fillRect(25, 275, 150, 75);
       ctx.fillStyle = "purple";
       ctx.fillRect(220, 275, 150, 75);
       start = 1;
   }
}









function pausefunc(){
 if(pause === 1){
   pause = 0;
   requestAnimationFrame(anime60fps);
 }
 else{
   pause = 1;

 }
}
