

var angleInc = 0.036;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
 background(222);
 
    angleInc += 0.0004;

 var scale = 100;
 var offset = 400.0; // translate in y azis
 var angle = 30;

 var bruitC = 0.001;
 var posC = noise(millis() * bruitC) * 80;

 var bruitX = 0.00001;
 var posX = noise(millis() * bruitX) * 50;

 for(var x = 0; x <= width; x+=posX){
    var y = offset + (sin(angle) * scale);
    noFill();
    stroke(0);
    ellipse(x, y, posC, posC);

// second wave

    y = offset + (tan(angle) * scale);
    stroke(255, 0, 199);
    rectMode(CENTER);
    //rotate(millis);
    rect(x, y, posC, posC);

    angle += angleInc;
 }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}