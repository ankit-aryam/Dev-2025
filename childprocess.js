let cp = require("child_process");
// console.log("Open Calculator");
// cp.execSync("calc");
// console.log("opened");

// console.log("Open Weblink");
// cp.execSync("start chrome google.com");
let output = cp.execSync("node abc.js");
console.log("Output 🔥 " +output);