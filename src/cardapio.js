const cardContainer = document.getElementById("card-container");

const cardCategory = document.createElement("div");
cardCategory.classList.add("card-category");

function createCard(image, title, price) {
	const card = document.createElement("div");
	card.classList.add("card");

	const cardContent = document.createElement("div");
	cardContent.classList.add("card-content");

	const cardImage = document.createElement("img");
	cardImage.setAttribute("src", image);

	const cardTitle = document.createElement("h2");
	cardTitle.textContent = title;

	const cardPrice = document.createElement("p");
	cardPrice.textContent = price;
	
	//const cardButton = document.createElement("a");
	const cardButton = document.createElement("button");
	cardButton.textContent = "Pedir"
	cardButton.className = "card-button"
	cardButton.addEventListener("click", function() {
		sendMessage(title);
	}, false);
	//cardButton.textContent = "Pedir"
	//cardButton.setAttribute("href", `https://wa.me/+5516989953333?text=gostaria de pedir um ${title}`);
	card.appendChild(cardContent);

	cardContent.appendChild(cardImage);
	cardContent.appendChild(cardTitle);
	cardContent.appendChild(cardPrice);
	cardContent.appendChild(cardButton);

	return card;
}

function sendMessage(name) {
	let number = "+5516989953333"
	var url = `https://wa.me/${number}?text=Olá, eu gostaria de pedir um ${name}`

	window.open(url, "_blank").focus();
}
const section = document.createElement("h2");
section.textContent = "lanches";
cardContainer.appendChild(section);

fetch("./cards.json")
	.then(res => res.json())
	.then(data => {
		for (i in data.cards) {
			card = createCard(data.cards[i].image, data.cards[i].name, data.cards[i].price)
			cardCategory.appendChild(card);
		}
	})

cardContainer.appendChild(cardCategory);
// const card1 = createCard("/assets/a.png","oi", "tudo bem")
// const card2 = createCard("/assets/b.png","olha que legall", "da pra criar varios")
// const card3 = createCard("/assets/c.jpg","sou um macaquinho", "gosto de comer banana")
// const card4 = createCard("/assets/c.jpg","sou um macaquinho", "gosto de comer banana")
// const card5 = createCard("/assets/c.jpg","sou um macaquinho", "gosto de comer banana")
// const card6 = createCard("/assets/c.jpg","sou um macaquinho", "gosto de comer banana")
// const card7 = createCard("/assets/c.jpg","sou um macaquinho", "gosto de comer banana")
// const card8 = createCard("/assets/c.jpg","sou um macaquinho", "gosto de comer banana")
// 
// cardContainer.appendChild(card1);
// cardContainer.appendChild(card2);
// cardContainer.appendChild(card3);
// cardContainer.appendChild(card4);
// cardContainer.appendChild(card5);
// cardContainer.appendChild(card6);
// cardContainer.appendChild(card7);
// cardContainer.appendChild(card8);
