function* doSomeing() {
    console.log(1);
    yield;
    console.log(2);
}

var gen1 = doSomeing();

gen1.next();
gen1.next();
