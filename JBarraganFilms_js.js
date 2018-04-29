var films = [];
var film;
var i = 0;
var myVoice = new p5.Speech();

var kiki;
var ponyo;
var totoro;
var mononoke;
var arrietty;
var earthsea;
var heart;
var fireflies;
var howls;
var pompoko;
var porco;
var spirit;
var thecat;
var wind;
var yamada;

function preload(){

  totoro = loadImage('totoro.png');
  kiki = loadImage('Kiki.png');
  ponyo = loadImage('Ponyo.png');
  mononoke = loadImage('mononoke.png');
  arrietty = loadImage('arrietty.png');
  earthsea  = loadImage('earthsea.png');
  heart = loadImage('heart.png');
  fireflies = loadImage('fireflies.png');
  howls = loadImage('howls.png');
  pompoko = loadImage('pompoko.png');
  porco = loadImage('porco.png');
  spirit = loadImage('spirit.png');
  thecat = loadImage('thecat.png');
  wind = loadImage('wind.png');
  yamada = loadImage('yamada.png');
  
  film = loadJSON("https://ghibliapi.herokuapp.com/films");
}

function setup() {
  background(50);
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(124,191,245);
  
  //fill(3, 140, 250);
  //stroke(3, 140, 250);
  //rect(0, displayHeight/2, displayWidth,displayHeight);//the sea
  
  //fill(28, 198, 55);
  //stroke(28, 198, 55);
  //rect(0,displayHeight/4, displayWidth, displayHeight/3);//the grass
  
  image(kiki,700, 100, 100,100);
  image(ponyo, 700,750, 50,50); 
  image(totoro, 600, 500, 200, 250);
  image(mononoke, 100, 450, 100, 100);
  
  image(arrietty, 80, 500, 75,75);
  image(earthsea, 750, 450, 100, 100);
  image(heart, 400, 675,95,90);
  image(fireflies, 450,600, 80,90);
  
  image(howls,40,40,150,150);
  image(pompoko,50, 575,90,75);
  image(porco,550,150,150,150);
    
  image(spirit,800,575,100,100);
  image(thecat,775,550,100,100);
  image(wind,800,500,100,100);
  image(yamada,0,750, 200,200);
  
  for(var i = 0; i < films.length; i++) { 
    films[i].display(); 
    films[i].update();  
  } 
}

function mousePressed() { 
  append(films, new Films(mouseX, mouseY));
  console.log(film[i].description);
  
  var sentences=RiTa.splitSentences(film[i].description);
  myVoice.speak(sentences[0]);
  console.log(sentences[0]);

   i=i+1;
    if(i==19){
      i=0;
   }
} 

function Films(X, Y) {  
  this.a = 255; 
  this.x = X; 
  this.y = Y; 
  this.display = function() { 
    
    stroke(95,234,95, this.a);
    fill(95,234,95);// green color for title
    textSize(30);
   
    text((film[i].title), this.x+1,this.y+1);//text of the film title will appear
       
    textSize(30);
    stroke(146,149,147, this.a);
    fill(255,255,255);//white w/ gray outline for description

    text((film[i].description),this.x,this.y,500,500);//text of description will appear in a box
    } 
  
  this.update = function() { 
    this.x-=3; //string of data will slide down to the left of the screen
    this.y+=2; 
  }
}