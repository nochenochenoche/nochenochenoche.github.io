var tileCount = 20;

var r;
var g;
var b;

function setup() {
	//frameRate(1);
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {

	var tamango = random(60);

    background(220);
    noStroke();

    r = 255;
    g = 100;
    b = 100;

    for (var j = 0; j < tileCount; j++) {
        for (var i = 0; i < tileCount; i++) {

        	var x = i * 80;
        	var y = j * 80;

c = color(random(r), random(g), random(b));

fill(c);
noStroke();
rect(x, y, 80, 80);

noFill();
strokeWeight(3);
stroke(255);
ellipse(x-40, y, tamango, tamango);


        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}