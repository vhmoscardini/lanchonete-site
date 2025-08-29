const express = require("express");
const path = require("path");

const app = express();
const port = 9000;

app.use(express.static(__dirname + "/src"));

// app.get("/", function(req, res) {
// 	res.sendFile("./src/index.html", {root: __dirname});
// });
// app.get("/style.css", function(req, res) {
// 	res.sendFile("./src/style.css", {root: __dirname});
// });
// app.get("cardapio/cardapio.html", function(req, res) {
// 	res.sendFile("./src/cardapio/cardapio.html", {root: __dirname});
// });
// app.get("cardapio/cardapio.js", function(req, res) {
// 	res.sendFile("./src/cardapio/cardapio.js", {root: __dirname});
// });


app.listen(port, function(error) {
	if (error) {
		console.log("Error: ", error);
	}
	else {
		console.log(`Server is listening on http://localhost:${port}`);
	}
});
