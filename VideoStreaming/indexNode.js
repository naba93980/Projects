const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    if (req.url == '/')
    {
        console.log( "in url : '/'" );
        
        var myReadStream = fs.createReadStream(__dirname + '/index.html');
        myReadStream.pipe(res);
    }
    if (req.url == '/vid.mp4')
    {
        console.log( "in url : '/vid'" );
        
        var myVideoStream = fs.createReadStream(__dirname + '/vid.mp4');

        myVideoStream.on('data', (chunk) => {
            console.log("new video part received");
            res.write(chunk, () => {
                console.log( "sent video part" );    
            }) 
        })

         // myVideoStream.pipe(res);
    }
    })
    
server.listen(8000, () => {
    console.log( "listening at 8000" );
    
})