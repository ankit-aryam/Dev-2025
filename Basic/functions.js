// Non- Primitive => array, objects, functions

function sayHi(param){
    // console.log("Hello");
    // console.log("this is parameter", param);

    // return "return from sayHi";

    let value= Math.random() > 0.5 ? "greater than 1" : "less than 1";
   return value;
}

// sayHi();
// sayHi(20);
// sayHi("hello Js");

let callFunction = sayHi();

console.log(callFunction);