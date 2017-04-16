var net = require('net');

function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
}

var server = net.createServer(function(socket) {
    var date = new Date()
    var dateStr = date.getFullYear() + '-' + zeroFill(date.getMonth() + 1) + '-' + date.getDate() + ' ' + zeroFill(date.getHours()) + ':' + zeroFill(date.getMinutes()) + '\n'
    socket.write(dateStr)
    socket.end()
})
server.listen(process.argv[2])