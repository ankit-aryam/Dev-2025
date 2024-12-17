// filesystem
// files -> create, read, update, delete
let fs = require("fs")

//read
let buffer = fs.readFileSync("abc.js");
 console.log("data " +buffer);

//create
// fs.openSync("abc.text", "w")

//update
// fs.appendFileSync("abc.text", " Whot news???")

//folder
// fs.writeFileSync("newDirectory/")