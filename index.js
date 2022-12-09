var http= require('http');
var fs= require('fs');

fs.appendFile('dateAndTime.txt', `<p>${Date()}</P>`,function(err){
    if(err) throw err;
})
http.createServer(function(req,res){
    fs.readFile('dateAndTime.txt',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);