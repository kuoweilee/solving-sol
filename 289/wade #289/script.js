// Code goes here
var canvasWidth = 600;
var canvasHeight = 350;
var numLinesCenter = 24;
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
  canvasColor = color('black');
  createCanvas(canvasWidth, canvasHeight)
  background(canvasColor);
  noLoop();
}
//4th Wall(1st+2nd+3rd)
function draw() {
  strokeWeight(0.4)
//1st wall
  for (var i = 0; i < numLinesCenter; i++) {
    xPoints[i] = random(0, canvasWidth);
    yPoints[i] = random(0, canvasHeight);
    stroke('white')
    line(centerX, centerY, xPoints[i], yPoints[i]);
  }

//2nd wall
  randomLine(centerX,topY); //middle 1
  randomLine(centerX,bottomY); //middle 2
  randomLine(leftX,centerY); //middle 3
  randomLine(rightX,centerY); //middle 4
  
//3rd wall
  randomLine(leftX,topY); //corner 1
  randomLine(rightX,topY); //corner 2
  randomLine(leftX,bottomY); //corner 3
  randomLine(rightX,bottomY); //corner 4

}

function randomLine(x,y){
  for (var k = 0; k < numLinesSides; k++) {
    var rX = random(0, canvasWidth);
    var rY = random(0, canvasHeight);
    line(x,y,rX,rY)
  }
}