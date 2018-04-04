var apiMap = "https://api.mapbox.com/styles/v1/mapbox/";
var apiMapKey = "/1024x512?access_token=pk.eyJ1IjoiZHJhY29tb2ZvIiwiYSI6ImNqZmhhZWN4YTJrYzcyem1pcDFvdWI3cWoifQ.DIt0FtioIzmZ5P4wq8hm7g";
var style1 = 'outdoors-v10/static/';
var style2 = 'satellite-v9/static/';
var style3 = 'dark-v9/static/';
var style4 = 'streets-v10/static/';
var lon = 0;
var lat = 0;
var zoom = 1;
var bearing = 0; //rotates map on center up to 360 degrees
var pitch = 0; //tilts map at angle up to 60 degrees 
var mapimg;
var apiMeteor = 'https://data.nasa.gov/resource/y77d-th95.json';
var meteors;
//var iss = 'http://api.open-notify.org/iss-now.json';
var spaceStation;
var d;

function preload(){
  mapimg = loadImage(apiMap + style1 + lon +","+ lat +"," + zoom + ","+
                    bearing + "," + pitch + apiMapKey);
  
  //mapimg = loadImage('https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg');
  httpGet(apiMeteor, 'json', false, function(response){
   meteors = response;});
   //spaceStation = loadJSON(iss);
   var dob = select('#dob');
   d =loadJSON(apiMeteor + '?year=' + dob.value() + 'T00:00:00.000');
}



function mapX(lon){
  lon = radians(lon);
  var a = (256/PI) * pow(2,zoom) * (lon + PI);
  return a;
}

function mapY(lat){
  lat = radians(lat);
  //console.log(lat);
  var a = (256/PI) * pow(2,zoom);
  var b = tan(PI/4 + lat/2);
  var c = PI - log(b);
  //console.log(a + ' ' + c);
  return a * c;
}
var i = 0;
function m(){
  translate(width/2, height/2);
  imageMode(CENTER);
  //image(mapimg, 0, 0);
  var cx = mapX(0);
  var cy = mapY(0);
  //49.2827° N, 123.1207° W
  
  //console.log(x + " " + y + " " + mapY(lat));
  //console.log(meteors);
  if(i < 1000){
    lat = meteors[i].reclat;
    lon = meteors[i].reclong;
    var mass = meteors[i].mass;
    
    var x = mapX(lon) - cx;
    var y = mapY(lat) - cy;
    if(mass < 454){          //green 1lb
        fill(0,255,0);}
    else if(mass < 2268){    //blue 5lb
        fill(0,0,255);}
    else if(mass < 4536){    //yellow 10
        fill(255,255,0);}
    else if(mass< 45360){    //red 100
        fill(255,0,0);}
    else{
      fill(255);
    }
    ellipse(x,y,5,5);
  }
  i++;
}

function c(){
  var lat = spaceStation.iss_position.latitude; 
  var lon = spaceStation.iss_position.longitude; 
  translate(width/2, height/2);
  imageMode(CENTER);
  var cx = mapX(0);
  var cy = mapY(0);
  var x = mapX(lon) - cx;
  var y = mapY(lat) - cy;
  //console.log(x + " " + y);
  ellipse(x,y,10,10);
}
//https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh/data
function getDOB() {
  var rando = Math.round(random(10));
 console.log(d);
 var name = d[rando].name;
 //console.log(name);
 var mass = d[rando].mass;
 //console.log(mass);
 var lat = d[rando].reclat;
 var lon = d[rando].reclong;
 var p2 = select('#p2');
 var p3 = select('#p3');
 p2.html('Name: ');
 p3.html('Mass(grams): ');
 clear();
 //console.log(d);
 translate(width/2, height/2);
 imageMode(CENTER);
 image(mapimg, 0, 0);
 var cx = mapX(0);
  var cy = mapY(0);
  var x = mapX(lon) - cx;
  var y = mapY(lat) - cy;
  ellipse(x,y,10,10);
 var p2 = select('#p2');
 p2.html(name, true);
 var p3 = select('#p3');
 p3.html(mass, true);
}
function getHoro(){
 //loadJSON(apiMeteor + '?year=' + dob.value() + 'T00:00:00.000');
 getDOB;
 //setTimeout(getDOB, 3000);
}

function setup() {
  createCanvas(1024,512);
  translate(width/2, height/2);
  imageMode(CENTER);
  image(mapimg, 0, 0);
  setInterval(m,10);
  //setInterval(c,5000);
  var button = select('#submit');
  dob = select('#dob');
  
  button.mousePressed(getHoro);
}

function draw() {
  
}