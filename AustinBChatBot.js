var inp;
var messages = '';
var lineMove = -15;
var textPos = 0;
var responseText = 'Hello';
var inpPrev = '';
var inpPrev2 = '';
var botName = '';
var botUserName = '';
var botPicture;
var imageString
var botGender = '';
var firstRun = true;

//gets the bot info
function preload() {
  var url = "https://randomuser.me/api/"

    httpGet(url, 'json', false, function(response) {
    botName = response.results[0].name.first + ' ' + response.results[0].name.last;
    botUserName = response.results[0].login.username;
    botGender = response.results[0].gender;
  }
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //creates the textbox
  inp = createInput('');
  inp.input(myInputEvent);
  inp.size(windowWidth/2, 20);
  inp.position(windowWidth/4, windowHeight - 40);

  //creates the box for text messages
  textPos = windowHeight - 60;
}

function draw() {
  if (!botName) {
    return;
  } else if (firstRun) {
    
    //Handles the picture choosing of the bot
    if (botGender == "male") {
      imageString = "data/Austin/male" + int(random(1, 10))+".jpg";
    } else {
      imageString = "data/Austin/female" + int(random(1, 10))+".jpg";
    }

    //loads the image
    botPicture = loadImage(imageString);
    
    botName = botName.toUpperCase();
    
    //allows the program to exit the first run case
    firstRun = false;
  } else
  {
    background(0,0,255);
    
    
    //draws background box for the texts
    fill(0, 255,0, 125);
    noStroke();
    rect(windowWidth/4 - 20, 0, windowWidth/2 + 40, windowHeight);
    
    //draws box around text box
    fill(0,75,30);
    rect(windowWidth/4 - 20, windowHeight - 60, windowWidth/2 + 40, 60);
    
    //draws the text messages
    fill(0);
    textSize(12);
    textAlign(LEFT);
    text(messages, windowWidth/4, textPos, windowWidth/2, windowHeight - textPos);
    
    //displays the bot's image
    image(botPicture, windowWidth/16, windowHeight/6, windowWidth/8, windowWidth/8);
    
    fill(255);
    textSize(25)
    textAlign(CENTER);
    text(botName, windowWidth/16, windowHeight/6 + windowWidth/8 + 5, windowWidth/8, windowHeight);
  }
}

//used for typing, input is also displayed in the console
function myInputEvent() {
  console.log('you are typing: ', this.value());
}

function keyPressed () {
  if (keyCode === ENTER) {
    if (inp.value()) {
      //used to add user text
      messages += '>\n>[YOU]: ';
      messages += inp.value();
      messages += '\n>\n';

      inpPrev2 = inpPrev;
      inpPrev = inp.value();

      //scrolls based on how much was writen
      textPos += lineMove*ceil(textWidth(inp.value())/(windowWidth/2)) + lineMove*2;



      //gets the response for the next line
      getText();

      //adds the bots text
      messages += '>[' + botUserName + '] ';
      messages += responseText;
      messages += '\n';
      textPos += lineMove;

      //resets input value
      inp.value('');
    }
  }
}


//allows the windows to be resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  inp.size(windowWidth/2, 20);
  inp.position(windowWidth/4, windowHeight - 40);
  print(windowHeight);
}

//handles getting the responses for the user
function getText() {
  var url = "https://yesno.wtf/api";

  httpGet(url, 'json', false, function(response) {
    if (textWidth(inpPrev2) <= textWidth(inpPrev)) {
      responseText = response.answer;
    } else {
      responseText = response.forced;
    }
    print(responseText);
  }
  );
}