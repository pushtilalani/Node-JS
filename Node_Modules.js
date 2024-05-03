
// 1). - FileSystem Module

var fs = require("fs");
fs.writeFileSync("write.txt","This is file......");
fs.writeFileSync("write.txt","Hello.....");
data=fs.readFileSync("write.txt","UTF-8");
console.log(data);
fs.appendFileSync("write.txt","Node Js");
fs.renameSync("write.txt","read.txt");