
if (window.innerWidth > 800) {
var canvas;
var r, g, b;
var stroke_weight

function windowResized() {
  resizeCanvas(windowWidth, window.innerHeight)
}
function setup() {
  canvas = createCanvas(windowWidth, window.innerHeight - 30);

  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background(255);
};


function draw() {
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
    r = random(255)
    g = random(255)
    b = random(255)
    strokeWeight(50);
    stroke(r, g, b);
  }
};
};
