var inc = 0.02; // velocity
var density = 32; // size of rect

var znoise = 0.09;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //noStroke();
    //noLoop();
}

function draw() {
    var xnoise = 0.0;
    var ynoise = 0.0;

    for (var y = 0; y < height; y += density) {
        for (var x = 0; x < width; x += density) {
            var n = noise(xnoise, ynoise, znoise) * 256;
            fill(255, n, n);
            rect(x, y, density, density);
            xnoise += inc;
        }
    xnoise = 0;
    ynoise += inc;
    }
    znoise += inc;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}