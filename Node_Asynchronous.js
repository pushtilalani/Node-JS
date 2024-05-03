var fs = require("fs")
fs.readFile("read.txt","UTF-8",(err,data)=> {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
});
console.log("After Finished");




   