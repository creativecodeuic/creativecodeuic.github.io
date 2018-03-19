function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(200);
  colorMode(HSB);
}

function draw() {
  fill(frameCount%255, 255, 255);
  text("TEXT", frameCount%width, height/2);
}