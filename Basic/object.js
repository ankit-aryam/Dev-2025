// object is a group of key value pair
//key : value -> property
//key : function -> method

let cap = {
    name: "Ankit",
    lastname: "Arya",
    address: {
        Hno: 98,
        street: "ASG",
        City: "Ambala",
    },
    age: 24,
    subs: ["netflix","prime","amazon","mx"],
    sayHi: function(){
        console.log("sayHi");
    }

}

// console.log(cap.address.City);
// cap.sayHi()
// console.log(cap.sayHi());

//SET/UPDATE

// console.log(cap);
// cap.age=25;
// cap.placesVisit = ["Jammu","UP","HP"];
// console.log(cap);

//delete
// delete cap.subs;
// console.log(cap);

// for(let key in cap){
//     console.log(key, "-->", cap[key]);
// }

let propKey = "age";
console.log(cap[propKey]);
console.log(cap["age"])
  