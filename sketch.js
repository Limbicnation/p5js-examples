var capture;
var captureMax = 500 ;

function preload () {													
  capture = createCapture(VIDEO);
  capture.size(500, 500);
 	capture.hide();
}

function setup() {
	createCanvas( 1280,500);
	colorMode ( RGB, 256, 128, 256,);
  stroke(200, 0, 5, 0.3);
	blendMode (HARD_LIGHT) ;			
	frameRate(30)
	}

function draw() {
	capture.loadPixels();							
	
	if (capture.length > captureMax) {
            capture.shift();                 
				 }
	
for (var i=0; i<100; ++i) {
	
        var x = int(random(capture.width));
        var y = int(random(capture.height));
        var pix = (x + y*capture.width) * 8;				
        var col = capture.pixels.slice( pix, pix+6 );
				
				fill( col[0],col[1],col[2])
	 			stroke( col[0], col[1], col[2] );
				 //strokeWeight (1.5);
				rect( x , y ,20 ,8, random (30,60) ) ;	
	 			  
				} 
}