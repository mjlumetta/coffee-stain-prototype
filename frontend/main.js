var express = require("express");
var viewEngine = require("./server/viewEngine").default;

console.log("view engine:", viewEngine);
var app = express();
app.set("view engine", "js");
app.engine("js", viewEngine);
app.get("/", function(req, res) {
	res.render("index");
});

app.listen(3000);
console.log("App listening on port 3000");