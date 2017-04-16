var fs = require('fs')
var path = require('path')
var file = process.argv[2]
var extension = '.' + process.argv[3]

var listOfFiles = fs.readdir(file, function callback (err, list) {
    if(err) {
        console.log(err)
    }
    list = list.filter(function(value) {
        return path.extname(value) === extension;
    })

    list.forEach(function(el) {
        console.log(el);
    })
})

