'use strict'

let sleep = (time, info) => {
    return new Promise(function (resolve) {
        setTimeout(function(){
            console.log('this is ' + info);
        }, time)
    })
}

let loser = sleep(3000,'loser')
let winner = sleep(4,'winner')

// main
Promise.all([winner, loser]).then(value => {
    console.log("所有都完成后会执行then，它们是并行的哦: " + value)
})
