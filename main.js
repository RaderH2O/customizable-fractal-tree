let branchLength = 150;
let angle;
let maxLength;
let angleSlider;
let maxLengthSlider;

function setup() {
    createCanvas(800, 500);
    angleSlider = createSlider(0.01, TWO_PI, PI/8, 0.01);
    lengthSlider = createSlider(10, 300, 150, 1);
    maxLengthSlider = createSlider(1, 500, 4, 0.1);
}

function draw() {
    background(0);
    angle = angleSlider.value();
    branchLength = lengthSlider.value();
    maxLength = maxLengthSlider.value();
    translate(width/2, height);
    stroke(255);
    strokeWeight(1);
    branch(branchLength, 10);
    //branch(branchLength * 0.67);
}

function branch(len, stroke) {
    strokeWeight(stroke);
    //line(0, 0, 0, -len);
    noFill();
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > maxLength) {
        push();
        rotate(angle);
        branch(len*0.67, max(stroke * 0.67, 0.5));
        pop();
        rotate(-angle);
        branch(len*0.67, max(stroke * 0.67, 0.5));
    };
}
