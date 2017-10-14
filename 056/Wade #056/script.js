// Code goes here
var rectX = 0;
var rectY = 0;
var rectWidth = 400;

var canvasWidth = 401;
var canvasHeight = 401;
var lineSpace = 10;
var margin = 20;
var LineWidth = 400;
var hLineStartPoint = 180;
var diagonRightStartPoint = 340;
var diagonAngle = 100;
var diagonLeftStartPoint = 130;


function setup() {
  canvasColor = color('white');
  createCanvas(canvasWidth, canvasHeight)
  background(canvasColor);
}

function draw() {

  fill('white');
  rect(rectX, rectY, rectWidth, rectWidth);
  //V
  for (var i = 0; i < rectWidth; i = i + lineSpace) {
    line(i + rectX, rectY, i + rectX, rectY + rectWidth)
  }
  //H
  for (i = rectY; i < rectY + rectWidth; i = i + lineSpace) {
    if (i < rectY + rectWidth / 2) {
      line(rectX + rectWidth / 2, i, rectX + rectWidth, i)
    } else {
      line(rectX, i, rectX + rectWidth, i)
    }
  }
  //DR
  for (i = 0; i < rectWidth/2; i = i + lineSpace) {
    line(rectWidth/2+i,rectWidth/2,rectWidth,rectWidth-i);
    line(rectWidth/2,rectWidth/2+i,rectWidth-i,rectWidth);
  }
  //DL
  for (i = 0; i < rectWidth*2; i = i + lineSpace) {
    line(rectX,rectY+rectWidth/2+i+lineSpace,rectX+i+lineSpace,rectY+rectWidth/2)
  }

   
}