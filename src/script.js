document.getElementById('year').textContent = new Date().getFullYear();

function abrirCarrinho() {
	document.getElementById("sidepanel").style.width = "480px";
	document.getElementById("sidepanel").style.boxShadow = "0px 0px 20px 10px rgba(0, 0, 0, 0.6)";
}
function fecharCarrinho() {
	document.getElementById("sidepanel").style.width = "0px";
	document.getElementById("sidepanel").style.boxShadow = "";
}

