// declare and initialize global variables

var canvas;
var canvasWidth = 500;
var canvasHeight = 500;
var button;
var spread;
var slider;

function setup() {

  canvas = createCanvas(canvasWidth,canvasHeight);
  background(219,112,147);

  canvas.parent("canvas-area");
  
  canvas.mousePressed(drawEllipse);
  
  button = select("#clear-button");
  button.mousePressed(setup);
  
  slider = select("#slider");
  slider.input(updateSpread);
  updateSpread();

}
 
function drawEllipse() {
  
  fill("#ffffff");
  ellipse(mouseX,mouseY,spread,spread);

}

function updateSpread () {

  spread=slider.value();

}

/*
 * This function simply sets the spread variable to the value of the slider.
 * For example, if the slider is at 75, the spread will be set to 75 as well.
 */

drawSplatter() {
  random(10,15);
  fill(random(0,255),random(0,255),random(0,255));
  noStroke();
  for(i=0,i<)

}

 /*
  * Creates ellipses on the canvas around where the mouse is clicked.
  * Details:
  * -The function creates between 10 and 14 ellipses (random).
  * -Each ellipse will be a random color and have no outline.
  * -Each ellipse will have a random radius (5 to 14 pixels).
  * -Each ellipse's x and y values are calculated like this:
  *  x = random value between mouseX - spread and mouseX + spread
  *  y = random value between mouseY - spread and mouseY + spread
  */
