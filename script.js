const cards = document.querySelectorAll('.memory-card');

function flipClard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));