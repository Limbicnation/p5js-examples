
let noiseScale=0.02;

function setup() {
    var cnv = createCanvas(800, 800);
    background(32);
    saveFrames('out',cnv, 1, 25, 'myCanvas.png');


}

function draw(){
    for (let x = 0; x <= width; x = x + 2) {
        for (let y = 0; y <= height; y = y + 30) {

      
  var circleX = random(width);
  var circleY = random(height);
  var circleSize = random(1, 512);
  noStroke();
  fill(random(255), random(255), random(255)); 
  
  noSmooth();
  ellipse (random(circleX), random(circleY), random(circleSize))
  //t = i + i++; // update time

        }
    }

}