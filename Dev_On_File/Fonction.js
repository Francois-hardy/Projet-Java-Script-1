function lancerLeJeu(){
    if (LVL == 1) {
        start = 1;
       rects[0] = new Voiture(280,500,ctx,0.3);
         requestAnimationFrame(anime60fps);
         start = 0;
   }
   if (LVL == 2) {
       start = 1 ;
    rects[0] = new Voiture(280,500,ctx,0.3);
      requestAnimationFrame(anime60fps2);
      start = 0;
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
