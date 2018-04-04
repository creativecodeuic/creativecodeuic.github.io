var headers = {
    "Content-type": "application/json",
    "app_id": "67fd9c22",
    "app_key": "fecc92e111d86ca779c9cceef83679b0"
};

//var imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSmxo4zWEwY4cfhqzPND_9Ssxol2fOzccJ5vb3cBnOsxKkatM4dw";
var imageUrl = "https://i.pinimg.com/736x/74/78/f2/7478f287dd50dac9ffc426dd5da18ddb--face-reference-face-beauty.jpg"
var payload = {
    "image": imageUrl
};
var faceurl = "https://api.kairos.com/v2/analytics/ {id}";
// make request 

//var app = new Clarifai.App({apiKey: 'cd2473ef32b84d438b1482ff8cbf3826'});   
try {
    var app = new Clarifai.App({
        apiKey: 'cd2473ef32b84d438b1482ff8cbf3826'
    });
    console.log("done");
} catch (err) {
    alert("Need a valid API Key!");
    throw "Invalid API Key";
}

var chat;
var firstbot = [];
var secondbot = [];
var sentence;

//Chat Bot api CC8i8FbzMyKcn4HbIgNB8FlYfAQ


var img;
var weather;
var boturl = "https://www.cleverbot.com/getreply?key=CC8i8FbzMyKcn4HbIgNB8FlYfAQ&input="; //"https://www.cleverbot.com/getreply?key=CC8i8FbzMyKcn4HbIgNB8FlYfAQ";
var cs;
var cs2;

var firstcall = false; //Check if first call, to start chat bot 
var voices;
function preload() {
  
  voices = window.speechSynthesis.getVoices()
    var picUrl = "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
    var wordurl = "https://owlbot.info/api/v2/dictionary/live?format=json";

    //var url = "http://api.wordnik.com:80/v4/word.json/glasses/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"

    var sentenceurl = "https://api.wordnik.com:80/v4/word.json/";
    var sentenceurl2 = "/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
    

    var specUrl = 'http://petstore.swagger.io/v2/swagger.json';
    //SwaggerClient.http.withCredentials = true; // this activates CORS, if necessary


}



function notFound(data){
  //console.log(typeof data);
 // displayData("Nothing Found");
}

function displayData(data) {
  
  console.log("Displaying data");
  
  var synth = window.speechSynthesis;
 
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[10]; // Note: some voices don't support altering params
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 1; // 0.1 to 10
msg.pitch = 2; //0 to 2
msg.lang = 'en-US';


var msg2 = new SpeechSynthesisUtterance();
//var voices = window.speechSynthesis.getVoices();
msg2.voice = voices[10]; // Note: some voices don't support altering params
msg2.voiceURI = 'native';
msg2.volume = 1; // 0 to 1
msg2.rate = 1; // 0.1 to 10
msg2.pitch = 2; //0 to 2
msg2.lang = 'en-US';

var msg3 = new SpeechSynthesisUtterance();
//var voices = window.speechSynthesis.getVoices();
msg3.voice = voices[10]; // Note: some voices don't support altering params
msg3.voiceURI = 'native';
msg3.volume = 1; // 0 to 1
msg3.rate = 1; // 0.1 to 10
msg3.pitch = 2; //0 to 2
msg3.lang = 'en-US';


var msg4 = new SpeechSynthesisUtterance();
//var voices = window.speechSynthesis.getVoices();
msg4.voice = voices[10]; // Note: some voices don't support altering params
msg4.voiceURI = 'native';
msg4.volume = 1; // 0 to 1
msg4.rate = 1; // 0.1 to 10
msg4.pitch = 2; //0 to 2
msg4.lang = 'en-US';
  
  
  
   // console.log("displaying");
    console.log(data);
    var firstSentence = data.text;
    if(data != null){
      if(!firstSentence.includes(":"))
        sentence = data.text.replace(":", "");
      else
        sentence = data.text;
    }

   
    
    text("Sentence used to start conversation:\n", 800,70);
    var c = color('black');
    fill(c);
    textStyle(BOLD);
    console.log("The type");
    console.log(typeof sentence);
    for(var i =0; i < sentence.length%120; i++){
      var y = 90 + (20 * i);
      var substring = sentence.substr(120 * i, 120*(i+1));
      console.log(substring);
      console.log(sentence.length %120);
    text(substring, 800, y);  
      

     
    }
    if (!firstcall) {
              
                
                httpGet(boturl + sentence, 'jsonp', false, function(response) {
                    console.log(response);
                    cs = "&" + response.cs + "&callback=ProcessReply" ;
                    firstcall = true;
                    //firstbot.push(response.output);
                    var utterThis = new SpeechSynthesisUtterance(response.output);
                    utterThis.voice = voices[4];
                    synth.speak(utterThis);
                    //msg.text = response.output;
                    //speechSynthesis.speak(msg);
                    var c = color('blue');
                    fill(c);
                    textStyle(BOLD);
                    text(response.output, 50, 200);
                    
                    httpGet(boturl + response.output, 'jsonp', false, function(response) {
                      console.log(response);
                      cs2 = "&" + response.cs + "&callback=ProcessReply" ;
                      
                      //secondbot.push(response.output);
                      msg2.text = response.output;
                      msg2.voice = voices[7];
                      speechSynthesis.speak(msg2);
                      var c = color('red');
                      fill(c);
                      textStyle(BOLD);
                      text(response.output, 400, 300);
                      
                       httpGet(boturl + response.output+ cs , 'jsonp', false, function(response) {
                        console.log(response);
                        //firstbot.push(response.output);
                        //msg3.text = response.output;
                        //msg3.voice = voices[4];
                        //speechSynthesis.speak(msg3);
                          var utterThis = new SpeechSynthesisUtterance(response.output);
                    synth.speak(utterThis);
                                              var c = color('blue');
                    fill(c);
                    textStyle(BOLD);
                        text(response.output, 50, 400);
                        
                         httpGet(boturl + response.output + cs2 , 'jsonp', false, function(response) {
                         console.log(response);
                         secondbot.push(response.output);
                         msg4.text = response.output;
                         msg4.voice = voices[7];
                         speechSynthesis.speak(msg4);
                                             var c = color('red');
                    fill(c);
                    textStyle(BOLD);
                         text(response.output, 400, 500);
                         console.log("Completed");
                         
                         });
                       });
                     });

                });

            } else {
            
                httpGet(boturl + concept[ranNum].name + cs , 'jsonp', false, function(response) {
                    console.log(response);
                });
            }  
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    fill(0);
    noLoop();
}

function getAttributes(url) {



    var things = [];
    var size;
    app.models.predict(Clarifai.GENERAL_MODEL, url).then(
        function(response) {

            console.log(response);
            var concept = [];

            concept = response.outputs[0].data.concepts;
            size = concept.length;
            //for(var i=0; i< concept.length; i++){
            //  console.log(concept[i].name);
            //  things.push(concept[i].name);
            //}

            var ranNum = Math.floor(Math.random() * concept.length);
            sentence = concept[ranNum].name;
             text("word chosen from picture:",800, 20);
             text(sentence,800, 40);
            loadJSON(" https://api.wordnik.com:80/v4/word.json/" + concept[ranNum].name + "/topExample?useCanonical=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5", displayData, notFound);

            console.log(concept[ranNum].name);
           
        },

        function(err) {
            console.log(err);
             text("Looks like I can't use that image url :/ , try another!" , 50, 100);
        }
    );




}

function callsentence() {
    //loadJSON(sentenceurl + word+ sentenceurl2, displayData); 
}

function getChat() {
    clear();
    console.log("getting chat");
    var newurl = $("#inputUrl").val();
    getAttributes(newurl);
    firstcall  = false;
    // httpGet(boturl, 'jsonp', false, function(response) {
    //   console.log(response);
    //  }
    //); 
}

function repeat(){
  clear();
   var synth = window.speechSynthesis;
   console.log(secondbot[secondbot.length-1]);
   httpGet(boturl + secondbot[secondbot.length -1], 'jsonp', false, function(response) {
                    console.log(response);
                    cs = "&" + response.cs + "&callback=ProcessReply" ;
                    firstcall = true;
                    firstbot.push(response.output);
                    var utterThis = new SpeechSynthesisUtterance(response.output);
                    synth.speak(utterThis);
                    var c = color('blue');
                    fill(c);
                    textStyle(BOLD);
                    text(response.output, 50, 100);
                    
                    httpGet(boturl + response.output, 'jsonp', false, function(response) {
                      console.log(response);
                      cs2 = "&" + response.cs + "&callback=ProcessReply" ;
                      
                      secondbot.push(response.output);
                      var c = color('red');
                      fill(c);
                      textStyle(BOLD);
                      text(response.output, 400, 200);
                       var utterThis = new SpeechSynthesisUtterance(response.output);
                       synth.speak(utterThis);
                      
                       httpGet(boturl + response.output+ cs , 'jsonp', false, function(response) {
                        console.log(response);
                        firstbot.push(response.output);
                        var utterThis = new SpeechSynthesisUtterance(response.output);
                        synth.speak(utterThis);
                        var c = color('blue');
                      fill(c);
                      textStyle(BOLD);
                        text(response.output, 50, 300);
                        
                         httpGet(boturl + response.output + cs2 , 'jsonp', false, function(response) {
                         console.log(response);
                         secondbot.push(response.output);
                         var utterThis = new SpeechSynthesisUtterance(response.output);
                         synth.speak(utterThis);
                         var c = color('red');
                      fill(c);
                      textStyle(BOLD);
                         text(response.output, 400, 400);
                         console.log("Completed");
                         for(var i =0; i<2; i++){
                          console.log(firstbot[i]); 
                         }
                         });
                       });
                     });

                });
  
}

function draw() {

}