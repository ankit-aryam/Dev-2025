let fs = require("fs");
let path = require("path");

let input = process.argv.slice(2);
let command = input[0];

console.log(input);

for(let i=1;i<input.length;i++){
    let filePath = input[i];
switch(command){
    case "wcat": readFile(filePath);
    break;
}
}

function readFile(filePath){
    let fileContent = fs.readFileSync(filePath);
    console.log(fileContent+" ");
}