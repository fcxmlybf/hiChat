// 引入编写好的api
//const api = require('./api');
// 引入文件模块
//const fs = require('fs');
// 引入处理路径的模块
//const path = require('path');
// 引入处理post数据的模块
//const bodyParser = require('body-parser')
// 引入Express
// 引入编写好的api
//const api = require('./api');
const express = require('express');
// 引入处理post数据的模块
const bodyParser = require('body-parser');
// 引入文件模块
//const fs = require('fs');


const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(api);
let userArr = [];
let onlineCount = 0;

io.sockets.on('connection',function(socket){
    // socket.on('chat message',function(msg){
    //     socket.emit('chat message',msg);
    // });
    //socket.send('hello world!');
    console.log('a user connected');
    socket.on('login',function(data){
        console.log(data);
        //userArr.push(data);
        socket.name = data.username;
        onlineCount++;
        io.sockets.emit('airing',data.username);
        io.sockets.emit('userNum',onlineCount);
    });
    socket.on('message',function(obj){
        console.log(obj);
        io.sockets.emit('message',obj);
    });

    socket.on('disconnect', function () {
        console.log('User disconnected');
        //socket.emit('disconnect');
        io.sockets.emit('disconnect',socket.name);
        onlineCount--;
        io.sockets.emit('userNum',onlineCount);
    });

});

// io.sockets.on('disconnect', function(socket) {
//     socket.emit('disconnect');
//     console.log("与服务其断开");
// });

http.listen(9080,function(){
  console.log("server start");
});
