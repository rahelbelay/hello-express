const http = require('http');
const PORT = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);
app.get('/', (req, res)=> {
    console.log('Got request!!');
    res.send('Hello Express!')

});
app.get('/albums', (req, res)=> {
    
    res.send('list of albums!')

});
app.get('/albums/:albumId', (req, res)=> {
    res.send(`you want: ${req.params.albumId}`);

});
//can't match  ?,&,=,%,/
// /albums/42/songs
//'the songs for album 42'
// /albums

app.get('/albums/:albumId/song',(req, res)=>{
    res.send(`the songs for album 42: ${req.params.albumId}`)
});

app.get('/albums/:albumId/song/:songId(\\d+)',(req, res)=>{
    res.send(`song  ${req.params.songId} on album ${req.params.albumId}`)
});


app.get('/albums/:albumId/song/guest',(req, res)=> {
    res.end('it had the best guest artists ever.')
})
app.get('*', (req, res)=>{
    console.log("Ridirecting,because no here")
    res.redirect('/');
});
//order matters.if this route handler is run by express that means 
// nothing above matched

server.listen(PORT, ()=>{
    console.log(`listining on${PORT}`);

});