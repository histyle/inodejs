const fluentlog = require('fluent-logger');
function SocketConnect () {    
    fluentlog.configure('debug', {        
        //host: '112.74.136.206',   
        host: '127.0.0.1',
        port: 24224,        
        timeout: 3.0,        
        reconnectInterval: 600000 // 10 minutes    
});    
        
    let mm = {"MMMMM":"cccc"};    
    console.log(mm);    
    fluentlog.emit('debug', mm, ()=>{        
        process.exit();    
    });}


new SocketConnect();
