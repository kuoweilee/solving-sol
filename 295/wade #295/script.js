// Code goes here

var canvasWidth = 600;
var canvasHeight = 600;
var outlineWidth = 500;
var distance = 100;
var centerX = 300;
var centerY = 300;
var leftTopX = 50;
var leftTopY = 50;
var leftBottomX = 50;
var leftBottomY = 550;
var rightTopX = 550;
var rightTopY = 50;
var rightBottomX = 550;
var rightBottomY= 550;


function setup() {
  canvasColor = color('black');
  createCanvas(canvasWidth, canvasHeight)
  background(canvasColor);
}


function draw() {

noFill();
stroke('white');
rect(leftTopX,leftTopY,outlineWidth,outlineWidth);
ellipse(centerX,centerY,outlineWidth,outlineWidth);
line(leftTopX+distance,leftTopY,leftBottomX+distance,leftBottomY);
line(rightTopX-distance,rightTopY,rightTopX-distance,rightBottomY);
line(leftBottomX,leftBottomY,leftTopX+distance,leftTopY);
line(leftBottomX,leftBottomY,centerX,leftTopY);
line(rightBottomX,rightBottomY,centerX,leftTopY);
line(rightBottomX,rightBottomY,rightTopX-distance,rightTopY);

}