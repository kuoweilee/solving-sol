// Code goes here
var canvasWidth = 401;
var canvasHeight = 401;
var rectX = 0;
var rectY = 0;
var rectWidth = 400;
var lineSpace = 10;



function setup() {
  canvasColor = color('white');
  createCanvas(canvasWidth, canvasHeight)
  background(canvasColor);
}

function draw() {


  //V
  for (var i = 0; i <= rectWidth; i = i + lineSpace) {
    stroke('green');
    line(i + rectX, rectY, i + rectX, rectY + rectWidth)
  }
  //H
  for (i = rectY; i < rectY + rectWidth; i = i + lineSpace) {
    stroke('yellow');
    if (i < rectY + rectWidth / 2) {
      line(rectX + rectWidth / 2, i, rectX + rectWidth, i)
    } else {
      line(rectX, i, rectX + rectWidth, i)
    }
  }
  //DR
  for (i = 0; i < rectWidth/2; i = i + lineSpace) {
    stroke('blue');
    line(rectWidth/2+i,rectWidth/2,rectWidth,rectWidth-i);
    line(rectWidth/2,rectWidth/2+i,rectWidth-i,rectWidth);
  }
  //DL
  for (i = 0; i < rectWidth*2; i = i + lineSpace) {
    stroke('red')
    line(rectX,rectY+rectWidth/2+i+lineSpace,rectX+i+lineSpace,rectY+rectWidth/2)
  }

   
}