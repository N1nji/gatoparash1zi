const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const messageDiv = document.getElementById("message");

noButton.addEventListener("mouseenter", () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

yesButton.addEventListener("click", () => {
  messageDiv.textContent = "Eu te amo! 💕";
});
