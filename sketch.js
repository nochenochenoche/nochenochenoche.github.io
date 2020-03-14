


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	  background(0, 0, 0, 7);

		var tamango = random(80);

	ellipse(mouseX, mouseY, tamango, tamango);

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}