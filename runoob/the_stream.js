

// //从流中读取数据
// var fs = require('fs');
// var data = '';

// //创建可读流
// var readerStream = fs.createReadStream('input.txt');

// readerStream.setEncoding('UTF8');

// // 处理流事件 --> data, end, and error
// readerStream.on('data',function(chunk){
//     console.log('on data events')
//     data += chunk;
// });

// readerStream.on('end', function(){
//     console.log('on end events')
//     console.log(data);
// });

// readerStream.on('error', function(err){
//     console.log(err.stack);
// });

// console.log("程序执行完毕");

// console.log("写入流");
// // 写入流
// var fs = require('fs');
// var data = '菜鸟教程官网地址：www.runoob.com';

// // 创建一个可以写入的流，写入到文件 output.txt 中
// var writeSteam = fs.createWriteStream('output.txt');
// // 使用 utf8 编码写入数据
// writeSteam.write(data, 'UTF8');
// // 标记文件末尾
// writeSteam.end();
// // 处理流事件 --> data, end, and error
// writeSteam.on('finish', function(){
//     console.log('writeSteam over');
// });

// writeSteam.on('end', function(err){
//     console.log('writeSteam end');
//     console.log(err.stack);
// })

// console.log("程序执行完毕");

//管道流
console.log("管道流");
var fs = require('fs');

//创建 可读流
var readStream = fs.createReadStream('input.txt');

//创建 可写流
var writerStream  = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readStream.pipe(writerStream);

console.log("程序执行完毕");