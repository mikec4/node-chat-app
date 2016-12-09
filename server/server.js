const path=require('path');const express=require('express');const socketIO=require('socket.io');const http=require('http');var app=express();const port=process.env.PORT || 3000;const publicPath=path.join(__dirname,'../public');var server=http.createServer(app);var io=socketIO(server);app.use(express.static(publicPath));io.on('connection',(socket)=> {    console.log('new user connected');    socket.on('disconnect', () => {        console.log('disconnected user');    });    socket.emit('')    socket.on('createEmail',function (email) {        console.log('email is from clara',email);    })    socket.on('createMessage',function (message) {        console.log('message',message)    });    socket.emit('newMessage',{        from:'clara',        text:'hello kido mike'    });});    server.listen(port, function () {        console.log(`Listening to port ${port}`);    });