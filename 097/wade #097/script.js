// Code goes here

var canvasWidth = 700;
var canvasHeight = 700;
var numLines = 250;

var xPoints = [];
var yPoints = [];
var xPoints1 = [];
var xPoints2 = [];
var xPoints3 = [];
var xPoints4 = [];
var yPoints1 = [];
var yPoints2 = [];
var yPoints3 = [];
var yPoints4 = [];


function setup() {
  canvasColor = color('white');
  createCanvas(canvasWidth, canvasHeight)
  background(canvasColor);
  noLoop();
}

function draw() {

  //frame
  noFill();
  rect(50, 50, 300, 600);
  rect(375, 50, 300, 600);
  
  
  //curve
  for (var i = 0; i < numLines; i++) {
    strokeWeight(0.1);
    randomCruve(i);
    curve(xPoints1[i], yPoints1[i], xPoints2[i], yPoints2[i], xPoints3[i], yPoints3[i], xPoints4[i], yPoints4[i]);
  }


  //straight  
  for (var j = 0; j < numLines; j++) {
    strokeWeight(0.1);
    xPoints[j] = random(375, 675);
    yPoints[j] = random(50, 650);
    randomLine(xPoints[j], yPoints[j]);
  }
  
  
  crop();
}



function randomLine(x, y) {
  for (var k = 0; k < 1; k++) {
    var rX = random(375, 675);
    var rY = random(50, 650);
    line(x, y, rX, rY)
  }
}

function randomCruve(x) {
  xPoints1[x] = random(50, 350);
  yPoints1[x] = random(50, 650);
  xPoints2[x] = random(50, 350);
  yPoints2[x] = random(50, 650);
  xPoints3[x] = random(50, 350);
  yPoints3[x] = random(50, 650);
  xPoints4[x] = random(50, 350);
  yPoints4[x] = random(50, 650);
}

function crop() {
  fill(256);
  noStroke();
  rect(0, 0, 700, 50);
  rect(0, 0, 50, 700);
  rect(351, 0, 24, 700);
  rect(0, 651, 700, 50);
}