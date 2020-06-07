const fs = require('fs');

// WRITE / CREATE FILE

fs.writeFile('hello.txt', 'Hello content!', function (err) {
    //if (err) throw err;
    console.log('Saved!');
  }); 



// READ FILE

fs.readFile('hello.txt','utf8', (err,data) => {
       // if(err) throw err;
        console.log(data);
});


// RENAME FILE
fs.rename('hello.txt', 'hello_word2.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  }); 


// //Delete File

// fs.unlink(__dirname+"/hello.txt", (error,data) => {
//     if(error){
//         throw error;
//     }else{
//         console.log("File Deleted ");
//     }  
// });