const os=require('os');

//Platform
console.log(os.platform())

//CPU ARC
console.log(os.arch())
//CPU CORE COUNT
console.log(os.cpus())

//free memory
console.log(os.freemem())
//total memory
console.log(os.totalmem())
// home dir
console.log(os.homedir())
//up time
console.log(os.uptime())