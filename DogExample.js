var dogPic;

function preload() {
  httpGet("http://dog.ceo/api/breeds/image/random", "json", false, function(httpGetponse) {
    dogPic = loadImage(httpGetponse.message);
  }
  );
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (dogPic)
    image(dogPic, 0, 0);
}
