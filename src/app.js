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
app.get("/mentorSign", (req, res) => {
  res.render("mentorSign");
});
app.get("/mentorLogin", (req, res) => {
  res.render("mentorLogin");
});
app.get("/mentorDash", (req, res) => {
  res.render("mentorDash");
});
app.get("/addMentee", (req, res) => {
  res.render("addMentee");
});
app.get("/menteeLogin", (req, res) => {
  res.render("menteeLogin");
});
app.listen(port, () => {
  console.log("Listening");
});
