
var events = require('events');
var eventEmitter = new events.EventEmitter();


// listener1
var listener1 = function listener1(){
    console.log('listener1 exec')
};

// listener2
var listener2 = function listener2(){
    console.log('listener2 exec')
};

// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.on('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件 
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");


// 触发连接事件
eventEmitter.emit('connection');


var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");