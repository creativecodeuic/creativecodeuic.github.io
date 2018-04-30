
var number = 0;
var earthquakes;
function preload() {
  var url =
   'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +
    'summary/all_day.geojson';
  earthquakes = loadJSON(url);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(240,240,200);
  var Magnitude = earthquakes.features[number].properties.mag; //magnitude of earthquake
  var Name = earthquakes.features[number].properties.place; //name of earthquake
  line(width/2,height-height,width/2,height);
  noStroke();
  fill (0, 0, 0, 255);
  ellipse(random(width), height / 2, Magnitude * 40, Magnitude * 40);
}

function keyPressed() //press right and left to advance to next most recent earthquake
{
  if (keyCode === RIGHT_ARROW) {
      line(width/2,height-height,width/2,height);
    loop();
    number++;
    noLoop();
  }
}
