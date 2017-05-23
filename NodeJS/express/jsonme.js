var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function(req,res) {
    var book = process.argv[3];
    fs.readFile(book, function(err, data) {
        var json_object = JSON.parse(data);
        res.send(json_object);
    })
})

app.listen(process.argv[2])