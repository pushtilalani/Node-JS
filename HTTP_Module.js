// var http = require("http")
// var server = http.createServer((req,res)=>{
//     res.write("hello world!")
//     res.end()
// })
// server.listen(4000,"127.0.0.1")
// console.log("server running")




var http = require("http")
var server = http.createServer((req,res)=>{
    res.write("hiii ")
    res.end()
}).listen(2000)
console.log("server running")

