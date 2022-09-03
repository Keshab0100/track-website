const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
const path = require("path");

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../template/views");

app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log("Listening");
});
