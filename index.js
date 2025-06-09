// import fs from "fs";
// import http from "http";

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

import express from "express";

const app = express();
const port = 3000;

// Middleware to log requests
// This middleware will log the HTTP method and URL of each request
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next(); // Call the next middleware or route handler
});

app.get("/", (req, res) => {
  res.send("Hello World! Welcome to my Express server.");
});

app.get("/about", (req, res) => {
  res.send("Hello from the /about route!");
});
app.get("/contact", (req, res, next) => {
    return  next(new Error("This is a simulated error for the /contact route."));
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke! Please try again later.');
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(
    `You can access the /about route at http://localhost:${port}/about`
  );
});
