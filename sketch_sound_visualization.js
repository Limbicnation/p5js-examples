var mic;

function setup() {
    createCanvas(1080, 1080);
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(0);
    var vol = mic.getLevel();

    // // Add color
    // ColorMode(HSB);
    fill(vol * 5, 204, vol * 5);

    // Draw ellipse
    ellipse(500, 500, 500, vol * 20000);

    // Draw left eye
    ellipse(100, 100, 500, 500 + vol * 200);
    
}