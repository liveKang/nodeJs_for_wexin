var connect = require('connect'),
    http = require('http'),
    app = connect();

app.use('/', function(req, res){
    res.end('hello, 飘香!\n');
})

app.use('/2', function(req, res){
    res.end('hello, 飘香, here is 2!\n');
})

app.use(function(req, res){
    res.end('hello, rain!\n');
})

http.createServer(app).listen(3011);

// 总结
// use的中间件有顺序
// 中间件分类：全局和路由里的
// 中间件定义
