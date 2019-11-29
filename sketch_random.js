
let noiseScale=0.02;
let offset = 1;
let easing = 0.05
randomSeed(99);

function setup() {
    var cnv = createCanvas(800, 800);
    background(32);
    saveFrames('out',cnv, 1, 25, 'myCanvas.png');


}

function draw(){
    for (let x = 0; x <= width; x = x + 2) {
        for (let y = 0; y <= height; y = y + 30) {

      
  var squareX = random(width);
  var squareY = random(height);
  var squareSize = random(1, 512);
  noStroke();
  fill((255), random(255), (255)); 
  
  noSmooth();
  ellipse (random(squareX), random(squareY), random(squareSize))
  //t = 20 + i++; // update time

        }
    }
    
    for (let i = 1; i <= 1000; i++) {
        tint(20, 20)
        let r = random(255, 55, 100, 255);
        stroke(r);
        line(i, offset, i++, 1000);
      }

}