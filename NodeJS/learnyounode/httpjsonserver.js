var http = require('http')
var url = require('url')


function parsetime (iso) {
    var date = new Date(iso)
    return ({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    })
}

function unixtime (iso) {
    var baseDate = new Date(Date.UTC(1970,0))
    var querryDate = new Date(iso)
    return ({ unixtime: querryDate.getTime() - baseDate.getTime() })
}

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    var reqInfo = url.parse(request.url, true)
    if(reqInfo.pathname === '/api/parsetime') {
        response.write(JSON.stringify(parsetime(reqInfo.query.iso)))
        response.end()
    }

    if(reqInfo.pathname === '/api/unixtime') {
        response.write(JSON.stringify(unixtime(reqInfo.query.iso)))
        response.end()
    }
})

server.listen(process.argv[2])