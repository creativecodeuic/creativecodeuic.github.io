var word1;  //4 Strings to store the words that will be filled in
var word2;
var word3;
var word4;
var poem;  //String to store the complete poem
var settingRhymes = false;  //boolean for when the 3rd and 4th httpget requests
var heart; //var to store heart image

function preload() {
  //Load in heart
  heart = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/645px-Love_Heart_SVG.svg.png');
  //Url for random word
  var url = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=adjective&minCorpusCount=25000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
  httpGet(url, 'json', false, function(response) {
    word1 = response.word;  //Store first random word in word1
  }
  );
  httpGet(url, 'json', false, function(response) {
    word2 = response.word;  //Store second random word in word1
  }
  );
}

function setup() {
  createCanvas(500, 500);
  background(0);
  textAlign(CENTER);
  textSize(24);
}

function draw() {
  //Wait until the first two words are acquired and don't repeat if already setting rhymes
  if (word1 && word2 && !settingRhymes) {
    setRhymes();
  } else if (!poem&&word3&&word4&&heart) {  //If everything is set except the poem
    poem = "Roses are ";  //Add each line of the poem with the 4 words filled in
    poem+= word1;
    poem+= ".\nViolets are ";
    poem+= word2;
    poem+= ".\nI am ";
    poem+= word3;
    poem+= ",\nand you are ";
    poem+= word4;
    poem+=".";
    image(heart, 0, 0, width, height);  //Display the heart
    fill(255);  //Set the text color
    text(poem, width*0.125, height/3, width*0.75, height/2);  //Display the poem
    print(poem);
  }
}

function mousePressed() {
  if (mouseButton==LEFT)
    location.reload();  //If the left mouse button is pressed, refresh the page
  if (mouseButton==RIGHT)
    saveCanvas('CompyLove'+frameCount+'.jpg');  //If the right mouse button is pressed, save the canvas
}

function setRhymes() {
  settingRhymes = true;
  url = "https://api.datamuse.com/words?rel_rhy="+word1;  //Url to get word that rhymes with word1
  httpGet(url, 'json', false, function(response) {
    word3 = response[0].word;  //Store the rhymed word in word3
  }
  );
  url = "https://api.datamuse.com/words?rel_rhy="+word2;  //Url to get word that rhymes with word2
  httpGet(url, 'json', false, function(response) {
    word4 = response[0].word;  //Store the rhymed word in word4
  }
  );
}
