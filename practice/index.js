import express from "express";
const app = express();
const port = 8080;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.static("public")); // Serve static files from the "public" directory
app.set("view engine", "ejs"); // Set EJS as the templating engine

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.send("Welcome to the About page!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
