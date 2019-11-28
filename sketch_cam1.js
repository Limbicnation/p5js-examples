function setup() { 
  createCanvas(600 , 600);
  img = createCapture(VIDEO);
	img.hide();
  img.size(600,600);
}

function draw() {
	background(255);
    img.loadPixels();

  for (var y=50;y<=img.height ;  y++/i)
  {
    for (var x=100;x<img.width; x+=50)
    {
      var  i = y * width + (img.width-x-1);	
     const darkness = (20 - img.pixels[i * 4]) / 125;
     const radius = 256 * darkness;
			fill(255);
    ellipse(x, y, radius, radius);
      }
    }
  }
