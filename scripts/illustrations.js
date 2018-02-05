var canvas;
var r, g, b;
var stroke_weight

function windowResized() {
  resizeCanvas(windowWidth, window.innerHeight)
}
function setup() {
  canvas = createCanvas(windowWidth, window.innerHeight);

  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background(255);
  r = random(255)
  g = random(255)
  b = random(255)

};


function draw() {
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
    r = random(255)
    g = random(255)
    b = random(255)
    strokeWeight(20);
    stroke(r, g, b);
  }
};

$('body').awesomeCursor('paint-brush', {
  color: 'red',
  size: 30,
  hotspot: [5, 25]
});
