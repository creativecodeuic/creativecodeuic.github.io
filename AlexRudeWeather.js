var weather;//this is the variable of my code

function preload() { 
  var url =  "http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&APPID=becd8acc01a2aa5375bc2fef6c7e9145";  
  httpGet(url, 'json', false, function(response) { 
    weather = response; 
  } //All of these are actions to go to the API, select weather for Chicago, say I want it in Farienheit,then I put in my API key that I got from the website 
  ); 
}

function setup() { 
  createCanvas(600, 600); 
  fill(0); 
  background(255);
  fill(41,155,254);
  text("You want to know the temperature?",width/3,height/3);//instructions for the user to go farther into the program
  fill(41,155,254);
  text("I guess you could click the box...",width/3,height/3+30);
  fill(155,217,255);
  noStroke();
  rect(30, 20, 55, 55);
  
}

function draw() {
    if (!weather) { 
    return; 
  } 
  print(weather.main.temp); //extracting the temperature out
  fill(255);
  text("well it's "+weather.main.temp+" degrees",width/2,height/2); 
  fill(255);
  text("Wow, still not sure?",width/2,height/2+30);
  fill(255);
  text("I guess you could click the other rectangle",width/2,height/2+60);
  
}

function mouseClicked(){
  if(mouseX>30 && mouseX<90){
  background(155,217,255);//reveals the temperature out
  fill(255);
  rect(300, 450, 55, 55)
  }
  if(mouseX>300 && mouseX<355){
    background(255);
    fill(41,155,254);
  text("Go outside.",width/3,height/3+30);
    }  
}
