const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next){
    if (res.status(404)) res.redirect('/');
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})