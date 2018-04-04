/*
* Strings for site configuration
 */
var site; 
var name;
var wait;
var dest;
var minutes=0;
var img;
var img2;

/*
*Arrays filled with songs from my commute. Songs in minx are songs whose duration is (uually) less than or equal to x.
 */
var min1=["Frank Ocean-Start", "Los Campesinos!-Clunk-Rewind-Clunk-Play-Clunk-Again", "Arcade Fire-Infinite Content^", "Crash and the Boys- I'm So Sad, So Very, Very Sad", "Crash and the Boys-We Hate You Please Die"];
var min2=["Operation Ivy-Knowledge", "Thermals-Born to Kill", "Misfits-Where Eagles Dare", "Operation Ivy-Sound System", "Screaming Females-Bell"];
var min3=["Coffinberry-Eva", "Vaccines-Handsome", "Stiff Little Fingers-Suspect Device", "Arcade Fire-Empty Room", "Cloud Nothings-Stay Useless"];
var min4=["Death Cab for Cutie-The Ghosts of Beverly Drive", "Foster the People-Miss You", "Los Campesinos!-International Tweexcore Underground", "St. Motel-Puzzle Pieces", "The Strokes-New York City Cops"];
var min5=["Arcade Fire-Neighborhood #3 (Power Out)", "Arcade Fire-Everything Now", "The Microphones-I Can't Believe You Actually Died", "Arcade Fire-Creature Comfort", "Regina Spektor-Carbon Monoxide"];
var min6=["Arcade Fire-Wake Up", "New Order-Age of Consent", "Los Campesinos!-You! Me! Dancing!", "The Velvet Underground & Nico- All Tomorrow's Parties", "Muse-Knights of Cydonia"];
var min7=["The Joy Formidable-Whirring", "Arcade Fire-In the Backseat", "Sonic Youth-Teenage Riot", "75"];
/*
* Following are later used to find playlist combination that fit within duration 
 */
var limit=0;
var now=0; 
var hit=Math.floor(Math.random() * 6);


function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);

  /*Button and form to insert your stop code*/
  input = createInput();
  input.position(20, 85);

  button = createButton('submit');
  button.position(input.x + input.width, 85);
  button.mousePressed(greet); //when the button is pressed, go to greet();

  /*Some text headers*/
  greeting = createElement('h2', 'Insert Stop Code:');
  greeting.position(20, 5);

  greeting2 = createElement('h3', '/Run/');
  greeting2.position(20, 35);

  textAlign(CENTER);
  textSize(50);

  /*load background images*/
  img = loadImage("assets/blini1.jpg");  // Load the image
  img2 = loadImage("assets/blini2.png");  // Load the image
}


/* This function helps create the playlist by taking in the estimated wait time and picking a song duration that fits within the range. 
 * Ex. 15 minute wait = five 3-minute songs (5*3=15) or two 4-minute songs, two 3-minute songs and one 1-minute song (4*2 + 3*2 + 1 =15)
 * In order to generate an entire playlist that (reasonably) fits within the estimated wait time, the function uses recusrion to randomly 
 * pick song durations that are then subtracted from the estimated wait time (breaking the time down). When the wait time is finally less than zero,
 * all the functions finally return
 */

function breaker(time, i) {
  //text stuff
  textSize(24);
  text("Musical Breakdown:", 50, (height/6), width, height);
  textSize(16);


  var song=0; //song duration for this instance of breaker();

  /* Call breaker() again if wait time is still greater than zero */
  if (time>0) {

    /*
     *if statement is used to help prevent creating a playlist that runs longer than the estimated wait time (i.e a 6-minute song shouldn't be generated when you
     * you only have a two minute wait time left)
     */
    if (time > 6) { //time doesn't matter since wait is long
      song=rand(1, 6);
    } else {
      song=rand(1, time); //time does matter since wait is short
    }
    decode(song, i); //function used to print out the song name
    time=time-song; //update current wait time (after break down)
    i=i+1; //recursion counter
    breaker(time, i); //recurse
  } else {
    return;
  }

  return;
}

/* Function to actually print songs out. A song duration and recursion counter is passed through. The duration is sent through
 * the appropriate case so that a song from the proper array is generated. Recusrison counter is used to help offset spacing
 *
 * case description:
 * Generate a random number between 0 and 5 ( six song elements in the array)
 * Print out song in that element
 */
function decode(song, i) {
  switch(song) {

  case 1:
    text(min1[Math.floor(Math.random() * 6)], 50, (i*60)+(height/4), width, height);
    break;
  case 2:
    text(min2[Math.floor(Math.random() * 6)], 50, (i*60)+(height/4), width, height);
    break;
  case 3:
    text(min3[Math.floor(Math.random() * 6)], 50, (i*60)+(height/4), width, height);
    break;
  case 4:
    text(min4[Math.floor(Math.random() * 6)], 50, (i*60)+(height/4), width, height);
    break;
  case 5:
    text(min5[Math.floor(Math.random() * 6)], 50, (i*60)+(height/4), width, height);
    break;
  case 6:
    text(min6[Math.floor(Math.random() * 6)], 50, (i*60)+(height/4), width, height);
    break;
  case 7:
    text(min7[Math.floor(Math.random() * 3)], 50, (i*60)+(height/4), width, height);
    break;
  }
}



/*
* Function to make httml request and decipher all the information. Insert contains user input
 * More info in comments within
 */

function getInfo(insert) {  
  var j;
  var myId=insert.split(':'); // breaks user spring into string array with parent sation code (element 0) and direction (element 1)
  /* Unlike bus tracker, train tracker is accessible using a proxy */
  var url =  'https://cors-anywhere.herokuapp.com/http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=c89ddbbf0e864eb7a4758213e7456a69&max=4&mapid=' + myId[0] + '&outputType=JSON';
  httpGet(url, 'json', false, function(response) {
    site = response;
  }
  );  

  if (!site) {
    return;
  }


  /*Need user input to be in format 4####:1 or 4###:2 for directional reasons. 
   * When calling the API for prediction times, you only get to pick the station and
   * the trains coming into the station. In order to get wait time for the next train 
   * going in direction x, you need to check the destination codes (or child code) of every train.
   *
   * I found that the destination codes are just even and and odd varaitions of a similar number (i.e 1111 to go North,
   * 1112 to go south [not real example]). So by reading the right side of user input, you can dictate whether you're looking
   * for an even or odd code (and then pinpoint the direction). The for loop inside the if statement iterates through a list of 
   * the next four trains arriving to the station and checking their destinations.
   *
   */
  if (myId[1]==2) {
    for (j=0; j<4; j++) {
      if (((parseInt(site.ctatt.eta[j].stpId, 10))%2)==0) break;
    }
  } else {
    for (j=0; j<4; j++) {
      if (((parseInt(site.ctatt.eta[j].stpId, 10))%2)==1) break;
    }
  }


  name=site.ctatt.eta[j].staNm; //get station name
  dest=site.ctatt.eta[j].stpDe; //get train direction

  //text("my text:  "+ name +" !", 10, height/2);

  /* The CTA API doesn't give an actual wait time. You have to get the current time and the time
   * CTA HQ predicts the train will arive and then subtract the current time from the predicted time.
   */
  var cT=site.ctatt.eta[j].prdt; //recieved time string
  var aT=site.ctatt.eta[j].arrT; //recieved time string
  //Time strings give the date and time, so you have to pull the minutes
  var ctF=cT.split(':'); //pull minutes from string 
  var atF=aT.split(':'); //pull minutes from string

  wait=parseInt(atF[1], 10)-parseInt(ctF[1], 10); //calcuation
}

//text("Online check:  "+ site.ctatt.eta[0].staNm+" !", 10, height/2);


/*
* Function that jump starts the enitre program after user input. Based off the simple
 * button example of the p5.js webiste
 */
function greet() {
  background(255);
  var i=0;

  var stID = input.value(); //take user input
  getInfo(stID); //get all the needed information from the CTA
  limit=wait; //wait time will get changed during recusrion, limit won't
  breaker(wait, i); //begin to make playlist
  //start printing other stuff out
  greeting.html('Waiting on '+name+ ' platform!');
  greeting2.html('Destination: '+dest+ '!');

  input.value(''); //reset
  now=0; //reset

  //print more text
  textSize(28);
  text("Minutes until takeoff:", 65+3*width/4, height/9);
  textSize(64);
  text(wait, 65+3*width/4, 60+height/9);
}

function draw() {
  //print background images
  //image(img, 2, height/4, img.width/2, img.height/2);
   image(img, 3*width/4, 2*height/3 + 10,img.width/2, img.height/2);

  image(img2, 2, height/8);

}

/*A website said to make your own random function since JS does it weird*/
function rand(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
