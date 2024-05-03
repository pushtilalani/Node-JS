
// 1).

// Method-1
const message = function() {
    console.log("Hello");
}
setTimeout(message,3000);


// Method-2
setTimeout(function() {
    console.log("Node");
},3000)



// Method-3
setTimeout(() => {
    console.log("JS")
},3000)


// 2).

setInterval(() => {
    console.log("Hello")
},3000)