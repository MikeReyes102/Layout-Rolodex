let cards = document.querySelectorAll('.card-container .card');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;

function updateCards() {
  let last = cards.length - 1;

  let leftIndex = (active - 1 + cards.length) % cards.length;
  let rightIndex = (active + 1) % cards.length;

  cards.forEach((card, index) => {
    card.classList.remove('active', 'left', 'right', 'hidden');

    if (index === active) {
      card.classList.add('active');
    } 
    else if (index === leftIndex) {
      card.classList.add('left');
    } 
    else if (index === rightIndex) {
      card.classList.add('right');
    } 
    else {
      card.classList.add('hidden');
    }
  });
}

updateCards();

next.onclick = function () {
  active = (active + 1) % cards.length;
  updateCards();
};

prev.onclick = function () {
  active = (active - 1 + cards.length) % cards.length;
  updateCards();
};