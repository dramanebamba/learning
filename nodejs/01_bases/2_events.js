/*Ecouter des évènements*/
// var http = require('http');
//
// var server = http.createServer(function(req, res) {
//   res.writeHead(200);
//   res.end('Salut tout le monde !');
// });
//
// server.on('connection', function() { // On écoute l'évènement close
//     console.log('Le serveur est connecté !');
// })
//
// server.listen(8080); // Démarre le serveur

var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('gameover', function(p1,p2){ //on récupère les deux paramètres émis
    console.log(p1);
    console.log(p2);
});
age=18;
jeu.emit('gameover', 'Vous avez perdu !',age);//on peut ajouter autant de paramètre qu'on veux
