/** * Created by Clara on 12/9/2016. */var socket=io();socket.on('connect',function(){    console.log('connected to server');});socket.on('disconnect',function(){    console.log('disconnected server');});socket.on('newEmail',function (email) {   console.log('new email',email) ;});socket.emit('createMessage',{    name:'Mike',    age:20});socket.on('newMessage',function (message) {    console.log('mesage',message);});