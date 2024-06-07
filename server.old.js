var express = require("express");
var path = require("path");
var fs = require("fs");

// create a port and an express app instance
var port = 8080;
var app = express();

// submits
var submits = JSON.parse(fs.readFileSync('templates/data/submits.json', 'utf-8'));

// Render all files including the homepage
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "templates/index.html"));
});
app.get("/projects", function (req, res) {
    res.sendFile(path.join(__dirname, "templates/projects.html"));
});
/* app.get("/hire-me", function(req, res) {
  res.sendFile(path.join(__dirname, "templates/hire.html"));
}); */
app.get("/typewriter.js", function (req, res) {
    res.sendFile(path.join(__dirname, "templates/typewriter.js"));
});
app.get("/water.css", function (req, res) {
    res.sendFile(path.join(__dirname, "templates/water.css"));
});
app.get("/my-avatar.jpeg", function (req, res) {
    res.sendFile(path.join(__dirname, "templates/images/my-avatar.jpeg"));
});

// render a few other stuff
/* app.get("/hire-me-success", function(req, res) {
  var { email, desc, replit_username, extra } = req.query;
  console.log(typeof submits)
  submits.unshift({ email, desc, replit_username, extra });
  fs.writeFileSync('templates/data/submits.json', JSON.stringify(submits));
  res.sendFile(path.join(__dirname, "templates/hire-success.html"));
}); */
app.get("/admin", function (req, res) {
    const { name } = req.query;
    if (name === process.env.PASSWORD) return "Welcome GoodnessDavid";
    else return "Access denied.";
});
app.get("/submits", function (req, res) {
    if (req.query.password === process.env.PASSWORD) res.sendFile(path.join(__dirname, "templates/data/submits.json"));
    else res.send("You do not have access to these submits.")
});

// listen
app.listen(port, () => {
    console.log("server started");
})