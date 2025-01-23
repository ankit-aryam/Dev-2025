let fs = require("fs");
let buffer = fs.readFileSync("./example.json");
console.log(buffer);
let data = JSON.parse(buffer);
console.log("data: ", data);

data.push({
    "name":"thor",
    "last name":"mishra"
})

let stringData = JSON.stringify(data);
fs.writeFileSync("example.json", stringData);