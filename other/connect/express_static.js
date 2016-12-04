var express = require('express'),
    app = express(),
    path = require('path');
    // open = require('open');

app.use(express.static(path.join(__dirname, '../connect')));
// 该目录是相对于Node启动文件的位置，采用相对位置
// app.use('/static', express.static('connect'));

app.get('/', function(req, res){
    res.send('Hello world!');
})

app.listen(4002);

// open("http://127.0.0.1:4001");
