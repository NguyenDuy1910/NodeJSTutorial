const express = require("express");
const app = express();
const morgan = require("morgan");
const fs = require("fs");
const port = 3000;
const path = require("path");
const LogInCollection = require("./mongodb");

const { engine } = require("express-handlebars");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
morgan.token("type", function (req, res) {
  return req.headers["content-type"];
});
app.use(express.json());
// const accessLogStream = fs.createWriteStream(
//   path.join(__dirname, "access.log"),
//   { flags: "a" }
// );
// console.log(__dirname);

// app.use(
//   morgan(
//     ":method :url :status :res[content-length] - :response-time ms:date[web] :type",
//     { stream: accessLogStream }
//   )
// );
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
const publicPath = path.join(__dirname, "./views");
console.log(publicPath);
app.set("views", path.join(publicPath));
app.get("/", (req, res, next) => {
  res.render("home", { layout: false });
});

app.get("/login", (req, res, next) => {
  res.render("login", { layout: false });
});
app.get("/signup", (req, res, next) => {
  res.render("signup", { layout: false });
});

<<<<<<< HEAD
app.post("/signup", (req, res) => {
  const data = LogInCollection.create({
    name: req.body.name,
    password: req.body.password,
    phone: req.body.phone,
  });
  console.log(req.body.name);

  // const newUser=await LogInCollection.create({
  //   data[name]data[password],phone
  // })
});
// const checking = await LogInCollection.findOne({ name: req.body.name });

// try {
//   if (
//     checking.name === req.body.name &&
//     checking.password === req.body.password
//   ) {
//     res.redirect("login");
//   } else {
//     res.send("Information is not find");
//   }
// } catch {
//   res.send("wrong inputs");
// }

app.post("/login", async (req, res) => {
  console.log(req.body.name);
  console.log(req.body.password);
=======
//   const data = {
//     name: req.body.name,
//     password: req.body.password,

//   const checking = await LogInCollection.findOne({ name: req.body.name });

//   try {
//     if (
//       checking.name === req.body.name &&
//       checking.password === req.body.password
//     ) {
//       res.redirect("login");
//     } else {
//       res.send("Information is not find");
//     }
//   } catch {
//     res.send("wrong inputs");
//   }
// });
res.redirect("login");
app.post("/login", async (req, res) => {
>>>>>>> 0940f9e1c503fae922f4a19c70583b344bc4fcd1
  try {
    const check = await LogInCollection.findOne({ name: req.body.name });

    if (check.password === req.body.password) {
      res.redirect("/");
    } else {
      res.send("incorrect password");
    }
  } catch (e) {
    res.send("wrong details");
  }
});
// app.use(express.static(path.join(__dirname, "public/form.css")));
// app.get("/", (req, res, next) => {
//   res.render("form", { layout: false });
// });

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
