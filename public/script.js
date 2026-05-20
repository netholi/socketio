// console.log(io);

//io() connects to the socket.io server at the url
const socket = io('http://192.168.18.180:3000')


//just like on our server, our socket has an:
//  on method and
//  an emit method

socket.on('welcome',data =>{
  console.log(data);
  socket.emit('ack','Thank you');
  
})
