var http = require('http')
var bl = require('bl')
var url = process.argv[2]

http.get(url, function (response) {
    /*var str = ''
    response.on("data", function(data) {
        str = str.concat(data)
    })
    response.on("end", function(data) {
        console.log(str.length)
        console.log(str)
    })*/

    response.pipe(bl(function(err,data){
        if(err) {
            console.log(err)
        }
        data = data.toString();
        console.log(data.length)
        console.log(data)
    }))
})