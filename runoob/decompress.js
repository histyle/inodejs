  var fs = require("fs");
  var zlib = require('zlib');
  
// 解压 input.txt.gz 文件为 input.txt
//   fs.createReadStream('input.txt.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('input.txt'));
    

// fs.createReadStream('input.txt.gz').on('error', function(err){
//     console.log('no such file');
//     //console.log(err.stack);
// });

//   console.log("文件解压完成。");  


var readStream =  fs.createReadStream('input.tar.gza')
var writeStream = fs.createWriteStream('input.txt')

readStream.on('error', function(err){
    if(err){
        console.log('no such file');
        console.log(err.stack);
    };
    readStream.pipe(zlib.createGunzip())
              .pipe(writeStream)

})