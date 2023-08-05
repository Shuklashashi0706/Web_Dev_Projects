const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
// const staticPath=path.join('../public')
//builtin middleware
// app.use(express.static(staticPath));
// to set the view engine
app.set("view engine", "hbs");
const viewspath = path.join(__dirname, "../views");
app.set("views", viewspath);

//template engine route
app.get("/", (req, res) => {
  res.render("index", {
    channelname: "Shashi",
  });
});
app.get("/about", (req, res) => {
  res.render('about');
}); 

app.get("/", (req, res) => {
  res.send("Hi");
});
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
