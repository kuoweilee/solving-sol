var canvasWidth = 800;
var canvasHeight = 500;
var lineSpace = 5;

var vLineStartPoint = 150;
var vLineEndPoint = 350;
var hLineStartPoint = 300;
var hLineWidth = 200;
var diagonRightStartPoint = -500;
var translateXPosition = 200;
var translateYPosition = 100;
var rotateDegree = -31;
var strokeColor = 230;


function setup() {
  canvasColor = color('white');
  createCanvas(canvasWidth, canvasHeight)
  background(canvasColor);
  angleMode(DEGREES);
}


function draw() {

  //V
  for (var i = 0; i < canvasWidth; i = i + lineSpace) {
    stroke(strokeColor);
    line(i, vLineStartPoint, i, vLineEndPoint)
  }

  //H
  for (i = 0; i < canvasHeight; i = i + lineSpace) {
    stroke(strokeColor);
    line(hLineStartPoint, i, hLineStartPoint + hLineWidth, i)
  }

  //DR
  translate(translateXPosition, translateYPosition);
  rotate(rotateDegree);
  for (i = diagonRightStartPoint; i < canvasWidth; i = i + lineSpace) {
    stroke(strokeColor);
    line(i, vLineStartPoint, i, vLineEndPoint)
  }

}