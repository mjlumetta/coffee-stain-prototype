import express from "express";

const app = express();
app.get("/", (request, response) => {
	response.render("index");
});

app.listen(3001, () => {
	console.log("Dev server listening at http://localhost:3001/");
});