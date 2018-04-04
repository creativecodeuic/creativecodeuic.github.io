var songlyrics = [30]; 
var url = [30];

var arturl = [10];
var artist = [10];

var page_count = 0;
var artist_num = 0;

function preload() 
{ 
  /*   ARTIST #1  Jennifer Lopez   */
  arturl[0] = "https://itunes.apple.com/search?term=Jennifer+Lopez&limit=5";
  httpGet(arturl[0], 'json', false, function(response) { 
    artist[0] = response; 
  } 
  ); 
  //---------------------song 1--------------------
  url[0] =  "https://api.lyrics.ovh/v1/Jennifer Lopez/On the Floor";  
  httpGet(url[0], 'json', false, function(response) { 
    songlyrics[0] = response; 
  } 
  ); 
  //------------------song 2-----------------------
  url[1] =  "https://api.lyrics.ovh/v1/Jennifer Lopez/Ain't Your Mama";  
  httpGet(url[1], 'json', false, function(response) { 
    songlyrics[1] = response; 
  } 
  ); 
  //---------------------song 3--------------------
  url[2] =  "https://api.lyrics.ovh/v1/Jennifer Lopez/I'm Real";  
  httpGet(url[2], 'json', false, function(response) { 
    songlyrics[2] = response; 
  } 
  ); 
  //---------------------song 4--------------------
   url[3] =  "https://api.lyrics.ovh/v1/Jennifer Lopez/Dance Again";  
  httpGet(url[3], 'json', false, function(response) { 
    songlyrics[3] = response; 
  } 
  ); 
  //---------------------song 5--------------------
  url[4] =  "https://api.lyrics.ovh/v1/Jennifer Lopez/Let's Get Loud";  
  httpGet(url[4], 'json', false, function(response) { 
    songlyrics[4] = response; 
  } 
  ); 
  
  //-------------------------------------------------------
  //-------------------------------------------------------
  
  /*   ARTIST #2  Ellie Goulding   */
  arturl[1] = "https://itunes.apple.com/search?term=Ellie+Goulding&limit=5";
  httpGet(arturl[1], 'json', false, function(response) { 
    artist[1] = response; 
  } 
  ); 
  
  //---------------------song 1--------------------
  url[5] =  "https://api.lyrics.ovh/v1/Ellie Goulding/Love Me Like You Do";  
  httpGet(url[5], 'json', false, function(response) { 
    songlyrics[5] = response; 
  } 
  ); 
  //------------------song 2-----------------------
  url[6] =  "https://api.lyrics.ovh/v1/Ellie Goulding/Lights";  
  httpGet(url[6], 'json', false, function(response) { 
    songlyrics[6] = response; 
  } 
  ); 
  //---------------------song 3--------------------
  url[7] =  "https://api.lyrics.ovh/v1/Ellie Goulding/Burn";  
  httpGet(url[7], 'json', false, function(response) { 
    songlyrics[7] = response; 
  } 
  ); 
  //---------------------song 4--------------------
   url[8] =  "https://api.lyrics.ovh/v1/Ellie Goulding/Something in the Way You Move";  
  httpGet(url[8], 'json', false, function(response) { 
    songlyrics[8] = response; 
  } 
  ); 
  //---------------------song 5--------------------
  url[9] =  "https://api.lyrics.ovh/v1/Ellie Goulding/On My Mind";  
  httpGet(url[9], 'json', false, function(response) { 
    songlyrics[9] = response; 
  } 
  ); 
  
  //-------------------------------------------------------
  //-------------------------------------------------------
  
  /*   ARTIST #3  Pitbull   */
  arturl[2] = "https://itunes.apple.com/search?term=Pitbull&limit=5";
  httpGet(arturl[2], 'json', false, function(response) { 
    artist[2] = response; 
  } 
  ); 
  //---------------------song 1--------------------
  url[10] =  "https://api.lyrics.ovh/v1/Pitbull/Timber";  
  httpGet(url[10], 'json', false, function(response) { 
    songlyrics[10] = response; 
  } 
  ); 
  //------------------song 2-----------------------
  url[11] =  "https://api.lyrics.ovh/v1/Pitbull/Give Me Everything";  
  httpGet(url[11], 'json', false, function(response) { 
    songlyrics[11] = response; 
  } 
  ); 
  //---------------------song 3--------------------
  url[12] =  "https://api.lyrics.ovh/v1/Pitbull/I Know You Want Me";  
  httpGet(url[12], 'json', false, function(response) { 
    songlyrics[12] = response; 
  } 
  ); 
  //---------------------song 4--------------------
   url[13] =  "https://api.lyrics.ovh/v1/Pitbull/Fireball";  
  httpGet(url[13], 'json', false, function(response) { 
    songlyrics[13] = response; 
  } 
  ); 
  //---------------------song 5--------------------
  url[14] =  "https://api.lyrics.ovh/v1/Pitbull/Time of Our Lives";  
  httpGet(url[14], 'json', false, function(response) { 
    songlyrics[14] = response; 
  } 
  ); 
  
  //-------------------------------------------------------
  //-------------------------------------------------------
  
  /*   ARTIST #4  Maroon 5   */

  arturl[3] = "https://itunes.apple.com/search?term=Maroon+5&limit=5";
  httpGet(arturl[3], 'json', false, function(response) { 
    artist[3] = response; 
  } 
  ); 
  //---------------------song 1--------------------
  url[15] =  "https://api.lyrics.ovh/v1/Maroon 5/What Lovers Do ";  
  httpGet(url[15], 'json', false, function(response) { 
    songlyrics[15] = response; 
  } 
  ); 
  //------------------song 2-----------------------
  url[16] =  "https://api.lyrics.ovh/v1/Maroon 5/Wait";  
  httpGet(url[16], 'json', false, function(response) { 
    songlyrics[16] = response; 
  } 
  ); 
  //---------------------song 3--------------------
  url[17] =  "https://api.lyrics.ovh/v1/Maroon 5/Sugar";  
  httpGet(url[17], 'json', false, function(response) { 
    songlyrics[17] = response; 
  } 
  ); 
  //---------------------song 4--------------------
   url[18] =  "https://api.lyrics.ovh/v1/Maroon 5/Moves Like Jagger";  
  httpGet(url[18], 'json', false, function(response) { 
    songlyrics[18] = response; 
  } 
  ); 
  //---------------------song 5--------------------
  url[19] =  "https://api.lyrics.ovh/v1/Maroon 5/She Will Be Loved";  
  httpGet(url[19], 'json', false, function(response) { 
    songlyrics[19] = response; 
  } 
  ); 
  
  //-------------------------------------------------------
  //-------------------------------------------------------
  
  /*   ARTIST #5  Justin Timberlake   */
  
  arturl[4] = "https://itunes.apple.com/search?term=Justin+Timberlake&limit=5";
  httpGet(arturl[4], 'json', false, function(response) { 
    artist[4] = response; 
  } 
  ); 
  //---------------------song 1--------------------
  url[20] =  "https://api.lyrics.ovh/v1/Justin Timberlake/CAN'T STOP THE FEELING!";  
  httpGet(url[20], 'json', false, function(response) { 
    songlyrics[20] = response; 
  } 
  ); 
  //------------------song 2-----------------------
  url[21] =  "https://api.lyrics.ovh/v1/Justin Timberlake/Rock Your Body";  
  httpGet(url[21], 'json', false, function(response) { 
    songlyrics[21] = response; 
  } 
  ); 
  //---------------------song 3--------------------
  url[22] =  "https://api.lyrics.ovh/v1/Justin Timberlake/Mirrors";  
  httpGet(url[22], 'json', false, function(response) { 
    songlyrics[22] = response; 
  } 
  ); 
  //---------------------song 4--------------------
   url[23] =  "https://api.lyrics.ovh/v1/Justin Timberlake/Suit & Tie";  
  httpGet(url[23], 'json', false, function(response) { 
    songlyrics[23] = response; 
  } 
  ); 
  //---------------------song 5--------------------
  url[24] =  "https://api.lyrics.ovh/v1/Justin Timberlake/Cry Me a River";  
  httpGet(url[24], 'json', false, function(response) { 
    songlyrics[24] = response; 
  } 
  ); 
 
} 

function setup() 
{ 
  background(255);
  createCanvas(800, 1000); 
  mainpage();
  next();
  
} 

function draw() 
{ 
}

function back()
{
  fill(0); 
  rect(10,10,60,20); 
  fill(255);
  text("<-  Back",11,25);
}
function next()
{
  fill(0); 
  rect(500,10,60,20); 
  fill(255);
  text("Next  ->",501,25);
}

function mainpage()
{
  page_count = 0;
  text("Welcome to Song selector", 50,50);
}

function page1()
{
  back();
  page_count = 1;
  if (!artist) 
  { 
    return; 
  } 
  fill(0); 
  rect(10,40,60,30); //Artist 1
  fill(255);
  text("J Lo",11,51);
  
  fill(0);
  rect(100,40,60,30); //Artist 2
  fill(255);
  text("Ellie Goulding",101,51);
  
  fill(0);
  rect(200,40,60,30); //Artist 3
  fill(255);
  text("Pitbull",201,51);
  
  fill(0);
  rect(300,40,60,30); //Artist 4
  fill(255);
  text("Maroon 5",301,51);
  
  fill(0);
  rect(400,40,60,30); //Artist 5
  fill(255);
  text("Justin Timberlake",401,51);

}

function artist1()
{
  back();
  artist_num = 1;
  page_count = 2;
  if (!songlyrics) 
  { 
    return; 
  } 
  
  fill(0); 
  rect(10,40,60,30); //Song 1
  fill(255);
  text("On the Floor",11,51);
  
  fill(0);
  rect(100,40,60,30); //Song 2
  fill(255);
  text("Ain't Your Mama",101,51);
  
  fill(0);
  rect(200,40,60,30); //Song 3
  fill(255);
  text("I'm Real",201,51);
  
  fill(0);
  rect(300,40,60,30); //Song 4
  fill(255);
  text("Dance Again",301,51);
  
  fill(0);
  rect(400,40,60,30); //Song 5
  fill(255);
  text("Let's Get Loud",401,51);

}

function artist2()
{
  back();
  artist_num = 2;
  page_count = 2;
  if (!songlyrics) 
  { 
    return; 
  } 
  
  fill(0); 
  rect(10,40,60,30); //Song 1
  fill(255);
  text("Love Me Like You Do",11,51);
  
  fill(0);
  rect(100,40,60,30); //Song 2
  fill(255);
  text("Lights",101,51);
  
  fill(0);
  rect(200,40,60,30); //Song 3
  fill(255);
  text("Burn",201,51);
  
  fill(0);
  rect(300,40,60,30); //Song 4
  fill(255);
  text("Something in the Way You Move",301,51);
  
  fill(0);
  rect(400,40,60,30); //Song 5
  fill(255);
  text("On My Mind",401,51);

}

function artist3()
{
  back();
  artist_num = 3;
  page_count = 2;
  if (!songlyrics) 
  { 
    return; 
  } 
  
  fill(0); 
  rect(10,40,60,30); //Song 1
  fill(255);
  text("Timber",11,51);
  
  fill(0);
  rect(100,40,60,30); //Song 2
  fill(255);
  text("Give Me Everything",101,51);
  
  fill(0);
  rect(200,40,60,30); //Song 3
  fill(255);
  text("I Know You Want Me",201,51);
  
  fill(0);
  rect(300,40,60,30); //Song 4
  fill(255);
  text("Fireball",301,51);
  
  fill(0);
  rect(400,40,60,30); //Song 5
  fill(255);
  text("Time of Our Lives",401,51);

}

function artist4()
{
  back();
  artist_num = 4;
  page_count = 2;
  if (!songlyrics) 
  { 
    return; 
  } 
  
  fill(0); 
  rect(10,40,60,30); //Song 1
  fill(255);
  text("What Lovers Do",11,51);
  
  fill(0);
  rect(100,40,60,30); //Song 2
  fill(255);
  text("Wait",101,51);
  
  fill(0);
  rect(200,40,60,30); //Song 3
  fill(255);
  text("Sugar",201,51);
  
  fill(0);
  rect(300,40,60,30); //Song 4
  fill(255);
  text("Moves Like Jagger",301,51);
  
  fill(0);
  rect(400,40,60,30); //Song 5
  fill(255);
  text("She Will Be Loved",401,51);

}

function artist5()
{
  back();
  artist_num = 5;
  page_count = 2;
  if (!songlyrics) 
  { 
    return; 
  } 
  
  fill(0); 
  rect(10,40,60,30); //Song 1
  fill(255);
  text("CAN'T STOP THE FEELING!",11,51);
  
  fill(0);
  rect(100,40,60,30); //Song 2
  fill(255);
  text("Rock Your Body",101,51);
  
  fill(0);
  rect(200,40,60,30); //Song 3
  fill(255);
  text("Mirrors",201,51);
  
  fill(0);
  rect(300,40,60,30); //Song 4
  fill(255);
  text("Suit & Tie",301,51);
  
  fill(0);
  rect(400,40,60,30); //Song 5
  fill(255);
  text("Cry Me a River",401,51);

}

function mouseClicked() 
{
  fill(0);
  background(255);
  if(artist_num == 1)
  {
    if(mouseX >= 10 && mouseX <= 60 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(150,0,0);
      back();
      text(songlyrics[0].lyrics, 20,80);
    }
    if(mouseX >= 100 && mouseX <= 160 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(0,150,0);
      back();
      text(songlyrics[1].lyrics, 20,80);
    }
    if(mouseX >= 200 && mouseX <= 260 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(0,0,150);
      back();
      text(songlyrics[2].lyrics, 20,80);
    }
    if(mouseX >= 300 && mouseX <= 360 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(150,150,0);
      back();
      text(songlyrics[3].lyrics, 20,80);
    }
    if(mouseX >= 400 && mouseX <= 460 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(0,150,150);
      back();
      text(songlyrics[4].lyrics, 20,80);
    }
  }
  
  if(artist_num == 2)
  {
    if(mouseX >= 10 && mouseX <= 60 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(150,0,0);
      back();
      text(songlyrics[5].lyrics, 20,80);
    }
    if(mouseX >= 100 && mouseX <= 160 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(150,0,0);
      back();
      text(songlyrics[6].lyrics, 20,80);
    }
    if(mouseX >= 200 && mouseX <= 260 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(150,0,0);
      back();
      text(songlyrics[7].lyrics, 20,80);
    }
    if(mouseX >= 300 && mouseX <= 360 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(150,0,0);
      back();
      text(songlyrics[8].lyrics, 20,80);
    }
    if(mouseX >= 400 && mouseX <= 460 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(150,0,0);
      back();
      text(songlyrics[9].lyrics, 20,80);
    }
  }
  if(artist_num == 3)
  {
    if(mouseX >= 10 && mouseX <= 60 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(150,0,0);
      back();
      text(songlyrics[10].lyrics, 20,80);
    }
    if(mouseX >= 100 && mouseX <= 160 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(0,150,0);
      back();
      text(songlyrics[11].lyrics, 20,80);
    }
    if(mouseX >= 200 && mouseX <= 260 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(0,0,150);
      back();
      text(songlyrics[12].lyrics, 20,80);
    }
    if(mouseX >= 300 && mouseX <= 360 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(150,150,0);
      back();
      text(songlyrics[13].lyrics, 20,80);
    }
    if(mouseX >= 400 && mouseX <= 460 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(0,150,150);
      back();
      text(songlyrics[14].lyrics, 20,80);
    }
  }
  if(artist_num == 4)
  {
    if(mouseX >= 10 && mouseX <= 60 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(150,0,0);
      back();
      text(songlyrics[15].lyrics, 20,80);
    }
    if(mouseX >= 100 && mouseX <= 160 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(0,150,0);
      back();
      text(songlyrics[16].lyrics, 20,80);
    }
    if(mouseX >= 200 && mouseX <= 260 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(0,0,150);
      back();
      text(songlyrics[17].lyrics, 20,80);
    }
    if(mouseX >= 300 && mouseX <= 360 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(150,150,0);
      back();
      text(songlyrics[18].lyrics, 20,80);
    }
    if(mouseX >= 400 && mouseX <= 460 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(0,150,150);
      back();
      text(songlyrics[19].lyrics, 20,80);
    }
  }
  if(artist_num == 5)
  {
    if(mouseX >= 10 && mouseX <= 60 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(150,0,0);
      back();
      text(songlyrics[20].lyrics, 20,80);
    }
    if(mouseX >= 100 && mouseX <= 160 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(0,150,0);
      back();
      text(songlyrics[21].lyrics, 20,80);
    }
    if(mouseX >= 200 && mouseX <= 260 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(0,0,150);
      back();
      text(songlyrics[22].lyrics, 20,80);
    }
    if(mouseX >= 300 && mouseX <= 360 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(150,150,0);
      back();
      text(songlyrics[23].lyrics, 20,80);
    }
    if(mouseX >= 400 && mouseX <= 460 && mouseY >= 40 && mouseY <=70)
    {
      createCanvas(800,2500);
      background(0,150,150);
      back();
      text(songlyrics[24].lyrics, 20,80);
    }
  }
  
  if(page_count == 1)
  {
    if(mouseX >= 10 && mouseX <= 60 && mouseY >= 40 && mouseY <=70)
    {
      artist1();
    }
    if(mouseX >= 100 && mouseX <= 160 && mouseY >= 40 && mouseY <=70)
    {
     artist2();
    }
    if(mouseX >= 200 && mouseX <= 260 && mouseY >= 40 && mouseY <=70)
    {
      artist3();
    }
    if(mouseX >= 300 && mouseX <= 360 && mouseY >= 40 && mouseY <=70)
    {
      artist4();
    }
    if(mouseX >= 400 && mouseX <= 460 && mouseY >= 40 && mouseY <=70)
    {
      artist5();
    }
  }
  
  
  if(mouseX >= 500 && mouseX <= 560 && mouseY >= 10 && mouseY <=30)
  {
    if(page_count == 0)
    {
      page1();
    }
    if(page_count == 2)
    {
      back();
    }
  }
  if(mouseX >= 10 && mouseX <= 70 && mouseY >= 10 && mouseY <=30)
  {
    if(page_count == 0)
    {
      mainpage();
      next();
    }
    if(page_count == 1)
    {
      mainpage();
      back();
    }
    if(page_count == 2)
    {
      page1();
    }
  }
  
}