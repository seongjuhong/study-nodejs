var io = require('socket.io').listen(3000);

io.sockets.on('connection', function (socket) {
  socket.emit('example message 1', { hello: 'world 1' });

  socket.on('example message 2', function (data) {
    console.log(data);
  });
});
