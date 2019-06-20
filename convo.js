var app =require('express')();
var  http = require('http').Server(app);
var io=require('socket.io')(http);

app.length('/', (req,res) =>{
    res.send("<h1>Chat application</h1>")
})

io.on('connection',(socket)=>console.log('A user connected'));

http.listen(3002, ()=> {console.log('On port 3002');})



