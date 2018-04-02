var songlyrics = [20]; 
var url = [20];
var page_count = 0;

function preload() 
{ 
  //---------------------song 1--------------------
  url[0] =  "https://api.lyrics.ovh/v1/Seventeen/Thanks";  //Change the api key to your api key from openweathermap.org
  httpGet(url[0], 'json', false, function(response) { 
    songlyrics[0] = response; 
  } 
  ); 
  //------------------song 2-----------------------
  url[1] =  "https://api.lyrics.ovh/v1/Exo/Ko Ko Bop";  //Change the api key to your api key from openweathermap.org
  httpGet(url[1], 'json', false, function(response) { 
    songlyrics[1] = response; 
  } 
  ); 
  //---------------------song 3--------------------
  url[2] =  "https://api.lyrics.ovh/v1/BTS/DNA";  //Change the api key to your api key from openweathermap.org
  httpGet(url[2], 'json', false, function(response) { 
    songlyrics[2] = response; 
  } 
  ); 
  //---------------------song 4--------------------
   url[3] =  "https://api.lyrics.ovh/v1/SHINee/View";  //Change the api key to your api key from openweathermap.org
  httpGet(url[3], 'json', false, function(response) { 
    songlyrics[3] = response; 
  } 
  ); 
  //---------------------song 5--------------------
  url[4] =  "https://api.lyrics.ovh/v1/Seventeen/Pretty U";  //Change the api key to your api key from openweathermap.org
  httpGet(url[4], 'json', false, function(response) { 
    songlyrics[4] = response; 
  } 
  ); 
  //---------------------song 6--------------------
  url[5] =  "https://api.lyrics.ovh/v1/Seventeen/Mansae";  //Change the api key to your api key from openweathermap.org
  httpGet(url[5], 'json', false, function(response) { 
    songlyrics[5] = response; 
  } 
  ); 
  //---------------------song 7--------------------
  url[6] =  "https://api.lyrics.ovh/v1/Seventeen/Adore U";  //Change the api key to your api key from openweathermap.org
  httpGet(url[6], 'json', false, function(response) { 
    songlyrics[6] = response; 
  } 
  ); 
} 

function setup() 
{ 
  background(255);
  createCanvas(800, 1000);  
  mainpagepart2();
} 

function draw() 
{ 
  mainpagepart1();
}

function mainpagepart1()
{
  fill(0); 
  rect(10,10,60,20); //song1
  fill(255);
  text("<-  Back",11,25);
  
  fill(0); 
  rect(500,10,60,20); //song1
  fill(255);
  text("Next  ->",501,25);
}

function mainpagepart2()
{
  page_count = 0;
  text("Welcome to Song selector", 50,50);
}

function page1()
{
  page_count = 1;
  if (!songlyrics) 
  { 
    return; 
  } 
  
  fill(0); 
  rect(10,40,60,30); //song1
  fill(255);
  text("Thanks",11,51);
  
  fill(0);
  rect(100,40,60,30); //song2
  fill(255);
  text("Ko Ko Bop",101,51);
  
  fill(0);
  rect(200,40,60,30); //song3
  fill(255);
  text("DNA",201,51);
  
  fill(0);
  rect(300,40,60,30); //song4
  fill(255);
  text("View",301,51);
  
  fill(0);
  rect(400,40,60,30); //song5
  fill(255);
  text("Pretty U",401,51);
  
  fill(0);
  rect(500,40,60,30); //song6
  fill(255);
  text("Mansae",501,51);
  
  fill(0);
  rect(600,40,60,30); //song7
  fill(255);
  text("Adore U",601,51);

}
function mouseClicked() 
{
  fill(0);
  background(255);
  if(mouseX >= 500 && mouseX <= 560 && mouseY >= 10 && mouseY <=30)
  {
    if(page_count == 0)
    {
      page1();
    }
  }
  if(mouseX >= 10 && mouseX <= 70 && mouseY >= 10 && mouseY <=30)
  {
    if(page_count == 0)
    {
      text("Wrong Button", 10,50);
    }
    if(page_count == 1)
    {
      mainpagepart2();
    }
  }
  if(mouseX >= 10 && mouseX <= 60 && mouseY >= 40 && mouseY <=70)
  {
    createCanvas(800,2500);
    background(150,0,0);
    text(songlyrics[0].lyrics, 20,80);
  }
  if(mouseX >= 100 && mouseX <= 160 && mouseY >= 40 && mouseY <=70)
  {
    createCanvas(800,2500);
    background(0,150,0);
    text(songlyrics[1].lyrics, 20,80);
  }
  if(mouseX >= 200 && mouseX <= 260 && mouseY >= 40 && mouseY <=70)
  {
    createCanvas(800,2500);
    background(0,0,150);
    text(songlyrics[2].lyrics, 20,80);
  }
  if(mouseX >= 300 && mouseX <= 360 && mouseY >= 40 && mouseY <=70)
  {
    createCanvas(800,2500);
    background(150,150,0);
    text(songlyrics[3].lyrics, 20,80);
  }
  if(mouseX >= 400 && mouseX <= 460 && mouseY >= 40 && mouseY <=70)
  {
    createCanvas(800,2500);
    background(0,150,150);
    text(songlyrics[4].lyrics, 20,80);
  }
  if(mouseX >= 500 && mouseX <= 560 && mouseY >= 40 && mouseY <=70)
  {
    createCanvas(800,2500);
    background(150,0,150);
    text(songlyrics[5].lyrics, 20,80);
  }
  if(mouseX >= 600 && mouseX <= 660 && mouseY >=40 && mouseY <=70)
  {
    createCanvas(800,2500);
    background(150,150,150);
    text(songlyrics[6].lyrics, 20,80);
  }
}