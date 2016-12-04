var mongoose = require('mongoose'),
    Schema = mongose.Schema,
    MongooseDao = require('MongooseDao');

var userSchema = new Schema(
    {
        "name": "String",
        "password": "String"
    }
);

var user = mongoose.model('User', userSchema);
var userDao = new MongooseDao(user);

module.exports = userDao;
