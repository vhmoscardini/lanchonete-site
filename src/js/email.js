const sendEmail = async (event) => {
	event.preventDefault();
	
	let assuntoIndex = document.getElementById("assunto").selectedIndex;
	let params = {
		nome: document.getElementById("nome").value,
		email: document.getElementById("email").value,
		assunto: document.getElementById("assunto").options[assuntoIndex].text,
		telefone: document.getElementById("telefone").value,
		mensagem: document.getElementById("mensagem").value,
	}
	try {
		const response = await emailjs.send(
			"service_n02ujpt",
			"template_sf8hvw3",
			params,
		);
		alert("Email sent successfully!", response);
	}
	catch (error) {
		alert("Failed to send email:", error);
	}
};

document.addEventListener("DOMContentLoaded", () => {
	document
		.getElementById("email-form")
		.addEventListener("submit", sendEmail);
});
