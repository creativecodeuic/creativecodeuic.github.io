// The aim for this project was to show the visualize the amount of 
// primary characters in each movie by pulling it out of the Star
// Wars Api. Additional data would show by hovering over a specific
// movie. 
var characters = [];
var title = [];
var openingCrawl = [];
var r, g, b;

function preload() {
  httpGet("https://swapi.co/api/films/",
    "json", false,
    function(response) {
      //print(response);    
      //results array = movies
      //results indeces = specific movie EX: results[0]

      //grabs primary characters amount from one movie
      for (var i = 0; i < response.results.length; i++) {
        //grabs primary characters amount from one movie
        characters[i] = response.results[i].characters.length;
        //grabs title of movie
        title[i] = response.results[i].title;
        //grabs opening crawl of movie 
        openingCrawl[i] = response.results[i].opening_crawl;
        print(characters[i]);
        print(title[i]);

      }
    });
}

function setup() {
  createCanvas(800, 1000);
  img = loadImage("data/stars.png"); // Load the image
  //sets the color
  r = 244;
  g = 220;
  b = 66;
}

function draw() {
  background(0);
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  noStroke();
  //creates title 
  textSize(30);
  text("Star Wars Primary Characters Count", 150, 150);

  //draws circles and bases size off of the character length
  for (var i = 0; i < characters.length; i++) {
    fill(r, g, b);
    ellipse(i * 100 + 50, 400, characters[i] * 2.5, characters[i] * 2.5);
  }

  //draws numerical title of the movies
  textSize(20);
  text("IV", 40, 350);
  text("II", 143, 320);
  text("I", 246, 330);
  text("III", 340, 330);
  text("VI", 438, 350);
  text("V", 544, 350);
  text("VII", 639, 350);
  

  //makes the ellipses bigger and displays data when you hover over the ellipse
  for (i = 0; i < characters.length; i++) {
    distance = dist(mouseX, mouseY, i * 100 + 50, 400);

    if (distance < characters[i] / 2) {
      ellipse(i * 100 + 50, 400, characters[i] * 4, characters[i] * 4)
      //shows character count
      print(characters[i]);
      //shows title
      print(title[i]);
      textSize(150);
      text(characters[i], 100, 700);
      textSize(30);
      text(title[i], 230, 230);
      textSize(15);
      //shows opening crawl text
      text(openingCrawl[i], 500, 500);
    }

  }


}