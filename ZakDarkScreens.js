var textCursor, currentSentence, content, input = false, choice = 0, weather, temp;

// Huge custom object. Has a message and a set of options corresponding to
//  other messages within the dataset. Sometimes includes function calls, booo.
var sentences = {
  0:{msg:"It's "+(new Date().toLocaleTimeString())+". You haven't been outside in almost two days.%\
  You glance at your weather report: {{WEAT}}ºF.%\
  The suddenly long hours of daylight are somewhat startling, and the gray skies remind you of smooth ambient occlusion: soft shadows, soft specular highlights.\
  Maybe it's time to get out a bit.%> Leave your apartment? [y,n]: ",/*TODO: conditional description */ opt:{yes:1, no:2}},
  1:{msg:"You take a long look outside your window, gazing at the "+randomView()+".%\
  You rise up from the supple synthetic leather of your comfortable chair and stretch, feeling the bubbles of fluid in the soft cartilage of your body snap and pop. You've been sitting for too long.%\
  > Time to go. [...]",opt:{yes:null, no:null, cont:5}},
  2:{msg:"You decide that the phosphorescent glow of your screen is the only company you'll need, relegating yourself to the comfort of your expensive chair.%\
  This is a mistake.%...%...%...%...%\
  A half hour passes. Your eyes burn and yet, somehow, continue to crave the alien allure of your computer.%\
  Your digital friends, fabricated and physical.%\
  Fresh new content to devour.%\
  A convenient excuse for avoiding good ol' fashioned face-to-face contact; even thinking about it fills you with dread.%\
  You stop for a second. This is probably one of the least healthy ways to feed your anxiety, letting its tendrils yank you around like a puppet.%\
  You're no puppet. You've just spent too much time on the computer.%\
  > Enough is enough, right? [y,n]: ",opt:{yes:1,no:3}},
  3:{msg:"%...%...%...%...%Your head is throbbing. Time to go to bed.%\
  What a day you've had.%\
  No contact.%\
  No calls.%\
  No interpersonal communication.%\
  You friends logged off hours ago, and yet, here you are.%\
  You sarcastically congratulate yourself for burning a second day without \
  leaving the confines of your room. Only the blackness of dreamless sleep awaits.%\
  > exit [...]",opt:{yes:null,no:null,cont:4}},
  4:{msg:"Process completed."},
  5:{msg:"You put on pants, sniff under your arms to see what you're working with. \
  You consider reapplying a little extra deodorant.%\
  It's gotten pretty bad but you're not really trying to impress anyone.%...%\
  > Okay, maybe really you should shower. [...]",opt:{yes:null,no:null,cont:6}},
  6:{msg:"It takes you a little longer than normal and you feel guilty about wasting water but hey, you're worth it.%\
  It's nice to be clean and presentable and ready for the public eye.%\
  You've got your keys, wallet and phone. Time for a bite and maybe a drink or two.%\
  > You're at the front door, ready to leave your apartment. [...]: ", opt:{cont:7}},
  7:{msg:"> You hesitate as your hand grips the doorknob. Turn it? [y,n]: ",opt:{yes:10,no:8}},
  8:{msg:"You continue to hesitate as your hand grips the doorknob, totally frozen.%\
  Somewhere in your mind, a tiny voice shrieks out, agonizing over the thought of being in public. You don't want this. But you probably need it.%\
  There's no food in your fridge and you'd judge yourself harshly for takeout. Go outside.%\
  > Turn it? [y,n]: ",opt:{yes:10,no:9}},
  9:{msg:"You continue to agonize about turning the fucking doorknob.%\
  > Turn it? [y,n]: ",opt:{yes:10,no:9}},                             // TODO: make dependent on weather
  10:{msg:"%...%...%...%...%Finally, you've made it outside, and the crisp fresh air is encouraging and refreshing.",opt:{}}
};

// Window titles that correspond to the above sentences
var titles = {
  0:"rainRain.goAway()",
  1:"user.exec(exit)",
  2:"while(1)",
  3:"while(1)...",
  4:"...done",
  5:"you.assess(hygiene)",
  6:"you.clean(this)"
}

// TODO: think about sound?

// P5.js setup
function setup() {
  createCanvas(window.innerWidth*2, window.innerHeight*2);

  content = document.getElementById("content");
  // fethData has a callback function that starts writing new sentences.
  fetchData("weather");
  // Function call below handled by weather function to avoid race condition
  //newSentence(sentences[0], titles[0]);
}

// Draw scanlines. Induce headaches.
// Lines use the modulo of the frame count to really make reading a chore, just
//  like vintage terminals. You can practically feel the static from the
//  electron gun exciting the phosphors in the screen.
function draw() {
  clear();
    for(var i=0; i<height; i+=2){
      stroke(0);
      line(0,i+frameCount%3,width,i+frameCount%3);
    }
}

// Randomly generate a view across from your apartment.
function randomView(){
  switch(Math.floor(Math.random() * 3)){
    case 0: return "dark bricks of the building across from your window; they are stained from decades of precipitation. Old bricks get stained. Youthful energy does not deserve to be wasted"; break;
    case 1: return "crumbling facades of the intricate stonework on the apartment building across from yours. The building's bones stand, yet the intricacies crumble. You don't want to crumble"; break;
    case 2: return "your reflection off of the window directly across from yours. Even from this great distance, you see darkness in your eyes. It would be a shame to let the the faint glimmer within them be quenched completely by negligence"; break;
  }
}

// Fetch dynamic content! Get JSON data for weather, drinks, food, etc.
function fetchData(type){
  var headers, request, url;
  switch(type){
    case "drink":
      headers = new Headers({
        "Content-Type": "Application/json",
        "Authorization": "Token MDo3ZmNkMDZlOC0yYmJkLTExZTgtYjVjMS03N2EwMDJmZDEyODE6M1VBc29tQXdxWFRLMTNZRmxOZ0pESmdJSWFtWVRKcW5iQVhY"
      });
      url = "https://lcboapi.com/stores";
    break;
    case "weather":
      headers = new Headers({
        "Content-Type": "Application/json",
      });
      url = "http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=1ca8c073db1d1bd1c28d5a42d899d594";
      loadJSON(url, setWeather);
    break;
  }
}

// Set the weather using global vars.
// Callback function for loadJSON that gets weather.
function setWeather(data){
  weather = data.weather[0].description;
  temp = Math.round((((9/5)*(data.main.temp-273.15))+32));
  newSentence(sentences[0], titles[0]);
}

// Write a new sentence! The brains of the phone operation.
// Set the title, create a new paragraph, let 'er rip.
function newSentence(line, title){
  document.title = title;
  let sentence = document.createElement("p");
  currentSentence = sentence;
  sentence.setAttribute("class","word"); // CSS styling for glowy words
  content.appendChild(sentence);
  var i = 0;
  var add = setInterval(function(){
    // Newline delimiter
    if(line.msg[i]=='%'){
      let para = document.createElement("p");
      para.setAttribute("class","word");
      content.appendChild(para);
      sentence = para;
      ++i;
      currentSentence = sentence;
    }

    // Handlebars-style variable substitution. Dirty, should use regex but
    //  time is kind of at a premium for this thing. Next iteration for sure.
    if(line.msg[i]=='{' && line.msg[i+1]=='{'){
      switch(line.msg.substring(i+2,i+6)){
        case "TIME":
          alert(new Date());
        break;
        case "WEAT":
          // TODO: loop though letter by letter
          sentence.append(weather+" and "+temp);
        break;
      }

      // Important, skips handlebar variable
      i+=8;
    }

    // Console-style input delimiter. Switches to input mode.
    if(line.msg[i]=='>')
      input = true;

      sentence.append(line.msg[i]);
      sentence.scrollIntoView(false);
      ++i;
      if(i >= line.msg.length){
          clearInterval(add);
          currentSentence = sentence;
      }
    },20);
}

// Listen to user input for specific options, like yes and no and continue.
document.addEventListener("keyup",function(e){
  if(input){
    // Continue flag is not null. Advance with any input.
    if(sentences[choice].opt.cont != null){
      input = false;
      choice = sentences[choice].opt.cont;
    }
    // Case-insensitive "no"
    else if(e.key == 'n' || e.key == 'N'){
      input = false;
      choice = sentences[choice].opt.no;
      currentSentence.append(e.key);

    }
    // Case-insensitive "yes"
    else if(e.key == 'y' || e.key == 'Y'){
      input = false;
      choice = sentences[choice].opt.yes;
      currentSentence.append(e.key);
    }
    // Input flag is switch off, keep printing.
    if(!input)
      newSentence(sentences[choice], titles[choice]);
  }
});
