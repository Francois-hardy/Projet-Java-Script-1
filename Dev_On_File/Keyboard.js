
window.addEventListener('keydown', handleKeydown, false);
window.addEventListener('keyup', handleKeyup, false);
window.addEventListener('keypress', handleKeypress, false);

function handleKeydown(evt) {
    switch(evt.keyCode){
        case 37:
        rects.forEach(item => item.dx = -5);
        //Voiture.rotate(45 * Math.PI / 180);
        break;
        case 39:
        rects.forEach(item => item.dx = 5);
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
            if(LVL == 1){
              Affichagelvl1();
              lancerLeJeu();
              start = 0;
            }
            if(LVL == 2){
              Affichagelvl2();
              lancerLeJeu();
              start = 0;
            }
            if(LVL == 3){
              Affichagelvl3();
              lancerLeJeu();
              start = 0;
            }
            if(LVL == 4){
              Affichagelvl4();
              lancerLeJeu();
              start = 0;
            }
          }
            
          	//interfaceDesNiveaux();
          	break;

		case 65:
			//lancerLeJeu();
			break;	

    }
}