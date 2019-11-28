// draw a spinning box
// with width, height and depth of 50
function setup() {
  createCanvas(1080, 1080, WEBGL);
}

function draw() {
  background(mouseX);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(255, 50, 0);
  box(512);

}