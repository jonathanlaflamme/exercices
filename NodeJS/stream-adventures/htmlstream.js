var trumpet = require('trumpet');
var through = require('through2');
var fs = require('fs');
var tr = trumpet();

fs.createReadStream(process.stdin).pipe(tr).pipe(process.stdout);

//fs.createReadStream(process.stdin).pipe(process.stdout);

var stream = tr.select('.loud').createStream();
var through_stream = through(write, end);

function write(buf, _, next) {
    this.push(buf.toString().toUpperCase())
    next()
}

function end (done) {
    done()
}

//process.stdin.pipe(stream).pipe(through_stream).pipe(process.stdout);