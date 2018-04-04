var weather0; // chicago
var weather1; // orlando
var weather2; // miami
var weather3; // detroit
var weather4; //seattle

// below are tally variables that'll hold the value of each finish of each city
var tally0 = 0;
var tally1 = 0;
var tally2 = 0;
var tally3 = 0;
var tally4 = 0;

// below is the starting x positions of each city
var x0 = 0;
var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;

// below is the starting velocity for each city in the x direction
var dx0 = 0;
var dx1 = 0;
var dx2 = 0;
var dx3 = 0;
var dx4 = 0;

// the preload function to load the api's 
function preload() {   
  // loading chicagos api into url0
  var url0 =  "http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&APPID=fca8b55402702e3d1ae0f152351b8e8e";  //Change the api key to your api key from openweathermap.org
  httpGet(url0, 'json', false, function(response) { weather0 = response; } ); 
 
  
  // loading orlandos api into url1
  var url1 =  "http://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&APPID=fca8b55402702e3d1ae0f152351b8e8e";  //Change the api key to your api key from openweathermap.org
  httpGet(url1, 'json', false, function(response) { weather1 = response; } );  
  //
  
  // loading miamis api into url2
  var url2 =  "http://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&APPID=fca8b55402702e3d1ae0f152351b8e8e";  //Change the api key to your api key from openweathermap.org
  httpGet(url2, 'json', false, function(response) { weather2 = response; } );  
  //  
  
    // loading detroits api into url3
  var url3 =  "http://api.openweathermap.org/data/2.5/weather?q=Detroit&units=imperial&APPID=fca8b55402702e3d1ae0f152351b8e8e";  //Change the api key to your api key from openweathermap.org
  httpGet(url3, 'json', false, function(response) { weather3 = response; } );  
  //
  
  // loading seattles api into url4
  var url4 =  "http://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&APPID=fca8b55402702e3d1ae0f152351b8e8e";  //Change the api key to your api key from openweathermap.org
  httpGet(url4, 'json', false, function(response) { weather4 = response; } );  
  //

}

// setting global variable bool to false. this varaible will be used to blank out the screen in case the user is getting a headache from the overwhelming data
var bool = 0;



// setup function to set up the program
function setup() { createCanvas(windowWidth, windowHeight); }

// declaring temp array to hold temperature of each city
var temp = [];


// calling draw function so that it can constantly draw the sketch
function draw() { 
  // setting background to white
  background(255); 
 
 
 // entering the if statement only if bool is false
 
if ( bool == 0 ){ 
 
 
 // text to give user an idea of the objective of the program
   text("This is a race to the finish line! The colder the city the slower it'll race. The hotter the city the faster it'll race!", 10, height - 265 );
 
 // text to indicate that there's a finish line
   text("FINISH LINE", width - 100 ,height/11);
 
 // text to indicate the finishes for each city that's using an api
   text("Finishes", 10, height/11 )
   text( "Chicago", 100 , height/14);
   text( "Orlando", 200, height/14);
   text( "Miami", 300, height/14);
   text( "Detroit", 400, height/14);
   text( "Seattle", 500, height/14);
   
   // vertical line to indiacte where the finish line is
   line(width - 20, height/9, width - 20, height - 200);
 
    // text to indicate where u can see a more clear version of the weather at each city
   text("Here's da weather in case you can't read it:", 10, height - 225);
 
  //  checking chicago weather
  if (!weather0) { 
     return; 
  } 
  // printing out the chicago weather and sending it of to the race, and at the same time the program is updating it's velocity and checking if it's passed the finish line. if so then the tally
  // for this city will be incremented by one
  fill(0);  print(weather0.main.temp);  
  text("It is "+weather0.main.temp+" in Chicago!", x0, height/2 ); 
  x0 = x0 + dx0/15; if (x0 >= width){ x0 = 0; tally0 = tally0 + 1; }
  //
  
  // checking orlando weather
  if (!weather1) { 
     return; 
  } 

// printing out the orlando weacther and sending it off to the race, and at the same time the program is updating it's velocity and checking if it's passed the finish line. if so then the tally
  // for this city will be incremented by one
  fill(0);print(weather1.main.temp);  
  text("It is "+weather1.main.temp+" in Orlando!", x1 , height/3 ); 
  x1 = x1 + dx1/15; if ( x1 >= width ){x1 = 0; tally1 = tally1 + 1;  }
  
  

  
  //checking miami weather
  if (!weather2) { 
     return; 
  } 
  
  //printing miami weather and sending it off to the race, and at the same time the program is updating it's velocity and checking if it's passed the finish line. if so then the tally
  // for this city will be incremented by one
  fill(0);  print(weather2.main.temp);  
  text("It is "+weather2.main.temp+" in Miami!", x2 , height/4 ); 
  x2 = x2 + dx2/15; if ( x2 >= width ){ x2 = 0; tally2 = tally2 +1;  }

  
   // checking detroit weather
  if (!weather3) { 
     return; 
  } 
  
  // printing detroit weather and sending it off to the race, and at the same time the program is updating it's velocity and checking if it's passed the finish line. if so then the tally
  // for this city will be incremented by one
  fill(0);  print(weather3.main.temp);  
  text("It is "+weather3.main.temp+" in Detroit!", x3, height/5 ); 
    x3 = x3 + dx3/15; if ( x3 >= width ){ x3 = 0; tally3 = tally3 +1;  }
  
  //
  
  
   //checking seattle weather 
  if (!weather4) { 
     return; 
  } 
  
  
  // printing seattle weather and sending it off to the race, and at the same time the program is updating it's velocity and checking if it's passed the finish line. if so then the tally
  // for this city will be incremented by one
  fill(0);  print(weather4.main.temp);  
  text("It is "+weather4.main.temp+" in Seattle!", x4, height/7 ); 
    x4 = x4 + dx4/15; if ( x4 >= width ){ x4 = 0; tally4 = tally4 +1;  }

  
  // display tally so that the user is notified of the score
  print(tally0);
  text( tally0, 100 ,height/11  );
  print(tally1);
  text( tally1, 200 ,height/11);
  print(tally2);
  text( tally2, 300 ,height/11);
  print(tally3);
  text( tally3, 400 ,height/11);
  print(tally4);
  text( tally4,  500 ,height/11);
  

//using for loop to store the weather data into each temp element of the temp array
  for ( var i = 0; i < 5;i++ ){
    if ( i == 0 ){ temp[i] = weather0.main.temp; }
    if ( i == 1 ){ temp[i] = weather1.main.temp; }
      if ( i == 2 ){ temp[i] = weather2.main.temp; }
        if ( i == 3 ){ temp[i] = weather3.main.temp; }
    if ( i == 4 ){ temp[i] = weather4.main.temp; }
  
  }

// using for loop to display the temperature of each city so that the user can see
    for ( var i = 0; i < 5;i++ ){
        print(temp[i]);
        text(temp[i], (i*100) + 100, height - 200 );
        
  }
  
  // display the name of the cities next to each  temperature of the corresponding city so that the data is formattted correctly and easily readable 
  text("Chi: ", 70, height -200);
  text("Orl: ", 170, height -200);
  text("Mia: ", 270, height -200);
 text("Det: ", 370, height -200);
 text("Sea: ", 470, height -200);
 
 // using for loop to increase velocity of each city
   for ( var i = 0; i < 5;i++  ){
   
    if ( i == 0 ){ dx0 = temp[i] ; }
    if ( i == 1 ){ dx1 = temp[i] ; }
      if ( i == 2 ){ dx2 = temp[i] ; }
        if ( i == 3 ){ dx3 = temp[i] ; }
    if ( i == 4 ){ dx4 = temp[i] ; }  
   
   }
 
} 
 
}



// setting bool to true if false and false whenever it's true and this will happen only when the mouse is clicked
function mousePressed(){

  
     if (bool == 0){bool = 1}else{bool = 0 };
 
}