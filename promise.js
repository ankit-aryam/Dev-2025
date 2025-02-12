let fs = require("fs");
console.log("Before");
let promise = fs.promises.readFile("abc.text");
console.log(" " + promise);
//accepted
promise.then(function(data){
    console.log(" "+data);
})

//rejected
promise.catch(function(err){
    console.log(" "+err);
})

console.log("After");
