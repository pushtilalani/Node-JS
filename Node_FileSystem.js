const fs = require("fs");
fs.mkdir("data",(err) => {
    if(err) {
        console.log(`err`) ;
    }
    console.log("Folder Created Successfully");
})

fs.writeFile("data/xyz.txt","This is JS .... ",(err) => {
    if(err) {
        console.log(`err`);
        return;
    }
    console.log("File Created Inside Folder");
})

fs.appendFile("data/xyz.txt","Programming Language",(err) => {
    if(err) {
        console.log(`err`);
        return;
    }
    console.log("Data Append");
}

)
