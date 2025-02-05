// Game settings
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const clownImg = new Image();
clownImg.src = "clown.png";

const clickSound = new Audio("click_sound.wav");
const missSound = new Audio("miss_sound.wav");
const bgMusic = new Audio("ctc_background_music.wav");
bgMusic.loop = true;
bgMusic.play();

// Game variables
let score = 0;
let lives = 5;
let clownVelocity = 5;
let clownAcceleration = 0.5;

// Clown position and movement
let clown = {
  x: Math.random() * (canvas.width - 100),
  y: Math.random() * (canvas.height - 100),
  width: 80,
  height: 80,
  dx: (Math.random() > 0.5 ? 1 : -1) * clownVelocity,
  dy: (Math.random() > 0.5 ? 1 : -1) * clownVelocity,
};

// Game loop
function updateGame() {
  // Move clown
  clown.x += clown.dx;
  clown.y += clown.dy;

  // Bounce off walls
  if (clown.x <= 0 || clown.x + clown.width >= canvas.width) clown.dx *= -1;
  if (clown.y <= 0 || clown.y + clown.height >= canvas.height) clown.dy *= -1;

  // Redraw screen
  drawGame();
}

// Draw game elements
function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(clownImg, clown.x, clown.y, clown.width, clown.height);
}

// Mouse click event
canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Check if the clown is clicked
  if (
    mouseX >= clown.x &&
    mouseX <= clown.x + clown.width &&
    mouseY >= clown.y &&
    mouseY <= clown.y + clown.height
  ) {
    clickSound.play();
    score++;
    clownVelocity += clownAcceleration;
    clown.dx = (Math.random() > 0.5 ? 1 : -1) * clownVelocity;
    clown.dy = (Math.random() > 0.5 ? 1 : -1) * clownVelocity;
    clown.x = Math.random() * (canvas.width - clown.width);
    clown.y = Math.random() * (canvas.height - clown.height);
  } else {
    missSound.play();
    lives--;
    if (lives <= 0) gameOver();
  }

  document.getElementById("score").innerText = score;
  document.getElementById("lives").innerText = lives;
});

// Game over function
function gameOver() {
  bgMusic.pause();
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "yellow";
  ctx.font = "48px Arial";
  ctx.fillText("Game Over", canvas.width / 2 - 120, canvas.height / 2);
  ctx.fillText(
    `Final Score: ${score}`,
    canvas.width / 2 - 140,
    canvas.height / 2 + 50
  );
  ctx.fillText(
    "Click to Restart",
    canvas.width / 2 - 160,
    canvas.height / 2 + 100
  );

  canvas.addEventListener("click", resetGame, { once: true });
}

// Reset game
function resetGame() {
  lives = 5;
  score = 0;
  clownVelocity = 5;
  clown.x = Math.random() * (canvas.width - clown.width);
  clown.y = Math.random() * (canvas.height - clown.height);
  clown.dx = (Math.random() > 0.5 ? 1 : -1) * clownVelocity;
  clown.dy = (Math.random() > 0.5 ? 1 : -1) * clownVelocity;
  bgMusic.play();
  document.getElementById("score").innerText = score;
  document.getElementById("lives").innerText = lives;
}

// Run game loop
setInterval(updateGame, 1000 / 60);
