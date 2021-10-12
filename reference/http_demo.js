const http = require('http')

http.createServer((req,res)=>{
    //write response
    res.write('hello')
    res.end()

}).listen(5000,()=>console.log('Server running'))