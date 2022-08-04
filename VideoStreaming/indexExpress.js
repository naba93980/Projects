const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/vid.mp4', (req, res) => {
    res.sendFile(__dirname + '/vid.mp4', () => {
        console.log( "sent" );
    });
});

app.listen(8000, () => {
    console.log("listening on port 8000");
});

