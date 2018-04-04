/*
The punk API gets general information about different kinds of beers.
The website helps people to find beer that matches their mood. 
The information contains the best paring food for the beer where people can enjoy with.
(My ideal purpose of the punk API is help people find the perfect beer.
I am still working on this part as the API get all the information randomly,
I am not able to fliter the beers by its APV, it only goes to the beer page)
"According to one's mood, it groups the beers with their alcohol per volumn.
When one is sad or heartbroken, it will suggest beers with higher APV.
When one is happy, joy or in good mood, it will suggest a lower APV beer.
When one is angry or mad, it will suggest a beer in between."
There are two special situation that when one is sleepy and feeling sick,
they should not drink beer.
*/

//the variables for the page
var data;
var img;
var numb = 7;
var questions = [];
var n = 0.0;
var flag = 0;
var answers = [];
var page = 0;
var emojis = [];
var coffee = [];
var sleep = [];

//using the json function to get datas from punkapi
function preload() {
  url = 'https://api.punkapi.com/v2/beers/random';
  httpGet(url, 'json', false, function(response) {
    data = response;
  });
   //setting up of the three pages with emojis
  for (var i = 0; i < 8; i++) {
    emojis[i] = loadImage("assets/" + i + ".png");
  }
  for(var i = 0; i < 2;i++){
    coffee[i] = loadImage("assets/coffee"+i+".png");
  }
  for(var i = 0;i < 3;i++){
    sleep[i] = loadImage("assets/sleep"+i+".png");
  }
}

function setup() {
  //creating pages with beer's information
  createCanvas(windowWidth, windowHeight);
  background(255);
  textAlign(CENTER, CENTER);
  imageMode(CENTER);
  //the seven infromation about a random beer
  questions[0] = "Name";
  questions[1] = "Tagline";
  questions[2] = "First Brewed";
  questions[3] = "IBU"; //kudu
  questions[4] = "PH";
  questions[5] = "APV";
  questions[6] = "Food Pairing";
}

function draw() {
  if (!data) {
    // Wait until the earthquake data has loaded before drawing.
    return;
  }
  //setup the first page of the website
  if (page == 0) {
    background(0);
    fill(255);
    textSize(height / 20);
    //ask people to pick their emoji
    text("Let's pick a beer that matches your mood\nHow you feel like today?", width / 2, height / 10);
    //lay out options and how the emoji lead people to different pages
    for (var i = 0; i < 2; i++) {
      for (var j = 0; j < 4; j++) {
        if (mouseIsPressed && dist(mouseX, mouseY, (0.5 + j) * width / 4, 1.5 * height / 4 + i * height / 2.5) < height / 4) {
          if (i * 4 + j < 6) {
            page = 1;
          } else if (i * 4 + j == 6) {
            page = 2;
          } else if (i * 4 + j == 7) {
            page = 3;
          }
        }
        image(emojis[i * 4 + j], (0.5 + j) * width / 4, 1.5 * height / 4 + i * height / 2.5, height / 4, height / 4);
      }
    }
    //the first four emoji leads to the beer page
  } else if (page == 1) {
    beer();
    //sleepy emoji leads to the coffee page
  } else if (page == 2) {
    drawCoffee();
    //sick emoji leads you to "go home" page
  } else if (page == 3) {
    drawSleep();
  }
}
//setup of the sleep page
function drawSleep(){
  background(0);
  fill(255);
  textAlign(LEFT, CENTER);
  textSize(height / 12);
  //draw the text and images of go home and sleep
  text("Go home and SLEEP!", width / 15, height / 8);
  textAlign(CENTER, CENTER);
  push()
  //Draw the images
  //positing the images under the text
  translate(width/4,height/1.7);
  scale(-1,1);
  image(sleep[1],0,0,height/1.8,height/1.8);
  pop();
  image(sleep[0],3*width/4,height/1.7,height/1.8,height/1.8);
  push()
  translate(3.65*width/4,0.9*height/3);
  rotate(PI/12);
  image(sleep[2],0,0,height/4,height/4);
  pop();
  //back to first page when press "space"
  if (keyIsPressed && keyCode == 32) {
    page = 0;
  }
}
//setup of the coffee page
function drawCoffee() {
  background(0);
  fill(255);
  textAlign(LEFT, CENTER);
  textSize(height / 12);
  //draw the text of having cup of coffee
  text("You need a cup of coffee,\nnot beer!", width / 10, height / 6);
  textAlign(CENTER, CENTER);
  //placing the "coffee" image under the text
  image(coffee[0],width/4,height/1.7,height/1.5,height/2);
  image(coffee[1],3*width/4,height/1.7,height/2,height/2);
  //back to first page when press "space"
  if (keyIsPressed && keyCode == 32) {
    page = 0;
  }
}
//The information of the beer it grabs
function beer() {
  answers[0] = data[0].name;
  answers[1] = data[0].tagline;
  answers[2] = data[0].first_brewed;
  answers[3] = data[0].ibu; 
  answers[4] = data[0].ph;
  answers[5] = data[0].abv;
  answers[6] = data[0].food_pairing[0];
  //setting up of how to display (text size, position) the beer information
  background(0);
  textSize(constrain(width / (2 * String(answers[int(n)]).length),10,40));
  fill(255);
  text(answers[int(n)], width / 2, height / 10);
  print(answers[int(n)]);
  mainPage(width / 2, 2.35 * height / 4, 0.8 * width, 0.8 * height);
  //back to the first page when pressed any keys
  if (keyIsPressed && keyCode == 32) {
    page = 0;
  }
}
//set up of beer page
function mainPage(x0, y0, w0, h0) {
  push();
  translate(x0, y0);
  scale(h0 / height);
  translate(-width / 2, -height / 2);
  //drawing the function of up and down arrow
  for (var i = 0; i < numb; i++) {
    var t = int(int(n) - int(numb - 1) / 2 + i);
    if (t < 0)
      t += questions.length;
    if (t >= questions.length)
      t -= questions.length;
    var shift = map(n - int(n), 0, 1, 0, -height / (numb + 1));
    var h = (i + 1) * height / (numb + 1) + shift;
    if (h < 0.5 * height / (numb + 1)) {
      h = numb * height / (numb + 1) + h;
      t += numb;
      if (t < 0)
        t += questions.length;
      if (t >= questions.length)
        t -= questions.length;
    }
    if (h > (numb + 0.5) * height / (numb + 1)) {
      h = h - numb * height / (numb + 1);
      t -= n;
      if (t < 0)
        t += questions.length;
      if (t >= questions.length)
        t -= questions.length;
    }
    //setting of how the data responses keyboard command
    if (h < height / 2) {
      fill(255, map(h, height / 2, 0, 255, 45));
      textSize(map(h, height / 2, 0.5 * height / (numb + 1), height / 15, height / 20));
    } else {
      fill(255, map(h, height / 2, (numb + 0.5) * height / (numb + 1), 255, 45));
      textSize(map(h, height / 2, (numb + 0.5) * height / (numb + 1), height / 15, height / 20));
    }
    text(questions[t], width / 2, h);
  }
  if (n - int(n) < 0.5 && n - int(n) > 0) {
    n -= 0.01;
  }
  if (n - int(n) > 0.5 && n - int(n) < 1) {
    n += 0.01;
  }
  if (n >= numb) {
    n = 0;
  }
  if (n < 0) {
    n = 0;
  }
  //press up or down arrow to view other information about the beer
  pop();
  if (keyIsPressed) {
    if (flag == 0) {
      if (keyCode == UP_ARROW) {
        var e = 1 / 10.0;
        n += e;
        if (n < 0)
          n += questions.length;
        if (n >= questions.length)
          n -= questions.length;
      }
      if (keyCode == DOWN_ARROW) {
        var e = 1 / 10.0;
        n -= e;
        if (n < 0)
          n += questions.length;
        if (n >= questions.length)
          n -= questions.length;

      }
    }
  }
}
//mouse click to get datas from punk API
function mouseClicked() {
  //print(data[0]);
  url = 'https://api.punkapi.com/v2/beers/random';
  httpGet(url, 'json', false, function(response) {
    data = response;
  });
}