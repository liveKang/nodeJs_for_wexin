// hello('../../package.json').then(function(data){
//   console.log('way 1:\n')
//   return new Promise(function(resolve, reject){
//     console.log('promise result = ' + data)
//     resolve(data)
//   });
// }).then(function(data){
//   return new Promise(function(resolve, reject){
//     resolve('1')
//   });
// }).then(function(data){
//   console.log(data)
//
//   return new Promise(function(resolve, reject){
//     reject(new Error('reject with custom err'))
//   });
// }).catch(function(err) {
//   console.log(err)
// })
//
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

var step1 = function(data){
    console.log('way 3:\n');
    return new Promise(function(resolve, reject){
        console.log('promise result = ' + data);
        resolve(data);
    });
}

var step2 = function(data){
    return new Promise(function(resolve, reject){
        resolve(data);
    });
}

var step3 = function(data){
    console.log(data);
    return new Promise(function(resolve, reject){
        // console.log("hahahahha");
        // resolve("44444")
        reject(new Error('reject with cutom err'))
    });
}

readJson('../../package.json').then(step1).then(step2).then(step3).catch(function(err) {
    console.log(err);
})
