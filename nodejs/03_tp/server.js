var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.get('/todolist', function(req, res) {
    res.render('todolist.ejs');
})

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});

app.listen(8080);
