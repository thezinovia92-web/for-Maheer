function openLetter() {
  const hero = document.querySelector(".hero");
  const letter = document.getElementById("letter");

  if (hero && letter) {
    hero.style.display = "none";
    letter.style.display = "block";
  }
}

// Floating flowers & hearts
for (let i = 0; i < 25; i++) {
  const item = document.createElement("div");
  item.className = "flower";
  item.innerHTML = Math.random() > 0.5 ? "🌸" : "💜";
  item.style.left = Math.random() * 100 + "vw";
  item.style.animationDuration = (6 + Math.random() * 6) + "s";
  item.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(item);
}
