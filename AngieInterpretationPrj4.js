var x=0;
var a=0;
var t = 0;
var c;//button value setup
var radius = 250; //radius for weather graph
var x1 =1;
var x2 =1;
var word1;  //4 Strings to store the words that will be filled in
var word2;
var settingWordGen = false;


window.preload = function preload() {
    settingWordGen = true;
    //url = "https://www.wordsapi.com/words/:word/:detail" //to define the two words after selection and compare

    var url = "https://api.datamuse.com/words?rel_trg=material";//
    //Url to get replacement words
    httpGet(url, 'json', false, function(response) {
            word1 = response[Math.floor(random(0,response.length-1))].word;  //Store the
        }
    );
    /*url = "";  //Url to with word2
    httpGet(url, 'json', false, function(response) {
            word2 = response[0].word;  //Store the
        }
    );*/

}

window.setup = function setup() {
    createCanvas(900,900);
    c = color('#FF2908');
    //var x = a*10;//x value for plot for percentage
    for (var i = 0; i < 100; i++) {
        t = random(250, 800);//Temp in "y-dir", random value between '250' and '400'
    }
}


window.draw = function draw() {
   if (word1) {
        background(c);
        stroke(255);
        fill(255, 0, 0, 80);
        rect(0, height - 200, width / 2, 100);
        rect(width / 2, height - 200, width, 100);
        stroke(255);
        fill(brightness(c));
        for (var i = 0; i < 100; i++) {
            var angle = i * radians(360.0 / t);
            var x = cos(angle) * x1 * (radius + t);
            var y = sin(angle) * x2 * (radius + t);

            ellipse(width / 2, height / 2, x, y, 100);
        }
        noStroke();
        fill(brightness(c));
        rect(0, height - 100, width / 11, 100);
        rect(width / 11, height - 100, width / 11, 100);
        rect(2 * width / 11, height - 100, width / 11, 100);
        rect(3 * width / 11, height - 100, width / 11, 100);
        rect(4 * width / 11, height - 100, width / 11, 100);
        rect(5 * width / 11, height - 100, width / 11, 100);
        rect(6 * width / 11, height - 100, width / 11, 100);
        rect(7 * width / 11, height - 100, width / 11, 100);
        rect(8 * width / 11, height - 100, width / 11, 100);
        rect(9 * width / 11, height - 100, width / 11, 100);
        rect(10 * width / 11, height - 100, width / 11, 100);
        rect(width, height - 100, width / 11, 100);

        textSize(32);
        stroke(255);
        fill(color('#52318E'))
        textAlign(CENTER);
        text("Pick A Word", width / 8, height / 2, 3 * (width / 4), 3 * (height / 4));
        fill(c, 0, 0, 50);
        textAlign(CENTER);
        text(word1, 0, height - 150 - (32 / 2), width / 2, height - 100);
        textAlign(CENTER);
        text("word2", width / 4, height - 150 - (32 / 2), width, height - 100);
        textAlign(CENTER);
        text("0", .5 * (width / 22) - (32 / 2), height - 50 - (32 / 2), width / 11, height);
        textAlign(CENTER);
        text("1", 1.5 * width / 22 - (32 / 2), height - 50 - (32 / 2), 2 * width / 11, height);
        textAlign(CENTER);
        text("2", 2.5 * (width / 22) - (32 / 2), height - 50 - (32 / 2), 3 * width / 11, height);
        textAlign(CENTER);
        text("3", 3.5 * (width / 22) - (32 / 2), height - 50 - (32 / 2), 4 * width / 11, height);
        textAlign(CENTER);
        text("4", 4.5 * (width / 22) - (32 / 2), height - 50 - (32 / 2), 5 * width / 11, height);
        textAlign(CENTER);
        text("5", 5.5 * (width / 22) - (32 / 2), height - 50 - (32 / 2), 6 * width / 11, height);
        textAlign(CENTER);
        text("6", 6.5 * (width / 22) - (32 / 2), height - 50 - (32 / 2), 7 * width / 11, height);
        textAlign(CENTER);
        text("7", 7.5 * (width / 22) - (32 / 2), height - 50 - (32 / 2), 8 * width / 11, height);
        textAlign(CENTER);
        text("8", 8.5 * (width / 22) - (32 / 2), height - 50 - (32 / 2), 9 * width / 11, height);
        textAlign(CENTER);
        text("9", 9.5 * (width / 22) - (32 / 2), height - 50 - (32 / 2), 10 * width / 11, height);
        textAlign(CENTER);
        text("10", 10.5 * (width / 22) - (32 / 2), height - 50 - (32 / 2), 11 * width / 11, height);
    }
}





window.mousePressed = function mousePressed(){//when the mouse is clicked and...
    //Choose a value
    if (mouseX < width/11 && mouseY < (height) && mouseY > (height-100)){//1 is selected
        a=1;//a is equal to 1
        c = color('#FF2908');
    }

    if (mouseX < 2*width/11 && mouseX > width/11 && mouseY < (height) && mouseY > (height-100)){
        a=2;
        c = color('#FFA108');
    }
    if (mouseX < 3*width/11 && mouseX > 2*width/11 && mouseY < (height) && mouseY > (height-100)){
        a=3;
        c = color('#FFD608');
    }
    if (mouseX < 4*width/11 && mouseX > 3*width/11 && mouseY < (height) && mouseY > (height-100)){
        a=4;
        c = color('#EEFF08');
    }
    if (mouseX < 5*width/11 && mouseX > 4*width/11 && mouseY < (height) && mouseY > (height-100)){
        a=5;
        c = color('#53E527');
    }
    if (mouseX < 6*width/11 && mouseX > 5*width/11 && mouseY < (height) && mouseY > (height-100)){
        a=6;
        c = color('#1DCB44');
    }
    if (mouseX < 7*width/11 && mouseX > 6*width/11 && mouseY < (height) && mouseY > (height-100)){
        a=7;
        c = color('#1DC7CB');
    }
    if (mouseX < 8*width/11 && mouseX > 7*width/11 && mouseY < (height) && mouseY > (height-100)){
        a=8;
        c = color('#1D87CB');
    }
    if (mouseX < 9*width/11 && mouseX > 8*width/11 && mouseY < (height) && mouseY > (height-100)){
        a=9;
        c = color('#0F42A5');
    }
    if (mouseX < 10*width/11 && mouseX > 9*width/11 && mouseY < (height) && mouseY > (height-100)){
        a=10;
        c = color('#52318E');
    }
    if (mouseX < width && mouseX > 10*width/11 && mouseY < (height) && mouseY > (height-100)){
        a=11;
        c = color('#67318E');
    }
    if (mouseX < width/2 && mouseY < (height-100) && mouseY > (height-200)){
        x1=9/5;
        location.reload();
        //word2 = new response[0].word;
    }
    if (mouseX > width/2 && mouseY < (height-100) && mouseY > (height-200)){
        x2=5/9;
        location.reload();
       // word2 = new response[0].word;
    }
    print(mouseX, mouseY,a,t,c);
}
