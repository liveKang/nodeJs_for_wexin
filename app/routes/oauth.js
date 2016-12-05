var express = require('express');
var router = express.Router();

var oAuth = require('wechat-oauth');
var client = new OAuth('wx1627638f56ff80a5', 'd9df5debf4e37def18cc5e37326b604e');

router.get('/', function(req, res, next){
    var domain = "https://topfio-3001-rsqevg.box.myide.io";
    var auth_callback_url = domain + "/oauth/callback";
    var url = client.getAuthorizeURL(auth_callback_url, '', 'snsapi_userinfo');
    console.log(url);
    //重定向请求到微信服务器
    res.redirect(url);
});

router.get('/callback', function(req, res, next){
    var code = req.query.code;
    client.getAccessToken(code, function(err, result) {
        console.log(result);
        var accessToken = result.data.access_token;
        var openid = result.data.openid;

        client.getUser(openid, function(err, result) {
            var userInfo = result;
            // save or other opration
            res.json(userInfo);
        });
    });
});

router.get('/oauth', c, wx_config, wx_option, function(req, res){
    console.log('req.query');
    var qs = require('qs');
    var query_json = qs.stringify(req.query);
    console.log(query_json);

    var auth_url =req.wx.domain + req.wx.callback.url + "/" + query_json;
    console.log("auth_url = " + auth_url);
    var url = req.wx_client.getAuthorizeURL(auth_url, '', 'snsapi_userinfo');

    // 重定向请求到微信服务器
    res.redirect(url);
});

module.exports = router;
