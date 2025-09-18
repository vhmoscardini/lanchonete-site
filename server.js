const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const port = 9000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/src"));

app.get("/", function(req, res) {
	res.sendFile("src/index.html", {root: __dirname});
});

app.post("/send_email", function(req, res) {
	var nome = req.body.nome;
	var email = req.body.email;
	var assunto = req.body.assunto;
	var telefone = req.body.telefone;
	var mensagem = req.body.mensagem;

	var transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "vhmoscardini.unifran@gmail.com",
			pass: "ugpz niyr bsjr rlvi ",
		}
	})
	
	var mailOptions = {
		from: email,
		to: "vhmoscardini.unifran@gmail.com",
		subject: "trollface",
		html: `<h2>Nome:</h2>${nome}\n<h2>Email:</h2>${email}\n<h2>Telefone:</h2>${telefone}\n<h2>Mensagem:</h2>${mensagem}`,
	}

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error)
		}
		else {
			alert("conseguiu eba")
		}
		res.redirect("/");

	})
	console.log(nome, email, assunto, telefone, mensagem);
});
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
