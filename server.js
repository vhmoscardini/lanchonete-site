const express = require("express");
const path = require("path");

const app = express();
const port = 9000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/src"));

app.get("/", function(req, res) {
	res.sendFile("src/index.html", {root: __dirname});
});

app.listen(port, function(error) {
	if (error) {
		console.log("Error: ", error);
	}
	else {
		console.log(`Server is listening on http://localhost:${port}`);
	}
});
