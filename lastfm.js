var start;
var next = 0; //used to go through pages
var myFont;
  
function preload() { 
  var url =  "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=dfb5557d5406681d436e93f2ec23c7c0&format=json"; //JSON for top artists on last.fm
  httpGet(url, 'json', false, function(response) { 
    start = response; 
  } 
  ); 
}

function setup() { 
  createCanvas(windowWidth, windowHeight); 
  fill(0); 
}

function draw() { 
  background(230,230,230); //sets background color
  if (!start) { //initiate program
    return; 
  } 
  

    //info for top artist
    
    fill(0,0,0,100);
    //text("Artists on Last.FM sorted by current popularity with audience size displayed", windowWidth/2,50);
    print(start.artists.artist[0+next].name);
    text(start.artists.artist[0+next].name, windowWidth/2, 100); //always prints text halfway across window
    print(start.artists.artist[0+next].listeners);
    text(start.artists.artist[0+next].listeners, windowWidth/2, 120);
    noStroke();
    fill(255,50,50,50);
    ellipse(windowWidth/2, 100, 0.00005*start.artists.artist[0+next].listeners, 0.00005*start.artists.artist[0+next].listeners); //ellipse with size coordinating with how many listeners each artist has
    
    //info for next artist
    fill(0,0,0,100);
    print(start.artists.artist[1+next].name);
    text(start.artists.artist[1+next].name, windowWidth/2, 200);
    print(start.artists.artist[1+next].listeners);
    text(start.artists.artist[1+next].listeners, windowWidth/2, 220);
    noStroke();
    fill(50,255,50,50);
    ellipse(windowWidth/2, 200, 0.00005*start.artists.artist[1+next].listeners, 0.00005*start.artists.artist[1+next].listeners);
    
    //info for next artist
    fill(0,0,0,100);
    print(start.artists.artist[2+next].name);
    text(start.artists.artist[2+next].name, windowWidth/2, 300);
    print(start.artists.artist[2+next].listeners);
    text(start.artists.artist[2+next].listeners, windowWidth/2, 320);
    noStroke();
    fill(50,50,255,50);
    ellipse(windowWidth/2, 300, 0.00005*start.artists.artist[2+next].listeners, 0.00005*start.artists.artist[2+next].listeners);
    
    //info for next artist
    fill(0,0,0,100);
    print(start.artists.artist[3+next].name);
    text(start.artists.artist[3+next].name, windowWidth/2, 400);
    print(start.artists.artist[3+next].listeners);
    text(start.artists.artist[3+next].listeners, windowWidth/2, 420);
    noStroke();
    fill(255,50,255,50);
    ellipse(windowWidth/2, 400, 0.00005*start.artists.artist[3+next].listeners, 0.00005*start.artists.artist[3+next].listeners);
    
    
    //info for next artist
    fill(0,0,0,100);
    print(start.artists.artist[4+next].name);
    text(start.artists.artist[4+next].name, windowWidth/2, 500);
    print(start.artists.artist[4+next].listeners);
    text(start.artists.artist[4+next].listeners, windowWidth/2, 520);
    noStroke();
    fill(255,200,0,50);
    ellipse(windowWidth/2, 500, 0.00005*start.artists.artist[4+next].listeners, 0.00005*start.artists.artist[4+next].listeners);
    
    //fill(0,0,0,100);
    //text("Use left and right keys to go through pages", windowWidth/2,600);

  


}

function keyPressed() //press right and left to advance "next" variable, essentially going through pages of top artists
{
  if (keyCode === RIGHT_ARROW && next < 40) {
    next += 5;
  }
  
    if (keyCode === LEFT_ARROW && next > 0) {
    next -= 5;
  } 
}
