let carrinho = [];
let carrinho_qnt = 0;

function openCart() {
	document.getElementById("sidepanel").style.width = "640px";
	document.getElementById("sidepanel").style.boxShadow = "0px 0px 20px 10px rgba(0, 0, 0, 0.6)";
}
function closeCart() {
	document.getElementById("sidepanel").style.width = "0px";
	document.getElementById("sidepanel").style.boxShadow = "";
}

function updateCart() {
	let table = document.getElementById("itens-carrinho");
	table.innerHTML = "";

	total = 0;
	console.log(carrinho)
	carrinho.forEach((item, index) => {
		let subtotal = item.price * item.qnt;
		total += subtotal;
		table.innerHTML += `
			<tr>
				<td>${item.title}</td>
				<td>${item.price.toFixed(2)}</td>
				<td>${item.qnt}</td>
				<td>${subtotal.toFixed(2)}</td>
				<td><button onclick="removeFromCart(${index})"><i class="fa-solid fa-trash"></i></button></td>
			</tr>`;
	})
	document.getElementById("total").innerText = total.toFixed(2);
}
function addToCart(title, price) {
	let item = carrinho.find(p => p.title == title);
	if (item) {
		item.qnt++;
	}
	else {
		carrinho.push({title, price, qnt:1});
	}
	carrinho_qnt++;
	sendNotification(`${title} foi adicionado ao carrinho.`)
	document.getElementById("badge").innerHTML = carrinho_qnt
	document.getElementById("badge").style.visibility = "visible";


}
function removeFromCart(index) {
	carrinho.splice(index, 1);
	updateCart();
}
function sendMessage() {
	let message = "*Pedido MegaSabor*%0A%0A";
	let total = 0;
	carrinho.forEach((item) => {
		let subtotal = item.price * item.qnt;
		total += subtotal
		message += `• ${item.qnt}x ${item.title} - R$ ${subtotal.toFixed(2)}%0A`
	});
	message += `%0ATotal: R$ ${total.toFixed(2)}%0A%0AObrigado pelo pedido!`

	let number = "+5516989953333"
	var url = `https://wa.me/${number}?text=${message}`

	window.open(url, "_blank").focus();
}

function sendNotification(msg) {
	const notifContainer = document.getElementById("notification-container");
	const notif = document.createElement("div")
	notif.classList.add("notification")

	notif.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${msg}`;
	notif.style.opacity = "1";
	notif.style.display = "inline-block";
	
	notifContainer.appendChild(notif);

	setTimeout(() => {
		notif.style.opacity = "0";
		setTimeout(() => {
			notif.remove();
		}, 100)
	}, 1000);
}
