const cardContainer = document.getElementById("card-container");

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
	cardPrice.textContent = "R$" + price.toString().replace(".", ",");
	
	//const cardButton = document.createElement("a");
	const cardButton = document.createElement("button");
	cardButton.textContent = "Pedir"
	cardButton.className = "card-button"
	cardButton.addEventListener("click", function() {
		//sendMessage(title);
		addToCart(title, price);
		updateCart();
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

function getData(url, cb) {
  fetch(url)
    .then(response => response.json())
    .then(result => cb(result));
}

getData("./cards.json", (data) => {
	for (i in data.cards) {
		sectionTitle = document.createElement("h2");
		sectionTitle.textContent = data.cards[i].name;
		sectionDescription = document.createElement("p");
		sectionDescription.textContent = data.cards[i].description;

		cardContainer.appendChild(sectionTitle);
		cardContainer.appendChild(sectionDescription);

		cardCategory = document.createElement("div");
		cardCategory.classList.add("card-category");
		for (j in data.cards[i].content) {

			card = createCard(data.cards[i].content[j].image, data.cards[i].content[j].name, data.cards[i].content[j].price)
			cardCategory.appendChild(card);
			cardContainer.appendChild(cardCategory);
		}
	}
})
//fetch("./cards.json")
//	.then(res => res.json())
//	.then(data => {
//		for (i in data.cards) {
//			sectionTitle = document.createElement("h2");
//			sectionTitle.textContent = data.cards[i].name;
//			sectionDescription = document.createElement("p");
//			sectionDescription.textContent = data.cards[i].description;
//
//			cardContainer.appendChild(sectionTitle);
//			cardContainer.appendChild(sectionDescription);
//
//			cardCategory = document.createElement("div");
//			cardCategory.classList.add("card-category");
//			for (j in data.cards[i].content) {
//
//				card = createCard(data.cards[i].content[j].image, data.cards[i].content[j].name, data.cards[i].content[j].price)
//				cardCategory.appendChild(card);
//				cardContainer.appendChild(cardCategory);
//			}
//		}
//	})
//
