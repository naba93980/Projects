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
        console.log("in url : '/vid'");
        
        const range = req.headers.range;
        console.log(range);
        const videoSize = fs.statSync('./vid.mp4').size;
        const CHUNK_SIZE = 10 ** 6; //1MB
        const start = Number((range.match(/\d+/))[0]);
        console.log(start);
        const end = Math.min(start + CHUNK_SIZE, videoSize-1)
        const contentLength = end - start+1;


        res.writeHead(206, {
                "Content-Range":`bytes ${start}-${end}/${videoSize}`,
                "Accept-Ranges": "bytes",
                "Content-Length": contentLength,
                "Content-Type": "video/mp4"  
            });
        
        var myVideoStream = fs.createReadStream(__dirname + '/vid.mp4',{start,end});

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