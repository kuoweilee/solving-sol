// Code goes here
var canvasWidth = 500;
var canvasHeight = 250;
var numLinesCenter = 12;
var numLinesSides = 12;

var xPoints = [];
var yPoints = [];
var centerX = canvasWidth/2;
var centerY = canvasHeight/2;
var leftX = 0;
var rightX = canvasWidth;
var topY = 0;
var bottomY = canvasHeight;


function setup() {
  canvasColor = color('white');
  createCanvas(canvasWidth, canvasHeight)
  background(canvasColor);
  noLoop();
}

function draw() {
//Grid
  for(var x=0; x<canvasWidth/10;x++){
    stroke(220);
    strokeWeight(1.5);
    line(x*10,topY,x*10,bottomY);
  }
  
  for(var y=0; y<canvasHeight/10;y++){
    stroke(220);
    strokeWeight(1.5);
    line(leftX,y*10,rightX,y*10);
  }
  
  strokeWeight(0.7)

  for (var i = 0; i < numLinesCenter; i++) {
    xPoints[i] = round(random(0, canvasWidth/100))*100;
    yPoints[i] = round(random(0, canvasHeight/100))*100;
    stroke('yellow')
    line(centerX, centerY, xPoints[i], yPoints[i]);
  }


  stroke('red');
  randomLine(centerX,topY); //middle 1
  randomLine(centerX,bottomY); //middle 2
  randomLine(leftX,centerY); //middle 3
  randomLine(rightX,centerY); //middle 4
  

  stroke('blue')
  randomLine(leftX,topY); //corner 1
  randomLine(rightX,topY); //corner 2
  randomLine(leftX,bottomY); //corner 3
  randomLine(rightX,bottomY); //corner 4

 }

function randomLine(x,y){
  for (var k = 0; k < numLinesSides; k++) {
    var rX = round(random(0, canvasWidth/100))*100;
    var rY = round(random(0, canvasHeight/100))*100;
    line(x,y,rX,rY)
  }
}