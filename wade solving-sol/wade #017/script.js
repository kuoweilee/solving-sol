// Code goes here
var canvasWidth = 660;
var canvasHeight = 500;
var lineSpace = 5
var margin = 20;
var LineWidth = 140;
var hLineStartPoint = 180;
var diagonRightStartPoint = 340;
var diagonAngle = 100;
var diagonLeftStartPoint = 500;

function setup() {
  canvasColor = color('white');
  createCanvas(canvasWidth, canvasHeight)
  background(canvasColor);
}

function draw() {

  //V
  for (var i = 0; i < LineWidth; i = i + lineSpace) {
    line(i + margin, 0, i + margin, canvasHeight)
  }
  //H
  for (i = 0; i < canvasHeight; i = i + lineSpace) {
    line(hLineStartPoint, i, hLineStartPoint + LineWidth, i)
  }
  //DR
  for (i = 0; i < canvasHeight + diagonAngle; i = i + lineSpace) {
    line(diagonRightStartPoint, i - diagonAngle, diagonRightStartPoint + LineWidth, i)
  }
  //DL
  for (i = 0; i < canvasHeight + diagonAngle; i = i + lineSpace) {
    line(diagonLeftStartPoint, i, diagonLeftStartPoint + LineWidth, i - diagonAngle)
  }
}