const express = require("express");
const path = require("path");
const app = express();
const staticPath = path.join("../public");
//builtin module
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("<h1>Hi</h1>Hello from the express");
});
app.get("/about", (req, res) => {
  res.send("welcome to about page");
});
app.listen(3000, () => {
  console.log("Listening at port 3000");
});

// API:
// get-read
// post-create
// put-update
// delete-delete

// The callback function has 2 perimeters,request(req) and response(res).
// The request object(req) represents the HTTP request and has properties for the request query String,parameters,body,
// HTTP headers etc
// Similarily ,the response object represents the HTTP response that the Express app sends when it recieves an HTTP request.
