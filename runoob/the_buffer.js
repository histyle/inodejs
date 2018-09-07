// const buf = Buffer.from('runoob', 'ascii');
// // 输出 72756e6f6f62
// console.log(buf.toString('hex'));

// // 输出 cnVub29i
// console.log(buf.toString('base64'));




//写入缓冲区
// var buffer = Buffer.alloc(256);
// var len = buffer.write("www.runoob.com")
// console.log("写入字节数 : "+  len);

//从缓冲区读取数据
// buffer = Buffer.alloc(26);
// for (var i = 0 ; i < 26 ; i++) {
//     buffer[i] = i + 97;
// }

// console.log( buffer.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
// console.log( buffer.toString('ascii',0,5));   // 输出: abcde
// console.log( buffer.toString('utf8',0,5));    // 输出: abcde
// console.log( buffer.toString(undefined,0,29)); // 使用 'utf8' 编码, 并输出: abcde


//将 Buffer 转换为 JSON 对象
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);


//拷贝缓冲区
var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('RUNOOB');

//将 buf2 插入到 buf1 指定位置上
buf2.copy(buf1, 3);

console.log(buf1.toString());



//缓冲区合并
var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());

//缓冲区裁剪
var buffer1 = Buffer.from('runoob');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());


//缓冲区长度
var buffer = Buffer.from('www.runoob.com');
//  缓冲区长度
console.log("buffer length: " + buffer.length);



