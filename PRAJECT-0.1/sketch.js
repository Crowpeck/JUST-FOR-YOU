// Maximize canvas and zoom in flower
let flowerScale;
let flowerPosition;

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB);
  angleMode(DEGREES);
  strokeWeight(windowWidth < 600 ? 1.2 : 2);

  // Zoom in and center flower for all screens
  flowerScale = windowWidth < 600 ? 0.62 : 0.52;
  flowerPosition = {x: 0, y: 0, z: 0};
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  strokeWeight(windowWidth < 600 ? 1.2 : 2);
  flowerScale = windowWidth < 600 ? 0.62 : 0.52;
  flowerPosition = {x: 0, y: 0, z: 0};
}

function draw(){
  background(270, 30, 20); // dark purple background
  orbitControl(4, 4);
  rotateX(-30);

  // Responsive flower scale based on screen size
  let minDim = min(windowWidth, windowHeight);
  let baseScale = windowWidth < 600 ? 0.62 : 0.52;
  let responsiveScale = baseScale * (minDim / 540); // 540 is a reference size

  // Draw the single flower, purple hue
  let hue = 280; // Purple hue
  drawFlowerAt(flowerPosition, responsiveScale, hue);
}

function setGradientBackground() {
  // Simulate linear-gradient(90deg, #a6c1ee 0%, #fbc2eb 100%)
  for(let i = 0; i < width; i++) {
    let inter = map(i, 0, width, 0, 1);
    let c = lerpColor(color('#a6c1ee'), color('#fbc2eb'), inter);
    stroke(c);
    line(i - width/2, -height/2, i - width/2, height/2);
  }
}

function drawFlowerAt(pos, scaleF, baseHue) {
  push();
  translate(pos.x, pos.y, pos.z);
  drawFlower(scaleF, baseHue);
  pop();
}

// drawFlower(scale, baseHue)
function drawFlower(scaleFactor, baseHue){
  for(let r = 0; r <= 1.02; r += 0.02){
    stroke((baseHue + r*10) % 360, 60, 90);
    beginShape(POINTS);
    for(let theta = -2*180; theta <= 180*15; theta += 2){
      let phi = (180/2)*Math.exp(-theta/(8*180));
      let petalCut = 1 - (1/2) * pow((5/4)*pow(1-((3.6*theta%360)/180), 2)-1/4, 2);
      let hangDown = 2*pow(r, 2)*pow(1.3*r-1, 2)*sin(phi);
      if(0 < petalCut * (r * sin(phi)+hangDown*cos(phi))){
        let pX = 260 * petalCut * (r * sin(phi)+hangDown*cos(phi)) * sin(theta);
        let pY = -260 * petalCut * (r * cos(phi)-hangDown*sin(phi));
        let pZ = 260 * petalCut * (r * sin(phi)+hangDown*cos(phi)) * cos(theta);
        vertex(pX * scaleFactor, pY * scaleFactor, pZ * scaleFactor);
      }
    }
    endShape();
  }
}
