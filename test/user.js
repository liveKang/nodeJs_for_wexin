var request = require('sueprtest'),
    assert = require('chai').assert,
    expect = require('chai').expect;

require('chai').should;
require('../db');

var User = require('../models/user')

//基本测试代码结构
describe('UserModel', function(){
    before(function(){
        //runs before all tests in this block
    })
    after(function(){
        //runs after all tests in this block
    })
    beforeEach(function(){
        //runs before each test in this block
    })
    afterEach(function(){
        //runs after each test in this block
    })

    describe('#save()', function(){
        it('should return stuq when user save', function(done){
            User.create({"name": "stuq", "password": "password"}, function(err, user){
                if (err) {
                    expect(err).to.be.not.null;
                    done();
                }

                expect(user.name).to.be.a('string');
                expect(user.name).to.equal('stuq');
                done();
            });
        })
    })
})
