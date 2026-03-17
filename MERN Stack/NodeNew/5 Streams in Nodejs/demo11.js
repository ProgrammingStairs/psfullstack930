// example showing the concept of traansform stream

var fs = require("fs");
const zlib = require("zlib");
const zlibObj = zlib.createGunzip();

const readStream = fs.createReadStream("myFolder/myFile.gz");
const writeStream = fs.createWriteStream("myFolder/myNewFile.txt");

readStream.pipe(zlibObj).pipe(writeStream);