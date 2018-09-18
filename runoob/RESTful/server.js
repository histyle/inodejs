 var express = require('express');
 var app = express();

 var fs = require('fs');

//get user list 
 app.get('/getUserList', function(req, res){

    console.log('get user list');
    fs.readFile( __dirname + '\\' + 'users.json','utf8', function(err,data){
        console.log(data)
        //res.send(data);
        res.end(data);
    });

  });

// add user
var user = {
    "user4" : {
        "name" :'add',
        "password":"password4",
        "profession":"teacher",
        'id':3
    }
}

app.get('/addUser', function (req,res){

    fs.readFile( __dirname + '\\' + 'users.json','utf8', function(err,data){

        data = JSON.parse( data );
        data['user4'] = user['user4'];

        res.end( JSON.stringify(data));
    });    
});

  var server = app.listen(8080, function () {

    var host = server.address().address
    var port = server.address().port
  
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
  
  });