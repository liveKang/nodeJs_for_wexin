var User = require('../models/user');

router.post('/register', function(req, res, next){
    var name = req.body.name,
        password = req.body.password;

    User.create({
        "name": name,
        "password": password
    }, function(err, user){
        if (err) {
            res.json('register failed with err');
        }

        res.json('register success');
    });
});

router.post('/login', function(req, res, next){
    var name = req.body.name,
        password = req.body.password;

    User.findOne({
        "name": name,
        "password": password
    }, function(err, user){
        if (err) {
            res.json('login failed with err');
        }

        res.json('login success');
    });
});
