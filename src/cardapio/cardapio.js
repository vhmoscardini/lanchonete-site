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

const card1 = createCard("https://cdn.discordapp.com/attachments/731329565544415324/914277255285444649/IlustracCCA7oCC83es-2D-e-3D-Grupo-Luz-1-877x1030-872x1024.png?ex=68aa3c8c&is=68a8eb0c&hm=89293f6b36505b5c3198c6acba4867778c5e6427f3bdacf4ec345dda51b4f342&","oi", "tudo bem")
const card2 = createCard("https://media.discordapp.net/attachments/731329565544415324/1408110677217906898/Gy22GKCXAAAFOBZ.png?ex=68a9de42&is=68a88cc2&hm=c715fde1582501ee3a8b63f4e1ccd26eb773f092f1be8a2aadff3e5494769e98&=&format=webp&quality=lossless","olha que legall", "da pra criar varios")
const card3 = createCard("https://pbs.twimg.com/media/GmlzMm2WwAAdLzI.jpg","sou um macaquinho", "gosto de comer banana")
const card4 = createCard("https://pbs.twimg.com/media/GmlzMm2WwAAdLzI.jpg","sou um macaquinho", "gosto de comer banana")
const card5 = createCard("https://pbs.twimg.com/media/GmlzMm2WwAAdLzI.jpg","sou um macaquinho", "gosto de comer banana")
const card6 = createCard("https://pbs.twimg.com/media/GmlzMm2WwAAdLzI.jpg","sou um macaquinho", "gosto de comer banana")
const card7 = createCard("https://pbs.twimg.com/media/GmlzMm2WwAAdLzI.jpg","sou um macaquinho", "gosto de comer banana")
const card8 = createCard("https://pbs.twimg.com/media/GmlzMm2WwAAdLzI.jpg","sou um macaquinho", "gosto de comer banana")

cardContainer.appendChild(card1);
cardContainer.appendChild(card2);
cardContainer.appendChild(card3);
cardContainer.appendChild(card4);
cardContainer.appendChild(card5);
cardContainer.appendChild(card6);
cardContainer.appendChild(card7);
cardContainer.appendChild(card8);
