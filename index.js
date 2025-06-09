const fs = require('fs');

fs.writeFile("output.txt", "Hello World!", (err) => {
    if(err) console.error("Error writing file:", err);
    else console.log("File written successfully!");
})