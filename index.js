const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app)
const {Server} = require('socket.io');
const io = new Server(server);

io.on('connection', (socket) =>{
    socket.on('msg', (data) => {

        io.emit('showmsg', (data) => {
            console.log(data);
       });
    });
});


app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('index');
});


server.listen(4001, () =>{
    console.log('Servidor rodando');

});



