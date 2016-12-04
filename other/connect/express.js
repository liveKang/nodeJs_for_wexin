var express = require('express'),
    app = express();

app.get('/', function (req, res){
    res.send('hello world!');
})

app.get('/2', function (req, res){
    res.send('hello, 飘香!');
})

app.listen(3001);
