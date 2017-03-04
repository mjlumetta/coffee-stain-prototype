import express from "express";

var app = express();
app.get("/", function(request, response) {
	response.render("index");
});

app.listen(3000);
console.log("App listening on port 3000");