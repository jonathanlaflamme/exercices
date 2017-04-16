var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var splittedStr = str.split('\n');
var nbOfLines = splittedStr.length - 1;
//var nbOfLines = buf.toString().split('\n').length - 1;

console.log(nbOfLines);