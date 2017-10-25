// Code goes here
//A wall divided from the upper left to the lower right by a curvy line; left: glossy yellow; right: glossy purple.


var canvasWidth = 700;
var canvasHeight = 700;

var xPoints1 = [];
var xPoints2 = [];
//var xPoints3 = [];

var yPoints1 = [];
var yPoints2 = [];
//var yPoints3 = [];


function setup() {
  canvasColor = color('white');
  createCanvas(canvasWidth, canvasHeight)
  background(canvasColor);
  noLoop();
}

function draw() {
  noStroke();
  fill('purple');
  rect(50, 50, 600, 600)
  //curve
  randomCruve(1);
  noStroke();
  fill('yellow')
  beginShape();
  vertex(50, 50);
  vertex(50, 650);
  vertex(650, 650);
  randomCruve(1);
  bezierVertex(xPoints1[1], yPoints2[1], xPoints2[1], yPoints2[1],50,50);
  endShape();

}


function randomCruve(x) {
  xPoints1[x] = random(50, 650);
  yPoints1[x] = random(50, 650);
  xPoints2[x] = random(250,450);
  yPoints2[x] = random(350,650);
  //xPoints3[x] = random(50, 150);
  //yPoints3[x] = random(50, 150);

}

