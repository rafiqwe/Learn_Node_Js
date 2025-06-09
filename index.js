const fs = require('fs');

// writeFile function to create or overwrite a file
// fs.writeFile("output.txt", "Hello World!", (err) => {
//     if(err) console.error("Error writing file:", err);
//     else console.log("File written successfully!");
// })

// appendFile function to add content to an existing file
// fs.appendFile("output.txt", " Hii Bro", (err) => {
//     if(err) console.error("Error writing file:", err);
//     else console.log("Content appended successfully!");
// })

// rename function to change the name of a file
fs.rename("output.txt", "hello.txt", (err) => {
    if(err) console.error("Error renaming file:", err);
    else console.log("File renamed successfully!");
})