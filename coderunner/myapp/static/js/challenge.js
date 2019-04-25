var sketchProc=function(processingInstance){ with (processingInstance){
size(500, 400);
frameRate(30);

//ProgramCodeGoesHere

/*
/Felicia Cruz
/May 13th 2016
/This program is a game called CUPCAKE PONG and what it does is that you play a one person pong game and try to get as many points as possible and try not to let the ball fall off the screen or the game will end
*/

  var back_ground=function(){
    background(230, 250, 255);
    stroke(0,0,0);
    fill(83, 198, 83);
    rect(0,300, 150, 200);
    rect(200, 250, 120, 250);
    rect(370, 300, 130, 200);

    noStroke();
    fill(255,255,255);
    ellipse(100, 75, 50, 50);
    ellipse(75, 85, 50, 50);
    ellipse(125, 75, 50, 50);
    ellipse(150, 100, 50, 50);
    ellipse(125, 105, 50,50);
    ellipse(100, 105, 50,50);
    ellipse(75, 95, 50, 50);

    ellipse(300, 75, 50, 50);
    ellipse(325, 75, 50, 50);
    ellipse(350, 85, 50, 50);
    ellipse(375, 100, 50, 50);
    ellipse(390, 100, 50, 50);
    ellipse(300,100, 50, 50);
    ellipse(325, 100, 50, 50);
    ellipse(275, 100, 50, 50);
    ellipse(375, 110, 50, 50);
    ellipse(360, 110, 50, 50);
    ellipse(340, 110, 50, 50);

    stroke(0,0,0);
    line(15, 265, 30, 255);
    line(50, 245, 35, 260);
    line(30, 280, 20, 300);
    line(40, 280, 50, 300);
    noStroke();
    fill(255, 153, 255);
    triangle(15,280, 35, 240, 55, 280);
    fill(0, 0,0, 0);

    strokeWeight(2);
    stroke(115, 77, 38);
    arc(10, 200, 250, 100, PI/2, PI/2);
    noStroke();
    fill(236, 217, 198);
    ellipse(35, 230, 30, 30)


  };

  draw=function() {
    back_ground();
  };

}};
