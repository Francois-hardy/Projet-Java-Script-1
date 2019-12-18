
function classement(){
  ctx1.font = "10pt Arial Black";
  ctx1.fillStyle = 'blue';
  ctx1.strokeStyle = "black";
  ctx1.fillText("Classement", 32, 20);
    try {
       if (classementTab[2] < rects[0].score-1){
        ctx1.clearRect(0, 0, canvas.width, canvas.height);
        classementTab.pop();
        classementTab.push(rects[0].score-1);
        //classementTab[2] = rects[0].score-1;
        classementTab = classementTab.sort(function(a, b){
          return a - b;
        });
        classementTab.reverse();
        ctx1.fillText("Classement", 32, 20);
        ctx1.fillText("1er : " + classementTab[0] ,10,50);
        ctx1.fillText("2ème : " + classementTab[1],10,80);
        ctx1.fillText("3ème : " + classementTab[2],10,110);
  
      }
    }
    catch(error){
      console.log("1er tour");
    }
  
}