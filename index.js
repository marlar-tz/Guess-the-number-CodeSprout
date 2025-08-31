let startBtn = document.getElementById('start-btn');
const numbersContainer = document.querySelector('.numbers');

startBtn.addEventListener('click', e => {
    window.location.href = 'mainGamePage.html';
})


const numberImages = [
    'assets/one.png',
    'assets/two.png',
    'assets/three.png',
    'assets/four.png',
    'assets/five.png',
    'assets/thirteen.png',
    'assets/fifteen.png',
    'assets/seventeen.png',
    'assets/nineteen.png'
];


function spawnNumber() {
    // create img
    const img = document.createElement('img');
    img.src = numberImages[Math.floor(Math.random() * numberImages.length)];
    img.className = 'num';

     // define "no-go zone" (the center area you want to protect)
  const safeZone = {
    x1: window.innerWidth * 0.25,  // left boundary (25%)
    x2: window.innerWidth * 0.75,  // right boundary (75%)
    y1: window.innerHeight * 0.25, // top boundary (25%)
    y2: window.innerHeight * 0.55  // bottom boundary (55%)
  };

  let x, y;

  // keep generating random positions until it is OUTSIDE safe zone
  do {
    x = Math.random() * window.innerWidth;
    y = Math.random() * window.innerHeight;
  } while (x > safeZone.x1 && x < safeZone.x2 && y > safeZone.y1 && y < safeZone.y2);


    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    numbersContainer.appendChild(img);

    // remove after animation ends
    img.addEventListener('animationend', () => {
        img.remove();
    });
}

setInterval(spawnNumber, 500);