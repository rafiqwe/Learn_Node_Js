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

app.get("/profile/:username", (req, res) => {
  const { username } = req.params;
  res.send(`Welcome to ${username}'s profile page!`);
});

app.get("/author/:username/:age", (req, res) => {
  const { username, age } = req.params;
  res.send(`Welcome to ${username}'s profile page! They are ${age} years old.`);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
