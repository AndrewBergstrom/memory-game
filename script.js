const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  
  secondCard = this;
  hasFlippedCard = false;

  checkForMatch();
}

function checkForMatch() {
  //This is the one way to write this condition. 
  // if (firstCard.dataset.framework === secondCard.dataset.framework) {
  //   disableCards();
  //   return;
  // }
  // unflipCards();

  // A cleaner way to write this, is as follows:
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
setTimeout(() => {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
}, 1500);
}

cards.forEach(card => card.addEventListener('click', flipCard));