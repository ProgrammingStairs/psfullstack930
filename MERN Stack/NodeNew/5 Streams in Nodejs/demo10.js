// example showing the concept of traansform stream

var fs = require("fs");
const zlib = require("zlib");
const zlibObj = zlib.createGzip();

const readStream = fs.createReadStream("myFolder/myFile.txt");
const writeStream = fs.createWriteStream("myFolder/myFile.gz");

readStream.pipe(zlibObj).pipe(writeStream);