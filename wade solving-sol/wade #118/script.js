var canvasWidth = 600;
var canvasHeight = 600;

var xPoints = [];
var yPoints = [];
var numLines = 70;

function setup() {
  canvasColor = color('white');
  createCanvas(canvasWidth, canvasHeight)
  background(canvasColor);
  noLoop();
}

function draw() {

  for (var i = 0; i < numLines; i++) {
    xPoints[i] = random(0, canvasWidth);
    yPoints[i] = random(0, canvasHeight);
  }

  strokeWeight(0.1);

  for (var a = 0; a < numLines; a++) {
    for (var b = a; b < numLines; b++) {
      line(xPoints[a], yPoints[a], xPoints[b], yPoints[b])
    }
  }

}