const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});


app.use(function(req, res, next){
    if (res.status(404)) res.redirect("/");
})