//express_demo2.js


var express = require('express');
var app = express();

//主页输出 hello world
app.get('/', function(req, res){
   res.send('hello world');
});


//POST 请求
app.post('/',function(req, res){
    console.log("主页post请求");
    res.send('hello post');
});
//del_user 页面响应
app.get('/del_user',function(req, res){
    console.log('DELETE 请求');
    res.send('delete user');
});

// list_user get 请求
app.get('/list_user',function(req,res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res){
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
});

var server = app.listen(8080, function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
  });