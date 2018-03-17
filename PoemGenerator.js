var word1;
var word2;
var word3;
var word4;
var poem;
var async = false;
var heart;

function preload() {
  heart = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/645px-Love_Heart_SVG.svg.png');
  var url = "http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=adjective&minCorpusCount=25000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
  httpGet(url, 'json', false, function(response) {
    word1 = response.word;
  }
  );
  httpGet(url, 'json', false, function(response) {
    word2 = response.word;
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
  if (!word2)
    return;
  else if (!word4) {
    if (word1&&word2&&!async) {
      async = true;
      url = "http://rhymebrain.com/talk?function=getRhymes&word="+word1;
      httpGet(url, 'json', false, function(response) {
        word3 = response[int(random(response.length/10))].word;
      }
      );
      url = "http://rhymebrain.com/talk?function=getRhymes&word="+word2;
      httpGet(url, 'json', false, function(response) {
        word4 = response[int(random(response.length/10))].word;
      }
      );
    }
  } else if (!poem&&word3&&word4&&heart) {
    poem = "Roses are ";
    poem+= word1;
    poem+= ".\nViolets are ";
    poem+= word2;
    poem+= ".\nI am ";
    poem+= word3;
    poem+= ",\nand you are ";
    poem+= word4;
    poem+=".";
    image(heart, 0, 0, width, height);
    fill(255);
    text(poem, width*0.125, height/3, width*0.75, height/2);
    print(poem);
  }
}

function mousePressed() {
  if (mouseButton==LEFT)
    location.reload();
  if (mouseButton==RIGHT)
    saveCanvas('CompyLove'+frameCount+'.jpg');
}