const express = require("express");
const app = express();
const morgan = require("morgan");
const fs = require("fs");
const port = 3000;
const path = require("path");
const { engine } = require("express-handlebars");
app.use(express.static(path.join(__dirname, "public")));
morgan.token("type", function (req, res) {
  return req.headers["content-type"];
});
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);
console.log(__dirname);

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms:date[web] :type",
    { stream: accessLogStream }
  )
);

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res, next) => {
  res.render("home", { layout: false });
});

app.get("/login", (req, res, next) => {
  res.render("form", { layout: false });
});
// app.use(express.static(path.join(__dirname, "public/form.css")));
// app.get("/", (req, res, next) => {
//   res.render("form", { layout: false });
// });

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
