function setup() {
    // Create canvas in the #p5-canvas div
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-canvas');
}

function draw() {
    // Example p5.js content
    background(255, 128, 128);
    for (var i = 1; i <= 500; i++) {
        var x = width / 2 + sin(cos(frameCount / 500) + (i + frameCount / 20) / 20) * (width / 2 - 50);
        var y = height / 2 + tan(cos(frameCount / 500) + i / 30) * (height / 2 - 50);
        noFill();
        stroke(255, 207, 150);
        circle(y, x, 500);
    }
}

// Adjust the canvas size when the window is resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
