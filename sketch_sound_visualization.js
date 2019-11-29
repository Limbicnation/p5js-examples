var mic;

function setup() {
    createCanvas(1080, 1080);
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(0);
    var vol = mic.getLevel();
    ellipse(500, 500, 500, vol * 20000);
}