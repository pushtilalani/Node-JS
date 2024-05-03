
// 1).

setTimeout (() => {
    console.log("Hello".toUpperCase())
},5000)


// 2).

// 3).


const fs = require("fs");
fs.mkdir("folder1",(err) => {
    if(err) {
        console.log(`err`) ;
    }
    console.log("Folder Created Successfully");
})


fs.writeFile("folder1/abc.txt","This is PL .... ",(err) => {
    if(err) {
        console.log(`err`);
        return;
    }
    console.log("File Created Inside Folder");
})


fs.appendFile("folder1/abc.txt","Easy ",(err) => {
    if(err) {
        console.log(`err`);
        return;
    }
    console.log("Data Append");
}

)