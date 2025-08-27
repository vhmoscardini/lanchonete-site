const cardContainer = document.getElementById("card-container");

function createCard(image, title, content) {
	const card = document.createElement("div");
	card.classList.add("card");

	const cardImage = document.createElement("img");
	cardImage.setAttribute("src", image);

	const cardTitle = document.createElement("h2");
	cardTitle.textContent = title;

	const cardContent = document.createElement("p");
	cardContent.textContent = content;
	
	const cardButton = document.createElement("a");
	cardButton.textContent = "Eu quero!"
	cardButton.setAttribute("href", "#");
	cardButton.className = "card-button"

	card.appendChild(cardImage);
	card.appendChild(cardTitle);
	card.appendChild(cardContent);
	card.appendChild(cardButton);

	return card;
}

const card1 = createCard("/assets/a.png","oi", "tudo bem")
const card2 = createCard("/assets/b.png","olha que legall", "da pra criar varios")
const card3 = createCard("/assets/c.jpg","sou um macaquinho", "gosto de comer banana")
const card4 = createCard("/assets/c.jpg","sou um macaquinho", "gosto de comer banana")
const card5 = createCard("/assets/c.jpg","sou um macaquinho", "gosto de comer banana")
const card6 = createCard("/assets/c.jpg","sou um macaquinho", "gosto de comer banana")
const card7 = createCard("/assets/c.jpg","sou um macaquinho", "gosto de comer banana")
const card8 = createCard("/assets/c.jpg","sou um macaquinho", "gosto de comer banana")

cardContainer.appendChild(card1);
cardContainer.appendChild(card2);
cardContainer.appendChild(card3);
cardContainer.appendChild(card4);
cardContainer.appendChild(card5);
cardContainer.appendChild(card6);
cardContainer.appendChild(card7);
cardContainer.appendChild(card8);
