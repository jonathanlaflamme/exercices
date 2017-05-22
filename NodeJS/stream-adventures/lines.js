var through = require('through2')
var split = require('split')
count = 1

process.stdin
    .pipe(split())
    .pipe(through(function(line, _, next) {
        if (count % 2 == 0) {
            line = line.toString().toUpperCase() + '\n'
        } else {
            line = line.toString().toLowerCase() + '\n'
        }
        count++
        this.push(line)
        next()
    }, function(done) {
        done()
    }))
    .pipe(process.stdout)