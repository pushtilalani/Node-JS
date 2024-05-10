
// // 1).

// setTimeout (() => {
//     console.log("Hello".toUpperCase())
// },5000)


// // 2).


// // 3).


// const fs = require("fs");
// fs.mkdir("folder1",(err) => {
//     if(err) {
//         console.log(`err`) ;
//     }
//     console.log("Folder Created Successfully");
// })


// fs.writeFile("folder1/abc.txt","This is PL .... ",(err) => {
//     if(err) {
//         console.log(`err`);
//         return;
//     }
//     console.log("File Created Inside Folder");
// })


// fs.appendFile("folder1/abc.txt","Easy ",(err) => {
//     if(err) {
//         console.log(`err`);
//         return;
//     }
//     console.log("Data Append");
// }
// )



// var fs=require("fs")
// fs.writeFileSync("write.txt","50 -1 99 25 60")
// var data =fs.readFileSync("write.txt","UTF-8")
// d=data.split(" ")
// d1=d.sort()
// console.log(d1)                                     // [ '-1', '25', '50', '60', '99' ]



// var fs=require("fs")
// fs.writeFileSync("write.txt","skvhvfqfjwlvns mcqdkphln lbnbf")
// var data =fs.readFileSync("write.txt","UTF-8")
// d=data.split(" ")
// for(i=0;i<data.length;i++) {
//     data[i]=parseInt(data[i])
// }
// d1=d.sort()
// console.log(d1)                        





// var fs=require("fs")
// fs.writeFileSync("source.txt","Hello World!")
// data=fs.readFileSync("source.txt","UTF-8")
// fs.writeFileSync("destination.txt",data)





// var fs = require("fs")
// var os = require("os")
// var free = os.freemem()/1024/1024/1024
// if(free>1){
//     fs.writeFileSync("temp.txt","sufficient memory")
// }
// else {
//     fs.writeFileSync("temp.txt","Low memory")
// }



  

// var fs = require("fs")
// var os = require("os")
// var p = os.platform()
// fs.mkdirSync("AA")
// if(p=="win32"){
//     fs.writeFileSync("AA/temp1.txt","32 bit")
// }
// else {
//     fs.writeFileSync("AA/temp1.txt","64 bit")
// }





// var http = require('http')
// http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write("<h1> Welcome Home </h1>")
//         res.end()
//     }
//     else if(req.url=='/about'){
//         res.write("Welcome to about us")
//         res.end()
//     }
//     else{
//         res.writeHead(404,{'content-type':'text/html'})
//         res.write("<h2> page not found</h2>")
//         res.end()
//     }
// }).listen(4000)
// console.log("server running")






// var http = require('http')
// http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write("<h1 style='color:red'> Welcome Home </h1>")
//         res.end()
//     }
//     else if(req.url=='/student'){
//         res.write("Welcome to student page")
//         res.end()
//     }
//     else{
//         res.writeHead(404,{'content-type':'text/html'})
//         res.write("<h2 style='text-align:center; text-decoration:underline'> page not found</h2>")
//         res.end()
//     }
// }).listen(800)
// console.log("server running")






// var http = require('http')
// http.createServer((req,res)=>{
//     if(req.url=='/'){
//         const data={"name":"ABC","age":20}
//         res.writeHead(200,{'content-type':'application/json'})
//         res.write(JSON.stringify(data))
//         res.end()
//     }
// }).listen(7000)
// console.log("server running")





// var fs = require("fs")

// var http = require("http")

// http.createServer((req,res)=>{
//     if(req.url=='/'){
//         try{
//             const imageData=fs.readFileSync("img.png")
//             res.writeHead(200,{"content-type":"image/png"})
//             res.write(imageData)
//             res.end()
//         }
//         catch(err) {
//             res.write("error")
//             res.end()
//         }
//     }
// }).listen(5000)
// console.log("server running")





var fs= require("fs")
fs.writeFileSync("pqr.json",`{"name":"LJU","branch":"CSE"}`)
var data=fs.readFileSync("pqr.json")
var data1=JSON.parse(data)
console.log(data1.name)                                          //LJU
