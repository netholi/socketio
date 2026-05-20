const express = require('express')
const app = express()  //make an express app
//serve the files in public statically
app.use(express.static('public'))
const expressServer =app.listen(3000,'0.0.0.0');


const socketio = require('socket.io')
//io is our socket.io server
const io = socketio(expressServer,{


});


// on is a regular javascript/node event listener
// emit is the other BIG method
io.on('connect',socket =>{
  console.log(socket.id,"has joined our server");
  // 1st arg or emit is the event name
  socket.emit('welcome','Welcome to our server')
  socket.on('ack',data=>{
    console.log(data);
    
  })
})


