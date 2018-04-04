//  Joke Generator by Rachel Estilo
//  This simple program randomly generates a joke from a joke API found on GitHub.
//  The user is presented with a joke but in order to reveal the punchline, the user should find the passkey,
//  which is a randomly-chosen lowercase letter determined by the program.
//  After the user finds the passkey, the program celebrates by showing the punchline followed by various "crowd laughs"
//  randomly displayed everywhere on the screen

//  *NOTE*: Granted, some of these jokes are cheesy, do not make any sense to some of us, or do not even work at all,
//  but at least you have something to bring SOME fun to parties!

//  API GitHub Webpage (can also add your own there!): https://github.com/15Dkatz/official_joke_api

var jokeQ = "";       //  holds the joke question
var jokeA = "";       //  holds the joke punchline 
var jokeStory;        //  holds the joke to display
var message;          //  holds message top of canvas
var pressed = false;  //  for determining if the user found the passkey or not
var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];  //  array of letters for passkey
var passkey;          //  holds the randomly-chosen letter
var mode;             //  for switching from the welcome screen to the joke
var mic;              //  holds mic image
var floor;            //  holds floor image
var lights;           //  holds light image
var guessNum = 0;     //  holds number of user guesses for passkey

//  (pre)load everything before doing anything
function preload() {
  mic = loadImage('mic.png');        //  load mic image
  floor = loadImage('floor.png');    //  load floor image
  lights = loadImage('lights.png');  //  load light image
  var url = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";
  httpGet(url, 'json', false, function(response) {  //  randomly generate joke
    jokeQ = response.setup;          //  get the joke question
    jokeA = response.punchline;      //  get the joke punchline
  });  //  end of getting joke
}

//  setup the "floor"
function setup() {
  createCanvas(500, 500);     //  canvas size
  textAlign(CENTER);          //  center text to center of canvas
  textSize(24);               //  make text big enough to red
  passkey = random(letters);  //  randomly choose a letter from array for passkey
  mode = 1;                   //  set mode to 1 for welcome message
  stroke(0);                  //  stroke color
  strokeWeight(3);            //  how much stroke should be applied
  fill(255);                  //  white font color
}

function draw() {
  //  Initial mode (welcome screen)
  if ( mode==1 ) {              //  if the current mode is 1...
    background(0);              //  ...set a black background
        
    //  Display joke question
    jokeStory = "QUESTION:\n";  //  question header
    jokeStory += jokeQ;         //  joke question
    
    //text("*Find the secret keyboard letter to reveal the punchline!*\n", width*0.125, 20, width*0.75, height/2);  //  instructions
    message = "*Find the secret keyboard letter to reveal the punchline!*\n";
  }
  //  "Wrong guess" mode
  else if ( mode==2 ) {         //  or if the current mode is 2...
    background(197, 34, 34);    //  ...set a red background

    //  Repeat joke question
    jokeStory = "QUESTION:\n";  //  question header
    jokeStory += jokeQ;         //  joke question
    
    //  "Crowd" Boo Reactions
    for ( var i=0; i<=8; i++ ) {  //  generate 8 reactions
      frameRate(4);  //  slow down reaction movement around screen
      fill(50);  //  dark grey font color
      text("BOO!", random(-5, displayWidth), random(-5, displayHeight) );   //  reaction 1
      text("HISS!", random(-5, displayWidth), random(-5, displayHeight) );  //  reaction 2
      text("LAME!", random(-5, displayWidth), random(-5, displayHeight) );  //  reaction 3
    }  //  end of boo
         
    message = "*Oops! That ain't the passkey!*\n(Guess #" + guessNum +")";  //  encourage user to guess again
  }
  
  //  After correct guess (NOT A MODE)
  if ( pressed==true ) {  //  if the correct passkey was found...
    background('green');  //  indicator that the correct passkey was entered
    fill(255);            //  white font color
    //  **BONUS CODE: keep the question after finding the correct passkey, though it may cut some text (CHANGE = IN "ANSWER HEADER" TO +=)**
      //jokeStory = "QUESTION:\n";  //  question header
      //jokeStory += jokeQ;         //  joke question
      //jokeStory += "\n\n";        //  2 new lines
    //  **END OF BONUS CODE**
    jokeStory = "ANSWER:\n";  //  answer header (change = to += for keeping question)
    jokeStory += jokeA;       //  joke answer/punchline
    jokeStory += "\n\n(Ba-dum TSHHH!!!)";  //  that iconic drum rimshot after a funny joke
    jokeStory += "\n(Thank you!)";         //  thank the "audience" like any good comedian should
    jokeStory += "\n\n(Click anywhere to see another joke)";  //  message that lets user know they can generate another joke
    
    //  "Crowd" Laugh Reactions
    for ( var i=0; i<=5; i++ ) {  //  generate 5 reactions
      frameRate(3);               //  slow down reaction movement around screen
      fill(50);                   //  dark gray font color
      text("HAHAHA!", random(-5, displayWidth), random(-5, displayHeight) );      //  reaction 1
      text("LOL!", random(-5, displayWidth), random(-5, displayHeight) );         //  reaction 2
      text("OOHHH!", random(-5, displayWidth), random(-5, displayHeight) );       //  reaction 3
      text("*APPLAUSE*", random(-5, displayWidth), random(-5, displayHeight) );   //  reaction 4
    }  //  end of laughs
    
    message = "YOU FOUND THE PASSKEY!!!\n(The passkey was '" + passkey + "')";    //  message that passkey was found (congrats!)
  }  //  end of if
  
  //  Display stage
  image(floor, -5, height-85, (width)+10, (height)*.4);               //  display floor image
  image(mic, (width*0.45), height-205, (width*0.3)*.4, (height)*.4);  //  display mic image
  image(lights, 0, -140, (width), (height)+150);                      //  display lights image
  
  //  Display joke + message
  fill(255);  //  white font color
  text(jokeStory, width*0.125, height/4, width*0.75, height);  //  display joke question/answer
  text(message, width*0.125, 20, width*0.75, height);    //  display message at top of canvas
}

//  For keyboard input
function keyTyped() {
  if ( key==passkey ) { pressed = true; }  //  if the user got the passkey, set pressed to true to enable showing the punchline
  else if ( key!=passkey && pressed==false ) { mode = 2; guessNum++; }  //  otherwise, change mode to indicate input is not the passkey and increment the number of guesses
}

//  For mouse click input
function mousePressed() {
  if ( mouseButton==LEFT && pressed==true ) { location.reload(); }  //  after revealing the punchline, allow user option to regenerate joke by reload page
}
