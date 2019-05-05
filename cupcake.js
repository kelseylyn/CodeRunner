/*
/Felicia Cruz
/May 13th 2016
/This program is a game called CUPCAKE PONG and what it does is that you play a one person pong game and try to get as many points as possible and try not to let the ball fall off the screen or the game will end
*/

var cakeX= 200;// x value of cupcake
var cakeRadius=100;//radius of cupcake
// This will be the cupcake that is in the background of each screen
var cup_cake=function(){

   //bottom of cupcake
   noStroke();
   fill(163, 105, 74);
   rect(100,200,200,200);
   stroke(0, 0, 0);
   line(130,240, 130, 360);
   line(170, 250, 170, 360);
   line(200, 250, 200, 330);
   line(230, 240, 230, 360);
   line(270, 230, 270, 360);

   //frosting
    fill(255,255,255);
    ellipse(cakeX, cakeX, cakeX+100, cakeRadius);
    ellipse(cakeX, cakeX-20, cakeX+60, cakeRadius);
    ellipse(cakeX, cakeX-40, cakeX+20, cakeRadius);
    ellipse(cakeX, cakeX-60, cakeX-20, cakeRadius);
    ellipse(cakeX,cakeX-80, cakeX-60, cakeRadius);
    ellipse(cakeX, cakeX-100, cakeRadius, cakeRadius);

    //cherry
    noStroke();
    fill(255, 0, 0);
    ellipse(cakeX, cakeX-100, 60,60);
    noFill();
    strokeWeight(3);
    stroke(255, 0, 0);
    arc(240, 70, 80, 60, 180, 270);//the stem of the cherry
};

var btn1={x:115,y:160,width:170,height:80};//values for the start button
var btn2={x:60, y:225, width:125, height:60};//values for the restart button on the last screen
var btn3={x:220, y:225, width:125, height:60};//values for main menu button on the last screen

//The start button on the first screen
var draw_button=function(btn, name,textNumber,textX, textY){
    stroke(0, 0, 250);
    fill(213, 0, 255);
    rect(btn.x, btn.y, btn.width,btn.height);//the buttons values
    fill(255, 255, 255);
    textSize(textNumber);
    text(name,textX, textY);//This has the name "start" and the coordinates for the word
};

//These are the parameters for the buttons that are used that states when it is clicked they will switch the user to the next screen
var insideButton=function(btn){
    return (mouseX>=btn.x &&
            mouseX<= (btn.x + btn.width)&&
            mouseY>=btn.y &&
            mouseY<=(btn.y + btn.height));
};

var ballX=200;//x value for ball
var ballY=100;//y value for ball
var radius=30;// radius of the ball
var speedX=4;//the x speed for the ball
var speedY=4;// y speed of the ball
var boardWidth=400;// the width of the screen itself
var boardHeight=400;// the height of the screen itself
var paddleW=100;// the width of the paddle
var paddleH=25;// height of the paddle
var paddleL=150;// the x value of paddle
var paddleT=375;// y value of paddle


// the function that states that whenever the ball meets the paddle it bounces back up the screen
var check_collision=function(){
    if(ballY +radius>=paddleT && ballY + radius<= paddleT +5 && ballX>paddleL && ballX<paddleL + paddleW){
        speedY=-speedY;// when ball hits paddle it subtracts the speed

    }
};
var xPositions = [200, 100, 150, 300, 325, 250, 10, 50, 175, 225, 375, 210];// x values for the sprinkles
var yPositions = [0, 25, 50, 75, 100, 150, 175, 200, 250, 275, 300, 125];// y values for the sprinkles

var sprinkleColors= [color(random (0, 255), random(0, 255), random(0, 255)),color(random (0, 255), random(0, 255),random(0, 255)),color(random (0, 255), random(0, 255), random(0, 255)),color(random (0, 255),             random(0, 255), random(0, 255)),color(random (0, 255), random(0, 255), random(0, 255)),color(random (0, 255), random(0, 255),random(0, 255)),color(random (0, 255), random(0, 255), random(0, 255)),color(random (0, 255),  random(0, 255), random(0, 255)),color(random (0, 255), random(0, 255), random(0, 255)),color(random (0, 255), random(0, 255),random(0, 255)),color(random (0, 255), random(0, 255), random(0, 255)),color(random (0, 255), random(0, 255), random(0, 255)), ];// this contains all of the random colors for each set of points so everytime the game is reloaded a new set of random colors appear in the sprinkles

var scoreHits=0;// the score the player gets
var resetBallX=200;// reset for ballX
var resetBallY=100;//reset for ballY
var resetScore=0;// reset the score
var paddleLreset=150;// reset the x coordinate for paddle
var paddleTreset=375;//reset the y coordinate for paddle

// This is the endscreen that will appear at the end of the game when the ball falls of the screen and will contain the score the user got, the "restart" button, and the "main menu" button
var end_screen=function(){
    background(255, 252, 209);
    cup_cake();
    fill(0, 0, 0);
    textSize(40);
    text("GAME OVER", 80, 50);
    draw_button(btn2,"RESTART",20,80, 265); // the "restart" button
    draw_button(btn3, "MAIN MENU", 20, 225, 265);// the "main menu" button
    stroke(0, 0, 250);
    fill(213, 0, 255);
    rect(120, 100, 160, 90);// box containing the score the player got
    fill(255, 255, 255);
    textSize(30);
    text("SCORE", 150, 135);//says "start" in the square above the score
    text(scoreHits, 190, 170);// the score the player got
};

//This is the function that holds the the tennnis game
var tennis_game=function(){
    background(247, 178, 203);
    cup_cake();
    fill(14, 15, 15);
    textSize(40);
    text(scoreHits, 187,115);// the score that is isplayed at the top of the screen
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(sprinkleColors[i]);// random colors of the sprinkles
        rect(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;// 5 pixels are aadded to the y positions of the sprinkles
            if(yPositions[i]>400){
               yPositions[i]=-5; // if greater than 400 reset to negative 5
            }
        }
    noStroke();
    fill(0, 0, 0);
    ellipse(ballX, ballY, radius, radius);// the ball in the game

    ballX= ballX + speedX;// the ball is moving plus the speed of speedX
    ballY= ballY + speedY;// the ball is moving plus the speed of speedY

      if(ballX+ radius>400 || ballX - radius<0){
        speedX=-speedX;// if the ballX plus the radius is greater than 400 or ballX-radius is less than 0 the         speedX will subtract
    }if(ballY- radius<0){
        speedY=-speedY;// if the ballY-radius is less than 0 then the speedY will subtract
        scoreHits+=1;//one point will be added to the score
    }if(ballY- radius>400){
        draw= function() {
            end_screen();// when the ball falls of the screen and is greater than 400 the game will end and w             will go to the end screen
        };
    }

    fill(250, 10, 90);
    rect(paddleL, paddleT,paddleW, paddleH);// the paddle
    check_collision();// Everytime the ball collides with the paddle it goes back up the screen and adds on a     point to the score
};

// Will make the paddle move left an right accross the screen and stay within the parameters
keyPressed=function(){
    switch(keyCode){
    case LEFT:
        paddleL-=30;//when the paddle moves it subtracts these pixels
        if(paddleL<0){
           paddleL=0;// if less than 0 it will go back to 0
        }
    break;
    case RIGHT:
        paddleL+=30;// when moving to the right it will add these pixels
        if(paddleL +paddleW>400){
            paddleL=400-paddleW;// if greater than 400 will go back to 400 minus the width
        }
    break;
    }
};

//this contains the main menu on the first screen, along with the start button, the sprinkles, the cupcake, and the title of the game
var label_main_menu=function(){
    background(255, 252, 209);
    cup_cake();
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(sprinkleColors[i]);
        rect(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;// y positions for sprinkles adds 5
            if(yPositions[i]>400){
               yPositions[i]=-5; // if the yPositions for the sprinkles is greater than 400 it will become -5
            }
        }
    draw_button(btn1,"START",45, 130,220);// this button will go to the tennis game
    fill(0, 0, 0);
    textSize(40);
    text("CUPCAKE PONG", 50, 50);// name of the game
    textSize(18);
    fill(255, 255, 255);
    text("Created By:", 160, 350);//who it was made by
    text("Felicia Cruz", 160,370);// my name
};


mousePressed=function(){
    if(insideButton(btn1)|| insideButton(btn2)){
       draw= function() {// if inside button 1 and button 2 the next screen will be the tennis game
            tennis_game();
        };

    }if(insideButton(btn2)){//if inside button 2 ballX, ballY, and scoreHits will reset
        ballX=resetBallX;//reset ballX
        ballY=resetBallY;//reset ballY
        paddleL=paddleLreset;// reset paddle x
        paddleT=paddleTreset;//reset paddle y
        scoreHits=resetScore;// reset score
    }
    if (insideButton(btn3)){// inside button 3 it will go to the main menu, ballX, ballY, and scoreHits will     reset
        draw= function() {
            label_main_menu();
            ballX=resetBallX;//reset ballX to resetBallX
            ballY=resetBallY; //reset ballY to resetBallY
            paddleL=paddleLreset;// reset paddle x
            paddleT=paddleTreset;//reset paddle y
            scoreHits=resetScore;// reset scoreHits to resetScore
        };

    }
};
draw= function() {
    label_main_menu();//the main menu on the first screen
};
