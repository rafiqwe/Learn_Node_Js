import express from "express";
import fs from "fs";
import path from "path";
const app = express();
const port = 8080;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.static("public")); // Serve static files from the "public" directory
app.set("view engine", "ejs"); // Set EJS as the templating engine

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    res.render("index", { files });
  });
});

app.get("/tasks/:fileName", (req, res) => {
  fs.readFile(
    `./files/${req.params.fileName}`,
    "utf-8",
    function (error, fileData) {
      if (error) {
        console.error(error);
      } else {
        console.log("File Data :", fileData);
        res.render("readMore", {
          fileName: req.params.fileName,
          fileData: fileData,
        });
      }
    }
  );
});

app.get("/edit/:fileName", (req, res) => {
  res.render("edit", { fileName: req.params.fileName });
});

app.post("/edit", (req, res) => {
  const newFilePath = `./files/${req.body.newFileName
    .split(" ")
    .join("_")}.txt`;
  const oldFilePath = `./files/${req.body.oldFileName}`;
  fs.rename(oldFilePath, newFilePath, (err) => {
    if (err) {
      console.error("Error creating file:", err);
      res.status(500).send("Error creating file");
    } else {
      console.log("File created successfully");
      res.redirect("/");
    }
  });
});


// I try it but I fail I'll do it 
// app.delete("/delete/:deleteElm", (req, res) => {
//   const folderPath = `./files/${req.params.deleteElm}`;
//   console.log();
//   fs.rm(folderPath, { recursive: true, force: true }, (err) => {
//     if (err) {
//       console.error("Delete failed:", err);
//       return res.status(500).send("Failed to delete directory.");
//     } else {
//       console.log("Deleted successfully");
//       return redirect("/");
//     }
//   });
// });

app.post("/create", (req, res) => {
  const filePath = `./files/${req.body.taskName.split(" ").join("_")}.txt`;
  fs.writeFile(filePath, req.body.taskDescription, (err) => {
    if (err) {
      console.error("Error creating file:", err);
      res.status(500).send("Error creating file");
    } else {
      console.log("File created successfully");
      res.redirect("/");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
