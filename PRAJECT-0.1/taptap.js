const NUM_HEARTS = 3;
const heartsContainer = document.getElementById('heartsContainer');
let hearts = [];
let filledHearts = 0;

// Dynamically create heart elements (not images)
for (let i = 0; i < NUM_HEARTS; i++) {
    const heartSpan = document.createElement('span');
    heartSpan.className = 'heart';
    heartSpan.id = `heart${i + 1}`;
    heartSpan.textContent = '♡'; // empty heart unicode
    heartsContainer.appendChild(heartSpan);
    hearts.push(heartSpan);
}

let bear = document.getElementById('bear');

// Handle bear click/tap event
function fillNextHeart() {
    if (filledHearts < hearts.length) {
        hearts[filledHearts].textContent = '♥'; // filled heart unicode
        hearts[filledHearts].style.color = 'red';
        filledHearts++;
        if (filledHearts === hearts.length) {
            setTimeout(function() {
                showCongratsMessage();
            }, 500);
        }
    }
}

function showCongratsMessage() {
    const msg = document.getElementById('congratsMessage');
    const btn = document.getElementById('enterBtn');
    const bearImg = document.getElementById('bear');
    const title = document.querySelector('.container h1');
    bearImg.style.display = 'none';
    if (title) title.style.display = 'none';
    msg.style.display = 'block';
    msg.style.opacity = 1;
    // Animate the message text word by word, with pause after comma
    const h2 = msg.querySelector('h2');
    const fullText = h2.textContent;
    const words = fullText.split(/(,|\s+)/); // split by comma or whitespace, keep delimiters
    h2.textContent = '';
    let i = 0;
    function showNextWord() {
        if (i < words.length) {
            h2.textContent += words[i];
            let delay = 180;
            if (words[i] === ',') {
                delay = 600;
            } else if (/^\s+$/.test(words[i])) {
                delay = 0;
            }
            i++;
            setTimeout(showNextWord, delay);
        } else {
            setTimeout(() => {
                btn.style.display = 'block';
            }, 600);
        }
    }
    setTimeout(showNextWord, 300);
    // Lock unlock effect
    btn.onclick = function() {
        btn.classList.add('unlocked');
        setTimeout(() => {
            window.location.href = 'browse_my_heart.html';
        }, 800);
    };
}

bear.addEventListener('click', fillNextHeart);
bear.addEventListener('touchstart', function(e) {
    e.preventDefault();
    fillNextHeart();
});
