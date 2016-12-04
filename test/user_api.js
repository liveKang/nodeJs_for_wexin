var request = require('supertest'),
    assert = require('chai').assert,
    expect = require('chai').expect;

require('chai').should();

var app = require('../app');

require('../db');

describe('POST /users/register', function(){
    it('response register width json', function(done){
        request(app)
            .post('./users/register')
            .field('name', 'stuq')
            .field('password', '123456')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
})
