const fs = require("fs");

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
// fs.rename("output.txt", "hello.txt", (err) => {
//     if(err) console.error("Error renaming file:", err);
//     else console.log("File renamed successfully!");
// })

// copyFile function to copy a file
// fs.copyFile("hello.txt", "copy.txt", (err) => {
//     if(err) console.error("Error copying file:", err);
//     else console.log("File copied successfully!");
// });

// unlink function to delete a file
// fs.unlink("copy.txt", (err) => {
//     if(err) console.error("Error deleting file:", err);
//     else console.log("File deleted successfully!");
// });

// rmdir function to remove a directory
// fs.rmdir("./example", {recursive: true}, (err) => {
//     if(err) console.error("Error removing directory:", err);
//     else console.log("Directory removed successfully!");
// });

// readFile function to read the content of a file
// fs.readFile("hello.txt", (err, data) => {
//   if (err) console.error("Error reading file:", err);
//   else console.log("File content:", data.toString());
// });

// mkdir function to create a new directory
// fs.mkdir("./example", { recursive: true }, (err) => {
//   if (err) console.error("Error creating directory:", err);
//   else console.log("Directory created successfully!");
// });

// writeFile function to create a file in the new directory try to write a file in the new directory
// fs.mkdir("./example", { recursive: true }, (err) => {
//   if (err) console.error("Error creating directory:", err);
//   else console.log("Directory created successfully!");
//     // Now write a file in the new directory
//   fs.writeFile("./example/sample.txt", "Sample text", (err) => {
//     if (err) console.error("Error writing file:", err);
//     else console.log("File written successfully in the new directory!");
//   });
//   // than read the file 
//   fs.readFile("./example/sample.txt", (err, data) => {
//     if (err) console.error("Error reading file:", err);
//     else console.log("File content:", data.toString());
//   });
//   // than delete the folder
//   fs.rmdir("./example", {recursive: true}, (err) => {
//     if (err) console.error("Error removing directory:", err);
//     else console.log("Directory removed successfully!");
//   });
// });
