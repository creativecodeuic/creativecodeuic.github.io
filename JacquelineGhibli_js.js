//The words "Studio Ghibli" will appear in the center of the screen
//and when the mouse clicked,the titles, description, and
//the name of the director of the movies will appear 
//and slide out of the screen.

var films=[];
var film;
var i;

function preload(){
film=loadJSON("https://ghibliapi.herokuapp.com/films");  
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  noFill();
}

function draw() {
  background(255);
  
  textSize(75);
  textAlign(CENTER)
  fill(70,70,70);
  text("Studio Ghibli", width/2, height/2);
 
  
  for(var i = 0; i < films.length; i++) { 
    films[i].display(); 
    films[i].update(); 
  } 
}

function mousePressed() { 
  append(films, new Films(mouseX, mouseY));
} 

function Films(X, Y) { 
  this.d = 1; 
  this.a = 255; 
  this.x = X; 
  this.y = Y; 
  this.display = function() { 
    
    stroke(95,234,95, this.a);
    fill(95,234,95);// green color for title
    textSize(30)
    if('film[].title'==[19]){
      'film[].title'==[0]+1;
    }
    text((film[0].title), this.x+1,this.y+1);//text of the film title will appear
       
    textSize(30);
    stroke(95,208,234, this.a);
    fill(95,208,234);//blue for description
    if('film[].description'==[19]){
      'film[].description'==[0]+1;
    }
    text((film[0].description),this.x,this.y,500,500);//text of description will appear in a box
    } 
  
  this.update = function() { 
    this.x-=4; //string of data will slide down to the left of the screen
    this.y+=5; 
  }
}