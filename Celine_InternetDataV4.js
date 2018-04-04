/* Celine Macaraniag
Project ART 150
4/02/2018
This website allows user to see adverse effects of certain commonly used over-the-counter drugs. The data was obtained from the FDA open API database. */


var button;
var data, data2, data3, data4, data5, data_brands, data_ineff; // declare variables
//PFont myFont;

//load FDA reports of 5 most common drugs and drugs that have caused the most deaths
function preload() {
  var url_1 = "https://api.fda.gov/drug/event.json?api_key=kr7tVci9ZRbVEynob4EjMql4Aij7jdvmOeD75frs&search=patient.drug.medicinalproduct:%22acetaminophen%22&count=patient.reaction.reactionmeddrapt.exact";
  var url_2 = "https://api.fda.gov/drug/event.json?api_key=kr7tVci9ZRbVEynob4EjMql4Aij7jdvmOeD75frs&search=patient.drug.medicinalproduct:%22advil%22&count=patient.reaction.reactionmeddrapt.exact";
  var url_3 = "https://api.fda.gov/drug/event.json?api_key=kr7tVci9ZRbVEynob4EjMql4Aij7jdvmOeD75frs&search=patient.drug.medicinalproduct:%22benadryl%22&count=patient.reaction.reactionmeddrapt.exact";
  var url_4 = "https://api.fda.gov/drug/event.json?api_key=kr7tVci9ZRbVEynob4EjMql4Aij7jdvmOeD75frs&search=patient.drug.medicinalproduct:%22amoxicillin%22&count=patient.reaction.reactionmeddrapt.exact";
  var url_5 = "https://api.fda.gov/drug/event.json?api_key=kr7tVci9ZRbVEynob4EjMql4Aij7jdvmOeD75frs&search=patient.drug.medicinalproduct:%22ativan%22&count=patient.reaction.reactionmeddrapt.exact";
  var url_brands = "https://api.fda.gov/drug/event.json?search=receivedate:[20040101+TO+20180402]+AND+patient.reaction.reactionmeddrapt:%22death%22&count=patient.drug.openfda.brand_name.exact";
  var url_ineff = "https://api.fda.gov/drug/event.json?search=receivedate:[20040101+TO+20180402]+AND+patient.reaction.reactionmeddrapt:%22drug+ineffective%22&count=patient.drug.openfda.brand_name.exact";
  //var url = "https://api.fda.gov/drug/event.json?api_key=kr7tVci9ZRbVEynob4EjMql4Aij7jdvmOeD75frs&count=patient.reaction.reactionmeddrapt.exact";
  httpGet(url_1, 'json', false, function(response) {
    data = response;
  }
  );
  httpGet(url_2, 'json', false, function(response) {
    data2 = response;
  }
  );
  httpGet(url_3, 'json', false, function(response) {
    data3 = response;
  }
  );
  httpGet(url_4, 'json', false, function(response) {
    data4 = response;
  }
  );
  httpGet(url_5, 'json', false, function(response) {
    data5 = response;
  }
  );
  httpGet(url_brands, 'json', false, function(response) {
    data_brands = response;
  }
  );
  httpGet(url_ineff, 'json', false, function(response) {
    data_ineff = response;
  }
  );
}


function setup() {
  createCanvas(2000, 1300);
  img = loadImage("Spills.jpg");              // setup background image
  presImg = loadImage("Prescription.jpg");
  image(img, 0, 0, img.width, img.height);
  //button = createButton('click me');
  //button.position(19, 19);
  //button.mousePressed(changeBG);
}

function draw() {
  image(img, 0, 0, img.width, img.height);
  textSize(30);
  text('Pick a pill', width/4, height/8);
  ellipse(395, 235, 10, 10);               // each ellipse marks the location of where the drug facts will be displayed 
  ellipse(875, 415, 10, 10);
  ellipse(683, 339.75, 10, 10);
  ellipse(1134, 558.75, 10, 10);
  ellipse(1118.75, 136, 10, 10);
  ellipse(406, 647, 10, 10);
  ellipse(756.5, 520, 10, 10);
  //fill(255, 0, 255);

  showFacts(395, 235, 'TYLENOL', data);    // when user hovers over these locations the drug facts will show
  showFacts(875, 415, 'ADVIL', data2);
  showFacts(683, 339.75, 'BENADRYL', data3);
  showFacts(1134, 558.75, 'AMOXICILIN (Antibiotic)', data4);
  showFacts(1118.75, 136, 'ATIVAN', data5);
  showFacts(406, 647, 'DRUGS THAT LED TO DEATH', data_brands);
  showFacts(756.5, 520, 'DRUGS THAT WERE INEFFECTIVE', data_ineff);
}

function showFacts(xLoc, yLoc, nameDrug, dataURL) {
  var pill = dist(mouseX, mouseY, xLoc, yLoc);
  if (pill < 50) {
    noStroke();
    fill(255);
    image(presImg, xLoc, yLoc, presImg.width, presImg.height);
    //rect(xLoc, yLoc, 620, 500);
    if (dataURL) {
      for (var i = 0; i < 15; i++) {  // takes in and displays the first 15 adverse effects from the report stored in dataURL
        fill(0);
        textSize(15);
        var terms = dataURL.results[i].term;
        text(terms, (xLoc+50), (yLoc+330)+(i*20));
      }
      for (var i = 0; i < 15; i++) {
        var counts = dataURL.results[i].count; // takes in and displays the counts for the first 15 adverse effects from the report stored in dataURL
        fill(255, 0, 120);
        rect((xLoc+350), (yLoc+320)+(i*20), (counts/50), 10);
      }
    }

    fill(255, 0, 0);
    textSize(25);
    text(nameDrug, xLoc+105, yLoc+100);
  }
}


function mousePressed() {
  print(mouseX, mouseY);     //for debugging purposes only
}


//function changeBG() {
//  var val = random(255);
//  background(val);
//}