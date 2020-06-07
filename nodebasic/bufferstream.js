const fs = require('fs');


var myReadStream = fs.createReadStream('/hello.txt');
// SYNC : var myReadStream = fs.createReadStream(__dirname + '/read.txt','utf-8');
myReadStream.on('data', (chunk) => {
    console.log('New Chunk Recieved : ',a++);
    console.log(chunk);
});


// WRITE STREAM
var a = 0;
myReadStream.on('data', (chunk) => {
    console.log('New Chunk Recieved : ',a++);
    myWriteStream.write(chunk);
});