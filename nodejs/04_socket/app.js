var http = require('http');
var fs = require('fs');

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Chargement de socket.io
var io = require('socket.io').listen(server);

// Quand un client se connecte, on le note dans la console
// io.sockets.on('connection', function (socket) {
//     console.log('Un client est connecté !');
//     socket.emit('message', 'Vous êtes bien connecté !');
//     socket.on('message', function(message){
//       console.log('Le client répond : ' + message);
//     });
// });

io.sockets.on('connection', function (socket) {

  socket.on('petit_nouveau', function(pseudo) {
      socket.pseudo = pseudo;
      console.log(socket.pseudo + ' vient de se connecter');
  });

	socket.on('message', function (message) {
		console.log(socket.pseudo + ' me dit : ' + message);
	});

});


server.listen(8080);
