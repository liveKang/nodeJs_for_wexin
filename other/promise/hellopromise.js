var fs = require('fs');

function readJson(file) {
    return new Promise(function(resolve, reject){
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
}

readJson('../../package.json').then(function(data){
    console.log('promise result = ' + data);
}).catch(function(err){
    console.log(err);
});


Promise.prototype.then = function(success, fail) {
    this.done(success);
    this.fail(fail);
    return this;
}
