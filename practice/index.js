import express from "express";
import fs from "fs";
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
        res.render("readMore", { fileName: req.params.fileName, fileData: fileData });
      }
    }
  );
});

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
