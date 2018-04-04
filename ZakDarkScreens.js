var textCursor, currentSentence, content, input = false, choice = 0, weather = {}, title = true;

// Huge custom object. Has a message and a set of options corresponding to
//  other messages within the dataset. Sometimes includes function calls, booo.
var sentences = {
  0:{msg:"It's {{TIME}}. You haven't been outside in almost two days.%\
  You glance at your weather report: {{WEAT}}ºF.%\
  Pretty much anything beats the {{ROOM}}.%\
  You might lose your mind if you don't get some fresh air.\
  Maybe it's time to get out for a bit.%> Leave your apartment? [y,n]: ",/*TODO: conditional description */ opt:{yes:1, no:2}},
  1:{msg:"You take a long look outside your window, gazing at "+randomView()+".%\
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
  > Take a shower? [y,n]: ",opt:{yes:6,no:7}},
  6:{msg:"It takes you a little longer than normal and you feel guilty about wasting water but hey, you're worth it.%\
  It's nice to be clean and presentable and ready for the public eye.%> Grab your stuff. [...]",opt:{cont:8}},
  7:{msg:"You are appalled at how little you give a shit about being a productive member of society.%\
  You justify your motion to forgo a shower by claiming that one less day you shower is several tens of gallons of water saved.%\
  > Finish patting yourself on the back and get ready. [...]",opt:{cont:8}},
  8:{msg:"You've got your keys and wallet{{COAT}}. Time for a bite and maybe a drink or two.%\
  You're at the front door, ready to leave your apartment.%\
  > Time to go [...]", opt:{cont:9}},
  9:{msg:"> You hesitate as your hand grips the doorknob. Turn it? [y,n]: ",opt:{yes:12,no:10}},
  10:{msg:"You continue to hesitate as your hand grips the doorknob, totally frozen.%\
  Somewhere in your mind, a tiny voice shrieks out, agonizing over the thought of being in public. You don't want this. But, you probably need it.%\
  There's no food in your fridge and you'd judge yourself harshly for another night of delivery. Go outside.%\
  > Turn the doorknob? [y,n]: ",opt:{yes:12,no:11}},
  11:{msg:"You continue to agonize about turning the fucking doorknob.%\
  > Turn it? [y,n]: ",opt:{yes:12,no:11}},
  12:{msg:"%...%...%...%...%Finally, you've made it outside, and the {{AIRQ}}.%\
  There's a good pub within a very short walking distance, and you figure the noise and commotion will be comforting.\
  They won't necessarily be talking to you, and you won't have to say much to them. A symbiosis wherein the sounds made by people\
  will serve as a kind of solace. Or, maybe, you'll have a panic attack and not know what to say to the bartender and everything will come crashing down—% % %\
  You just need to focus on getting there without interacting with pedestrians.%...%Shit, shit, shit. You forgot your phone and you're already outside. You can't go back now.%\
  Try not to rely on it so much. You have an additiction, clearly. Stop it. Breathe. Focus on getting where you want to go.%\
  > One foot at a time. [...]",opt:{cont:13}},
  13:{msg:"Yes, just like that. Breathe normally. Keep your heart rate down.% > Relax. [...]",opt:{cont:14}},
  14:{msg:"You move cautiously but confidently down the block, crossing an empty intersection, taking care to look both ways. Cars almost never come through here; it's just a good habit.%\
  You're moving quickly when a sudden feeling of terror snaps at you. You are unsafe. You are not alone.%> This is terrifying. [...]",opt:{cont:15}},
  15:{msg:"You can feel your pulse in your eyes and temples, and hear it in your ears. Deep breaths.%\
  You're just going to get some food and a drink. You can do this.\%> [Y]es I can/[N]o I can't: ",opt:{yes:16, no:17}},
  16:{msg:"That's it, easy does it. Just keep strolling. Enjoy yourself. There's nobody around to judge you. You're just about halfway there already.%\
  > Keep going [...] ",opt:{cont:18}},
  17:{msg:"Don't give up now, you're halfway there already. You don't want to go back. Breathe normally. Keep your heart rate down.% > Relax. [...]",opt:{cont:18}},
  18:{msg:"You've arrived at the pub. A few people are smoking outside and totally ignore you. This is ideal.%\
  Still, you can't bring yourself to open the door.%What if people judge me as soon as I walk in?%I don't look right for this.%What if I do something wrong?%\
  Your mind reels as you burn holes in your reflection in the tinted glass of the front door.%\
  > Open the door? [y,n]: ",opt:{yes:23,no:19}},
  19:{msg:"You hesistate and your mind spirals out of control. Please, just try to open the door. You're already here. What a waste of time this is. What a waste of life you are. Just do it already. You can't do this one simple task? What's wrong with you?%\
  > Prove the voice wrong and open the door? [y,n]: ",opt:{yes:23,no:20}},
  20:{msg:"Please, just try to open the door. I didn't mean what I said. You're not a waste. Look, you're already here. Just go in.%\
  > Listen into the voice and open the door? [y,n]: ",opt:{yes:23, no:21}},
  21:{msg:"Just one try, please? Please do this, please, please, please. You're better than this.%\
  > Are you better than this? [y,n]: ",opt:{yes:23,no:22}},
  22:{msg:"You turn from the door and walk away. One of the smokers looks at you and is clearly quite concerned about your well-being while their friends talk, but they slowly turn away, saying nothing.%Looks like you're getting food delivered tonight after all.%...%...%{PROCESS COMPLETED}"},
  23:{msg:"You open the door and walk in without any sort of hassle. There is a comforting, quiet mix of conversations betweens friends, coworkers and family.\
  People are pleased with one-another, pleased with their food, pleased with their drinks, pleased with themselves.%\
  You smile as the bartender welcomes you and beckons you to sit down. Time to eat.%...%...%{PROCESS COMPLETED}"}
};

// Window titles that correspond to the above sentences
var titles = {
  0:"rainRain.goAway()",
  1:"user.exec(exit)",
  2:"while(1)",
  3:"while(1)...",
  4:"...done",
  5:"you.assess(hygiene)",
  6:"you.clean(this)",
  7:"break;",
  8:"sleep(interval)",
  9:"sleep(interval)",
  10:"sleep(interval)",
  11:"sleep(interval)",
  12:"this.eject()",
  13:"this.relaxed = undefined",
  14:"try { this.relax(); }",
  15:"try { this.relax(); }",
  16:"try { this.relax(); }",
  17:"try { this.relax(); }",
  18:"echo 'you have arrived'",
  19:"CORE DUMP",
  20:"stack trace <...>",
  21:"if(this.better)",
  22:"abort()",
  23:"you.feeling = 'safe'"
}

// TODO: think about sound?

// P5.js setup
function setup() {
  createCanvas(window.innerWidth*2, window.innerHeight*2);

  content = document.getElementById("content");
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
  weather.conditions = data.weather[0].description;
  weather.temp = Math.round((((9/5)*(data.main.temp-273.15))+32));
  weather.sunrise = data.sys.sunrise;
  weather.sunset = data.sys.sunset;
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
      var newStr;
      var substrVar = line.msg.substring(i+2,i+6);
      switch(substrVar){
        case "TIME":
          newStr = new Date().toLocaleTimeString();
        break;
        case "ROOM":
          newStr = getRoom();
        break;
        case "WEAT":
          newStr = weather.conditions+" and "+weather.temp;
        break;
        case "COAT":
          newStr = weatherComfort(weather);
        break;
        case "AIRQ":
          newStr = airQuality(weather);
        break;
      }

      line.msg = line.msg.replace("{{"+substrVar+"}}",newStr);
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
    },30);
}

// Randomly generate a view across from your apartment.
function randomView(){
  switch(Math.floor(Math.random() * 3)){
    case 0: return "the dark bricks of the building across from you; they are stained from decades of precipitation. Old bricks get stained. Youthful energy does not deserve to be wasted"; break;
    case 1: return "the crumbling façades of the intricate stonework on the apartment building across from yours. The building's bones stand, yet the intricacies crumble. You don't want to crumble"; break;
    case 2: return "your reflection off of the window directly across from yours. Even from this great distance, you see darkness in your eyes. It would be a shame to let the the faint glimmer within them be quenched completely by negligence"; break;
  }
}

// Get what makes your room horrible.
function getRoom(){
  switch(Math.floor(Math.random() * 5)){
    case 0: return "stuffy, musty smell of the old clothes and unwashed linen that has gradually accumulated in the corners of your room and on your bed"; break;
    case 1: return "stuffy, musty smell of the old clothes and unwashed linen that has gradually accumulated in the corners of your room and on your bed"; break;
    case 2: return "blank white walls and deeply stained, ancient hardwood floors you walk on. You have memorized the floor's patterns, seen rainbow static coalesce into shapes on the walls. Thinking about this freaks you out"; break;
    case 3: return "obviously false but still compelling notion that your room is a quarantine and not you but your anxiety lives here, undisturbed, free to linger and fester when you refuse to leave for days on end"; break;
    case 4: return "constant reminders of bills and upkeep and self-care and every other responsibility that you shirk when you stay inside for multiple days on end. Getting outside helps remind you that everyone has these issues as well, and that your daily struggles are valid"; break;
  }
}

// How comfortable is it outside?
function weatherComfort(weather){
  if(weather.temp < 18)
    return " and you put on a your heaviest winter coat.% Hopefully you won't freeze to death. The cold is bone-chilling";
  else if(weather.temp < 28)
    return " and you put on a heavy winter coat.% The icy chill will do good to cool off your nerves. Something dumb but encouraging, just like that";
  else if(weather.temp <= 45)
    return " and you throw on a light winter coat.% You figure it'll be warm someday. Just, well, not today. Maybe not ever again. Maybe this is the new normal. You shake your head. This is not a good train of thought";
  else if(weather.temp > 45)
    return " and toss on a light jacket.% It's going to be crisp and refreshing out there, just like the apples in your fridge before they get weird and soft from neglect";
  else if(weather.temp > 56)
    return " and toss on a light sweater.% That's right, it's sweater weather baby! You crack a smile and then it quickly fades when you realize what a dumb thing that is to get excited about";
  else if(weather.temp > 68)
    return ", prepared to walk outside in just a long sleeve shirt, feeling like you'll roll up the cuffs if you get too warm.% This is optimal weather. You will thrive in this";
  else if(weather.temp > 75)
    return ", prepared to walk outside in just a tee shirt.% This is optimal weather. You will thrive in this";
  else if(weather.temp > 85)
    return ". It's pretty hot out there.% You're dressed as cool as possible but you'll probably sweat a bunch";
  else if(weather.temp > 95)
    return ". The heat is ungodly outside.% You hope you're prepared and well-hydrated not to just pass out on the spot";
}

// How does it feel to be outside?
function airQuality(weather){
  if(weather.temp < 18)
    return " brutal cold stings, but it'll be worth it once you warm up";
  else if(weather.temp < 28)
    return " freezing air somehow feels bright and invigorating.";
  else if(weather.temp <= 45)
    return " slight chill in the air isn't as terrible as you expected it to be";
  else if(weather.temp > 45)
    return " crisp, fresh air is a little chilly but still pretty okay.";
  else if(weather.temp > 56)
    return " crisp, fresh air is encouraging and refreshing";
  else if(weather.temp > 68)
    return " air is the perfect temperature. It is sublime.";
  else if(weather.temp > 75)
    return " warm air is comfortable and optimism-inspiring";
  else if(weather.temp > 85)
    return " hot air is a little brutal, but it's not as bad as being inside";
  else if(weather.temp > 95)
    return " sweltering heat is fucking horrible, but it will be worth it once you get where you're going";
}

// Listen to user input for specific options, like yes and no and continue.
document.addEventListener("keyup",function(e){
  if(title){
    title = false;
    input = false;
    fetchData("weather");
  }
  else if(input){
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
