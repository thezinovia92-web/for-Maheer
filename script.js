function openLetter() {
  document.querySelector(".hero").style.display = "none";
  document.getElementById("letter").style.display = "block";
}

for (let i = 0; i < 35; i++) {
  const flower = document.createElement("div");
  flower.className = "flower";

  const icons = ["🌸", "💜", "✨", "🦋"];
  flower.innerHTML = icons[Math.floor(Math.random() * icons.length)];

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (5 + Math.random() * 6) + "s";
  flower.style.animationDelay = Math.random() * 5 + "s";
  flower.style.opacity = Math.random();

  document.body.appendChild(flower);
}
