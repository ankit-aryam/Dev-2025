let fs = require("fs");
let helpFunc = require("./help");
let organizeFunc = require("./organize");
let treeFunc = require("./tree")

let input = process.argv.slice(2);
let command = input[0];
let path = input[1];

switch(command){
    case "organize" : organizeFunc.organize(path);
    break;
    case "tree" : treeFunc.tree(path);
    break;
    case "help" : helpFunc.help();
}