let branchLength = 150;
let angle;
let maxLength;
let thickness;
let thicknessSlider;
let angleSlider;
let maxLengthSlider;

function setup() {
    createCanvas(800, 500);
    angleSlider = createSlider(0.01, TWO_PI, PI/8, 0.01);
    lengthSlider = createSlider(10, 300, 150, 1);
    maxLengthSlider = createSlider(4, 10, 4, 0.1);
    thicknessSlider = createSlider(0.5, 50, 10, 0.5);
}

function draw() {
    background(0);
    angle = angleSlider.value();
    branchLength = lengthSlider.value();
    maxLength = map(maxLengthSlider.value(), 4, 10, 50, 4);
    thickness = thicknessSlider.value();
    translate(width/2, height);
    stroke(255);
    strokeWeight(1);
    branch(branchLength, thickness);
}

function branch(len, stroke) {
    strokeWeight(stroke);
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
