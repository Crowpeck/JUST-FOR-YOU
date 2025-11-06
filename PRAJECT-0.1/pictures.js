const container = document.getElementById('cardContainer');

// Array of 36 unique messages
const messages = [
  "The girl in white suit, her presence brings comfort to my soul",
  "A red top after the bath, a fleeting moment of warmth and quiet joy",
  "A pouty girl, lost in her studies, capturing innocence in a single frame",
  "A picture that captured my heart, now we’re both in the same bigger frame.",
  "A cutie who makes my heart adore her even more",
  "With every teasing glance and the sweet way she keeps me wanting more, she leaves me craving what’s just out of my reach",
  "Her demure face, a canvas of unspoken stories, pulls me in, leaving me wondering about the secrets hidden behind every quiet glance",
  "Her bright face, glowing with quiet confidence, holds the kind of beauty that captivates without a word, leaving a lingering trail of unexplainable feelings that stir my soul",
  "FOUR FRAMES ON ONE CANVAS LIES BEAUTY UNTOLD, A GALLERY OF ART BUT THE WHO STANDS OUT IS THE MASTERPIECE THAT BRINGS THEM ALL TO LIFE",
 "LOOK",
"AT THIS",
"GIRL",
"WHO'S",
"SHARED",
"WITH ME",
"THROUGH",
"EVERY",
"LAUGH",
"EVERY",
"STRUGGLE",
"NOW",
"THAT",
"WE'RE",
"ON THIS",
"JOURNEY",
"OF LOVE",
"AND",
"GROWTH",
"WITH",
"MEMORIES",
"MAKING",
"OUR",
"BOND",
"STRONGER",
"AND",
"MEANINGFUL"
];

// Generate 36 cards with different back messages
for (let i = 1; i <= 36; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <img src="images/img${i}.png" alt="Card ${i}">
      </div>
      <div class="card-back">
        <p>${messages[i - 1]}</p>
      </div>
    </div>
  `;
  container.appendChild(card);
}

// Flip on click
container.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (card) card.classList.toggle('flip');
});
