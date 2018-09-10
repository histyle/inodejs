
//function
function say(word){
    console.log(word)
}


function execute(someFuntion,value){
    someFuntion(value)
}


execute(say,"hello world")


// 匿名函数
execute(function(word){ console.log(word) }, "Hello");


var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);

var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);