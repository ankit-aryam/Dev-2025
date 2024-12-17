// console.log("Hello World");

// let a;

// // console.log(a);

// a=10;

// a= "hello";

// console.log(a);

// Variable Types :- Primitive type: number, string, boolean, null

// for(let i=1; i<=10;i++){
//     console.log(i);
// }

//isPrime

let a=28;
let flag=true

for(let i=2; i<a;i++){
  if(a%i==0){
    flag = false;
    break;
  }
}

if(flag==true){
console.log(a, "is prime");
} else{
console.log("Not Prime");
}