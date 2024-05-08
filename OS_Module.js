var os = require("os")
console.log(os.arch())   // x64
console.log(os.hostname())    // 410B-136
console.log(os.platform())    // win32
console.log(os.tmpdir())     // C:\Users\LJENG\AppData\Local\Temp
console.log(os.freemem())     //2710433792
console.log(os.freemem()/1024)  // 2646684   (kb)
console.log(os.freemem()/1024/1024)   // 2584.58203125  (MB)
console.log(os.freemem()/1024/1024/1024)  // 2.524005889892578  (GB)