let player = {
  name: "Mohd",
  chips: 234,
};

let hasBlackjack = false;
let isAlive = false;
let message = "";

let messages = document.getElementById("msg");
let sumCard = document.getElementById("sumOfCards");
let cardEl = document.getElementById("cards");
let playAndMoney = document.getElementById("playerAndMoney");

playAndMoney.textContent = player.name + ":" + "$" + player.chips;

function getrandomcard() {
  let randomNumner = Math.floor(Math.random() * 13) + 1;
  if (randomNumner > 10) {
    return 10;
  } else if (randomNumner === 1) {
    return 11;
  } else {
    return randomNumner;
  }
}

function startGame() {
  isAlive = true;
  let firstcard = getrandomcard();
  let secondCard = getrandomcard();
  cards = [firstcard, secondCard];
  sum = firstcard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let x = 0; x < cards.length; x++) {
    cardEl.textContent += " " + cards[x];
  }
  sumCard.textContent = "Sum:" + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackjack = false;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messages.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getrandomcard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
