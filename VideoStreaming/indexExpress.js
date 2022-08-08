const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/vid.mp4', (req, res) => {

    const range = req.headers.range;
        console.log(range);

        const videoSize = fs.statSync('./vid.mp4').size;
        console.log( videoSize );
        
        const CHUNK_SIZE = (10 ** 6); //1MB
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
    
        
    var myVideoStream = fs.createReadStream(__dirname + '/vid.mp4', { start, end });
    myVideoStream.pipe(res);

});

app.listen(8000, () => {
    console.log("listening on port 8000");
});

