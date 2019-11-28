function setup() {
	createCanvas(1080, 1080);
}

function draw() {
	background(255, 0, 0);

	fill(255, 0, 0);
	circle(540, 540, 500, 512, 512);
	//stroke(noStroke);

	// Eye left
	fill(255, 255, 0);
	ellipse(450, 512, 100, 100);

	// Eye right
	fill(255, 255, 0);
	stroke(0, 0, 255);
	noStroke();
	ellipse(650, 512, 100, 100);
	


}