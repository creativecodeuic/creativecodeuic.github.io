//  Joke Generator by Rachel Estilo
//  This program randomly generates a joke from a joke API found on GitHub.
//  The user is presented with a joke but in order to reveal the punchline, the user should find the passkey,
//  which is a randomly-chosen lowercase letter determined by the program.
//  After the user finds the passkey, the screen celebrates by showing the punchline followed by various "crowd reactions"
//  randomly displayed everywhere on the screen

//  API GitHub Webpage: https://github.com/15Dkatz/official_joke_api

var jokeQ = "";  //  holds the joke question
var jokeA = "";  //  holds the joke punchline 
var jokeStory;   //  holds the joke to display
var pressed = false;  //  for determining if the user found the passkey or not
var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];  //  letters for the passkey
var passkey;  //  holds the randomly-chosen letter
var mode = 0;  //  for switching from the welcome screen to the joke

function preload() {
  var url = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";
  httpGet(url, 'json', false, function(response) {
    jokeQ = response.setup;
    jokeA = response.punchline;
  });
}

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(24);
  background(0);
  passkey = random(letters);
  mode = 1;
}

function draw() {
  //if ( mode==1 ) {
    text("*Find the secret keyboard letter to reveal the punchline!*\n", width*0.125, 20, width*0.75, height/2);
  //}
  
  //else if ( mode==2 ) {
    jokeStory = "QUESTION:\n";
    jokeStory += jokeQ;
  
    if ( pressed==true ) {
      background('green');
      text("YOU FOUND THE PASSKEY!!!\n", width*0.125, 20, width*0.75, height/2);
      //jokeStory = "QUESTION:\n";
      //jokeStory += jokeQ;
      //jokeStory += "\n\n";
      jokeStory = "ANSWER:\n";
      jokeStory += jokeA;
      jokeStory += "\n(Ba-dum TSHHH!!!)";
      
      //  Laughs
      for ( var i=0; i<=15; i++ ) {
        frameRate(8);
        fill(0);
        text("HAHA!", random(-5, displayWidth), random(-5, displayHeight) );
        text("LOL!", random(-5, displayWidth), random(-5, displayHeight) );
        text("OOHHH!", random(-5, displayWidth), random(-5, displayHeight) );
      }
    }
  //}
    
  fill(255);
  text(jokeStory, width*0.125, height/4, width*0.75, height/2);
  //text(passkey, windowWidth/2, 50);
}

function keyTyped() {
  if ( key==passkey ) {
    pressed = true;
  }
  else if ( key!=passkey ) {
    background('red');
  }
  else if ( key=='1') {
    mode = 2;
  }
}

function mousePressed() {
  if ( mouseButton==LEFT ) {
    location.reload();
  }
}
