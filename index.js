var fileNames = [];
var density;

function preload() {
  var url = "https://api.github.com/repos/creativecodeuic/creativecodeuic.github.io/contents/";
  httpGet(url, 'json', false, function (response) {
    for (index in response) {
      if (response[index].name.includes("html")&&!response[index].name.includes("index")) {
        fileNames = append(fileNames, response[index].name);
        print(response[index].name);
      }
    }
  }
  );
}

function setup() {
  createCanvas(0, 0);
}

function draw() {
  if (fileNames.length==0)
    return;
  for (var i = 0; i < fileNames.length; i++) {
    var name = fileNames[i].substring(0, fileNames[i].length-5);
    createElement('p','<a href='+name+'.html>'+name+'</a>');
  }
  noLoop();
}
