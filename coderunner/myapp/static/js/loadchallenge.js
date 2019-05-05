var canvas = document.getElementById("challengeGame");
var game = canvas.getContext("2d");

  var runner_x_pos = 10;
  var runner_y_pos = 255;
  var runner_flag = 0;
  var img = new Image();
  img.onload = function (runner_flag) {
    //game.clearImage(img, runner_x_pos, runner_y_pos);
    game.clearRect(0, 0, canvas.width, canvas.height);
    game.beginPath();
    game.drawImage(img, runner_x_pos, runner_y_pos);
    game.closePath();
    /* for now using keys to represent function calls until I get it working to
    handle user input on which functions they want to call. So in its place there
    will be key presses instead*/

    /* This chunk will stay here because this will handle the run function().  */
    //initial run at the beginning when the "r" is pressed on the 1st block
    if(runner_x_pos < 120) {
      runner_x_pos +=1;
    } else if((runner_x_pos > 189) && (runner_x_pos < 290)) { // next part of run for the second green block
      runner_x_pos +=1;
    } else if((runner_x_pos > 354) && (runner_x_pos < 450)) { // is the last piece for the 3rd green block
      runner_x_pos +=1;
    }

    // this is used to incorporate the jump command
    // first just have it go through the whole game on its own
    // then break it apart into the different commands they are each for
    // this needs to be its own chunk and only called when the next key "j" is pushed.
    if((runner_x_pos > 119) && (runner_x_pos < 190)) { // this if statement is for the first jump
      if(runner_y_pos > 200) {
         runner_y_pos -=1;
      }
      runner_x_pos+=1;
    } else { // this will be for the second jump from the 2nd block to the 3rd one
      if((runner_x_pos > 289) && (runner_x_pos < 355)) {
        if(runner_y_pos < 250) {
          runner_y_pos+=1;
        }
        runner_x_pos+=1;
      }
    }

    game.beginPath();
    game.strokeStyle = "000000";
    game.stroke();
    game.rect(0,300, 150, 200);
    game.rect(200, 250, 120, 250);
    game.rect(370, 300, 130, 200);
    game.fillStyle = "#53c653";
    game.fill();
    game.strokeStyle = "000000";
    game.stroke();
    game.closePath();

    //1st cloud
    game.beginPath();
    game.arc(100, 75, 25, 0, Math.PI*2, false);
    game.arc(75, 85, 25, 0, Math.PI*2, false);
    game.arc(125, 75, 25, 0, Math.PI*2, false);
    game.arc(150, 100, 25, 0, Math.PI*2, false);
    game.arc(125, 105, 25, 0, Math.PI*2, false);
    game.arc(100, 105, 25, 0, Math.PI*2, false);
    game.arc(75, 95, 25, 0, Math.PI*2, false);
    game.fillStyle = "#FFFFFF";
    game.fill();
    game.closePath();

    //2nd cloud
    game.beginPath();
    game.arc(300, 75, 25, 0, Math.PI*2, false);
    game.arc(325, 75, 25, 0, Math.PI*2, false);
    game.arc(350, 85, 25, 0, Math.PI*2, false);
    game.arc(375, 100, 25, 0, Math.PI*2, false);
    game.arc(390, 100, 25, 0, Math.PI*2, false);
    game.arc(300, 100, 25, 0, Math.PI*2, false);
    game.arc(325, 100, 25, 0, Math.PI*2, false);
    game.arc(275, 100, 25, 0, Math.PI*2, false);
    game.arc(375, 110, 25, 0, Math.PI*2, false);
    game.arc(360, 110, 25, 0, Math.PI*2, false);
    game.arc(340, 110, 25, 0, Math.PI*2, false);
    game.fillStyle = "#FFFFFF";
    game.fill();
    game.closePath();
  }
  img.src = "{% static "images/code_runner.png" %}";

  canvas.tabIndex = 1000;
  canvas.addEventListener("keydown", eventv => {
    // will be the first function the user calls
  if (event.key == "r") { // will have him run conitunously
      setInterval(img.onload, 10);

  }
  });
