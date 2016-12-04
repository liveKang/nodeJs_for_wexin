var connect = require('connect'),
    http = require('http');

var app = connect();

app.use('/2', function(req, res){
    res.end('hello,i am 2!\n');
})

app.use(function(req, res){
    res.end('Hello from Connect!\n');
})

http.createServer(app).listen(8888);
