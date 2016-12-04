function* doSomeing() {
    console.log(1);
    yield;
    console.log(2);
}

var gen1 = doSomeing();

gen1.next();
gen1.next();

/*
迭代协议
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols
 */

/*
var someArray = [1,5,7];
var someArrayEntries = someArray.entries();

someArrayEntries.toString();

someArrayEntries === someArrayEntries[Symbol.iterator]()    //true
 */

/*
var subString = "hi";
typeof subString[Symbol.iterator];  //function

var iterator = subString[Symbol.iterator]();

iterator + '';

iterator.next();

iterator.next();

iterator.next();

[...subString];
 */


/*
var someString = new String("hi");

someString[Symbol.iterator] = function() {
  return {
    next: function(){
      console.log(this._first)
      if(this._first){
        this._first = false;
        return { value:"bye", done:false };
      } else {
        return { done:true };
      }
    },
    _first:true
  };
};

[...someString];

someString + ""; 
 */
